import React, { useContext } from "react";
import { View, Platform } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import LayoutStyles from "../constants/LayoutStyles";
import { AppContext } from "../data/AppContext";
import ColorTool from "./ColorTool";
import ToolButton from "./ToolButton";
import { storeData } from '../data/AppStorage';
import FishModel from "../models/FishModel";


export default ToolsContainer = () => {
  const [appData, setAppData] = useContext(AppContext);
  const currentId = appData.currentId;

  const frontColorHandler = (color) => {
    let fishToChange = appData.fish.find(fish => fish.id === currentId)
    fishToChange.color1 = color;

    setAppData(appData => ({
      currentId: appData.currentId,
      idCounter: appData.idCounter,
      fish: appData.fish.map(fish => fish.id === currentId ? fishToChange : fish),
    }));
    storeData(appData);
  }
  const backColorHandler = (color) => {
    let fishToChange = appData.fish.find(fish => fish.id === currentId)
    fishToChange.color2 = color;

    setAppData(appData => ({
      currentId: appData.currentId,
      idCounter: appData.idCounter,
      fish: appData.fish.map(fish => fish.id === currentId ? fishToChange : fish),
    }));
    storeData(appData);
  }

  const bodyPartHandler = (style, part) => {
    let fishToChange = appData.fish.find(fish => fish.id === currentId)
    fishToChange.body = part === 'body' ? (style) : (fishToChange.body);
    fishToChange.fin = part === 'fin' ? (style) : (fishToChange.fin);
    fishToChange.backFin = part === 'backFin' ? (style) : (fishToChange.backFin);

    setAppData(appData => ({
      currentId: appData.currentId,
      idCounter: appData.idCounter,
      fish: appData.fish.map(fish => fish.id === currentId ? fishToChange : fish),
    }));
    storeData(appData);
  }

  /* Since gradients don't seem to work on iOS, this only shows two color sliders, when device is android */
  const renderColorSlider = () => {
    if (Platform.OS === 'ios') {
      return (<View style={LayoutStyles.toolRow}>
        <ColorTool currentColor={appData.fish[currentId].color} colorHandler={color => frontColorHandler(color)} />
      </View>);
    } else {
      return (<View style={LayoutStyles.toolColumn}>
        <ColorTool currentColor={appData.fish[currentId].color} colorHandler={color => frontColorHandler(color)} />
        <ColorTool currentColor={appData.fish[currentId].color} colorHandler={color => backColorHandler(color)} />
      </View>);
    }
  }

  const newFish = () => {
    console.log(new FishModel(appData.idCounter + 1, 0, 0, 0, '#44FF44', '#44FF44'))

    let newFishArray = appData.fish;
    newFishArray.push(new FishModel(appData.idCounter + 1, 0, 0, 0, '#44FF44', '#44FF44'))
    //console.log(newFishArray);
    setAppData(appData => ({
      currentId: appData.idCounter + 1,
      idCounter: appData.idCounter + 1,
      fish: newFishArray,
    }));
    storeData(appData);

  }
  const nextFish = (direction) => {
    console.log('next fish')
    if ( direction === -1 && appData.currentId -1 >= 0) {
      setAppData(appData => ({
        currentId: appData.currentId + direction,
        idCounter: appData.idCounter,
        fish: appData.fish,
        
      }));
      storeData(appData);
      console.log('check')
    }
    else if(direction === 1 && appData.currentId +1  <= appData.idCounter){
      setAppData(appData => ({
        currentId: appData.currentId + direction,
        idCounter: appData.idCounter,
        fish: appData.fish,
        
      }));
      storeData(appData);
      console.log('check')
    }
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

        {renderColorSlider()}
        <View style={LayoutStyles.toolRow}>
          <ToolButton title='down' onPress={() => nextFish(-1)} />
          <ToolButton title='new' onPress={() => newFish()} />
          <ToolButton title='up' onPress={() => nextFish(1)} />
        </View>
      </ScrollView>
    </View>
  );
};

