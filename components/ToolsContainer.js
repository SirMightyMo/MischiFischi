import React, { useContext } from "react";
import { View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import LayoutStyles from "../constants/LayoutStyles";
import { AppContext } from "../data/AppContext";
import { storeData } from '../data/AppStorage';
import FishModel from "../models/FishModel";
import ColorTool from "./ColorTool";
import ToolButton from "./ToolButton";
import uuid from 'react-native-uuid'
import { Ionicons } from '@expo/vector-icons'
import { Button } from "react-native-elements";


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
    selectedFish.tail = part === 'tail' ? (style) : (selectedFish.tail);

    setAppData(appData => ({
      currentId: appData.currentId,
      idCounter: appData.idCounter,
      fish: appData.fish.map(fish => fish.id === currentId ? selectedFish : fish),
    }));
    storeData(appData);
  }

  const patternHandler = (patternId) => {
    selectedFish.pattern = patternId;
    setAppData(appData => ({
      currentId: appData.currentId,
      idCounter: appData.idCounter,
      fish: appData.fish.map(fish => fish.id === currentId ? selectedFish : fish),
    }));
    storeData(appData);
  }
  // funktion creates a new Fish with UUID and default colors and default parts
  const newFish = () => {
    let newFishArray = appData.fish;
    let UUID = uuid.v4();
    newFishArray.push(new FishModel(UUID, 0, 0, 0, '#44FF44', '#44FF44', 0))
    setAppData(appData => ({
      currentId: UUID,
      idCounter: appData.idCounter + 1,
      fish: newFishArray,
    }));
    storeData(appData);
  }
  const nextFish = (direction) => {
    if (direction === -1 && appData.fish.indexOf(selectedFish) > 0) {
      setAppData(appData => ({
        currentId: appData.fish[appData.fish.indexOf(selectedFish) + direction].id,
        idCounter: appData.idCounter,
        fish: appData.fish,
      }));
      storeData(appData);
    }
    else if (direction === 1 && appData.fish.indexOf(selectedFish) < appData.fish.length - 1) {
      setAppData(appData => ({
        currentId: appData.fish[appData.fish.indexOf(selectedFish) + direction].id,
        idCounter: appData.idCounter,
        fish: appData.fish,
      }));
      storeData(appData);
    }
  }
  const deleteFish = () => {
    if (appData.fish.indexOf(selectedFish) > 0) {
      setAppData(appData => ({
        currentId: appData.fish[appData.fish.indexOf(selectedFish) - 1].id,
        idCounter: appData.idCounter,
        fish: appData.fish.filter(fish => fish.id !== selectedFish.id),
      }));
      storeData(appData)
    }
  }
  const getHexColor = () => {
    var makeColorCode = '0123456789ABCDEF';
    var color = '#';
    for (var count = 0; count < 6; count++) {
      color = color + makeColorCode[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  const randomFish = () => {
    frontColorHandler(getHexColor());
    backColorHandler(getHexColor());
    bodyPartHandler(Math.floor(Math.random() * 7), 'body')
    bodyPartHandler(Math.floor(Math.random() * 7), 'fin')
    bodyPartHandler(Math.floor(Math.random() * 7), 'tail')
    patternHandler(Math.floor(Math.random() * 2))

  }

  return (
    <View style={LayoutStyles.toolsContainer}>
      <ScrollView style={{ width: '100%' }}>

        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderColor: 'transparent', borderWidth: 2 }}>
          <Button
            buttonStyle={{ backgroundColor: 'gray', width: 40 }}
            icon={<Ionicons name='chevron-back-outline' size={36}
              color='#111111'
              onPress={selectedFish.body > 0 ? () => bodyPartHandler(selectedFish.body - 1, 'body') : console.log('end of array')} />}
          />
          <ScrollView
            style={LayoutStyles.toolRow}
            horizontal={true}
            contentContainerStyle={LayoutStyles.toolRowCointainer}
          >
            <ToolButton source={require('../assets/fish/body1.png')} onPress={() => bodyPartHandler(0, 'body')} isActive={selectedFish.body === 0 ? true : false} />
            <ToolButton source={require('../assets/fish/body2.png')} onPress={() => bodyPartHandler(1, 'body')} isActive={selectedFish.body === 1 ? true : false} />
            <ToolButton source={require('../assets/fish/body3.png')} onPress={() => bodyPartHandler(2, 'body')} isActive={selectedFish.body === 2 ? true : false} />
            <ToolButton source={require('../assets/fish/body4.png')} onPress={() => bodyPartHandler(3, 'body')} isActive={selectedFish.body === 3 ? true : false} />
            <ToolButton source={require('../assets/fish/body1.png')} onPress={() => bodyPartHandler(4, 'body')} isActive={selectedFish.body === 4 ? true : false} />
            <ToolButton source={require('../assets/fish/body2.png')} onPress={() => bodyPartHandler(5, 'body')} isActive={selectedFish.body === 5 ? true : false} />
            <ToolButton source={require('../assets/fish/body3.png')} onPress={() => bodyPartHandler(6, 'body')} isActive={selectedFish.body === 6 ? true : false} />
          </ScrollView>
          <Button
            buttonStyle={{ backgroundColor: 'gray', width: 40 }}
            icon={<Ionicons name='chevron-forward-outline' size={36}
              color='#111111'
              onPress={selectedFish.body < 3 ? () => bodyPartHandler(selectedFish.body + 1, 'body') : console.log('end of array')} />}
          />
        </View>
        <ScrollView style={LayoutStyles.toolRow} horizontal={true} contentContainerStyle={LayoutStyles.toolRowCointainer}>
          <ToolButton title='1' source={require('../assets/fish/tail1.png')} onPress={() => bodyPartHandler(0, 'tail')} isActive={selectedFish.tail === 0 ? true : false} />
          <ToolButton title='2' source={require('../assets/fish/tail2.png')} onPress={() => bodyPartHandler(1, 'tail')} isActive={selectedFish.tail === 1 ? true : false} />
          <ToolButton title='3' source={require('../assets/fish/tail2.png')} onPress={() => bodyPartHandler(2, 'tail')} isActive={selectedFish.tail === 2 ? true : false} />
          <ToolButton title='4' source={require('../assets/fish/tail2.png')} onPress={() => bodyPartHandler(3, 'tail')} isActive={selectedFish.tail === 3 ? true : false} />
          <ToolButton title='5' source={require('../assets/fish/tail2.png')} onPress={() => bodyPartHandler(4, 'tail')} isActive={selectedFish.tail === 4 ? true : false} />
          <ToolButton title='6' source={require('../assets/fish/tail2.png')} onPress={() => bodyPartHandler(5, 'tail')} isActive={selectedFish.tail === 5 ? true : false} />
          <ToolButton title='7' source={require('../assets/fish/tail2.png')} onPress={() => bodyPartHandler(6, 'tail')} isActive={selectedFish.tail === 6 ? true : false} />
        </ScrollView>

        <ScrollView style={LayoutStyles.toolRow} horizontal={true} contentContainerStyle={LayoutStyles.toolRowCointainer}>
          <ToolButton title='1' source={require('../assets/fish/backfins1.png')} onPress={() => bodyPartHandler(0, 'fin')} isActive={selectedFish.fin === 0 ? true : false} />
          <ToolButton title='2' source={require('../assets/fish/backfins2.png')} onPress={() => bodyPartHandler(1, 'fin')} isActive={selectedFish.fin === 1 ? true : false} />
          <ToolButton title='3' source={require('../assets/fish/backfins1.png')} onPress={() => bodyPartHandler(2, 'fin')} isActive={selectedFish.fin === 2 ? true : false} />
          <ToolButton title='4' source={require('../assets/fish/backfins2.png')} onPress={() => bodyPartHandler(3, 'fin')} isActive={selectedFish.fin === 3 ? true : false} />
          <ToolButton title='5' source={require('../assets/fish/backfins1.png')} onPress={() => bodyPartHandler(4, 'fin')} isActive={selectedFish.fin === 4 ? true : false} />
          <ToolButton title='6' source={require('../assets/fish/backfins2.png')} onPress={() => bodyPartHandler(5, 'fin')} isActive={selectedFish.fin === 5 ? true : false} />
          <ToolButton title='7' source={require('../assets/fish/backfins1.png')} onPress={() => bodyPartHandler(6, 'fin')} isActive={selectedFish.fin === 6 ? true : false} />
        </ScrollView>

        <ScrollView style={LayoutStyles.toolRow} horizontal={true} contentContainerStyle={LayoutStyles.toolRowCointainer} >
          <ToolButton title='1' source={require('../assets/fish/none.png')} onPress={() => patternHandler(0)} isActive={selectedFish.pattern === 0 ? true : false} />
          <ToolButton title='2' source={require('../assets/fish/zebra.png')} onPress={() => patternHandler(1)} isActive={selectedFish.pattern === 1 ? true : false} />
          <ToolButton title='3' source={require('../assets/fish/zebra.png')} onPress={() => patternHandler(2)} isActive={selectedFish.pattern === 2 ? true : false} />
          <ToolButton title='3' source={require('../assets/fish/zebra.png')} onPress={() => patternHandler(3)} isActive={selectedFish.pattern === 3 ? true : false} />
        </ScrollView>

        <View style={LayoutStyles.toolColumn}>
          <ColorTool oldColor={selectedFish.color1} colorHandler={color => frontColorHandler(color)} />
          <ColorTool oldColor={selectedFish.color2} colorHandler={color => backColorHandler(color)} />
        </View>

        <View style={LayoutStyles.toolRow}>
          <ToolButton title='down' onPress={() => nextFish(-1)} />
          <ToolButton title='new' onPress={() => newFish()} />
          <ToolButton title='delete' onPress={() => deleteFish()} />
          <ToolButton title='up' onPress={() => nextFish(1)} />
          <ToolButton title='random' onPress={() => randomFish()} />
        </View>
      </ScrollView>
    </View>
  );
};

