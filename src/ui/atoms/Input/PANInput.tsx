import {TextInput, StyleSheet} from "react-native";
import React from "react";

const style = StyleSheet.create({
    input: {
        height: 100,
        width: "100%",
        borderRadius: 32
    }
})

export const PANInput = () => {
    const [number, onChangeNumber] = React.useState('');

    return (
        <TextInput
            style={style.input}
            onChangeText={onChangeNumber}
            value={number}
            placeholder="0000 0000 0000 0000"
            keyboardType="numeric"
        />
    )
}