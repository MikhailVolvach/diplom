import Navigation from "./src/navigation";
import {View} from "react-native";
import { StatusBar } from 'expo-status-bar';
import {RFValue} from "react-native-responsive-fontsize";

export default function App() {
    return (
        <View style={{height: '100%', paddingTop: RFValue(300, 2400), paddingBottom: RFValue(100, 2400), paddingHorizontal: RFValue(40, 2400), backgroundColor: "#398067"}}>
            <Navigation />
            <StatusBar style={"auto"} />
        </View>
    );
}
