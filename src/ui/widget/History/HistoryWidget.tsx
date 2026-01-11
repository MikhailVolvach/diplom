import {StyleSheet, View, Text, Pressable} from "react-native";
import {historyMock} from "../../../mockData/history";
import {HistoryItem} from "../../atoms/HistoryItem/HistoryItem";
import {RFValue} from "react-native-responsive-fontsize";
import React from "react";

const styles = StyleSheet.create({
    container: {
        width: "100%",
        paddingHorizontal: RFValue(32, 2400),
        paddingVertical: RFValue(32, 2400),
        backgroundColor: "rgba(255, 255, 255, .08)",
        borderRadius: RFValue(32, 2400),
        display: "flex",
        flexDirection: "column",
        gap: RFValue(30, 2400),
    },
    header: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    title: {
        color: "#FFFFFF",
        fontSize: RFValue(36, 2400),
        fontWeight: "bold",
    },
    more: {
        color: "#FFFFFF",
        fontSize: RFValue(36, 2400),
        textDecorationLine: "underline"
    },
    content: {
        display: "flex",
        flexDirection: "column",
        gap: RFValue(15, 2400),
    }
})

export interface HistoryWidgetProps {
    smallView?: boolean;
}

export const HistoryWidget: React.FC<HistoryWidgetProps> = ({smallView = true}) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>История</Text>
                {smallView && <Pressable><Text style={styles.more}>Ещё...</Text></Pressable>}
            </View>
            <View style={styles.content}>
                {(smallView ? historyMock.slice(0, 4) : historyMock).map((item, index) => (
                    <HistoryItem key={index} {...item} />
                ))}
            </View>
        </View>
    )
}