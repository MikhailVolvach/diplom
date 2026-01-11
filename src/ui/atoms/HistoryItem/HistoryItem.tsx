import {StyleSheet, Text, View} from "react-native";
import {HistoryItemType, IHistoryMock} from "../../../mockData/history";
import {RFValue} from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: RFValue(32, 2400),
        paddingVertical: RFValue(20, 2400),
        backgroundColor: "rgba(255, 255, 255, .08)",
        borderRadius: RFValue(32, 2400),
    },
    textContainer: {
        display: "flex",
        flexDirection: "column",
        gap: RFValue(2, 2400)
    },
    title: {
        fontSize: RFValue(32, 2400),
        color: "#FFFFFF"
    },
    subtitle: {
        fontSize: RFValue(32, 2400),
        color: "rgba(255, 255, 255, .8)"
    },
    sumContainer: {
        display: "flex",
        flexDirection: "row",
        gap: RFValue(3, 2400),
    },
    sumValueIncome: {
        fontSize: RFValue(32, 2400),
        color: "#10FF7C"
    },
    sumValueExpense: {
        fontSize: RFValue(32, 2400),
        color: "#EF2906"
    }
})

export const HistoryItem: React.FC<IHistoryMock> = ({title, category, type, sum}) => {
    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.subtitle}>{String(category)}</Text>
            </View>

            <View style={styles.sumContainer}>
                <Text style={type === HistoryItemType.EXPENSE ? styles.sumValueExpense : styles.sumValueIncome}>{type === HistoryItemType.EXPENSE ? "–" : "+"}</Text>

                <Text style={type === HistoryItemType.EXPENSE ? styles.sumValueExpense : styles.sumValueIncome}>{sum.toLocaleString()}</Text>
                <Text style={type === HistoryItemType.EXPENSE ? styles.sumValueExpense : styles.sumValueIncome}>₽</Text>
            </View>
        </View>
    )
}