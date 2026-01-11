import {StyleSheet, TextInput} from "react-native";
import React from "react";
import {RFValue} from "react-native-responsive-fontsize";

const style = StyleSheet.create({
    input: {
        minHeight: RFValue(100, 2400),
        width: "100%",
        paddingHorizontal: RFValue(32, 2400),
        borderRadius: RFValue(32, 2400),
        backgroundColor: "rgba(255, 255, 255, .08)",
        color: "#FFFFFF"
    }
});

export interface SumInputProps {
    sum?: string;
    onChange: (sum: string) => void;
}

export const SumInput: React.FC<SumInputProps> = ({sum, onChange}) => {
    return (
        <TextInput
            style={style.input}
            onChangeText={onChange}
            value={String(sum)}
            placeholder="0 ₽"
            keyboardType="numeric"
            placeholderTextColor={"rgba(255, 255, 255, .5)"}
        />
    )
}