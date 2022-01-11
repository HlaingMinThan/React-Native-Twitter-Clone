import React from "react";
import { Text, View, Button } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: 20 }}>Hello Home</Text>
      <Button
        onPress={() => navigation.navigate("New Tweet")}
        title="New Tweet"
      ></Button>
      <Button
        onPress={() => navigation.navigate("Profile")}
        title="Profile"
      ></Button>
      <Button
        onPress={() => navigation.navigate("Tweet Detail")}
        title="Tweet Detail"
      ></Button>
    </View>
  );
}
