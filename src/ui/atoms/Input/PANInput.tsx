import {TextInput, StyleSheet} from "react-native";
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
})

export interface PANInputProps {
    PAN?: string;
    onChange: (PAN: string) => void;
}

export const PANInput: React.FC<PANInputProps> = ({PAN = "", onChange}) => {
    return (
        <TextInput
            style={style.input}
            onChangeText={onChange}
            value={PAN}
            placeholder="0000000000000000"
            keyboardType="numeric"
            maxLength={16}
            placeholderTextColor={"rgba(255, 255, 255, .5)"}
        />
    )
}