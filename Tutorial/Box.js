import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Box = (props) => {
    const backgroundStyle = {
        backgroundColor: props.color
    }
    return (
        <View style={[backgroundStyle, style.box]}><Text style={{ textTransform: "capitalize" }}>{props.color}</Text></View>
    )
}

export default Box;
const style = StyleSheet.create({
    box: {

        width: 300,
        padding: 10,
        borderRadius: 3,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 10,
    },
    text: {
        fontWeight: 800,
        color: 'white',
        paddingTop: 25
    }
})