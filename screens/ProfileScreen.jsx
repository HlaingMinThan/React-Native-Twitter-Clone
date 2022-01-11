import React from "react";
import { Text, View } from "react-native";

export default function ProfileScreen() {
  return (
    <View
      style={{
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: 20 }}>Profile Screen</Text>
    </View>
  );
}
