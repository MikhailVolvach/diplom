import {RFValue} from "react-native-responsive-fontsize";
import React from "react";
import {SvgProps} from "react-native-svg/src/elements/Svg";
import Svg, {ClipPath, Defs, G, Path, Rect} from "react-native-svg";

export const IcGraphDown: React.FC<SvgProps> = ({width = 24, height = 24, fill='white'}) => {
    return (
        <Svg width={RFValue(Number(width), 2400)} height={RFValue(Number(height), 2400)} viewBox="0 0 24 24" fill="none">
            <G clip-path="url(#clip0_29_241)">
                <Path d="M16 18L18.29 15.71L13.41 10.83L9.41 14.83L2 7.41L3.41 6L9.41 12L13.41 8L19.71 14.29L22 12V18H16Z" fill={fill}/>
            </G>
            <Defs>
                <ClipPath id="clip0_29_241">
                    <Rect width="24" height="24" fill={fill}/>
                </ClipPath>
            </Defs>
        </Svg>
    )
}