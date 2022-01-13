import { EvilIcons } from "@expo/vector-icons";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
export default function ProfileHeader() {
  const goToWebsite = async (link) => {
    // await Linking.openURL(`https://${link}`);
  };
  return (
    <View style={styles.container}>
      <Image
        style={styles.backgroundImage}
        source={{
          uri: "https://images.unsplash.com/photo-1557683316-973673baf926?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80",
        }}
      />
      <View style={styles.profileContainer}>
        <Image
          source={{
            uri: `https://scontent-sin6-3.xx.fbcdn.net/v/t39.30808-6/269623673_457487799300811_7786968828914308075_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=dzACxwoveW8AX_2lvFh&_nc_ht=scontent-sin6-3.xx&oh=00_AT-eRDX9fzv3hgsDvfDlYM2WD5C7rhy6nOFC2S9_wAzLjQ&oe=61E3B184`,
          }}
          style={styles.avatar}
        ></Image>
        <TouchableOpacity style={styles.followBtn}>
          <Text style={[styles.followText, styles.fontBold]}>Follow</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.userInfoContainer}>
        <Text style={[styles.name, styles.fontBold]}>Hlaing Min Than</Text>
        <Text style={styles.textGray}>@faizal</Text>
        <Text style={styles.description}>
          I'm Passionate Developer who is working at Proptexx,Real Estate
          Platform of Thailand.
        </Text>
      </View>
      <View style={styles.userOtherInfoContainer}>
        <View style={[styles.flexRow, styles.mb5]}>
          <EvilIcons name="location" size={24} color="gray" />
          <Text style={styles.textGray}>Yangon,Myanmar</Text>
        </View>
        <View style={styles.flexRow}>
          <View style={styles.flexRow}>
            <EvilIcons name="link" size={24} color="gray" />
            <TouchableOpacity onPress={() => goToWebsite("creativecoder.blog")}>
              <Text style={styles.textBlue}>creativecoder.blog</Text>
            </TouchableOpacity>
          </View>
          <View style={[styles.flexRow, styles.ml5]}>
            <EvilIcons name="calendar" size={24} color="gray" />
            <Text style={styles.textGray}>Joined March 2017</Text>
          </View>
        </View>
        <View style={[styles.flexRow, styles.mt10]}>
          <Text>
            <Text style={styles.fontBold}>509</Text> Following
          </Text>
          <Text style={styles.ml10}>
            <Text style={styles.fontBold}>2,354</Text> Followers
          </Text>
        </View>
      </View>
      <View style={styles.seperator}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
  },
  backgroundImage: {
    width: 800,
    height: 120,
  },
  avatar: {
    width: 82,
    height: 82,
    borderRadius: 41,
  },
  followBtn: {
    justifyContent: "center",
    alignItems: "center",
    width: 90,
    height: 45,
    borderRadius: 20,
    backgroundColor: "black",
  },
  fontBold: { fontWeight: "bold" },
  followText: {
    color: "white",
  },
  userInfoContainer: {
    marginLeft: 9,
  },
  userOtherInfoContainer: {
    marginTop: 8,
    marginLeft: 18,
  },
  name: {
    fontSize: 25,
    marginTop: 10,
  },
  textGray: {
    color: "gray",
  },
  textBlue: {
    color: "#0092ef",
  },
  description: {
    fontSize: 14,
    marginTop: 10,
    lineHeight: 20,
  },
  flexRow: {
    flexDirection: "row",
  },
  mb5: {
    marginBottom: 5,
  },
  ml5: {
    marginLeft: 5,
  },
  ml10: {
    marginLeft: 10,
  },
  mt10: {
    marginTop: 10,
  },
  profileContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    marginTop: -30,
    paddingHorizontal: 10,
  },
  seperator: {
    borderBottomWidth: 1,
    borderBottomColor: "#e5e7eb",
    marginVertical: 8,
  },
});
