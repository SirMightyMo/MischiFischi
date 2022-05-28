import React from "react";
import { View, Text } from "react-native";
import SvgCanvas from "../components/SvgCanvas";
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
      
      <SvgCanvas />
      
        {/*
        <Text>
        <QrCodeMaker textToQr='hello world' />
        </Text> 
        */}
      
      <ToolsContainer />
    </View>
  );
};