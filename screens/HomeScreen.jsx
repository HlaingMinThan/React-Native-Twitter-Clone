import React, { useEffect, useRef, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import Loading from "../components/Loading";
import Tweet from "../components/Tweet";
import TweetAddBtn from "../components/TweetAddBtn";
import axios from "../helpers/axios";
export default function HomeScreen({ route }) {
  let [tweets, setTweets] = useState([]);
  let [isLoading, setIsLoading] = useState(true);
  let [showScrollLoading, setShowScrollLoading] = useState(false);
  let [page, setPage] = useState(1);
  let [isRefreshing, setIsRefreshing] = useState(false);

  const flatListRef = useRef();
  useEffect(() => {
    getAllTweets();
  }, [page]);

  /**----- when new tweet is added ------ */
  useEffect(() => {
    getAllTweetsRefresh();
    flatListRef.current?.scrollToOffset({ offset: 0 });
  }, [route.params?.newTweetAdded]);

  const getAllTweets = async () => {
    try {
      setShowScrollLoading(true);
      const res = await axios.get(`/tweets?page=${page}`);
      /**----- handle no more data for new page---- */
      if (res.data.next_page_url === null) {
        setShowScrollLoading(false);
      }
      if (page === 1) {
        setTweets(res.data.data);
      } else {
        setTweets((prev) => [...prev, ...res.data.data]);
      }
      setIsLoading(false);
      setIsRefreshing(false);
    } catch (err) {
      console.log(err);
      setIsLoading(false);
    }
  };

  const getAllTweetsRefresh = async () => {
    try {
      const res = await axios.get(`/tweets`);
      setTweets(res.data.data);
      setIsLoading(false);
      setIsRefreshing(false);
    } catch (err) {
      console.log(err);
      setIsLoading(false);
      setIsRefreshing(false);
    }
  };

  const pullToRefresh = () => {
    setPage(1);
    getAllTweets(); //this is added because if the page is already 1 ,this function will not automatically call with useEffect
    setIsRefreshing(true);
    setShowScrollLoading(false);
  };

  const handleEndReached = () => {
    if (showScrollLoading) {
      setPage((prev) => prev + 1);
    }
  };

  return (
    <View style={styles.container}>
      {isLoading ? (
        <Loading />
      ) : (
        <FlatList
          ref={flatListRef}
          onRefresh={pullToRefresh}
          refreshing={isRefreshing}
          ItemSeparatorComponent={() => <View style={styles.seperator}></View>}
          data={tweets}
          renderItem={({ item: tweet }) => (
            <Tweet tweet={tweet} user={tweet.user} />
          )}
          keyExtractor={(tweet) => tweet.id}
          onEndReached={handleEndReached}
          onEndReachedThreshold={0} //how far from bottom of the lists
          ListFooterComponent={showScrollLoading && <Loading />}
        />
      )}
      <TweetAddBtn />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingLeft: 15,
  },
  seperator: {
    borderBottomWidth: 1,
    borderBottomColor: "#e5e7eb",
    marginVertical: 8,
  },
});
