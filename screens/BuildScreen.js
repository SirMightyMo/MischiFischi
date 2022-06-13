import React from "react";
import { View } from "react-native";
import  { Canvas } from "../components/SvgCanvas";
import ToolsContainer from "../components/ToolsContainer";
import LayoutStyles from "../constants/LayoutStyles";
import { useDimensions } from '@react-native-community/hooks';

export default BuildScreen = () => {

  const { height } = useDimensions().window;

  return (
    <View style={height > 380 ? LayoutStyles.buildContainerVertical : LayoutStyles.buildContainerHorizonatal} >
      <View style={{flex: 1, width: "100%", height: "100%"}}>
        <Canvas />
        <View style={{flex: 0.78, backgroundColor: 'rgba(5, 13, 33, 1)'}}></View>
      </View>
      <View style={{flex: 1, width: "100%", height: "50%", position: "absolute", bottom: 0}}>
        <ToolsContainer />
      </View>
    </View>
  );
};