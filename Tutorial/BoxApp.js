import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Box from "./Box";

const App = ()=> {
  return (
    <View style={style.container}>
      <Text style={style.header}>Boxes</Text>
    
    
    <Box color="red" />
    <Box color="green" />
    <Box color="blue" />
    <Box color="violet" />
    </View>
  )
}

export default App

const style = StyleSheet.create({
  container: {
    paddingTop: 60,
    paddingHorizontal: 20,
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  header: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 10
  },
})