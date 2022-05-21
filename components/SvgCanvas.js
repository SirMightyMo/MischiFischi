import React, { useContext } from "react";
import { Button, View, Platform } from "react-native";
import LayoutStyles from "../constants/LayoutStyles";
import { AppContext } from "../data/AppContext";
import Fish from "./Fish";
import { Video } from 'expo-av';


import { returnFishBody1 } from './fishParts/Body1';
import { returnFishFins1 } from './fishParts/Fins1';
import { returnFishTail1 } from './fishParts/Tail1';
import { returnFishBody2 } from './fishParts/Body2';
import { returnFishFins2 } from './fishParts/Fins2';
import { returnFishTail2 } from './fishParts/Tail2';



export default SvgCanvas = () => {
  // Websocket for sending data via TCP
  var ws = React.useRef(new WebSocket('ws://192.168.178.69:8080/')).current;

  const [appData, setAppData] = useContext(AppContext);
  const selectedFish = appData.fish.find(fish => fish.id === appData.currentId);

  const bodyToRender = (selectedFish) => {
    switch (selectedFish.body) {
      case 0:
        return returnFishBody1();
      case 1:
        return returnFishBody2();
      case 2:
        return returnFishBody3();
      default:
        break;
    }
  };

  const finsToRender = (selectedFish) => {
    switch (selectedFish.fin) {
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
    switch (selectedFish.backFin) {
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

  /* Second color can not be selected on iOS so color2 needs to be same as color1 */
  const color2 = Platform.OS === 'ios' ? selectedFish.color1 : selectedFish.color2;

  const exportSVG = () => {
    // Console includes complete SVG-Output for debugging
    console.log(`
<svg id="${appData.currentId}" data-name="${appData.currentId}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 360">
  <defs>
  <linearGradient id="grad" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0%" stop-color="${color2}" />
    <stop offset="100%" stop-color="${selectedFish.color1}" />
  </linearGradient>
  </defs>
    `);
    console.log(finsToRender(selectedFish));
    console.log(tailToRender(selectedFish));
    console.log(bodyToRender(selectedFish));
    console.log(`</svg>`);
    /*
      TODO: Function/Switch required to get selected fish-parts (compare Fish.js)
      TODO: Filewriter?
    */

    const data = `
<svg id="${appData.currentId}" data-name="${appData.currentId}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 360">
  <defs>
  <linearGradient id="grad" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0%" stop-color="${color2}" />
    <stop offset="100%" stop-color="${selectedFish.color1}" />
  </linearGradient>
  </defs>
  ${finsToRender(selectedFish)}
  ${tailToRender(selectedFish)}
  ${bodyToRender(selectedFish)}
</svg>
    `

    // Send data to websocket
    ws.send(data);
    ws.onerror = (e) => {
      console.log(e);
    }
  }
  
  return (
    <View style={LayoutStyles.canvasContainer}>
      {/* TODO: Video-Background? */}
      <Video
        source={ require('../assets/fish/bg.mp4') }
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
      <Fish />
      <Button style={{position: "absolute"}} title="save" onPress={() => exportSVG()} />
    </View>
  )

};
