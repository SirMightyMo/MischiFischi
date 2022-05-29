import { Video } from 'expo-av';
import React, { useContext, useState } from "react";
import { View, Alert, Text, Pressable } from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';
import Svg, { Defs, LinearGradient, Stop } from "react-native-svg";
import LayoutStyles from "../constants/LayoutStyles";
import { AppContext } from "../data/AppContext";
import { Ionicons } from "@expo/vector-icons";
import { Button } from '@rneui/base';
import { storeData } from '../data/AppStorage';

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
        /* posterSource */
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
          {getPatternJSX(selectedFish.pattern)}
        </Defs>
        <Fish />
      </Svg>
    </View>
  )
};

export const Canvas = () => {
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
  return (
    /* TODO: Insert Buttons for canvas overlay */

    <View style={LayoutStyles.canvasContainer} >

      <SvgCanvas />
      <Button type="clear" icon={<Ionicons name='chevron-back-outline' size={36} color='#111111' style={{ alignSelf: 'flex-start', top: 0, right: 0, elevation: 2, position: "absolute" }} />} onPress={() => nextFish(-1)} />
      <Button type="clear" icon={<Ionicons name='chevron-forward-outline' size={36} color='#111111' style={{ alignSelf: 'flex-end', top: 0, right: 0, elevation: 2, position: "absolute" }} />} onPress={() => nextFish(1)} />

    </View>


  );
}


