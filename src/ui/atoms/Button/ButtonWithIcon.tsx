import {Button, Pressable, Text, StyleSheet} from "react-native";
import React, {ReactNode} from "react";

export interface ButtonWithIconProps {
    text: string;
    icon: ReactNode;
    onClick?: () => void;
}

const style = StyleSheet.create({
    button: {
        backgroundColor: "rgba(255, 255, 255, .08)",
        filter: "blur(37px)",
        height: 100,
        paddingTop: 32,
        paddingBottom: 32,
        display: "flex",
        alignContent: "center",
        justifyContent: "center",
        gap: 8
    }
})

export const ButtonWithIcon: React.FC<ButtonWithIconProps> = ({text, icon, onClick}) => {
    return (
        <Pressable style={style.button} onPress={onClick}>
            <Text>{text}</Text>
            {icon}
        </Pressable>
    )
}