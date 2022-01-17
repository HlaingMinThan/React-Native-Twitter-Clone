import ProfileHeader from "../components/ProfileHeader";
import { FlatList, View, StyleSheet } from "react-native";
import Tweet from "../components/Tweet";
import { useEffect, useState } from "react";
import axios from "../helpers/axios";
export default function ProfileScreen({ route, navigation }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getUserInfo();
  }, [route.params.userId]);

  async function getUserInfo() {
    try {
      let res = await axios.get(`/users/${route.params.userId}`);
      setUser(res.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }
  const tweets = [
    {
      id: 1,
      user_id: 1,
      body: "inventore",
      created_at: "2022-01-13T08:52:21.000000Z",
      updated_at: "2022-01-13T08:52:21.000000Z",
      user: {
        id: 1,
        name: "Hlaing Min Than",
        username: "faizal",
        avatar: "https://i.pravatar.cc/150?img=39",
        created_at: "2022-01-13T09:10:48.000000Z",
      },
    },
    {
      id: 2,
      user_id: 1,
      body: "inventore",
      created_at: "2022-01-13T08:52:21.000000Z",
      updated_at: "2022-01-13T08:52:21.000000Z",
      user: {
        id: 1,
        name: "Hlaing Min Than",
        username: "faizal",
        avatar: "https://i.pravatar.cc/150?img=39",
        created_at: "2022-01-13T09:10:48.000000Z",
      },
    },
    {
      id: 3,
      user_id: 1,
      body: "inventore",
      created_at: "2022-01-13T08:52:21.000000Z",
      updated_at: "2022-01-13T08:52:21.000000Z",
      user: {
        id: 1,
        name: "Hlaing Min Than",
        username: "faizal",
        avatar: "https://i.pravatar.cc/150?img=39",
        created_at: "2022-01-13T09:10:48.000000Z",
      },
    },
  ];
  const renderItem = ({ item, index }) => (
    <View style={[styles.ml10, index === 0 ? styles.mt10 : ""]}>
      <Tweet tweet={item} navigation={navigation} />
    </View>
  );
  return (
    <FlatList
      style={styles.listContainer}
      data={tweets}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      ListHeaderComponent={<ProfileHeader user={user} loading={loading} />} //nest ProfileHeader in FlatList Scroll
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
