import React from "react";
import { StyleSheet, View } from "react-native";
function ListSeprator(props) {
  return (
    <View style={styles.container}>
      <View style={styles.seprator}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  seprator: {
    width: "95%",
    borderRadius: 50,
    backgroundColor: "#e2dcde",
    height: 2,
  },
});
export default ListSeprator;
