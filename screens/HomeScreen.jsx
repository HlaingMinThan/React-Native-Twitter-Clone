import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import Tweet from "../components/Tweet";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
export default function HomeScreen({ navigation }) {
  const tweets = [
    {
      id: "1",
      title: "First Item",
    },
    {
      id: "2",
      title: "Second Item",
    },
    {
      id: "3",
      title: "Third Item",
    },
    {
      id: "4",
      title: "Fourth Item",
    },
    {
      id: "5",
      title: "Fifth Item",
    },
    {
      id: "6",
      title: "Sixth Item",
    },
    {
      id: "7",
      title: "Seventh Item",
    },
  ];
  const goToNewTweet = () => {
    navigation.navigate("New Tweet");
  };
  const renderItem = ({ item }) => (
    <Tweet title={item.title} navigation={navigation} />
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
