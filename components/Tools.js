import React, { useContext } from "react";
import { View, Text } from "react-native";
import { Button } from "react-native-elements";
import LayoutStyles from "../constants/LayoutStyles";
import { AppContext } from "../data/AppContext";
import Fish from "./Fish";
import ColorChoser from "./ColorChoser";

export default Tools = () => {
  const [appData, setAppData] = useContext(AppContext);

  const moveButtonHandler = (xVal, yVal) => {
    setAppData(appData => ({
      idCounterFish: appData.idCounterFish + 1,
      fish: [appData.idCounterFish, appData.fish[0].yPos + xVal, appData.fish[0].yPos + yVal] // hier keinen new Fish erstellen sondern nach id suchen und verschieben
    }))
    console.log('click', appData)
  }
  const newFishButtonHandler = () => {
    setAppData(appData => ({
      idCounterFish: appData.idCounterFish + 1,
      fish: [new Fish(appData.idCounterFish, 0, 0)] // hier new fish in array pushen
    }))
  }

  return (
    <View style={LayoutStyles.toolsContainer}>
      <Text>Build Fish</Text>
      <Button title='add' onPress={()=> newFishButtonHandler()} />
      <View style={{flexDirection:'row'}}>
        <Button title='left' onPress={() => moveButtonHandler(-10, 0)} />
        <Button title='right' onPress={() => moveButtonHandler(10, 0)} />

 
      </View>
    </View>
  );
};