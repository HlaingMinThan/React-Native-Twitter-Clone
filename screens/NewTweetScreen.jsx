import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";

export default function NewTweetScreen({ navigation }) {
  const [tweet, setTweet] = useState("");
  const postTweet = () => {
    navigation.navigate("Tab");
  };
  return (
    <View style={styles.container}>
      <View style={styles.newTweetHeader}>
        <Text style={tweet.length > 250 ? styles.textRed : styles.textGray}>
          Characters left : {280 - tweet.length}
        </Text>
        <TouchableOpacity style={styles.tweetBtn} onPress={postTweet}>
          <Text style={styles.tweetBtnText}>Tweet</Text>
        </TouchableOpacity>
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
