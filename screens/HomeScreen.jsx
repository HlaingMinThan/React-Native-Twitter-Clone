import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, View, ActivityIndicator } from "react-native";
import Tweet from "../components/Tweet";
import axios from "axios";
import TweetAddBtn from "../components/TweetAddBtn";

export default function HomeScreen({ navigation }) {
  const [tweets, setTweets] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isEndScrollLoading, setIsEndScrollLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [isRefreshing, setIsRefreshing] = useState(false);

  useEffect(() => {
    getAllTweets();
  }, [page]);

  const getAllTweets = async () => {
    try {
      const res = await axios.get(
        `http://localhost:8000/api/tweets?page=${page}`
      );
      /**----- handle no more data for new page---- */
      if (res.data.next_page_url === null) {
        setIsEndScrollLoading(false);
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

  const handleRefresh = () => {
    setPage(1);
    getAllTweets(); //this is added because if the page is already 1 ,this function will not automatically call with useEffect
    setIsRefreshing(true);
    setIsEndScrollLoading(false);
  };

  const handleEndReached = () => {
    setIsEndScrollLoading(true);
    setPage((prev) => prev + 1);
  };

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator
          color="#0092ef"
          size="large"
          style={styles.loading}
        ></ActivityIndicator>
      ) : (
        <FlatList
          onRefresh={handleRefresh}
          refreshing={isRefreshing}
          ItemSeparatorComponent={() => <View style={styles.seperator}></View>}
          data={tweets}
          renderItem={({ item }) => (
            <Tweet tweet={item} navigation={navigation} />
          )}
          keyExtractor={(tweet) => tweet.id}
          onEndReached={handleEndReached}
          onEndReachedThreshold={0} //how far from bottom of the lists
          ListFooterComponent={
            isEndScrollLoading && (
              <ActivityIndicator
                color="#0092ef"
                size="large"
                style={styles.loading}
              ></ActivityIndicator>
            )
          }
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
  loading: {
    marginVertical: 10,
  },
});
