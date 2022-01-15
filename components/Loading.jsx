import { ActivityIndicator, StyleSheet } from "react-native";
export default function Loading() {
  return (
    <ActivityIndicator
      color="#0092ef"
      size="large"
      style={styles.loading}
    ></ActivityIndicator>
  );
}
const styles = StyleSheet.create({
  loading: {
    marginVertical: 10,
  },
});
