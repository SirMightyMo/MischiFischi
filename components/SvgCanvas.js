import React, { useContext } from "react";
import { View, Text } from "react-native";
import { AppContext } from "../data/AppContext";
import LayoutStyles from "../constants/LayoutStyles";
import Fish from "./Fish";
import Svg from "react-native-svg";
import Background from '../assets/bg'


export default SvgCanvas = () => {
  const [appData, setAppData] = useContext(AppContext);

  return (
    <View style={LayoutStyles.canvasContainer}>
      <Text>See Fish</Text>
      <Svg>
      <Background />
      <Fish />
      </Svg>
    </View>
  );
};