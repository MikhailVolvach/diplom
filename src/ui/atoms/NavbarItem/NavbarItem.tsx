import {Text, StyleSheet} from "react-native";
import {ReactNode} from "react";
import {RFValue} from "react-native-responsive-fontsize";
import {PlatformPressable} from "@react-navigation/elements";
import {useLinkBuilder} from "@react-navigation/native";

export interface NavbarItemProps {
    icon: ReactNode;
    text: string;
    active: boolean;

    route: any;
    options: any;
    onPress: () => void;
    onLongPress: () => void;
}

const styles = StyleSheet.create({
    container: {
        width: "100%",

        flexShrink: 1,
        borderRadius: RFValue(32, 2400),

        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: RFValue(5, 2400),
        paddingVertical: RFValue(19, 2400)
    },
    container_active: {
        backgroundColor: "rgba(255, 255, 255, .08)",
    },
    text: {
        color: "#FFFFFF",
        fontSize: RFValue(40, 2400),
        fontWeight: "bold",
    }
})

export const NavbarItem: React.FC<NavbarItemProps> = ({text, icon, active, route, options, onPress, onLongPress}) => {
    const { buildHref } = useLinkBuilder();

    return (
        <PlatformPressable
            style={{...styles.container, ...(active && styles.container_active)}}

            key={route.key}
            href={buildHref(route.name, route.params)}
            accessibilityState={active ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarButtonTestID}
            onPress={onPress}
            onLongPress={onLongPress}
        >
            {options.tabBarIcon}
            <Text style={styles.text}>{text}</Text>
        </PlatformPressable>
    )
}