import React, { useContext } from "react";
import { View, TouchableOpacity, Image, Text } from "react-native";
import Svg from "react-native-svg";
import LayoutStyles from "../constants/LayoutStyles";
import { AppContext } from "../data/AppContext";

export default ColletionTile = (props) => {

  const isActiveHandler = () => {
    if (props.isActive === true) {
      return 'lightgray'
    }
    else return 'transparent'
  }
  const [appData, setAppData] = useContext(AppContext);
  const selectedFish = appData.fish.find(fish => fish.id === props.id);

  return (
    <View style={LayoutStyles.collectionTile} backgroundColor={isActiveHandler()} >
      <TouchableOpacity onPress={props.onPress}>
        <Text> {props.title} </Text>
        
        <Svg height="150" width="150" viewBox="0 40 150 150">
          <Fish fishId={props.id} />
        </Svg>
        
      </TouchableOpacity>
    </View>
  )
}