import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Notes from "./screens/Notes";
import Note from "./components/Note";
import ListSeprator from "./components/ListSeprator";

export default function App() {
  return <Notes />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
