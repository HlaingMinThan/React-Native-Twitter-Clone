import { useEffect, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import Loading from "../components/Loading";
import ProfileHeader from "../components/ProfileHeader";
import Tweet from "../components/Tweet";
import axios from "../helpers/axios";
export default function ProfileScreen({ route }) {
  const [user, setUser] = useState(null);
  const [userId] = useState(function () {
    return route.params ? route.params.userId : 1;
  });
  const [tweets, setTweets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showScrollLoading, setShowScrollLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [isRefreshing, setIsRefreshing] = useState(false);
  useEffect(async () => {
    await getUserInfo();
    await getUserTweets();
    setLoading(false);
  }, [route.params, page]);

  const pullToRefresh = () => {
    setPage(1);
    getUserTweets(); //this is added because if the page is already 1 ,this function will not automatically call with useEffect
    setIsRefreshing(true);
    setShowScrollLoading(false);
  };
  const handleEndReached = () => {
    if (showScrollLoading) {
      setPage((prev) => prev + 1);
    }
  };
  async function getUserInfo() {
    try {
      let res = await axios.get(`/users/${userId}`);
      setUser(res.data);
    } catch (error) {
      console.log(error);
    }
  }
  async function getUserTweets() {
    try {
      setShowScrollLoading(true);
      const res = await axios.get(`/users/${userId}/tweets?page=${page}`);
      /**----- handle no more data for new page---- */
      if (res.data.next_page_url === null) {
        setShowScrollLoading(false);
      }
      if (page === 1) {
        setTweets(res.data.data);
      } else {
        setTweets((prev) => [...prev, ...res.data.data]);
      }
      setIsRefreshing(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  }

  const renderItem = ({ item, index }) => (
    <View style={[styles.ml10, index === 0 ? styles.mt10 : ""]}>
      <Tweet tweet={item} user={user} />
    </View>
  );

  return loading ? (
    <Loading />
  ) : (
    <FlatList
      style={styles.listContainer}
      data={tweets}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      ListHeaderComponent={<ProfileHeader user={user} />} //nest ProfileHeader in FlatList Scroll
      ItemSeparatorComponent={() => <View style={styles.seperator}></View>}
      onRefresh={pullToRefresh}
      refreshing={isRefreshing}
      onEndReached={handleEndReached}
      onEndReachedThreshold={0} //how far from bottom of the lists
      ListFooterComponent={showScrollLoading && <Loading />}
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
