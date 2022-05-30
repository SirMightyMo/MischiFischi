import { Video } from 'expo-av';
import React, { useContext, useState } from "react";
import { Button, View, Alert, Pressable, Text, useWindowDimensions, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, SafeAreaView } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import LayoutStyles from "../constants/LayoutStyles";
import { AppContext } from "../data/AppContext";
import { MultilineTextInput } from '../components/TextInput';
import { Ionicons } from "@expo/vector-icons";
import { SvgCanvas } from "../components/SvgCanvas";
import Colors from "../constants/Colors";

import Fish from "../components/Fish";
import * as FPart from '../components/fishParts/FishParts';
import { getPatternJSX, getPatternSVG, getPatternURL } from '../components/fishParts/Patterns';
import QRCode from 'react-native-qrcode-svg';


export default QrViewer = (props) => {

  const [appData, setAppData] = useContext(AppContext);
  const selectedFish = appData.fish.find(fish => fish.id === appData.currentId);

  const sendFishData = () => {

    const data = 1
    try {
      ws.send(data);
      Alert.alert(
        "Erfolgreich gesendet!",
        "Der Fisch wurde erfolgreich übermittelt.",
        [
          { text: "OK", onPress: () => console.log("OK Pressed") }
        ]
      );
      props.setQrVisible(!props.qrVisible);
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

  const closeQrWindow = () => {
    console.log('close')
    props.setQrVisible(!props.qrVisible);
  }

  console.log(JSON.stringify(selectedFish))
  return (
    <SafeAreaView>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false} style={{ width: "100%", height: "100%" }}>
        <View style={LayoutStyles.modalShareView}>

          <LinearGradient colors={[Colors.bgGradientTop, Colors.bgGradientBottom]} style={LayoutStyles.modalGradient} >



            <View style={{ flex: 1, justifyContent: "space-between", alignItems: "center", width: "100%", paddingVertical: 35, paddingHorizontal: 20 }}>
              
                <QRCode size={200} value={JSON.stringify(selectedFish)} /> 

              <Pressable style={({ pressed }) => [{ backgroundColor: pressed ? Colors.normalButtonPressed : Colors.normalButton }, LayoutStyles.normalButton]} onPress={() => closeQrWindow()} >
                <Text style={LayoutStyles.normalButtonText}>Ok</Text>
              </Pressable>
            </View>

          </LinearGradient>

          <Pressable onPress={() => props.setQrVisible(!props.qrVisible)} android_disableSound={true} style={[{ alignSelf: 'flex-end', top: 15, right: 15, elevation: 2, position: "absolute" }]}>
            <Ionicons style={{ color: "#00000050" }} name="ios-close-circle" size={25} />
          </Pressable>

        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  )
};
