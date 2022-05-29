import React, { useContext, useState } from "react";
import { View, Text } from "react-native";
import { ScrollView } from 'react-native-gesture-handler'
import LayoutStyles from "../constants/LayoutStyles";
import { AppContext } from "../data/AppContext";
import { storeData } from '../data/AppStorage';
import ColorTool from "./ColorTool";
import ToolButton from "./ToolButton";
import { LinearGradient } from 'expo-linear-gradient';
import Colors from "../constants/Colors"

import { Ionicons } from '@expo/vector-icons'
import { Button } from "react-native-elements";
import { FontAwesome5 } from '@expo/vector-icons';
import RNFadedScrollView from 'expo-faded-scrollview'


export default ToolsContainer = () => {

  const [appData, setAppData] = useContext(AppContext);
  const currentId = appData.currentId;
  const selectedFish = appData.fish.find(fish => fish.id === currentId);

  const frontColorHandler = (color) => {
    selectedFish.color1 = color;

    setAppData(appData => ({
      currentId: appData.currentId,
      fish: appData.fish.map(fish => fish.id === currentId ? selectedFish : fish),
    }));
    storeData(appData);
  }
  const backColorHandler = (color) => {
    selectedFish.color2 = color;

    setAppData(appData => ({
      currentId: appData.currentId,
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
      fish: appData.fish.map(fish => fish.id === currentId ? selectedFish : fish),
    }));
    storeData(appData);
  }

  const patternHandler = (patternId) => {
    selectedFish.pattern = patternId;
    setAppData(appData => ({
      currentId: appData.currentId,
      fish: appData.fish.map(fish => fish.id === currentId ? selectedFish : fish),
    }));
    storeData(appData);
  }
  
  const [bodyToolPos, setbodyToolPos] = useState(0);

  const bodyToolPosHandler = (direction) => {
    if (direction === 'back' && selectedFish.body > 0) {
      bodyPartHandler(selectedFish.body - 1, 'body')
      setbodyToolPos(bodyToolPos - 40)
    } else if (direction === 'forward' && selectedFish.body < 6) {
      bodyPartHandler(selectedFish.body + 1, 'body')
      setbodyToolPos(bodyToolPos + 40)
    }
    else {
      console.log('no move')
    }
    console.log(bodyToolPos)
  }
  return (
    <View style={LayoutStyles.toolsContainer}>
      <LinearGradient colors={[Colors.bgGradientTop, Colors.bgGradientBottom]} style={LayoutStyles.buildGradient} >
      <ScrollView style={{ width: '100%' }}>

        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderColor: 'transparent', borderWidth: 2 }}>
          <Button
            type="clear"
            onPress={() => bodyToolPosHandler('back')}
            buttonStyle={{ width: 40, }}
            icon={<Ionicons name='chevron-back-outline' size={36}color='#111111' />}
          />
          <ScrollView
            style={LayoutStyles.toolRow}
            horizontal={true}
            contentContainerStyle={LayoutStyles.toolRowCointainer}
            contentOffset={{ x: bodyToolPos, y: 0 }}
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
            buttonStyle={{ backgroundColor: 'transparent', width: 40 }}
            onPress={() => bodyToolPosHandler('forward')}
            icon={<Ionicons name='chevron-forward-outline' size={36} color='#111111' />}
          />
        </View>


        <RNFadedScrollView 
        style={LayoutStyles.toolRow} 
        horizontal={true} 
        contentContainerStyle={LayoutStyles.toolRowCointainer}
        allowEndFade={true}
        allowStartFade={true}
        fadeSize={50}
        >
          <ToolButton title='1' source={require('../assets/fish/tail1.png')} onPress={() => bodyPartHandler(0, 'tail')} isActive={selectedFish.tail === 0 ? true : false} />
          <ToolButton title='2' source={require('../assets/fish/tail2.png')} onPress={() => bodyPartHandler(1, 'tail')} isActive={selectedFish.tail === 1 ? true : false} />
          <ToolButton title='3' source={require('../assets/fish/tail2.png')} onPress={() => bodyPartHandler(2, 'tail')} isActive={selectedFish.tail === 2 ? true : false} />
          <ToolButton title='4' source={require('../assets/fish/tail2.png')} onPress={() => bodyPartHandler(3, 'tail')} isActive={selectedFish.tail === 3 ? true : false} />
          <ToolButton title='5' source={require('../assets/fish/tail2.png')} onPress={() => bodyPartHandler(4, 'tail')} isActive={selectedFish.tail === 4 ? true : false} />
          <ToolButton title='6' source={require('../assets/fish/tail2.png')} onPress={() => bodyPartHandler(5, 'tail')} isActive={selectedFish.tail === 5 ? true : false} />
          <ToolButton title='7' source={require('../assets/fish/tail2.png')} onPress={() => bodyPartHandler(6, 'tail')} isActive={selectedFish.tail === 6 ? true : false} />
        </RNFadedScrollView>

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
          <Text> Verlauf Farbe 1</Text>
          <ColorTool oldColor={selectedFish.color1} colorHandler={color => frontColorHandler(color)} />
          <Text> Verlauf Farbe 2</Text>
          <ColorTool oldColor={selectedFish.color2} colorHandler={color => backColorHandler(color)} />
        </View>
      </ScrollView>
      </LinearGradient>
    </View>
  );
};

