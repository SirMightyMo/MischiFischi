import React, { useContext } from "react";
import { Button, View, Platform } from "react-native";
import LayoutStyles from "../constants/LayoutStyles";
import { AppContext } from "../data/AppContext";
import Fish from "./Fish";
import { Video } from 'expo-av';

// ----------------- TEST ----------------
import { returnFishBody1 } from './fishParts/Body1';
import { returnFishFins1 } from './fishParts/Fins1';
import { returnFishTail1 } from './fishParts/Tail1';

// ---------------------------------------

export default SvgCanvas = () => {
  // Websocket for sending data via TCP
  var ws = React.useRef(new WebSocket('ws://192.168.178.69:8080/')).current;

  const [appData, setAppData] = useContext(AppContext);
  const selectedFish = appData.fish.find(fish => fish.id === appData.currentId);

  /* Second color can not be selected on iOS so color2 needs to be same as color1 */
  const color2 = Platform.OS === 'ios' ? selectedFish.color1 : selectedFish.color2;

  const exportSVG = () => {
    // Console includes complete SVG-Output for debugging
    console.log(`
    <svg id="${appData.currentId}" data-name="${appData.currentId}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1280 720">
      <defs>
      <linearGradient id="grad" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stop-color="${color2}" />
        <stop offset="100%" stop-color="${selectedFish.color1}" />
      </linearGradient>
      </defs>
    `);
    console.log(returnFishBody1());
    console.log(returnFishFins1());
    console.log(returnFishTail1())
    console.log(`</svg>`);
    /*
      TODO: Function/Switch required to get selected fish-parts (compare Fish.js)
      TODO: Filewriter?
    */

    const data = `
    <svg id="${appData.currentId}" data-name="${appData.currentId}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1280 720">
      <defs>
      <linearGradient id="grad" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stop-color="${color2}" />
        <stop offset="100%" stop-color="${selectedFish.color1}" />
      </linearGradient>
      </defs>
      ${returnFishBody1()}
      ${returnFishFins1()}
      ${returnFishTail1()}
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
      {/* <Background style={{position: "absolute"}}/> */}
      <Button style={{position: "absolute"}} title="save" onPress={() => exportSVG()} />
    </View>
  )

};
