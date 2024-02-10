import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { ArrayColors } from "./src/components/Flatlist.js/RawData";
import ColorBox from "./src/components/Flatlist.js/ColorBox";
const App = () => {
  return (
    <FlatList style={[style.container]} data={ArrayColors} keyExtractor={(item) => item.hex} renderItem={({ item }) => <ColorBox hexValue={item.hex} name={item.name} />} ListHeaderComponent={<View style={{ backgroundColor: "blue", flex: 1, alignItems: "center", marginBottom: 12 }}><Text style={[style.text, { color: "white", fontSize: 20 }]}>Color Picker</Text></View>} />
  )
}
export default App;


const style = StyleSheet.create({

  container: {
    paddingTop: 30,
    paddingHorizontal: 20,
    paddingBottom: 10,
    marginBottom: 10,
    backgroundColor: "blue"
  },

  text: {
    fontWeight: "800",
    paddingTop: 25,
    textAlign: "center",
    marginBottom: 20,
  }
})