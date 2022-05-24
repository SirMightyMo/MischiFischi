import React, { useContext } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Svg, { Defs, LinearGradient, Stop } from "react-native-svg";
import LayoutStyles from "../constants/LayoutStyles";
import { AppContext } from "../data/AppContext";
import { getPatternJSX } from './fishParts/Patterns';

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
        <Text style={{position: "absolute"}}> {props.title} </Text>
        
        <Svg height="100" width="100" viewBox="0 0 640 360">
          <Defs>
            <LinearGradient id="grad" x1="0" y1="0" x2="1" y2="0">
              <Stop offset="0" stopColor={selectedFish.color2} stopOpacity="1" />
              <Stop offset="1" stopColor={selectedFish.color1} stopOpacity="1" />
            </LinearGradient>
            {getPatternJSX(selectedFish.pattern)}
          </Defs>
          <Fish fishId={props.id} />
        </Svg>
        
      </TouchableOpacity>
    </View>
  )
}