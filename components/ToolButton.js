import React from "react";
import { View, TouchableOpacity, Image,Text } from "react-native";
import LayoutStyles from "../constants/LayoutStyles";

export default ToolButton = (props) => {

  const isActiveHandler = () => {
  if(props.isActive === true){
    return 'lightgray'
  }
  else return 'transparent'

}

  return (
    <View style={LayoutStyles.toolButton} backgroundColor={isActiveHandler()} >
      <TouchableOpacity onPress={props.onPress}>
        <View width={50} height={60} >
          <Text> {props.title} </Text>
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