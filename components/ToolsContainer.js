import React, { useContext } from "react";
import { View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import LayoutStyles from "../constants/LayoutStyles";
import { AppContext } from "../data/AppContext";
import ColorTool from "./ColorTool";
import ToolButton from "./ToolButton";

export default ToolsContainer = () => {
  const [appData, setAppData] = useContext(AppContext);
  const currentId = appData.currentId;

  const frontColorHandler = (color) => {
    let fishToChange = appData.fish.find(fish => fish.id === currentId)
    fishToChange.color1 = color;

    setAppData(appData => ({
      currentId: appData.currentId,
      fish: appData.fish.map(fish => fish.id === currentId ? fishToChange : fish),
    }));
  }
  const backColorHandler = (color) => {
    let fishToChange = appData.fish.find(fish => fish.id === currentId)
    fishToChange.color2 = color;

    setAppData(appData => ({
      currentId: appData.currentId,
      fish: appData.fish.map(fish => fish.id === currentId ? fishToChange : fish),
    }));
  }

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
      <ScrollView style={{ width: '100%' }}>

        <View style={LayoutStyles.toolRow}>
          <ToolButton title='1' source={require('../assets/fish/body1.png')} onPress={() => bodyPartHandler(0, 'body')} />
          <ToolButton title='2' source={require('../assets/fish/body2.png')} onPress={() => bodyPartHandler(1, 'body')} />
          <ToolButton title='3' source={require('../assets/fish/body1.png')} onPress={() => bodyPartHandler(2, 'body')} />
        </View>

        <View style={LayoutStyles.toolRow}>
          <ToolButton title='1' source={require('../assets/fish/tail1.png')} onPress={() => bodyPartHandler(0, 'fin')} />
          <ToolButton title='2' source={require('../assets/fish/tail2.png')} onPress={() => bodyPartHandler(1, 'fin')} />
          <ToolButton title='3' source={require('../assets/fish/body1.png')} onPress={() => bodyPartHandler(2, 'fin')} />
        </View>

        <View style={LayoutStyles.toolRow}>
          <ToolButton title='1' source={require('../assets/fish/backfins1.png')} onPress={() => bodyPartHandler(0, 'backFin')} />
          <ToolButton title='2' source={require('../assets/fish/backfins2.png')} onPress={() => bodyPartHandler(1, 'backFin')} />
          <ToolButton title='3' source={require('../assets/fish/body1.png')} onPress={() => bodyPartHandler(2, 'backFin')} />
        </View>

        <View style={LayoutStyles.toolRow}>
          <ColorTool currentColor={appData.fish[currentId].color} colorHandler={color => frontColorHandler(color)} />

        </View>
        <View style={LayoutStyles.toolRow}>
          <ColorTool currentColor={appData.fish[currentId].color} colorHandler={color => backColorHandler(color)} />
        </View>

      </ScrollView>
    </View>
  );
};

