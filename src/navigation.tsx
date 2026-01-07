import {Main} from "./pages/Main";
import {History} from "./pages/History";
import {NavigationContainer} from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name={"Main"}
                    component={Main}
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name={"History"}
                    component={History}
                    options={{headerShown: false}}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation;