import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import Tweet from "../components/Tweet";

import axios from "axios";
import TweetAddBtn from "../components/TweetAddBtn";
export default function HomeScreen({ navigation }) {
  const [tweets, setTweets] = useState([]);
  const getAllTweets = async () => {
    try {
      const res = await axios.get("http://localhost:8000/api/tweets");
      setTweets(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getAllTweets();
  }, []);
  const renderItem = ({ item }) => (
    <Tweet tweet={item} navigation={navigation} />
  );
  return (
    <View style={styles.container}>
      <FlatList
        ItemSeparatorComponent={() => <View style={styles.seperator}></View>}
        data={tweets}
        renderItem={renderItem}
        keyExtractor={(tweet) => tweet.id}
      />
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
