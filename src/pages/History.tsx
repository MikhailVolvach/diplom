import {ScrollView, StyleSheet, Text, View} from "react-native";
import {Balance} from "../ui/widget/Balance/Balance";
import {BlockButton} from "../ui/widget/BlockButton/BlockButton";
import {RFValue} from "react-native-responsive-fontsize";
import {HistoryWidget} from "../ui/widget/History/HistoryWidget";
import {IcGraphDown} from "../ui/atoms/icons/IcGraphDown";
import {IcGraphUp} from "../ui/atoms/icons/IcGraphUp";
import {useEffect, useState} from "react";
import {fetchHistory} from "../services/database";
import {HistoryItemType, IHistoryMock} from "../mockData/history";

const style = StyleSheet.create({
    main: {
        backgroundColor: "#398067",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        paddingBottom: RFValue(50, 2400),
        gap: RFValue(36, 2400)
    },
    operations: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        gap: RFValue(20, 2400)
    },
    statsText: {
        color: "#FFFFFF",
        fontSize: RFValue(36, 2400)
    }
})

export const History = () => {
    const [income, setIncome] = useState(0);
    const [expense, setExpense] = useState(0);
    const [history, setHistory] = useState<IHistoryMock[]>([]);

    useEffect(() => {
        const history = fetchHistory();

        setHistory(history);

        setIncome(history.filter(value => value.type === HistoryItemType.INCOME).reduce((prevValue, currValue) => prevValue + currValue.sum, 0))
        setExpense(history.filter(value => value.type === HistoryItemType.EXPENSE).reduce((prevValue, currValue) => prevValue + currValue.sum, 0))
    }, []);

    return (
        <ScrollView>
            <View style={style.main}>
                <Balance />

                <View style={style.operations}>
                    <BlockButton icon={<IcGraphDown fill={"#BF2D13"} width={67} height={65} />} title={"Потрачено"} note={"за месяц"}>
                        <Text style={style.statsText}>
                            {expense.toLocaleString()} ₽
                        </Text>
                    </BlockButton>
                    <BlockButton icon={<IcGraphUp fill={"#10FF7C"} width={67} height={65} />} title={"Получено"} note={"за месяц"}>
                        <Text style={style.statsText}>
                            {income.toLocaleString()} ₽
                        </Text>
                    </BlockButton>
                </View>

                <HistoryWidget items={history} smallView={false} />
            </View>
        </ScrollView>
    )
}