import {View, Text, StyleSheet} from "react-native";
import {PANInput} from "../../atoms/Input/PANInput";
import {SumInput} from "../../atoms/Input/SumInput";
import {useState} from "react";
import {RFValue} from "react-native-responsive-fontsize";
import {ButtonWithIcon} from "../../atoms/Button/ButtonWithIcon";
import {IcExit} from "../../atoms/icons/IcExit";
import {createTransaction} from "../../../services/database";

const styles = StyleSheet.create({
    container: {
        width: "100%",
        padding: RFValue(32, 2400),
        backgroundColor: "rgba(255, 255, 255, .08)",
        borderRadius: RFValue(32, 2400),
        display: "flex",
        gap: RFValue(15, 2400)
    },
    title: {
        color: "#FFFFFF",
        marginBottom: RFValue(15, 2400),
        fontSize: RFValue(36, 2400),
        fontWeight: "bold",
    }
})

export const TransferByPAN = () => {
    const [PAN, setPAN] = useState("");
    const [sum, setSum] = useState("");

    const onSubmit = () => {
        if (PAN.length < 16 || parseInt(sum) <= 0) {
            return;
        }
        createTransaction(PAN, parseInt(sum));
        setPAN("");
        setSum("");
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Перевод по номеру карты</Text>

            <PANInput onChange={setPAN} PAN={PAN} />
            <SumInput onChange={setSum} sum={sum} />

            <ButtonWithIcon onClick={onSubmit} text={"Отправить"} icon={<IcExit width={40} height={40} />} />
        </View>
    )
}