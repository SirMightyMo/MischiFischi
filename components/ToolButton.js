import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import Svg from "react-native-svg";
import LayoutStyles from "../constants/LayoutStyles";
import Pfeile from '../assets/pfeile'
import Fin01 from '../assets/fin01'
import BackFin01 from '../assets/backFin01'


export default ToolButton = (props) => {
  return (
    <View style={LayoutStyles.toolButton} >


<TouchableOpacity onPress={props.onPress}>
        <Text> {props.title} </Text>
          
        <Pfeile width="50px" height="50px"/> 

      </TouchableOpacity>
    </View>
  )
}