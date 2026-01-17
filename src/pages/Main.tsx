import {View, StyleSheet} from "react-native";
import {Balance} from "../ui/widget/Balance/Balance";
import {RFValue} from "react-native-responsive-fontsize";
import {TransferByPAN} from "../ui/widget/Transfer/TransferByPAN";
import {HistoryWidget} from "../ui/widget/History/HistoryWidget";
import {useEffect, useState} from "react";
import {CardRowWithSum, createTransaction, fetchCards, fetchHistory} from "../services/database";
import {IHistoryMock} from "../mockData/history";

const style = StyleSheet.create({
    main: {
        backgroundColor: "#398067",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        gap: RFValue(36, 2400)
    },
    operations: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        gap: RFValue(20, 2400)
    }
})

export const Main = () => {
    const [history, setHistory] = useState<IHistoryMock[]>([]);
    const [cards, setCards] = useState<CardRowWithSum[]>([]);
    const [balance, setBalance] = useState(0);

    useEffect(() => {
        const history = fetchHistory();

        setHistory(history);

        const cards = fetchCards();
        setBalance(cards.reduce((previousValue, currentValue) => currentValue.net_sum + previousValue, 0))
        setCards(cards);
    }, [])

    const onSubmit = (PAN: string, sum: string) => {
        createTransaction(PAN, parseInt(sum));

        const history = fetchHistory();

        setHistory(history);

        const cards = fetchCards();
        setBalance(cards.reduce((previousValue, currentValue) => currentValue.net_sum + previousValue, 0))
        setCards(cards);
    }

    return (
        <View style={style.main}>
            <Balance balance={balance} cards={cards} />

            {/*<View style={style.operations}>*/}
            {/*    <BlockButton icon={<IcTransfer />} title={"Перевести"} note={"на карту"} />*/}
            {/*    <BlockButton title={"Сканировать QR"} icon={<IcQRCode />} />*/}
            {/*</View>*/}

            <TransferByPAN onSubmit={onSubmit} />

            <HistoryWidget items={history} />
        </View>
    )
}