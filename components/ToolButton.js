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
        }}
      />)
    }
    else if(props.part !== undefined ){
      return (
        <SvgFish part={props.part} />
      )
    }
  }

  return (
      <View style={LayoutStyles.toolButton} backgroundColor={isActiveHandler()} >
        <TouchableOpacity onPress={props.onPress}>
          <View width={70} height={60} >
            {imageHandler()}
            <Text> {props.title} </Text>
          </View>
        </TouchableOpacity>
      </View>
  )
}

const getViewbox = (part) => {
  if (part == undefined) {
    return "0 0 640 360"
  } else {
    part = part.charAt(0);
    switch (part) {
      case "b":
        return "100 35 520 260";
      case "t":
        return "0 75 250 125";
      case "f":
        return "240 20 200 100";
    }
  }
}

const getJsxCode = (props) => {
  if (props.part != undefined) {
    return FP.returnJsxPart(props.part);
  }
}

const SvgFish = (props) => {
  return(
    <Svg height="100%" width="100%" viewBox={getViewbox(props.part)}>
      <Defs>
        <LinearGradient id="grad" x1="0" y1="0" x2="1" y2="0">
          <Stop offset="0" stopColor="rgba(0,0,0,1)" stopOpacity="0" />
          <Stop offset="1" stopColor="rgba(0,0,0,1)" stopOpacity="0" />
        </LinearGradient>
      </Defs>
      {getJsxCode(props)}
    </Svg>
  );
}