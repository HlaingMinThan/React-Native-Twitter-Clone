import React from "react";
import { Text, View } from "react-native";

export default function NotificationsScreen() {
  return (
    <View
      style={{
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: 20 }}>Notifications Screen</Text>
    </View>
  );
}
