import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, View, ActivityIndicator } from "react-native";
import Tweet from "../components/Tweet";

import axios from "axios";
import TweetAddBtn from "../components/TweetAddBtn";
export default function HomeScreen({ navigation }) {
  const [tweets, setTweets] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const getAllTweets = async () => {
    try {
      const res = await axios.get("http://localhost:8000/api/tweets");
      setTweets(res.data);
      setIsLoading(false);
      setIsRefreshing(false);
    } catch (err) {
      console.log(err);
      setIsLoading(false);
    }
  };

  const handleRefresh = () => {
    setIsRefreshing(true);
    getAllTweets();
  };
  useEffect(() => {
    getAllTweets();
  }, []);
  const renderItem = ({ item }) => (
    <Tweet tweet={item} navigation={navigation} />
  );
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
          renderItem={renderItem}
          keyExtractor={(tweet) => tweet.id}
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
