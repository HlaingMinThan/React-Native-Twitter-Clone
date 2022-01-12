import React from "react";
import { View, Image, Text, StyleSheet, Platform } from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
export default function Tweet({ title, navigation }) {
  const goToProfile = () => {
    navigation.navigate("Profile");
  };
  const goToTweetDetail = () => {
    navigation.navigate("Tweet Detail");
  };
  return (
    <View style={styles.tweetContainer}>
      <View style={styles.tweetAvatarContainer}>
        <TouchableOpacity onPress={goToProfile}>
          <Image
            source={{ uri: `https://reactjs.org/logo-og.png` }}
            style={styles.avatar}
          ></Image>
        </TouchableOpacity>
      </View>
      <View style={styles.tweetInfoContainer}>
        <View style={styles.tweetMetaContainer}>
          <TouchableOpacity onPress={goToTweetDetail}>
            <Text style={styles.tweetTitle}>{title}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={goToProfile}>
            <Text style={styles.tweetMeta}>@Faizal</Text>
          </TouchableOpacity>
          <Text style={styles.tweetMeta}>9m</Text>
        </View>
        <View>
          <TouchableOpacity onPress={goToTweetDetail}>
            <Text style={styles.tweetContent} numberOfLines={3}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum,
              sunt! Magnam quasi numquam odit eius minima, error repellendus
              quam. Maxime?
            </Text>
          </TouchableOpacity>
        </View>
        {/* comment */}
        <View style={styles.tweetActionsContainer}>
          <TouchableOpacity
            onPress={goToTweetDetail}
            style={styles.tweetAction}
          >
            <View style={styles.iconContainer}>
              <EvilIcons name="comment" size={20} color="gray" />
              <Text style={styles.textGray}>25</Text>
            </View>
          </TouchableOpacity>
          {/* retweet */}
          <TouchableOpacity
            onPress={goToTweetDetail}
            style={styles.tweetAction}
          >
            <View style={styles.iconContainer}>
              <EvilIcons name="retweet" size={20} color="gray" />
              <Text style={styles.textGray}>25</Text>
            </View>
          </TouchableOpacity>
          {/* Heart */}
          <TouchableOpacity
            onPress={goToTweetDetail}
            style={styles.tweetAction}
          >
            <View style={styles.iconContainer}>
              <EvilIcons name="heart" size={20} color="gray" />
              <Text style={styles.textGray}>25</Text>
            </View>
          </TouchableOpacity>
          {/* share */}
          <TouchableOpacity
            onPress={goToTweetDetail}
            style={styles.tweetAction}
          >
            <View style={styles.iconContainer}>
              <EvilIcons
                name={Platform.OS === "ios" ? "share-apple" : "share-google"}
                size={20}
                color="gray"
              />
              <Text style={styles.textGray}>25</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  tweetContainer: {
    paddingVertical: 5,
    flexDirection: "row",
  },
  tweetTitle: {
    fontWeight: "bold",
    fontSize: 14,
  },
  tweetInfoContainer: {
    flexDirection: "column",
    flex: 1,
  },
  tweetActionsContainer: {
    marginTop: 8,
    flexDirection: "row",
    flex: 1,
  },
  iconContainer: { flexDirection: "row", alignItems: "center" },
  textGray: { color: "gray" },
  tweetAction: {
    marginRight: 5,
  },
  tweetMetaContainer: {
    flexDirection: "row",
    flex: 1,
  },
  tweetAvatarContainer: {
    marginRight: 10,
  },
  tweetMeta: {
    marginHorizontal: 6,
    color: "gray",
  },
  tweetContent: {
    marginVertical: 5,
    lineHeight: 20,
  },
  avatar: {
    width: 42,
    height: 42,
    borderRadius: 21,
  },
});
