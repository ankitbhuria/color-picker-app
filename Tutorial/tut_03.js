import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Box from "./src/components/Box";

const App = ()=> {
  return (
    <View style={style.container}>
      <Text style={style.header}>Boxes</Text>
    
    
    <Box view1={[style.boxChild.child1, style.red]} color="Red" />
    <Box view1={[style.boxChild.child1, style.green]} color="Green" />
    <Box view1={[style.boxChild.child1, style.blue]} color="Blue" />
    <Box view1={[style.boxChild.child1, style.violet]} color="Violet" />
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
  red: {
    backgroundColor: "red"
  },
  green: {
    backgroundColor: "green"
  },
  blue: {
    backgroundColor: "blue"
  },
  violet: {
    backgroundColor: "violet"
  },
  boxChild: {child1: {
    width: 300,
    padding: 10,
    borderRadius: 3,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  child2: {
    width: 300,
    padding: 10,
    borderRadius: 3,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    
  },
  child3: {
    width: 300,
    padding: 10,
    borderRadius: 3,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    
  },
  child4: {
    width: 300,
    padding: 10,
    borderRadius: 3,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    
  },}
})