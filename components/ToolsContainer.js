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
        <ScrollView showsVerticalScrollIndicator={false} style={{ width: '100%' }}>
          <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderColor: 'transparent', borderWidth: 2 }}>
            <RNFadedScrollView
              style={LayoutStyles.toolRow}
              horizontal={true}
              contentContainerStyle={LayoutStyles.toolRowCointainer}
              allowEndFade={true}
              allowStartFade={true}
              fadingEdgeLenght={30}
              fadeSize={30}
              fadeColors={['rgba(0, 0, 50, 0)', 'rgba(0, 0, 50, 0.6)', 'rgba(0, 0, 50, 0.9)']}
              showsHorizontalScrollIndicator={false}
            >
              <ToolButton part="b1" onPress={() => bodyPartHandler(0, 'body')} isActive={selectedFish.body === 0 ? true : false} />
              <ToolButton part="b2" onPress={() => bodyPartHandler(1, 'body')} isActive={selectedFish.body === 1 ? true : false} />
              <ToolButton part="b3" onPress={() => bodyPartHandler(2, 'body')} isActive={selectedFish.body === 2 ? true : false} />
              <ToolButton part="b4" onPress={() => bodyPartHandler(3, 'body')} isActive={selectedFish.body === 3 ? true : false} />
              <ToolButton part="b5" onPress={() => bodyPartHandler(4, 'body')} isActive={selectedFish.body === 4 ? true : false} />
              <ToolButton part="b6" onPress={() => bodyPartHandler(5, 'body')} isActive={selectedFish.body === 5 ? true : false} />
              <ToolButton part="b7" onPress={() => bodyPartHandler(6, 'body')} isActive={selectedFish.body === 6 ? true : false} />
            </RNFadedScrollView>

          </View>

          <RNFadedScrollView
            style={LayoutStyles.toolRow}
            horizontal={true}
            contentContainerStyle={LayoutStyles.toolRowCointainer}
            allowEndFade={true}
            allowStartFade={true}
            fadeSize={30}
            fadeColors={['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0.6)', 'rgba(0, 0, 0, 0.9)']}
            showsHorizontalScrollIndicator={false}
          >
            <ToolButton title='1' part="t1" onPress={() => bodyPartHandler(0, 'tail')} isActive={selectedFish.tail === 0 ? true : false} />
            <ToolButton title='2' part="t2" onPress={() => bodyPartHandler(1, 'tail')} isActive={selectedFish.tail === 1 ? true : false} />
            <ToolButton title='3' part="t3" onPress={() => bodyPartHandler(2, 'tail')} isActive={selectedFish.tail === 2 ? true : false} />
            <ToolButton title='4' part="t4" onPress={() => bodyPartHandler(3, 'tail')} isActive={selectedFish.tail === 3 ? true : false} />
            <ToolButton title='5' part="t5" onPress={() => bodyPartHandler(4, 'tail')} isActive={selectedFish.tail === 4 ? true : false} />
            <ToolButton title='6' part="t6" onPress={() => bodyPartHandler(5, 'tail')} isActive={selectedFish.tail === 5 ? true : false} />
            <ToolButton title='7' part="t7" onPress={() => bodyPartHandler(6, 'tail')} isActive={selectedFish.tail === 6 ? true : false} />
          </RNFadedScrollView>

          <RNFadedScrollView
            style={LayoutStyles.toolRow}
            horizontal={true}
            contentContainerStyle={LayoutStyles.toolRowCointainer}
            allowEndFade={true}
            allowStartFade={true}
            fadeSize={50}
            fadeColors={['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0.6)', 'rgba(0, 0, 0, 0.9)']}
            showsHorizontalScrollIndicator={false}
          >
            <ToolButton title='1' part="f1" onPress={() => bodyPartHandler(0, 'fin')} isActive={selectedFish.fin === 0 ? true : false} />
            <ToolButton title='2' part="f2" onPress={() => bodyPartHandler(1, 'fin')} isActive={selectedFish.fin === 1 ? true : false} />
            <ToolButton title='3' part="f3" onPress={() => bodyPartHandler(2, 'fin')} isActive={selectedFish.fin === 2 ? true : false} />
            <ToolButton title='4' part="f4" onPress={() => bodyPartHandler(3, 'fin')} isActive={selectedFish.fin === 3 ? true : false} />
            <ToolButton title='5' part="f5" onPress={() => bodyPartHandler(4, 'fin')} isActive={selectedFish.fin === 4 ? true : false} />
            <ToolButton title='6' part="f6" onPress={() => bodyPartHandler(5, 'fin')} isActive={selectedFish.fin === 5 ? true : false} />
            <ToolButton title='7' part="f7" onPress={() => bodyPartHandler(6, 'fin')} isActive={selectedFish.fin === 6 ? true : false} />
          </RNFadedScrollView>

          <RNFadedScrollView
            style={LayoutStyles.toolRow}
            horizontal={true}
            contentContainerStyle={LayoutStyles.toolRowCointainer}
            allowEndFade={true}
            allowStartFade={true}
            fadeSize={50}
            fadeColors={['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0.6)', 'rgba(0, 0, 0, 0.9)']}
            showsHorizontalScrollIndicator={false}
          >
          <ToolButton title='1' part="t1" onPress={() => bodyPartHandler(0, 'tail')} isActive={selectedFish.tail === 0 ? true : false} />
          <ToolButton title='2' part="t2" onPress={() => bodyPartHandler(1, 'tail')} isActive={selectedFish.tail === 1 ? true : false} />
          <ToolButton title='3' part="t3" onPress={() => bodyPartHandler(2, 'tail')} isActive={selectedFish.tail === 2 ? true : false} />
          <ToolButton title='4' part="t4" onPress={() => bodyPartHandler(3, 'tail')} isActive={selectedFish.tail === 3 ? true : false} />
          <ToolButton title='5' part="t5" onPress={() => bodyPartHandler(4, 'tail')} isActive={selectedFish.tail === 4 ? true : false} />
          <ToolButton title='6' part="t6" onPress={() => bodyPartHandler(5, 'tail')} isActive={selectedFish.tail === 5 ? true : false} />
          <ToolButton title='7' part="t7" onPress={() => bodyPartHandler(6, 'tail')} isActive={selectedFish.tail === 6 ? true : false} />
        </RNFadedScrollView>

          <View style={LayoutStyles.toolColumn}>
            <Text> Verlauf Farbe 1</Text>
            <ColorTool oldColor={selectedFish.color1} colorHandler={color => frontColorHandler(color)} />
            <Text> Verlauf Farbe 2</Text>
            <ColorTool oldColor={selectedFish.color2} colorHandler={color => backColorHandler(color)} />
          </View>

        <ScrollView style={LayoutStyles.toolRow} horizontal={true} contentContainerStyle={LayoutStyles.toolRowCointainer} >
          <ToolButton title='1' source={require('../assets/fish/none.png')} onPress={() => patternHandler(0)} isActive={selectedFish.pattern === 0 ? true : false} />
          <ToolButton title='2' source={require('../assets/fish/zebra.png')} onPress={() => patternHandler(1)} isActive={selectedFish.pattern === 1 ? true : false} />
          <ToolButton title='3' source={require('../assets/fish/zebra.png')} onPress={() => patternHandler(2)} isActive={selectedFish.pattern === 2 ? true : false} />
          <ToolButton title='4' source={require('../assets/fish/zebra.png')} onPress={() => patternHandler(3)} isActive={selectedFish.pattern === 3 ? true : false} />
          <ToolButton title='5' source={require('../assets/fish/zebra.png')} onPress={() => patternHandler(4)} isActive={selectedFish.pattern === 4 ? true : false} />
          <ToolButton title='6' source={require('../assets/fish/zebra.png')} onPress={() => patternHandler(5)} isActive={selectedFish.pattern === 5 ? true : false} />
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