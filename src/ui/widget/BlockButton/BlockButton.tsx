import {View, Text, StyleSheet} from "react-native";
import React, {ReactNode} from "react";
import {RFValue} from "react-native-responsive-fontsize";

export interface BlockButtonProps {
    title: string;
    note?: string;
    icon: ReactNode;
    children?: ReactNode;
}

const styles = StyleSheet.create({
    container: {
        minHeight: RFValue(241, 2400),
        paddingHorizontal: RFValue(32, 2400),
        paddingVertical: RFValue(20, 2400),
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        borderRadius: RFValue(32, 2400),
        backgroundColor: "rgba(255, 255, 255, .08)",
        width: '100%',
        flexShrink: 1
    },
    header: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    headerText: {
        display: "flex",
        flexDirection: "column",
        gap: 0,

    }
})

export const BlockButton: React.FC<BlockButtonProps> = ({title, note = "", icon, children}) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View>
                    <Text>{title}</Text>
                    <Text>{note}</Text>
                </View>
                {icon}
            </View>
            <View>
                {children}
            </View>
        </View>
    )
}