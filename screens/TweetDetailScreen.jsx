import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
export default function TweetDetailScreen({ navigation }) {
  const goToProfile = () => {
    navigation.navigate("Profile");
  };
  return (
    <View style={styles.container}>
      <View style={styles.tweetHeader}>
        <View style={styles.userInfoContainer}>
          <TouchableOpacity onPress={goToProfile}>
            <Image
              source={{ uri: `https://reactjs.org/logo-og.png` }}
              style={styles.avatar}
            ></Image>
          </TouchableOpacity>
          <TouchableOpacity onPress={goToProfile}>
            <View style={styles.namesContainer}>
              <Text style={styles.name}>Faizal</Text>
              <Text style={styles.username}>@faizal</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <Entypo name="dots-three-vertical" size={20} color="gray" />
        </View>
      </View>
      <View style={styles.tweetBodyContainer}>
        <Text style={styles.tweetBody}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae eaque
          distinctio, excepturi est obcaecati illo non, omnis labore quo culpa
          dolorem atque velit accusamus! Voluptatum dignissimos accusamus animi.
          Aspernatur, vel.
        </Text>
      </View>
      <View style={styles.seperator} />
      <View style={styles.tweetEngagementContainer}>
        <View style={styles.tweetEngagement}>
          <Text style={styles.count}>628</Text>
          <Text style={styles.engageText}>Retweets</Text>
        </View>
        <View style={styles.tweetEngagement}>
          <Text style={styles.count}>38</Text>
          <Text style={styles.engageText}>Quote Tweets</Text>
        </View>
        <View style={styles.tweetEngagement}>
          <Text style={styles.count}>2943</Text>
          <Text style={styles.engageText}>Likes</Text>
        </View>
      </View>
      <View style={styles.seperator} />
      <View style={styles.tweetActionsContainer}>
        <TouchableOpacity>
          <EvilIcons name="comment" size={35} color="gray" />
        </TouchableOpacity>
        <TouchableOpacity>
          <EvilIcons name="retweet" size={35} color="gray" />
        </TouchableOpacity>
        <TouchableOpacity>
          <EvilIcons name="heart" size={35} color="gray" />
        </TouchableOpacity>
        <TouchableOpacity>
          <EvilIcons
            name={Platform.OS === "ios" ? "share-apple" : "share-google"}
            size={35}
            color="gray"
          />
        </TouchableOpacity>
      </View>
      <View style={styles.seperator} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  tweetHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 8,
    paddingVertical: 12,
  },
  avatar: {
    width: 52,
    height: 52,
    borderRadius: 26,
  },
  userInfoContainer: {
    flexDirection: "row",
  },
  count: {
    fontWeight: "bold",
    marginHorizontal: 3,
  },
  engageText: {
    color: "gray",
    marginHorizontal: 3,
  },
  namesContainer: {
    marginLeft: 6,
  },
  tweetBodyContainer: {
    flexDirection: "column",
    paddingHorizontal: 8,
  },
  tweetEngagementContainer: {
    flexDirection: "row",
    paddingHorizontal: 8,
    paddingVertical: 5,
  },
  tweetActionsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingHorizontal: 8,
  },
  tweetEngagement: { flexDirection: "row", marginHorizontal: 3 },
  tweetBody: {
    fontSize: 18,
    lineHeight: 29,
    fontWeight: "400",
  },
  seperator: {
    borderBottomWidth: 1,
    borderBottomColor: "#e5e7eb",
    marginVertical: 8,
  },
  name: {
    fontSize: 14,
    fontWeight: "bold",
  },
  username: {
    fontSize: 13,
    color: "gray",
    marginTop: 5,
  },
});
