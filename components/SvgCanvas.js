import { Video } from 'expo-av';
import React, { useContext, useState } from "react";
import { View, Alert, Text, Pressable } from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';
import Svg, { Defs, LinearGradient, Stop } from "react-native-svg";
import LayoutStyles from "../constants/LayoutStyles";
import { AppContext } from "../data/AppContext";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";
import { storeData } from '../data/AppStorage';
import uuid from 'react-native-uuid'
import FishModel from "../models/FishModel";

import Fish from "./Fish";
import * as FPart from './fishParts/FishParts';
import { getPatternJSX, getPatternSVG, getPatternURL } from './fishParts/Patterns';

export const SvgCanvas = (props) => {
  const [appData, setAppData] = useContext(AppContext);
  const selectedFish = appData.fish.find(fish => fish.id === appData.currentId);

  return (
    /* View onLayout not necessarily in use; calculates dimensions of component */
    <View style={LayoutStyles.svgCanvas}>
      <Video
        source={require('../assets/fish/bg.mp4')}
        posterSource={require('../assets/fish/poster.jpg')}
        rate={1.0}
        volume={0.0}
        isMuted={true}
        resizeMode="cover"
        shouldPlay
        isLooping={true}
        useNativeControls={false}
        style={[
          LayoutStyles.videoStyles,
          { borderTopLeftRadius: props.borderTopLeftRadius, borderTopRightRadius: props.borderTopRightRadius, borderBottomLeftRadius: props.borderBottomLeftRadius, borderBottomRightRadius: props.borderBottomRightRadius }]}
      />
      <Svg height="100%" width="100%" viewBox="0 0 640 360">
        <Defs>
          <LinearGradient id="grad" x1="0" y1="0" x2="1" y2="0">
            <Stop offset="0" stopColor={selectedFish.color2} stopOpacity="1" />
            <Stop offset="1" stopColor={selectedFish.color1} stopOpacity="1" />
          </LinearGradient>
          {getPatternJSX(selectedFish)}
        </Defs>
        <Fish />
      </Svg>
    </View>
  )
};

export const Canvas = (props) => {
  const [appData, setAppData] = useContext(AppContext);
  const currentId = appData.currentId;
  const selectedFish = appData.fish.find(fish => fish.id === currentId);

  const nextFish = (direction) => {
    if (direction === -1 && appData.fish.indexOf(selectedFish) > 0) {
      setAppData(appData => ({
        currentId: appData.fish[appData.fish.indexOf(selectedFish) + direction].id,
        fish: appData.fish,
      }));
      storeData(appData);
    }
    else if (direction === 1 && appData.fish.indexOf(selectedFish) < appData.fish.length - 1) {
      setAppData(appData => ({
        currentId: appData.fish[appData.fish.indexOf(selectedFish) + direction].id,
        fish: appData.fish,
      }));
      storeData(appData);
    }
  }
  const deleteFish = () => {
    if (appData.fish.indexOf(selectedFish) > 0) {
      setAppData(appData => ({
        currentId: appData.fish[appData.fish.indexOf(selectedFish) - 1].id,
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
    selectedFish.color1 = getHexColor();
    selectedFish.color2 = getHexColor();
    selectedFish.body = Math.floor(Math.random() * 7)
    selectedFish.fin = Math.floor(Math.random() * 7)
    selectedFish.tail = Math.floor(Math.random() * 7)
    selectedFish.pattern = Math.floor(Math.random() * 6)

    setAppData(appData => ({
      currentId: appData.currentId,
      fish: appData.fish.map(fish => fish.id === currentId ? selectedFish : fish),
    }));
    storeData(appData);
  }
  const newFish = () => {
    //create new fish with unique ID
    let UUID = uuid.v4();
    let newFish = new FishModel(UUID, 0, 0, 0, '#44FF44', '#44FF44', 0, false, "")
    // randomize new Fish
    newFish.color1 = getHexColor();
    newFish.color2 = getHexColor();
    newFish.body = Math.floor(Math.random() * 7)
    newFish.fin = Math.floor(Math.random() * 7)
    newFish.tail = Math.floor(Math.random() * 7)
    newFish.pattern = Math.floor(Math.random() * 6)
    // load fish array an push new fish
    let newFishArray = appData.fish;
    newFishArray.push(newFish)
    //save new fish to storage
    setAppData(appData => ({
      currentId: UUID,
      fish: newFishArray,
    }));
    storeData(appData);
  }
  return (
    <View style={LayoutStyles.canvasContainer} >
      <View style={{ width: '100%', height: '100%' }}>
        <SvgCanvas />
      </View>
      <Pressable onPress={() => nextFish(-1)} style={[{ top: '50%', left: '0%', elevation: 2, position: "absolute", shadowColor: "#000" }, LayoutStyles.btnShadow]}>
        <Ionicons name='chevron-back-outline' size={42} color='#EEEEEE' />
      </Pressable>
      <Pressable onPress={() => nextFish(1)} style={[{ top: '50%', right: '0%', elevation: 2, position: "absolute" }, LayoutStyles.btnShadow]}>
        <Ionicons name='chevron-forward-outline' size={42} color='#EEEEEE' />
      </Pressable>
      <Pressable onPress={() => deleteFish()} style={[{ top: '10%', left: '5%', elevation: 2, position: "absolute" }, LayoutStyles.btnShadow]}>
        <Ionicons name='md-trash-sharp' size={26} color='#EEEEEE' />
      </Pressable>
      <Pressable onPress={() => newFish()} style={[{ top: '10%', right: '5%', elevation: 2, position: "absolute" }, LayoutStyles.btnShadow]}>
        <FontAwesome5 name="plus-circle" size={24} color="#EEEEEE" />
      </Pressable>
      <Pressable onPress={()=> props.navigation.navigate('Collection') } style={[{ bottom: '15%', left: '5%', elevation: 2, position: "absolute" }, LayoutStyles.btnShadow]}>
        <Ionicons name='save' size={26} color='#EEEEEE' />
      </Pressable>
      <Pressable onPress={() => randomFish()} style={[{ bottom: '15%', right: '5%', elevation: 2, position: "absolute" }, LayoutStyles.btnShadow]}>
        <FontAwesome5 name="dice" size={24} color="#EEEEEE" />
      </Pressable>
    </View>
  );
}