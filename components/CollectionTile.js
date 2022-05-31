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
    <View style={[LayoutStyles.collectionTile, {overflow: 'hidden'}]} backgroundColor={isActiveHandler()} >
      <TouchableOpacity onPress={props.onPress} style={{justifyContent: 'center', alignItems: 'center'}}>
        
        <Svg height="175" width="175" viewBox="0 0 640 360">
          <Defs>
            <LinearGradient id="grad" x1="0" y1="0" x2="1" y2="0">
              <Stop offset="0" stopColor={selectedFish.color2} stopOpacity="1" />
              <Stop offset="1" stopColor={selectedFish.color1} stopOpacity="1" />
            </LinearGradient>
            {getPatternJSX(selectedFish)}
          </Defs>
          <Fish fishId={props.id} />
        </Svg>

        <Text style={{position: "absolute", left: '5%', bottom: '15%', alignSelf: 'flex-start', textAlign: "left", fontWeight: 'bold', fontSize: 18}}> {props.title} </Text>
        
      </TouchableOpacity>
    </View>
  )
}