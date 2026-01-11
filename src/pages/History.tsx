import {ScrollView, StyleSheet, View, Text} from "react-native";
import {Balance} from "../ui/widget/Balance/Balance";
import {BlockButton} from "../ui/widget/BlockButton/BlockButton";
import {IcTransfer} from "../ui/atoms/icons/IcTransfer";
import {IcQRCode} from "../ui/atoms/icons/IcQRCode";
import {RFValue} from "react-native-responsive-fontsize";
import {HistoryWidget} from "../ui/widget/History/HistoryWidget";
import {IcGraphDown} from "../ui/atoms/icons/IcGraphDown";
import {IcGraphUp} from "../ui/atoms/icons/IcGraphUp";

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
    return (
        <ScrollView>
            <View style={style.main}>
                <Balance />

                <View style={style.operations}>
                    <BlockButton icon={<IcGraphDown fill={"#BF2D13"} width={67} height={65} />} title={"Потрачено"} note={"за месяц"}>
                        <Text style={style.statsText}>
                            67890 ₽
                        </Text>
                    </BlockButton>
                    <BlockButton icon={<IcGraphUp fill={"#10FF7C"} width={67} height={65} />} title={"Получено"} note={"за месяц"}>
                        <Text style={style.statsText}>
                            120000 ₽
                        </Text>
                    </BlockButton>
                </View>

                <HistoryWidget smallView={false} />
            </View>
        </ScrollView>
    )
}