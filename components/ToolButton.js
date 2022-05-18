import React from "react";
import { View, TouchableOpacity, Image } from "react-native";
import LayoutStyles from "../constants/LayoutStyles";

export default ToolButton = (props) => {

  return (
    <View style={LayoutStyles.toolButton} >
      <TouchableOpacity onPress={props.onPress}>
        <View width={50} height={60}>
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