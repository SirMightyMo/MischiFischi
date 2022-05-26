import { Video } from 'expo-av';
import React, { useContext, useState } from "react";
import { Button, Platform, View, Alert } from "react-native";
import Svg, { Defs, LinearGradient, Stop } from "react-native-svg";
import LayoutStyles from "../constants/LayoutStyles";
import { AppContext } from "../data/AppContext";

import Fish from "./Fish";
import { getPatternJSX, getPatternSVG, getPatternURL } from './fishParts/Patterns';
import { returnFishBody1 } from './fishParts/Body1';
import { returnFishBody2 } from './fishParts/Body2';
import { returnFishBody3 } from './fishParts/Body3';
import { returnFishBody4 } from './fishParts/Body4';
import { returnFishFins1 } from './fishParts/Fins1';
import { returnFishFins2 } from './fishParts/Fins2';
import { returnFishFins3 } from './fishParts/Fins3';
import { returnFishFins4 } from './fishParts/Fins4';
import { returnFishTail1 } from './fishParts/Tail1';
import { returnFishTail2 } from './fishParts/Tail2';
import { returnFishTail3 } from './fishParts/Tail3';
import { returnFishTail4 } from './fishParts/Tail4';


export default SvgCanvas = () => {
  // Saves dimensions of canvas-component
  const [dims, setDims] = useState({});
  
  // Websocket for sending data via TCP
 /*  var ws = React.useRef(new WebSocket('wss://mischifischiserver.herokuapp.com/')).current;  */
   var ws = React.useRef(new WebSocket('ws://192.168.0.108:7000')).current;
   ws.onopen = () => {
    // connection opened
    console.log("Connection open");
    ws.send("############");
  };
  ws.onerror = () => {
    console.log("error")
  }

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
      case 3:
        return returnFishBody4(getPatternURL(selectedFish.pattern));
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
      case 3:
        return returnFishFins4();
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
      case 3:
        return returnFishTail4();
      default:
        break;
    }
  };

/*   const patternJSX = (pattern) => {
    return <ZebraPattern/>;
  } */

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
    /* View onLayout not necessarily in use; calculates dimensions of component */
    <View style={LayoutStyles.canvasContainer} 
      onLayout={(event) => {
        const { x, y, width, height } = event.nativeEvent.layout;
        setDims({ x, y, width, height });
        //console.log(JSON.stringify(dims));
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
          
          {getPatternJSX(selectedFish.pattern)}

        </Defs>
        <Fish />
      </Svg>

      <Button style={{position: "absolute"}} title="save" onPress={() => exportSVG()} />
    </View>
  )
};
