import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";

function App() {
  return (
    <View style={style.container1}>
    <Text>App</Text></View>
  )
}

export default App

const style = StyleSheet.create({
  container1: {backgroundColor: "#eee", color: "black", textAlign: "center", flex: 1, alignItems: "center", justifyContent: "center"}
})
