import { ActivityIndicator, StyleSheet } from "react-native";
export default function Loading({ size, style }) {
  return (
    <ActivityIndicator
      color="#0092ef"
      size={size ? size : "large"}
      style={{ ...styles.loading, ...style }}
    ></ActivityIndicator>
  );
}
const styles = StyleSheet.create({
  loading: {
    marginVertical: 10,
  },
});
