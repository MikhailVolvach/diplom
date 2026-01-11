import {RFValue} from "react-native-responsive-fontsize";
import React from "react";
import {SvgProps} from "react-native-svg/src/elements/Svg";
import Svg, {ClipPath, Defs, G, Path, Rect} from "react-native-svg";

export const IcGraphUp: React.FC<SvgProps> = ({width = 24, height = 24, fill = 'white'}) => {
    return (
        <Svg width={RFValue(Number(width), 2400)} height={RFValue(Number(height), 2400)} viewBox="0 0 24 24" fill="none">
            <G clip-path="url(#clip0_29_245)">
                <Path d="M16 6L18.29 8.29L13.41 13.17L9.41 9.17L2 16.59L3.41 18L9.41 12L13.41 16L19.71 9.71L22 12V6H16Z" fill={fill}/>
            </G>
            <Defs>
                <ClipPath id="clip0_29_245">
                    <Rect width={RFValue(Number(width), 2400)} height={RFValue(Number(height), 2400)} fill={fill}/>
                </ClipPath>
            </Defs>
        </Svg>
    )
}