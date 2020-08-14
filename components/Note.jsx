import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import getFullDate from "../utils/getFullDate";

import theme from "../config/theme";

function Note({ data, onDeleteNote }) {
  return (
    <View style={styles.container}>
      <View style={styles.noteContainer}>
        <Text>{getFullDate(data.date)}</Text>
        <Text style={styles.note} numberOfLines={2}>
          {data.note}
        </Text>
      </View>
      <TouchableOpacity style={styles.deleteContainer} onPress={onDeleteNote}>
        <Text style={styles.delete}>
          <Icon name="trash" size={15} color={theme.white} />
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 70,
    flexDirection: "row",
    alignItems: "center",
  },
  noteContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    height: 50,
    width: 50,
    margin: 10,
    marginLeft: 20,
    borderLeftWidth: 10,
    borderLeftColor: "#ff3a67",
    paddingLeft: 10,
  },
  note: {
    fontWeight: "bold",
  },
  deleteContainer: {
    width: 30,
    height: 55,
    backgroundColor: "#1f78b9",
    marginRight: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  delete: {
    color: theme.white,
  },
});
export default Note;
