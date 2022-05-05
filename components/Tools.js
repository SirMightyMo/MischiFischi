import React, { useContext } from "react";
import { View, Text } from "react-native";
import { Button } from "react-native-elements";
import LayoutStyles from "../constants/LayoutStyles";
import { AppContext } from "../data/AppContext";

export default Tools = () => {
  const [appData, setAppData] = useContext(AppContext);
  const currentId = appData.currentId;


  const bodyPartHandler = (style, part) => {
    let fishToChange = appData.fish.find(fish => fish.id === currentId)
    fishToChange.body = part === 'body' ? (style) : (fishToChange.body);
    fishToChange.fin = part === 'fin' ? (style) : (fishToChange.fin);
    fishToChange.backFin = part === 'backFin' ? (style) : (fishToChange.backFin);

    setAppData(appData => ({
      currentId: appData.currentId,
      fish: appData.fish.map(fish => fish.id === currentId ? fishToChange : fish),
    }));
    console.log(appData)
  }

  return (
    <View style={LayoutStyles.toolsContainer}>
      <Text>Build Fish</Text>
      <Text>Body</Text>
      <View style={{ flexDirection: 'row' }}>
        <Button title='1' onPress={() => bodyPartHandler(0, 'body')} />
        <Button title='2' onPress={() => bodyPartHandler(1, 'body')} />
        <Button title='3' onPress={() => bodyPartHandler(2, 'body')} />
      </View>
      <Text>Fin</Text>
      <View style={{ flexDirection: 'row' }}>
        <Button title='1' onPress={() => bodyPartHandler(0, 'fin')} />
        <Button title='2' onPress={() => bodyPartHandler(1, 'fin')} />
        <Button title='3' onPress={() => bodyPartHandler(2, 'fin')} />
      </View>
      <Text>BackFin</Text>
      <View style={{ flexDirection: 'row' }}>
        <Button title='1' onPress={() => bodyPartHandler(0, 'backFin')} />
        <Button title='2' onPress={() => bodyPartHandler(1, 'backFin')} />
        <Button title='3' onPress={() => bodyPartHandler(2, 'backFin')} />
      </View>
    </View>
  );
};



