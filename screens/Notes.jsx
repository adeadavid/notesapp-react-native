import React, { Component } from "react";
import Icon from "react-native-vector-icons/FontAwesome";

import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableHighlight,
  KeyboardAvoidingView,
  StatusBar,
  FlatList,
} from "react-native";
import Constants from "expo-constants";
import Note from "../components/Note";
import ListSeprator from "../components/ListSeprator";

let counterId = 0;

class Notes extends Component {
  state = {
    text: "",
    refreshing: false,
    notes: [],
  };
  render() {
    const { text, notes, refreshing } = this.state;
    return (
      <>
        <View
          style={{
            height: Constants.statusBarHeight,
            width: "100%",
            backgroundColor: "#fa3663",
          }}
        />
        <SafeAreaView style={styles.container}>
          <StatusBar backgroundColor="#fa3663" barStyle="light-content" />

          <View style={styles.header}>
            <Text style={styles.headerText}>-NOTER-</Text>
          </View>
          <View style={styles.list}>
            <FlatList
              data={notes}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <Note
                  data={item}
                  onDeleteNote={() => this.handleDeleteNote(item.id)}
                />
              )}
              ItemSeparatorComponent={() => <ListSeprator />}
              refreshing={refreshing}
              onRefresh={this.handlePull}
            />
          </View>
          <KeyboardAvoidingView behavior="padding">
            <View style={styles.textView}>
              <TextInput
                placeholder="> enter your note"
                placeholderTextColor="#fff"
                style={styles.text}
                value={text}
                returnKeyLabel="Add Note"
                returnKeyType="done"
                onChangeText={(text) => {
                  this.setState({ text });
                }}
              />
            </View>
          </KeyboardAvoidingView>
          <TouchableHighlight
            style={styles.button}
            onPress={this.handleAddNote}
          >
            <Icon name="plus" size={15} color="#fff" />
          </TouchableHighlight>
        </SafeAreaView>
      </>
    );
  }

  handleAddNote = () => {
    const text = this.state.text;
    if (!text) return;
    this.setState({
      text: "",
      refreshing: false,
      notes: [
        { id: counterId++, note: text, date: Date.now() },
        ...this.state.notes,
      ],
    });
  };

  handleDeleteNote = (noteId) => {
    this.setState({
      ...this.state,
      notes: this.state.notes.filter((note) => note.id !== noteId),
    });
  };

  handlePull = () => {
    this.setState({
      text: "",
      refreshing: false,
      notes: [
        { id: counterId++, note: "Rfessed 1", date: Date.now() },
        ...this.state.notes,
      ],
    });
  };
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
  },
  header: {
    height: 50,
    width: "100%",
    backgroundColor: "#fa3663",
    alignItems: "center",
    borderBottomWidth: 10,
    borderBottomColor: "#e6dcde",
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
    backgroundColor: "#252525",
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
    bottom: 100,
    right: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 5,
    backgroundColor: "#fa3663",
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
  },
});
export default Notes;
