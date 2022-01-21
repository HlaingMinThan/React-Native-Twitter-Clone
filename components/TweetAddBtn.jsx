import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
export default function TweetAddBtn() {
  const navigation = useNavigation();
  const goToNewTweet = () => {
    navigation.navigate("New Tweet");
  };
  return (
    <TouchableOpacity style={styles.addBtn} onPress={goToNewTweet}>
      <AntDesign name="plus" size={24} color="white" />
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
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
