import { Video } from 'expo-av';
import React, { useContext, useState } from "react";
import { Button, View, Alert, Pressable, Text, useWindowDimensions, TouchableWithoutFeedback, Keyboard } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import LayoutStyles from "../constants/LayoutStyles";
import { AppContext } from "../data/AppContext";
import { MultilineTextInput } from '../components/TextInput';
import { Ionicons } from "@expo/vector-icons";
import  { SvgCanvas } from "../components/SvgCanvas";
import Colors from "../constants/Colors";

import Fish from "../components/Fish";
import * as FPart from '../components/fishParts/FishParts';
import { getPatternJSX, getPatternSVG, getPatternURL } from '../components/fishParts/Patterns';


export default ShareScreen = (props) => {  
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

  const sendFishData = () => {

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
      Alert.alert(
        "Erfolgreich gesendet!",
        "Der Fisch wurde erfolgreich übermittelt.",
        [
          { text: "OK", onPress: () => console.log("OK Pressed") }
        ]
      );
      props.setModalVisible(!props.modalVisible);
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

  const confirmTransmission = () => {
    Alert.alert(
      "Bitte bestätigen",
      "Sind Sie sicher, dass Ihr Fisch inkl. Nachricht übermittelt werden sollen?",
      [
        { text: "Send", onPress: () => sendFishData() },
        { text: "Cancel", style: "cancel" }
      ]
    );
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false} >
      <View style={LayoutStyles.modalShareView} >
          
        <LinearGradient colors={["#00d7ff", "#193fc6" ]} style={LayoutStyles.modalGradient} >
            
            <SvgCanvas borderTopLeftRadius={20} borderTopRightRadius={20} />

            <View style={{flex: 1, justifyContent: "space-between", alignItems: "center", width: "100%", paddingVertical: 35, paddingHorizontal: 20}}>
              <MultilineTextInput />
              <Pressable style={({ pressed }) => [{ backgroundColor: pressed ? Colors.normalButtonPressed : Colors.normalButton}, LayoutStyles.normalButton]} onPress={() => confirmTransmission()} >
                <Text style={LayoutStyles.normalButtonText}>SEND</Text>
              </Pressable>
            </View>
        
        </LinearGradient>

        <Pressable onPress={() => props.setModalVisible(!props.modalVisible)} android_disableSound={true} style={[{alignSelf: 'flex-end', top: 15, right: 15, elevation: 2, position: "absolute"}]}>
          <Ionicons style={{color: "#00000050"}} name="ios-close-circle" size={25} />
        </Pressable>

      </View>
    </TouchableWithoutFeedback>
  )
};
