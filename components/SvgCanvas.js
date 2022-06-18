import { Video } from 'expo-av';
import React, { useContext, useState, Component } from "react";
import { View, Alert, Text, Pressable,Modal, Image, PermissionsAndroid, Platform } from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';
import Svg, { Defs, LinearGradient, Stop } from "react-native-svg";
import LayoutStyles from "../constants/LayoutStyles";
import * as MediaLibrary from 'expo-media-library';
import * as FileSystem from 'expo-file-system';
import { AppContext, Base64Context } from "../data/AppContext";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";
import { storeData } from '../data/AppStorage';
import uuid from 'react-native-uuid'
import FishModel from "../models/FishModel";

import Fish from "./Fish";
import * as FPart from './fishParts/FishParts';
import { getPatternJSX, getPatternSVG, getPatternURL } from './fishParts/Patterns';

export const SvgCanvas = (props) => {
  const [appData, setAppData] = useContext(AppContext);
  const selectedFish = appData.fish.find(fish => fish.id === appData.currentId);
  const [b64, setB64] = useState();
  
  /**
   * Packing all JSX-Components into one component.
   * Then, base64-encode this Component to get a string,
   * that can later be decoded to png (for export).
   */
  
  class SvgComponents extends Component {
    state = {};
    onRef = ref => {
      if (ref && props.passData != undefined) {
        ref.toDataURL(
          base64 => {
            //this.setState({ base64 });
            props.passData(base64);

            // For Debugging:
            /* let b64array = base64.match(/.{1,10000}/g);
            console.log("--------------------------------------")
            for (const string of b64array) {
              console.log(string);
            } */

          },
          { width: 1080, height: 1080 }, // Size of the image in pixels (too large files cant be shown in console when debugging)
        );
      }
    };
    render() {
    return(
      <Svg height="100%" width="100%" viewBox="0 0 640 360" ref={this.onRef}>
        <Defs>
          <LinearGradient id="grad" x1="0" y1="0" x2="1" y2="0">
            <Stop offset="0" stopColor={selectedFish.color2} stopOpacity="1" />
            <Stop offset="1" stopColor={selectedFish.color1} stopOpacity="1" />
          </LinearGradient>
          {getPatternJSX(selectedFish)}
        </Defs>
        <Fish />
      </Svg>
     );
    }
  }

  return (
    /* View onLayout not necessarily in use; calculates dimensions of component */
    <View style={LayoutStyles.svgCanvas}>
      <Image source={require('../assets/fish/poster.jpg')} resizeMethod='auto' style={{height: '100%', width: '100%', position: 'absolute', top: 0, left:0, borderTopLeftRadius: props.borderTopLeftRadius, borderTopRightRadius: props.borderTopRightRadius, borderBottomLeftRadius: props.borderBottomLeftRadius, borderBottomRightRadius: props.borderBottomRightRadius}}/>
      <Video
        source={require('../assets/fish/bg.mp4')}
        posterSource={require('../assets/fish/poster.jpg')}
        usePoster={true}
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
        
      <SvgComponents/>
    </View>
  )
};

const calculateCompColor = (colorHexString) => {
  const color = colorHexString;
  // #123456
  const red = parseInt("" + color.charAt(1) + color.charAt(2), 16);
  const green = parseInt("" + color.charAt(3) + color.charAt(4), 16);
  const blue = parseInt("" + color.charAt(5) + color.charAt(6), 16);
  
  const comp_red = 0xFF - red;
  const comp_green = 0xFF - green;
  const comp_blue = 0xFF - blue;

  const result = "#" 
  + (comp_red < 16 ? "0" + comp_red.toString(16) : comp_red.toString(16)) 
  + (comp_green < 16 ? "0" + comp_green.toString(16) : comp_green.toString(16)) 
  + (comp_blue < 16 ? "0" + comp_blue.toString(16) : comp_blue.toString(16));
  
  return result;
}

