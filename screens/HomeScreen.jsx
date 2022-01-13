import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import Tweet from "../components/Tweet";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import axios from "axios";
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
  const goToNewTweet = () => {
    navigation.navigate("New Tweet");
  };
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
      <TouchableOpacity style={styles.addBtn} onPress={goToNewTweet}>
        <AntDesign name="plus" size={24} color="white" />
      </TouchableOpacity>
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
  addBtn: {
    justifyContent: "center",
    alignItems: "center",
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#0092ef",
    position: "absolute",
    bottom: 25,
    right: 20,
  },
});
