import React, { useContext } from "react";
import { View, Text } from "react-native";
import { Button } from "react-native-elements";
import LayoutStyles from "../constants/LayoutStyles";
import { AppContext } from "../data/AppContext";
import Fish from "./Fish";
import ColorChoser from "./ColorChoser";

export default Tools = () => {
  const [appData, setAppData] = useContext(AppContext);
  const currentId =appData.currentId;


  const bodyPartHandler = (style,part) =>{
    let  fishToChange = appData.fish.find(fish => fish.id === currentId)
    fishToChange.body = part === 'body' ? (style) : (fishToChange.body);
    fishToChange.fin  = part === 'fin' ? (style) : (fishToChange.fin),

    setAppData(appData => ({
      currentId: appData.currentId,
      fish: appData.fish.map(fish => fish.id === currentId ? fishToChange : fish),
    }));

/*
    setAppData(appData => ({
      id: appData.currentId,
      fish: appData.fish,
      fish[0].body:   //.find(fish => fish.id === appData.currentId), //part === 'body' ? (style) : (appData.body)  ,
      //fin: part === 'fin' ? (style) : (appData.fin),
      //backFin: part === 'backFin' ? (style) : (appData.backFin),
      //color: appData.color
    }))*/
    console.log(appData)
  }

  return (
    <View style={LayoutStyles.toolsContainer}>
      <Text>Build Fish</Text>
      <Text>Body</Text>
      <View style={{flexDirection:'row'}}>
        <Button title='1' onPress={() => bodyPartHandler(0,'body')} />
        <Button title='2' onPress={() => bodyPartHandler(1,'body')} />
        <Button title='3' onPress={() => bodyPartHandler(2,'body')} />
      </View>
      <Text>Fin</Text>
      <View style={{flexDirection:'row'}}>
        <Button title='1' onPress={() => bodyPartHandler(0,'fin')} />
        <Button title='2' onPress={() => bodyPartHandler(1,'fin')} />
      </View>
      <Text>BackFin</Text>
      <View style={{flexDirection:'row'}}>
        <Button title='1' onPress={() => bodyPartHandler(0,'fin')} />
        <Button title='2' onPress={() => bodyPartHandler(1,'fin')} />
      </View>
    </View>
  );
};



