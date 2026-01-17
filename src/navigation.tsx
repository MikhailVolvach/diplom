import {Main} from "./pages/Main";
import {History} from "./pages/History";
import {NavigationContainer} from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import {createBottomTabNavigator, useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import {Navbar} from "./ui/widget/Navbar/Navbar";
import {IcHome} from "./ui/atoms/icons/IcHome";
import {IcHistory} from "./ui/atoms/icons/IcHistory";
import { BlurView } from 'expo-blur';

const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={{
                    animation: "shift",
                    sceneStyle: {
                        backgroundColor: "transparent"
                    },
                    tabBarStyle: { position: 'absolute'},
                    headerBackgroundContainerStyle: {
                        backgroundColor: "transparent",
                    }
                    // tabBarBackground: () => (
                    //     <BlurView  />
                    // ),
                }}

                tabBar={(props) => <Navbar {...props} />}
            >
                <Tab.Screen name="Main" component={Main} options={{
                    headerShown: false,
                    tabBarIcon: <IcHome width={60} height={60} />
                }} />
                <Tab.Screen name="History" component={History} options={{
                    headerShown: false,
                    tabBarIcon: <IcHistory width={60} height={60} />
                }} />
            </Tab.Navigator>

        </NavigationContainer>
    )
}

export default Navigation;