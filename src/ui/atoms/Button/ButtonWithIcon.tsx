import {Button, Pressable, Text, StyleSheet} from "react-native";
import React, {ReactNode} from "react";
import {RFValue} from "react-native-responsive-fontsize";

export interface ButtonWithIconProps {
    text: string;
    icon: ReactNode;
    onClick?: () => void;
}

const style = StyleSheet.create({
    button: {
        backgroundColor: "rgba(255, 255, 255, .08)",
        minHeight: RFValue(100, 2400),
        // paddingTop: RFValue(32, 2400),
        // paddingBottom: RFValue(32, 2400),
        borderRadius: RFValue(32, 2400),
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: RFValue(8, 2400)
    },
    text: {
        color: "#FFFFFF"
    }
})

export const ButtonWithIcon: React.FC<ButtonWithIconProps> = ({text, icon, onClick}) => {
    return (
        <Pressable style={style.button} onPress={onClick}>
            <Text style={style.text}>{text}</Text>
            {icon}
        </Pressable>
    )
}