import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import LayoutStyles from "../constants/LayoutStyles";
import Pfeile from '../assets/pfeile'



export default ToolButton = (props) => {

  return (
    <View style={LayoutStyles.toolButton} >


      <TouchableOpacity onPress={props.onPress}>
        <Text> {props.title} </Text>
        <View width={50} height={50}>
          <Image 
          source={props.source}
          style={{
            resizeMode: 'contain',
            width: 50,
            height: 59,
          }} 
          />
        </View>
      </TouchableOpacity>
    </View>
  )
}