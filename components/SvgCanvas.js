import React, { useContext, useState } from "react";
import { Button, View, Platform, Dimensions } from "react-native";
import LayoutStyles from "../constants/LayoutStyles";
import { AppContext } from "../data/AppContext";
import { Video } from 'expo-av';

import Svg, {Defs, LinearGradient, Stop} from "react-native-svg";
import Fish from "./Fish";
import { returnFishBody1 } from './fishParts/Body1';
import { returnFishFins1 } from './fishParts/Fins1';
import { returnFishTail1 } from './fishParts/Tail1';
import { returnFishBody2 } from './fishParts/Body2';
import { returnFishFins2 } from './fishParts/Fins2';
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
        return returnFishBody1(selectedFish.color1);
      case 1:
        return returnFishBody2(selectedFish.color1);
      case 2:
        return returnFishBody3(selectedFish.color1);
      default:
        break;
    }
  };

  const finsToRender = (selectedFish) => {
    switch (selectedFish.fin) {
      case 0:
        return returnFishFins1(selectedFish.color2);
      case 1:
        return returnFishFins2(selectedFish.color2);
      case 2:
        return returnFishFins3(selectedFish.color2);
      default:
        break;
    }
  };

  const tailToRender = (selectedFish) => {
    switch (selectedFish.backFin) {
      case 0:
        return returnFishTail1(selectedFish.color2);
      case 1:
        return returnFishTail2(selectedFish.color2);
      case 2:
        return returnFishTail3(selectedFish.color2);
      default:
        break;
    }
  };

  /* Second color can not be selected on iOS so color2 needs to be same as color1 */
  const color2 = Platform.OS === 'ios' ? selectedFish.color1 : selectedFish.color2;

  const exportSVG = () => {

    const data = `
<svg id="${appData.currentId}" data-name="${appData.currentId}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 360">
  <defs>
  <linearGradient id="grad" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0%" stop-color="${selectedFish.color2}" />
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
    /* View onLayout not necessarily in use; calculates dimensions of component */
    <View style={LayoutStyles.canvasContainer} 
      onLayout={(event) => {
        const { x, y, width, height } = event.nativeEvent.layout;
        setDims({ x, y, width, height });
        console.log(JSON.stringify(dims));
      }}
    >
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
        </Defs>
        <Fish />
      </Svg>

      <Button style={{position: "absolute"}} title="save" onPress={() => exportSVG()} />
    </View>
  )

};
