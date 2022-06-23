import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from 'expo-linear-gradient';
import React, { useContext, useState, useEffect } from "react";
import * as MediaLibrary from 'expo-media-library';
import * as FileSystem from 'expo-file-system';
import { Alert, Keyboard, Pressable, SafeAreaView, Text, TouchableWithoutFeedback, View, KeyboardAvoidingView } from "react-native";
import { SvgCanvas } from "../components/SvgCanvas";
import { MultilineTextInput } from '../components/TextInput';
import Colors from "../constants/Colors";
import LayoutStyles from "../constants/LayoutStyles";
import { AppContext } from "../data/AppContext";
import { storeData } from '../data/AppStorage';

import * as FPart from '../components/fishParts/FishParts';
import { getPatternSVG, getPatternURL } from '../components/fishParts/Patterns';


export default ShareScreen = (props) => {  
  // Websocket for sending data
  const [appData, setAppData] = useContext(AppContext);
  const selectedFish = appData.fish.find(fish => fish.id === appData.currentId);
  const [fishText, setFishText] = useState(selectedFish.text);
  const [permissions, requestPermission] = MediaLibrary.usePermissions();
  const [charCount, setCharCount] = useState(140);
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  const [keyboardHeight, setKeyboardHeight] = useState();

  useEffect(() => {
     const keyboardDidShowListener = Keyboard.addListener(
       'keyboardDidShow',
       (e) => {
         setKeyboardVisible(true); // or some other action
         setKeyboardHeight(e.endCoordinates.height)
         console.log('Keyboard');
       }
     );
     const keyboardDidHideListener = Keyboard.addListener(
       'keyboardDidHide',
       () => {
         setKeyboardVisible(false); // or some other action
         setKeyboardHeight(0)
         console.log('No Keyboard');
       }
     );
 
     return () => {
       keyboardDidHideListener.remove();
       keyboardDidShowListener.remove();
     };
   }, []);

  const ws = React.useRef(new WebSocket(props.ws)).current;

  ws.onopen = () => {
    // connection opened
    console.log("connected to websocket ");
  };

  const checkAndSetText = (text) => {
    /* Check Text for blacklisted words and word/char count */
    setFishText(text);
  };

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
    // checkTextWithBlacklist(selectedFish.text) TODO: Implement function and blacklist
    selectedFish.text = fishText;

    if (fishText.split(' ').length < 2) {
      return Alert.alert(
        "Text zu kurz",
        "Bitte beschreibe deinen Vorschlag mit mind. zwei Wörtern.",
        [
          { text: "OK", onPress: () => {} }
        ]
      );
    }


    setAppData(appData => ({
      currentId: appData.currentId,
      fish: appData.fish.map(fish => fish.id === appData.currentId ? selectedFish : fish),
    }));
    storeData(appData);

    const svg = `
<svg id="${appData.currentId}" data-name="${appData.currentId}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 360">
  <defs>
    <linearGradient id="grad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="${selectedFish.color2}" />
      <stop offset="100%" stop-color="${selectedFish.color1}" />
    </linearGradient>
    ${getPatternSVG(selectedFish)}
    ${FPart.returnSvgStyle(getPatternURL(selectedFish.pattern))}
  </defs>
  ${finsToRender(selectedFish)}
  ${tailToRender(selectedFish)}
  ${bodyToRender(selectedFish)}
</svg>
    `

    const dataJson = {"id":appData.currentId, "svg":svg, "text":selectedFish.text};
    // Send data to websocket
    try {
      ws.send(JSON.stringify(dataJson));
      Alert.alert(
        "Erfolgreich gesendet!",
        "Der Fisch wurde erfolgreich übermittelt.",
        [
          { text: "OK", onPress: () => {} }
        ]
      );
      props.setModalVisible(!props.modalVisible);
    } catch {
      Alert.alert(
        "Verbindungsfehler",
        "Es konnte keine Verbindung zum Server aufgebaut werden.",
        [
          { text: "OK", onPress: () => {} }
        ]
      );
      ws.onerror = (e) => {
        console.log("Error: " + e);
      }
    }
  }

  const confirmTransmission = () => {
    Alert.alert(
      "Bitte bestätigen",
      "Bist du sicher, dass dein Fisch inkl. Nachricht übermittelt werden soll?",
      [
        { text: "Send", onPress: () => sendFishData() },
        { text: "Cancel", style: "cancel" }
      ]
    );
  }

  return (
  
    <SafeAreaView>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false} style={{width: "100%", height: "100%" }}>
        <View style={[LayoutStyles.modalShareView, {backgroundColor: 'transparent', /*height: isKeyboardVisible ? '75%' : '95%'*/ paddingBottom: isKeyboardVisible ? keyboardHeight : 0}]}>

          <LinearGradient colors={[Colors.bgGradientTop, Colors.bgGradientBottom]} style={LayoutStyles.modalGradient} >
              
              <SvgCanvas borderTopLeftRadius={20} borderTopRightRadius={20} />
              {/* <Pressable onPress={()=> handleSave() } style={[{ top: '38%', right: '5%', elevation: 2, position: "absolute" }, LayoutStyles.btnShadow]}>
                <Ionicons name='download-outline' size={26} color='#EEEEEE' />
              </Pressable> */}

              <View style={{flex: 1, justifyContent: "space-between", alignItems: "center", width: "100%", paddingVertical: 35, paddingHorizontal: 20}}>
                <Text style={{color: charCount == 0 ? '#fa6b6b' : 'white', width: '100%', textAlign: 'right'}}>{charCount}/140 Zeichen</Text>
                <MultilineTextInput checkAndSetText={checkAndSetText} setCharCount={setCharCount}/>
                <Pressable style={({ pressed }) => [{marginBottom: 20, backgroundColor: pressed ? Colors.normalButtonPressed : Colors.normalButton}, LayoutStyles.normalButton]} onPress={() => confirmTransmission()} >
                  <Text style={LayoutStyles.normalButtonText}>SEND</Text>
                </Pressable>
              </View>
          
          </LinearGradient>

          <Pressable onPress={() => props.setModalVisible(!props.modalVisible)} android_disableSound={true} style={[{alignSelf: 'flex-end', top: 15, right: 15, elevation: 2, position: "absolute"}]}>
            <Ionicons style={{color: "#00000050"}} name="ios-close-circle" size={25} />
          </Pressable>

        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>

  )
};
