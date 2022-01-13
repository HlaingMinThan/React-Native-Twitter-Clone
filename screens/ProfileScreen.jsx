import ProfileHeader from "../components/ProfileHeader";
import { FlatList, View, StyleSheet } from "react-native";
import Tweet from "../components/Tweet";
export default function ProfileScreen({ navigation }) {
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
  const renderItem = ({ item, index }) => (
    <View style={[styles.ml10, index === 0 ? styles.mt10 : ""]}>
      <Tweet title={item.title} navigation={navigation} />
    </View>
  );
  return (
    <FlatList
      style={styles.listContainer}
      data={tweets}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      ListHeaderComponent={ProfileHeader} //nest ProfileHeader in FlatList Scroll
      ItemSeparatorComponent={() => <View style={styles.seperator}></View>}
    />
  );
}
const styles = StyleSheet.create({
  listContainer: {
    backgroundColor: "white",
  },
  seperator: {
    borderBottomWidth: 1,
    borderBottomColor: "#e5e7eb",
    marginVertical: 8,
  },
  ml10: {
    marginLeft: 10,
  },
  mt10: {
    marginTop: 10,
  },
});
