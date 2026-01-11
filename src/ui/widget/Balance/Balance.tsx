import {View, Text, StyleSheet} from "react-native";
import {IcEyeOff} from "../../atoms/icons/IcEyeOff";
import {RFValue} from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
    container: {
        minHeight: RFValue(241, 2400),
        borderRadius: RFValue(32, 2400),
        backgroundColor: "rgba(255, 255, 255, .08)",
        display: 'flex',
        flexDirection: "column",
        gap: RFValue(20, 2400),
        padding: RFValue(32, 2400),
        paddingBottom: RFValue(32, 2400),
        boxSizing: "border-box",
    },
    balanceContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    cardContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
    },

    title: {
        color: "#FFFFFF",
        fontSize: RFValue(28, 2400),
        fontFamily: "Inter"
    },
    balanceValue: {
        color: "#FFFFFF",
        fontSize: RFValue(64, 2400),
        fontFamily: "Inter"
    },
    cardText: {
        color: "#FFFFFF",
        fontSize: RFValue(28, 2400),
        fontFamily: "Inter"
    }
})

export const Balance = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Баланс</Text>
            <View style={styles.balanceContainer}>
                <Text style={styles.balanceValue}>120 000 ₽</Text>
                <IcEyeOff width={50} height={50} />
            </View>
            <View style={styles.cardContainer}>
                <Text style={styles.cardText}>МИР *4821</Text>
                <Text style={styles.cardText}>50 000 ₽</Text>
            </View>
        </View>
    )
}