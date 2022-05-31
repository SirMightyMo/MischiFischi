import React from "react";
import { View, TouchableOpacity, Image, Text } from "react-native";
import LayoutStyles from "../constants/LayoutStyles";
import Colors from "../constants/Colors";
import * as FP from './fishParts/FishParts';
import { getPatternJSX } from "./fishParts/Patterns";
import Svg, { Defs, LinearGradient, Stop, Rect } from "react-native-svg";

export default ToolButton = (props) => {

  const isActiveHandler = () => {
    if (props.isActive === true) {
      return Colors.buttonHighlight
    }
    else return Colors.buttonBackground

  }

  const imageHandler = () => {
    if (props.source !== undefined) {
      return (<Image
        source={props.source}
        style={{
          resizeMode: 'contain',
          width: '100%',
          height: '100%',
          borderColor: 'transparent',
          borderWidth: 2,
          borderRadius: 5,
        }}
      />)
    }
  }

  return (
      <View style={LayoutStyles.toolButton} backgroundColor={isActiveHandler()} >
        <TouchableOpacity onPress={props.onPress}>
          <View width={75} height={50} style={{justifyContent: 'center', alignItems: 'center'}}>
            {imageHandler()}
            <Text style={{
              position: 'absolute', 
              backgroundColor: 'white', 
              bottom: 0, 
              left: '2%', 
              fontSize: 10, 
              borderRadius: 25, 
              width: 15, 
              height: 15, 
              textAlign: 'center', 
              textAlignVertical: 'center',
            fontWeight: 'bold'}}
            > 
              {props.title} 
            </Text>
          </View>
        </TouchableOpacity>
      </View>
  )
}