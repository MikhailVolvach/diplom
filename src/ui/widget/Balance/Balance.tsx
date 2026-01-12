import {View, Text, StyleSheet} from "react-native";
import {IcEyeOff} from "../../atoms/icons/IcEyeOff";
import {RFValue} from "react-native-responsive-fontsize";
import {useEffect, useState} from "react";
import {CardRow, fetchCards} from "../../../services/database";

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
    cardsWrapper: {
        display: "flex",
        flexDirection: "column",
        gap: RFValue(10, 2400),
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
    const [cards, setCards] = useState<CardRow[]>([]);
    const [balance, setBalance] = useState(0);

    useEffect(() => {
        const cards = fetchCards();

        setBalance(cards.reduce(
                (previousValue, currentValue) => currentValue.balance + previousValue,
                0
            )
        )

        setCards(cards);
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Баланс</Text>
            <View style={styles.balanceContainer}>
                <Text style={styles.balanceValue}>{balance.toLocaleString()} ₽</Text>
                {/*<IcEyeOff width={50} height={50} />*/}
            </View>
            <View style={styles.cardsWrapper}>
                {cards.map((card, i) => (
                    <View key={i} style={styles.cardContainer}>
                        <Text style={styles.cardText}>{card.label} *{card.masked_number}</Text>
                        <Text style={styles.cardText}>{card.balance.toLocaleString()} {card.currency}</Text>
                    </View>
                ))}
            </View>
        </View>
    )
}