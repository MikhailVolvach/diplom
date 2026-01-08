import {StyleSheet, TextInput} from "react-native";
import React from "react";

const style = StyleSheet.create({
    input: {
        height: 100,
        width: "100%",
        borderRadius: 32
    }
});

export const SumInput = () => {
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