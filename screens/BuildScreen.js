import React from "react";
import { View, Text } from "react-native";
import SvgCanvas from "../components/SvgCanvas";
import ToolsContainer from "../components/ToolsContainer";
import LayoutStyles from "../constants/LayoutStyles";
import { useDimensions } from '@react-native-community/hooks';

export default BuildScreen = () => {

  const { height } = useDimensions().window;
  console.log(height)

  return (
    <View style={height > 321 ? LayoutStyles.buildContainerVertical : LayoutStyles.buildContainerHorizonatal} >
      <SvgCanvas />
      <ToolsContainer />
    </View>
  );
};