export const Canvas = (props) => {
  const [appData, setAppData] = useContext(AppContext);
  const [modalVisible, setModalVisible] = useState(false);
  const [b64, setB64] = useState(props.b64);
  const currentId = appData.currentId;
  const selectedFish = appData.fish.find(fish => fish.id === currentId);

  const fishIndex = appData.fish.indexOf(selectedFish);
  const arrayLength = appData.fish.length;

  const passData = (childData) => {
    setB64(childData);
  }

  const handleSave = async b64  => {
    let res = await MediaLibrary.requestPermissionsAsync(); 

   /*  const data = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAARzQklUCAgI
    CHwIZIgAAACnSURBVBiVY2CgC3B1DVZFF2NCF5AXFTCUkZLewcDAIMzAwMAIE2dkYGBgkBZmcdbX
    dxF79vR2jJy8mpe4pBIDn4A4w3+mnw80NJ1L0tKc1rIwMDAwMP1jcmRhYQzh5GRX//v3L8PPXz8Z
    fv76yaCipqVw9+51brjVn77/mmdkFWbx/eev1J8/flzhYOf6++/v35U3r9327+zMXoTTMzkZNU4U
    hgcRAADKgzJFIhlCjwAAAABJRU5ErkJggg==`
    const base64Code = data.split("data:image/png;base64,")[1]; */

    if(res.granted) {        
      const filename = FileSystem.documentDirectory + "some_unique_file_name.png";

      await FileSystem.writeAsStringAsync(filename, b64, {
        encoding: FileSystem.EncodingType.Base64,
      });
  
      const mediaResult = await MediaLibrary.saveToLibraryAsync(filename);
      
      Alert.alert(
        "Erfolgreich!",
        "Ihr Fisch wurde erfolgreich in die Foto-Bibliothek exportiert.",
        [
          { text: "OK", onPress: () => {} }
        ]
      );
    } else {
      Alert.alert(
        "Keine Berechtigung",
        "Bitte erlauben Sie den Zugriff in den Geräteeinstellungen.",
        [
          { text: "OK", onPress: () => {} }
        ]
      );
    }
  }

  const nextFish = (direction) => {
    if (direction === -1 && fishIndex > 0) {
      setAppData(appData => ({
        currentId: appData.fish[fishIndex + direction].id,
        fish: appData.fish,
      }));
      storeData(appData);
    }
    else if (direction === 1 && fishIndex < appData.fish.length - 1) {
      setAppData(appData => ({
        currentId: appData.fish[fishIndex + direction].id,
        fish: appData.fish,
      }));
      storeData(appData);
    }
  }
  const deleteFish = () => {
    const selFishIndex = appData.fish.indexOf(selectedFish)

    const nextIndex = () => {
      if (selFishIndex == arrayLength-1 && selFishIndex != 0) { return selFishIndex-1 }
      else { return selFishIndex+1 }
    }

    if (arrayLength > 1) {
      Alert.alert(
        "Bitte bestätigen",
        "Wollen Sie diesen Fisch wirklich löschen?",
        [
          { text: "Löschen", style: "destructive", onPress: () => deleteFish() },
          { text: "Abbrechen", style: "cancel" }
        ]
      );

      const deleteFish = () => {
        setAppData(appData => ({
          currentId: appData.fish[nextIndex()].id,
          fish: appData.fish.filter(fish => fish.id !== selectedFish.id),
        }));
        storeData(appData)
        }
      }
  }
  const getHexColor = () => {
    var makeColorCode = '0123456789ABCDEF';
    var color = '#';
    for (var count = 0; count < 6; count++) {
      color = color + makeColorCode[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  const randomFish = () => {
    selectedFish.color1 = getHexColor();
    selectedFish.color2 = getHexColor();
    selectedFish.body = Math.floor(Math.random() * 7)
    selectedFish.fin = Math.floor(Math.random() * 7)
    selectedFish.tail = Math.floor(Math.random() * 7)
    selectedFish.pattern = Math.floor(Math.random() * 6)

    setAppData(appData => ({
      currentId: appData.currentId,
      fish: appData.fish.map(fish => fish.id === currentId ? selectedFish : fish),
    }));
    storeData(appData);
  }
  const newFish = () => {
    //create new fish with unique ID
    let UUID = uuid.v4();
    let newFish = new FishModel(UUID, 0, 0, 0, '#44FF44', '#44FF44', 0, false, "")
    // randomize new Fish
    newFish.color1 = getHexColor();
    newFish.color2 = getHexColor();
    newFish.body = Math.floor(Math.random() * 7)
    newFish.fin = Math.floor(Math.random() * 7)
    newFish.tail = Math.floor(Math.random() * 7)
    newFish.pattern = Math.floor(Math.random() * 6)
    // load fish array an push new fish
    let newFishArray = appData.fish;
    newFishArray.push(newFish)
    //save new fish to storage
    setAppData(appData => ({
      currentId: UUID,
      fish: newFishArray,
    }));
    storeData(appData);
  }
  return (
    <View style={LayoutStyles.canvasContainer} >
      <View style={{ width: '100%', height: '100%' }}>
        <SvgCanvas passData={passData} />
      </View>
      <Pressable onPress={() => deleteFish()} style={[{ top: '10%', left: '5%', elevation: 2, position: "absolute" }, LayoutStyles.btnShadow]}>
        <Ionicons name='md-trash-sharp' size={26} color={fishIndex == 0 && fishIndex == arrayLength-1 ? 'transparent' : '#EEEEEE'} />
      </Pressable>
      <Pressable onPress={() => setModalVisible(true)} style={[{ top: '10%', right: '45%', elevation: 2, position: "absolute" }, LayoutStyles.btnShadow]}>
        <Ionicons name="information-circle" size={24} color="#EEEEEE" />
      </Pressable>
      <Pressable onPress={() => newFish()} style={[{ top: '10%', right: '5%', elevation: 2, position: "absolute" }, LayoutStyles.btnShadow]}>
        <FontAwesome5 name="plus-circle" size={24} color="#EEEEEE" />
      </Pressable>
      <Pressable onPress={() => nextFish(-1)} style={[{ top: '50%', left: '0%', elevation: 2, position: "absolute", shadowColor: "#000" }, LayoutStyles.btnShadow]}>
        <Ionicons name='chevron-back-outline' size={42} color={fishIndex == 0 ? 'transparent' : '#EEEEEE'} />
      </Pressable>
      <Pressable onPress={() => nextFish(1)} style={[{ top: '50%', right: '0%', elevation: 2, position: "absolute" }, LayoutStyles.btnShadow]}>
        <Ionicons name='chevron-forward-outline' size={42} color={fishIndex == arrayLength-1 ? 'transparent' : '#EEEEEE'} />
      </Pressable>
      <Pressable onPress={()=> props.navigation.navigate('Collection') } style={[{ bottom: '15%', left: '5%', elevation: 2, position: "absolute" }, LayoutStyles.btnShadow]}>
        <Ionicons name='save' size={26} color='#EEEEEE' />
      </Pressable>
      <Pressable onPress={() => randomFish()} style={[{ bottom: '15%', right: '5%', elevation: 2, position: "absolute" }, LayoutStyles.btnShadow]}>
        <FontAwesome5 name="dice" size={24} color="#EEEEEE" />
      </Pressable>
      <Pressable onPress={()=> handleSave(b64) } style={[{ bottom: '15%', right: '45%', elevation: 2, position: "absolute" }, LayoutStyles.btnShadow]}>
        <Ionicons name='download-outline' size={26} color='#EEEEEE' />
      </Pressable>
      <Modal animationType="slide" transparent={true} visible={modalVisible} >
        <HelpScreen setModalVisible={setModalVisible} modalVisible={modalVisible} />
      </Modal>
    </View>
  );
}