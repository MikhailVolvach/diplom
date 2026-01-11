import {Text, View, StyleSheet} from "react-native";
import {Balance} from "../ui/widget/Balance/Balance";
import {BlockButton} from "../ui/widget/BlockButton/BlockButton";
import {IcTransfer} from "../ui/atoms/icons/IcTransfer";
import {IcQRCode} from "../ui/atoms/icons/IcQRCode";
import {RFValue} from "react-native-responsive-fontsize";
import {TransferByPAN} from "../ui/widget/Transfer/TransferByPAN";
import {HistoryWidget} from "../ui/widget/History/HistoryWidget";

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
    return (
        <View style={style.main}>
            <Balance />

            {/*<View style={style.operations}>*/}
            {/*    <BlockButton icon={<IcTransfer />} title={"Перевести"} note={"на карту"} />*/}
            {/*    <BlockButton title={"Сканировать QR"} icon={<IcQRCode />} />*/}
            {/*</View>*/}

            <TransferByPAN />

            <HistoryWidget />
        </View>
    )
}