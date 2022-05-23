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
  const selectedFish = appData.fish.find(fish => fish.id === currentId);

  const frontColorHandler = (color) => {
    selectedFish.color1 = color;

    setAppData(appData => ({
      currentId: appData.currentId,
      idCounter: appData.idCounter,
      fish: appData.fish.map(fish => fish.id === currentId ? selectedFish : fish),
    }));
    storeData(appData);
  }
  const backColorHandler = (color) => {
    selectedFish.color2 = color;

    setAppData(appData => ({
      currentId: appData.currentId,
      idCounter: appData.idCounter,
      fish: appData.fish.map(fish => fish.id === currentId ? selectedFish : fish),
    }));
    storeData(appData);
  }

  const bodyPartHandler = (style, part) => {
    selectedFish.body = part === 'body' ? (style) : (selectedFish.body);
    selectedFish.fin = part === 'fin' ? (style) : (selectedFish.fin);
    selectedFish.backFin = part === 'backFin' ? (style) : (selectedFish.backFin);

    setAppData(appData => ({
      currentId: appData.currentId,
      idCounter: appData.idCounter,
      fish: appData.fish.map(fish => fish.id === currentId ? selectedFish : fish),
    }));
    storeData(appData);
  }

  const newFish = () => {
    //console.log(new FishModel(appData.idCounter + 1, 0, 0, 0, '#44FF44', '#44FF44'))

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
          <ToolButton title='1' source={require('../assets/fish/body1.png')} onPress={() => bodyPartHandler(0, 'body')} isActive={appData.fish[currentId].body === 0 ? true : false} />
          <ToolButton title='2' source={require('../assets/fish/body2.png')} onPress={() => bodyPartHandler(1, 'body')} isActive={appData.fish[currentId].body === 1 ? true : false}/>
          <ToolButton title='3' source={require('../assets/fish/body1.png')} onPress={() => bodyPartHandler(2, 'body')} isActive={appData.fish[currentId].body === 2 ? true : false}/>
        </View>

        <View style={LayoutStyles.toolRow}>
          <ToolButton title='1' source={require('../assets/fish/tail1.png')} onPress={() => bodyPartHandler(0, 'backFin')} isActive={appData.fish[currentId].backFin === 0 ? true : false}  />
          <ToolButton title='2' source={require('../assets/fish/tail2.png')} onPress={() => bodyPartHandler(1, 'backFin')} isActive={appData.fish[currentId].backFin === 1 ? true : false}/>
          <ToolButton title='3' source={require('../assets/fish/body1.png')} onPress={() => bodyPartHandler(2, 'backFin')} isActive={appData.fish[currentId].backFin === 2 ? true : false}/>
        </View>

        <View style={LayoutStyles.toolRow}>
          <ToolButton title='1' source={require('../assets/fish/backfins1.png')} onPress={() => bodyPartHandler(0, 'fin')} isActive={appData.fish[currentId].fin === 0 ? true : false} />
          <ToolButton title='2' source={require('../assets/fish/backfins2.png')} onPress={() => bodyPartHandler(1, 'fin')} isActive={appData.fish[currentId].fin === 1 ? true : false} />
          <ToolButton title='3' source={require('../assets/fish/body1.png')} onPress={() => bodyPartHandler(2, 'fin')} isActive={appData.fish[currentId].fin === 2 ? true : false} />
        </View>

        <View style={LayoutStyles.toolColumn}>
          <ColorTool oldColor={selectedFish.color1} colorHandler={color => frontColorHandler(color)} />
          <ColorTool oldColor={selectedFish.color2} colorHandler={color => backColorHandler(color)} />
        </View>
        
        <View style={LayoutStyles.toolRow}>
          <ToolButton title='down' onPress={() => nextFish(-1)} />
          <ToolButton title='new' onPress={() => newFish()} />
          <ToolButton title='up' onPress={() => nextFish(1)} />
        </View>
      </ScrollView>
    </View>
  );
};

