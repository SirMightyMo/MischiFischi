import { Video } from 'expo-av';
import React, { useContext, useState } from "react";
import { Button, View, Alert } from "react-native";
import Svg, { Defs, LinearGradient, Stop } from "react-native-svg";
import LayoutStyles from "../constants/LayoutStyles";
import { AppContext } from "../data/AppContext";

import Fish from "./Fish";
import * as FPart from './fishParts/FishParts';
import { getPatternJSX, getPatternSVG, getPatternURL } from './fishParts/Patterns';

export default SvgCanvas = () => {
  // Saves dimensions of canvas-component
  const [dims, setDims] = useState({});
  
  // Websocket for sending data via TCP
  var ws = React.useRef(new WebSocket('wss://mischifischiserver.herokuapp.com/')).current; 
   /* var ws = React.useRef(new WebSocket('ws://192.168.178.42:7000')).current; */
   ws.onopen = () => {
    // connection opened
    console.log("Connected to Server...");
    ws.send("App connected to server...");
  };
  ws.onerror = () => {
    console.log("error")
  }

  const [appData, setAppData] = useContext(AppContext);
  const selectedFish = appData.fish.find(fish => fish.id === appData.currentId) ;

  const bodyToRender = (selectedFish) => {
    switch (selectedFish.body) {
      case 0:
        return FPart.returnSvgPart(FPart.SVG_BODY1);
      case 1:
        return FPart.returnSvgPart(FPart.SVG_BODY2);
      case 2:
        return FPart.returnSvgPart(FPart.SVG_BODY3);
      case 3:
        return FPart.returnSvgPart(FPart.SVG_BODY4);
      case 4:
        return FPart.returnSvgPart(FPart.SVG_BODY5);
      case 5:
        return FPart.returnSvgPart(FPart.SVG_BODY6);
      case 6:
        return FPart.returnSvgPart(FPart.SVG_BODY7);
      default:
        break;
    }
  };

  const finsToRender = (selectedFish) => {
    switch (selectedFish.fin) {
      case 0:
        return FPart.returnSvgPart(FPart.SVG_FINS1);
      case 1:
        return FPart.returnSvgPart(FPart.SVG_FINS2);
      case 2:
        return FPart.returnSvgPart(FPart.SVG_FINS3);
      case 3:
        return FPart.returnSvgPart(FPart.SVG_FINS4);
      case 4:
        return FPart.returnSvgPart(FPart.SVG_FINS5);
      case 5:
        return FPart.returnSvgPart(FPart.SVG_FINS6);
      case 6:
        return FPart.returnSvgPart(FPart.SVG_FINS7);
      default:
        break;
    }
  };

  const tailToRender = (selectedFish) => {
    switch (selectedFish.tail) {
      case 0:
        return FPart.returnSvgPart(FPart.SVG_TAIL1);
      case 1:
        return FPart.returnSvgPart(FPart.SVG_TAIL2);
      case 2:
        return FPart.returnSvgPart(FPart.SVG_TAIL3);
      case 3:
        return FPart.returnSvgPart(FPart.SVG_TAIL4);
      case 4:
        return FPart.returnSvgPart(FPart.SVG_TAIL5);
      case 5:
        return FPart.returnSvgPart(FPart.SVG_TAIL6);
      case 6:
        return FPart.returnSvgPart(FPart.SVG_TAIL7);
      default:
        break;
    }
  };

  const exportSVG = () => {

    const data = `
<svg id="${appData.currentId}" data-name="${appData.currentId}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 360">
  <defs>
    <linearGradient id="grad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="${selectedFish.color2}" />
      <stop offset="100%" stop-color="${selectedFish.color1}" />
    </linearGradient>
    ${getPatternSVG(selectedFish.pattern)}
    ${FPart.returnSvgStyle(getPatternURL(selectedFish.pattern))}
  </defs>
  ${finsToRender(selectedFish)}
  ${tailToRender(selectedFish)}
  ${bodyToRender(selectedFish)}
</svg>
    `

    // Send data to websocket
    try {
      ws.send(data);
    } catch {
      Alert.alert(
        "Verbindungsfehler",
        "Es konnte keine Verbindung zum Server aufgebaut werden.",
        [
          { text: "OK", onPress: () => console.log("OK Pressed") }
        ]
      );
      ws.onerror = (e) => {
        console.log(e);
      }
    }
  }

  return (
    /* View onLayout not necessarily in use; calculates dimensions of component */
    <View style={LayoutStyles.canvasContainer} >
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
        style={{ width: "100%", height: "100%", position: "absolute" }}
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

      <Button style={{position: "absolute"}} title="save" onPress={() => exportSVG()} />
    </View>
  )
};
