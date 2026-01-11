import Svg, {ClipPath, Defs, G, Path, Rect} from "react-native-svg";
import React from "react";
import {SvgProps} from "react-native-svg/src/elements/Svg";
import {RFValue} from "react-native-responsive-fontsize";

export const IcTransfer: React.FC<SvgProps> = ({width = 28, height = 27}) => {
    return (
        <Svg width={RFValue(Number(width), 2400)} height={RFValue(Number(height), 2400)} viewBox="0 0 28 27" fill="none">
            <G clip-path="url(#clip0_20_623)">
                <Path d="M24 7H8C6.89 7 6.01 7.89 6.01 9L6 21C6 22.11 6.89 23 8 23H24C25.11 23 26 22.11 26 21V9C26 7.89 25.11 7 24 7ZM24 21H8V13H24V21ZM24 11H8V9H24V11Z" fill="white"/>
            </G>
            <G clip-path="url(#clip1_20_623)">
                <Path d="M21 4H5C3.89 4 3.01 4.89 3.01 6L3 18C3 19.11 3.89 20 5 20H5.5V18H5V6H21V6.5H23V6C23 4.89 22.11 4 21 4Z" fill="white"/>
            </G>
            <Defs>
                <ClipPath id="clip0_20_623">
                    <Rect width="24" height="24" fill="white" transform="translate(4 3)"/>
                </ClipPath>
                <ClipPath id="clip1_20_623">
                    <Rect width="24" height="24" fill="white"/>
                </ClipPath>
            </Defs>
        </Svg>
    )
}