import React from "react";
import { Text, View } from "react-native";

export default function SearchScreen() {
  return (
    <View
      style={{
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: 20 }}>Search screen</Text>
    </View>
  );
}
