import React from "react";
import { View, Image, Text, StyleSheet, Platform } from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { formatDistanceToNowStrict } from "date-fns";
import formatDistance from "../helpers/formatDistance";
import locale from "date-fns/locale/en-US";

export default function Tweet({ tweet, navigation }) {
  const goToProfile = () => {
    navigation.navigate("Profile");
  };
  const goToTweetDetail = (tweetId) => {
    navigation.navigate("Tweet Detail", { tweetId });
  };
  return (
    <View style={styles.tweetContainer}>
      <View style={styles.tweetAvatarContainer}>
        <TouchableOpacity onPress={goToProfile}>
          <Image
            source={{ uri: tweet.user.avatar }}
            style={styles.avatar}
          ></Image>
        </TouchableOpacity>
      </View>
      <View style={styles.tweetInfoContainer}>
        <View style={styles.tweetMetaContainer}>
          <TouchableOpacity onPress={goToProfile}>
            <Text style={styles.name}>{tweet.user.name}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={goToProfile}>
            <Text style={styles.tweetMeta}>@{tweet.user.username}</Text>
          </TouchableOpacity>
          <Text style={styles.tweetMeta}>
            {formatDistanceToNowStrict(new Date(tweet.created_at), {
              locale: {
                ...locale,
                formatDistance,
              },
            })}
          </Text>
        </View>
        <View>
          <TouchableOpacity onPress={() => goToTweetDetail(tweet.id)}>
            <Text style={styles.tweetContent} numberOfLines={3}>
              {tweet.body}
            </Text>
          </TouchableOpacity>
        </View>
        {/* comment */}
        <View style={styles.tweetActionsContainer}>
          <TouchableOpacity
            onPress={() => goToTweetDetail(tweet.id)}
            style={styles.tweetAction}
          >
            <View style={styles.iconContainer}>
              <EvilIcons name="comment" size={20} color="gray" />
              <Text style={styles.textGray}>25</Text>
            </View>
          </TouchableOpacity>
          {/* retweet */}
          <TouchableOpacity
            onPress={() => goToTweetDetail(tweet.id)}
            style={styles.tweetAction}
          >
            <View style={styles.iconContainer}>
              <EvilIcons name="retweet" size={20} color="gray" />
              <Text style={styles.textGray}>25</Text>
            </View>
          </TouchableOpacity>
          {/* Heart */}
          <TouchableOpacity
            onPress={() => goToTweetDetail(tweet.id)}
            style={styles.tweetAction}
          >
            <View style={styles.iconContainer}>
              <EvilIcons name="heart" size={20} color="gray" />
              <Text style={styles.textGray}>25</Text>
            </View>
          </TouchableOpacity>
          {/* share */}
          <TouchableOpacity
            onPress={() => goToTweetDetail(tweet.id)}
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
