import React from "react";
import { View, Text } from "react-native";
import SvgCanvas from "../components/SvgCanvas";
import ToolsContainer from "../components/ToolsContainer";
import LayoutStyles from "../constants/LayoutStyles";

export default BuildScreen = () => {

  return (
    <View style={LayoutStyles.buildContainer}>
      <Text>Hello Builder</Text>
      <SvgCanvas />
      <ToolsContainer />
    </View>
  );
};