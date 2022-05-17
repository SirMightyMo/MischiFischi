import React, { useContext } from "react";
import { View, Text} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import LayoutStyles from "../constants/LayoutStyles";
import { AppContext } from "../data/AppContext";
import  ColorTool from "./ColorTool";
import ToolButton from "./ToolButton";

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
  }

  return (
    <View style={LayoutStyles.toolsContainer}>
      <ScrollView style={{width: '100%'}}>

      <Text>Body</Text>
      <View style={LayoutStyles.toolRow}>
        <ToolButton title='1' onPress={() => bodyPartHandler(0, 'body')} />
        <ToolButton title='2' onPress={() => bodyPartHandler(1, 'body')} />
        <ToolButton title='3' onPress={() => bodyPartHandler(2, 'body')} />
      </View>

      <Text>Fin</Text>
      <View style={LayoutStyles.toolRow}>
        <ToolButton title='1' onPress={() => bodyPartHandler(0, 'fin')} />
        <ToolButton title='2' onPress={() => bodyPartHandler(1, 'fin')} />
        <ToolButton title='3' onPress={() => bodyPartHandler(2, 'fin')} />
      </View>

      <Text>BackFin</Text>
      <View style={LayoutStyles.toolRow}>
        <ToolButton title='1' onPress={() => bodyPartHandler(0, 'backFin')} />
        <ToolButton title='2' onPress={() => bodyPartHandler(1, 'backFin')} />
        <ToolButton title='3' onPress={() => bodyPartHandler(2, 'backFin')} />
      </View>

      <Text>Color</Text>
      <View style={LayoutStyles.toolRow}>
        
      </View>
      
      <ColorTool />
      </ScrollView>
    </View>
  );
};


