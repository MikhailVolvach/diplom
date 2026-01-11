import {StyleSheet, View} from "react-native";
import {RFValue} from "react-native-responsive-fontsize";
import {NavbarItem} from "../../atoms/NavbarItem/NavbarItem";
import {IcHome} from "../../atoms/icons/IcHome";
import {IcHistory} from "../../atoms/icons/IcHistory";
import {useBottomTabBarHeight} from "@react-navigation/bottom-tabs";
import {BlurView} from "expo-blur";


const styles = StyleSheet.create({
    under: {
        backgroundColor: "#398067"
    },
    container: {
        width: "100%",
        backgroundColor: "rgba(255, 255, 255, .08)",
        borderRadius: RFValue(32, 2400),
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        gap: RFValue(20, 2400),
        paddingVertical: RFValue(20, 2400),
        paddingHorizontal: RFValue(32, 2400),
    }
})

export const Navbar = ({state, descriptors, navigation}) => {
    return (
        <View style={styles.container}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                            ? options.title
                            : route.name;

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name, route.params);
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };

                return (
                    <NavbarItem key={index} icon={<IcHome />} text={label} active={isFocused} onPress={onPress} onLongPress={onLongPress} options={options} route={route} />
                )
            })}
            {/*<NavbarItem active={true} text={"Главная"} icon={<IcHome width={60} height={60} />} />*/}
            {/*<NavbarItem active={false} text={"История"} icon={<IcHistory width={60} height={60} />} />*/}
        </View>
    )
}