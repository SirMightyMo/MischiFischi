import { Video } from 'expo-av';
import React, { useContext, useState } from "react";
import { Button, Platform, View, Alert } from "react-native";
import Svg, { Defs, LinearGradient, Stop } from "react-native-svg";
import LayoutStyles from "../constants/LayoutStyles";
import { AppContext } from "../data/AppContext";
import SvgCanvas from '../components/SvgCanvas';

import Fish from "./Fish";
import { getPatternSVG, getPatternURL } from './fishParts/Patterns';
import { returnFishBody1 } from './fishParts/Body1';
import { returnFishBody2 } from './fishParts/Body2';
import { returnFishFins1 } from './fishParts/Fins1';
import { returnFishFins2 } from './fishParts/Fins2';
import { returnFishTail1 } from './fishParts/Tail1';
import { returnFishTail2 } from './fishParts/Tail2';


export default SvgCanvas = () => {
  // Saves dimensions of canvas-component
  const [dims, setDims] = useState({});
  
  // Websocket for sending data via TCP
  var ws = React.useRef(new WebSocket('wss://mischifischiserver.herokuapp.com/')).current;
  ws.onopen = () => {
    // connection opened
    console.log("Connection open");
    ws.send("App connected...");
  };

  const [appData, setAppData] = useContext(AppContext);
  const selectedFish = appData.fish.find(fish => fish.id === appData.currentId) ;

  const bodyToRender = (selectedFish) => {
    switch (selectedFish.body) {
      case 0:
        return returnFishBody1(getPatternURL(selectedFish.pattern));
      case 1:
        return returnFishBody2(getPatternURL(selectedFish.pattern));
      case 2:
        return returnFishBody3(getPatternURL(selectedFish.pattern));
      default:
        break;
    }
  };

  const finsToRender = (selectedFish) => {
    switch (selectedFish.backFin) {
      case 0:
        return returnFishFins1();
      case 1:
        return returnFishFins2();
      case 2:
        return returnFishFins3();
      default:
        break;
    }
  };

  const tailToRender = (selectedFish) => {
    switch (selectedFish.fin) {
      case 0:
        return returnFishTail1();
      case 1:
        return returnFishTail2();
      case 2:
        return returnFishTail3();
      default:
        break;
    }
  };

/*   const patternJSX = (pattern) => {
    return <ZebraPattern/>;
  } */

  const exportSVG = () => {

    const data = `
<svg id="${appData.currentId}" data-name="${appData.currentId}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 360">
  <defs>
  <linearGradient id="grad" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0%" stop-color="${selectedFish.color2}" />
    <stop offset="100%" stop-color="${selectedFish.color1}" />
  </linearGradient>
  ${getPatternSVG(selectedFish.pattern)}
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
    <SvgCanvas/>
  )
};
