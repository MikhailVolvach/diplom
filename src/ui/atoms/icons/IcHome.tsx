import Svg, {ClipPath, Defs, G, Path, Rect} from "react-native-svg";
import {RFValue} from "react-native-responsive-fontsize";
import {SvgProps} from "react-native-svg/src/elements/Svg";
import React from "react";

export const IcHome: React.FC<SvgProps> = ({width = 24, height = 24}) => {
    return (
        <Svg width={RFValue(Number(width), 2400)} height={RFValue(Number(height), 2400)} viewBox="0 0 24 24" fill="none">
            <G clip-path="url(#clip0_21_133)">
                <Path d="M12 5.69L17 10.19V18H15V12H9V18H7V10.19L12 5.69ZM12 3L2 12H5V20H11V14H13V20H19V12H22L12 3Z" fill="white"/>
            </G>
            <Defs>
                <ClipPath id="clip0_21_133">
                    <Rect width="24" height="24" fill="white"/>
                </ClipPath>
            </Defs>
        </Svg>
    )
}