import Navigation from "./src/navigation";
import {View} from "react-native";
import { StatusBar } from 'expo-status-bar';
import {RFValue} from "react-native-responsive-fontsize";
import {Navbar} from "./src/ui/widget/Navbar/Navbar";
import {initDatabase} from "./src/services/database";

export default function App() {
    initDatabase();

    return (
        <View style={{height: '100%', paddingTop: RFValue(300, 2400), paddingBottom: RFValue(100, 2400), paddingHorizontal: RFValue(40, 2400), backgroundColor: "#398067"}}>
            <StatusBar style={"auto"} />

            <Navigation />

            {/*<Navbar />*/}
        </View>
    );
}
