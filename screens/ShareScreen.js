import React,{useContext} from "react";
import { View, Text } from "react-native";
import LayoutStyles from "../constants/LayoutStyles";

export default BuildScreen = (route,navigation) => {
  return (
<View style={LayoutStyles.shareContainer}>
  <Text>share your stuff</Text>
</View>
  );
};