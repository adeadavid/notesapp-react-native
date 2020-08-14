import React, { Component } from "react";
import * as day from "dayjs";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableHighlight,
  KeyboardAvoidingView,
  StatusBar,
} from "react-native";
import Constants from "expo-constants";

class Notes extends Component {
  render() {
    return (
      <SafeAreaView style={StyleSheet.container}>
        <StatusBar backgroundColor="#000" barStyle="dark-content" />
        <View style={styles.header}>
          <Text style={styles.headerText}>-NOTER-</Text>
        </View>
        <View style={styles.list}>
          <Text>A</Text>
        </View>
        <KeyboardAvoidingView behavior="padding" style={styles.textView}>
          <TextInput
            placeholder="> note"
            placeholderTextColor="#fff"
            style={styles.text}
          />
        </KeyboardAvoidingView>
        <TouchableHighlight style={styles.button}>
          <Text>AAAA</Text>
        </TouchableHighlight>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
  },
  header: {
    height: 50,
    width: "100%",
    backgroundColor: "red",
    alignItems: "center",
    borderBottomWidth: 10,
    borderBottomColor: "#0D0D0D",
  },
  headerText: {
    fontWeight: "bold",
    marginTop: 10,
    color: "#fff",
  },
  list: {
    flex: 1,
    flexGrow: 1,
  },
  textView: {
    width: "100%",
    height: 70,
    backgroundColor: "#0d40d4",
    justifyContent: "center",
  },
  text: {
    padding: 5,
    color: "#fff",

    flex: 1,
  },
  button: {
    width: 80,
    height: 80,
    borderRadius: 40,
    zIndex: 1,
    position: "absolute",
    bottom: 50,
    right: 10,
    shadowColor: "#000",
    shadowOpacity: 4,
    backgroundColor: "orange",
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
  },
});
export default Notes;
