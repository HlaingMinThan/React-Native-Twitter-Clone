import React from "react";
import { Text, View } from "react-native";

export default function SettingScreen() {
  return (
    <View
      style={{
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: 20 }}>Setting Screen</Text>
    </View>
  );
}
