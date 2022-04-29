import React, { useContext } from "react";
import { View, Text } from "react-native";
import { Button } from "react-native-elements";
import LayoutStyles from "../constants/LayoutStyles";
import { AppContext } from "../data/AppContext";

export default Tools = () => {
  const [appData, setAppData] = useContext(AppContext);

  const buttonHandler = (xVal, yVal) => {
    setAppData(appData => ({ xPos: appData.xPos + xVal, yPos: appData.yPos + yVal }))
    console.log('click', appData)
  }

  return (
    <View style={LayoutStyles.toolsContainer}>
      <Text>Build Fish</Text>
      <Button title='right' onPress={ () => buttonHandler(10, 0)} />
      <Button title='left' onPress={ () => buttonHandler(-10, 0)} />
    </View>
  );
};