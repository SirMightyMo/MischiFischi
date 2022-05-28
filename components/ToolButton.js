import React from "react";
import { View, TouchableOpacity, Image, Text } from "react-native";
import LayoutStyles from "../constants/LayoutStyles";
import Colors from "../constants/Colors";

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
          borderColor: 'green',
          borderWidth: 2,
        }}
      />)
    }
    else if(props.icon !== undefined ){
      return (
        props.icon
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