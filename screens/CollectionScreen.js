import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Pressable, Modal, SafeAreaView, Keyboard, TouchableWithoutFeedback, ImageBackground } from "react-native";
import CollectionContainer from "../components/CollectionContainer";
import QrViewer from "../components/QrViewer";
import Colors from "../constants/Colors";
import LayoutStyles from "../constants/LayoutStyles";
import ShareScreen from "./ShareScreen";
import { LinearGradient } from 'expo-linear-gradient';
import { WebsocketInput } from '../components/TextInput';

export default CollectionScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [getWS, setWS] = useState('ws://10.1.35.11:7001');
  const [qrVisible, setQrVisible] = useState(false);

/* TEMPORARY FOR TESTING PURPOSES */
/* ----------------------------------------------------- */
const [isKeyboardVisible, setKeyboardVisible] = useState(false);
const [keyboardHeight, setKeyboardHeight] = useState();

  useEffect(() => {
     const keyboardDidShowListener = Keyboard.addListener(
       'keyboardDidShow',
       (e) => {
         setKeyboardVisible(true); // or some other action
         setKeyboardHeight(e.endCoordinates.height)
       }
     );
     const keyboardDidHideListener = Keyboard.addListener(
       'keyboardDidHide',
       () => {
         setKeyboardVisible(false); // or some other action
         setKeyboardHeight(0)
       }
     );
 
     return () => {
       keyboardDidHideListener.remove();
       keyboardDidShowListener.remove();
     };
   }, []);

/* ----------------------------------------------------- */


  const getWebsocket = (text) => {
    console.log(text.substring(0, 5));
    if (text.substring(0, 5) == 'ws://' || text.substring(0, 6) == 'wss://') {
        setWS(text);
    } else {
        setWS('ws://'+text);
    }
  }
  
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false} style={{width: "100%", height: "100%", borderWidth: 0}}>
      {/* <LinearGradient colors={[Colors.bgGradientTop, Colors.bgGradientBottom]} style={{width: '100%', height: '100%'}} > */}
        <SafeAreaView style={LayoutStyles.collectionScreen}>
            <Text></Text>
            <CollectionContainer style={{bottom: isKeyboardVisible ? keyboardHeight : 0}}/>
            
            <Modal animationType="slide" transparent={true} visible={modalVisible} >
              <ShareScreen setModalVisible={setModalVisible} modalVisible={modalVisible} ws={getWS} />
            </Modal>

            <Modal animationType="slide" transparent={true} visible={qrVisible} >
              <QrViewer setQrVisible={setQrVisible} qrVisible={qrVisible} />
            </Modal>
            {/* <View>
              <WebsocketInput ws={getWebsocket} style={{bottom: isKeyboardVisible ? keyboardHeight : 0}}/>
            </View> */}
            <View style={{flexDirection:'row', borderWidth: 0}}>
              <Pressable style={({ pressed }) => [{ backgroundColor: pressed ? Colors.normalButtonPressed : Colors.normalButton }, LayoutStyles.normalButton]} onPress={() => setModalVisible(true)} >
                <Text style={LayoutStyles.normalButtonText}>SHARE</Text>
              </Pressable>
              {/* <Pressable style={({ pressed }) => [{ backgroundColor: pressed ? Colors.normalButtonPressed : Colors.normalButton }, LayoutStyles.normalButton]} onPress={() => setQrVisible(true)} >
                <Text style={LayoutStyles.normalButtonText}>QR</Text>
              </Pressable> */}
            </View>
        </SafeAreaView>
      {/* </LinearGradient> */}
    </TouchableWithoutFeedback>
  );
};

// If input for websocket address is needed, put this into collection-screen return:
// <View>
//  <WebsocketInput ws={getWebsocket}/>
//</View>