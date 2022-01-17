import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import axios from "../helpers/axios";
import Loading from "../components/Loading";

export default function NewTweetScreen({ navigation }) {
  const [tweet, setTweet] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const postTweet = async () => {
    if (!tweet.length) {
      return;
    }
    setIsLoading(true);
    const res = await axios.post("/tweets", {
      body: tweet,
    });
    setIsLoading(false);
    navigation.navigate("Home1", {
      newTweetAdded: res.data,
    });
  };
  return (
    <View style={styles.container}>
      <View style={styles.newTweetHeader}>
        <Text style={tweet.length > 250 ? styles.textRed : styles.textGray}>
          Characters left : {280 - tweet.length}
        </Text>
        <View style={{ display: "flex", flexDirection: "row" }}>
          {isLoading && <Loading size="small" style={{ marginRight: 10 }} />}
          <TouchableOpacity style={styles.tweetBtn} onPress={postTweet}>
            <Text style={styles.tweetBtnText}>Tweet</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.newTweetBody}>
        <Image
          source={{ uri: `https://reactjs.org/logo-og.png` }}
          style={styles.avatar}
        ></Image>
        <TextInput
          value={tweet}
          onChangeText={(text) => {
            setTweet(text);
          }}
          placeholder="What's happening?"
          multiline
          style={styles.textInput}
          maxLength={280}
        ></TextInput>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  textGray: {
    color: "gray",
  },
  textRed: {
    color: "red",
  },
  newTweetHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
    paddingHorizontal: 10,
  },
  newTweetBody: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginTop: 20,
    paddingHorizontal: 8,
  },
  tweetBtn: {
    justifyContent: "center",
    alignItems: "center",
    width: 75,
    height: 40,
    borderRadius: 35,
    backgroundColor: "#0092ef",
  },
  tweetBtnText: {
    color: "white",
  },
  textInput: {
    fontSize: 18,
    marginLeft: 15,
    lineHeight: 27,
    flex: 1,
  },
  avatar: {
    width: 52,
    height: 52,
    borderRadius: 26,
  },
});
