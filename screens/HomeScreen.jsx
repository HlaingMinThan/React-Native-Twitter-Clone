import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import Tweet from "../components/Tweet";

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
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingLeft: 15,
  },
  seperator: {
    borderBottomWidth: 1,
    borderBottomColor: "#e5e7eb",
    marginVertical: 8,
  },
});
