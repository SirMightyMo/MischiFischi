import React, { useContext } from "react";
import { View, Text } from "react-native";
import { AppContext } from "../data/AppContext";
import LayoutStyles from "../constants/LayoutStyles";
import Fish from "./Fish";
import Svg from "react-native-svg";


export default SvgCanvas = () => {
  const [appData, setAppData] = useContext(AppContext);

  return (
    <View style={LayoutStyles.canvasContainer}>
      <Text>See Fish</Text>
      <Fish />
    </View>
  );
};