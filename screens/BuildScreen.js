import React from "react";
import { View, Text } from "react-native";
import  { Canvas } from "../components/SvgCanvas";
import ToolsContainer from "../components/ToolsContainer";
import LayoutStyles from "../constants/LayoutStyles";
import { useDimensions } from '@react-native-community/hooks';
import QrCodeMaker from "../components/QrCodeMaker";
import QRCode from "react-native-qrcode-svg";
import Svg from "react-native-svg";

export default BuildScreen = () => {

  const { height } = useDimensions().window;
  //console.log(height)

  return (
    <View style={height > 380 ? LayoutStyles.buildContainerVertical : LayoutStyles.buildContainerHorizonatal} >
      <View style={{flex: 1, width: "100%", height: "100%"}}>
        <Canvas />
        <View style={{flex: 0.78}}></View>
      </View>
      <View style={{flex: 1, width: "100%", height: "50%", position: "absolute", bottom: 0}}>
        <ToolsContainer />
      </View>
    </View>
  );
};