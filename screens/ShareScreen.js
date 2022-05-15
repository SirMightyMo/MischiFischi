import React from "react";
import { View, Text } from "react-native";
import LayoutStyles from "../constants/LayoutStyles";
import { SketchPicker } from 'react-color'
import ColorTool from "../components/ColorTool";

export default ShareScreen = () => {
  return (
    <View style={LayoutStyles.shareContainer}>
      <Text>share your stuff</Text>
      <ColorTool/>
    </View>
  );
};