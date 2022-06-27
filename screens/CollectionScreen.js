import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Pressable, Modal, SafeAreaView, Keyboard, TouchableWithoutFeedback, ImageBackground } from "react-native";
import CollectionContainer from "../components/CollectionContainer";
import QrViewer from "../components/QrViewer";
import Colors from "../constants/Colors";
import LayoutStyles from "../constants/LayoutStyles";
import ShareScreen from "./ShareScreen";
import { Ionicons } from "@expo/vector-icons";

export default CollectionScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [getWS, setWS] = useState('wss://mischifischiserver.herokuapp.com/');
  const [isLoading, setLoading] = useState(true);
  const [qrVisible, setQrVisible] = useState(false);

  useEffect(() => {
    getWebsocket();
  });

  const getWebsocket = async () => {
    try {
     const response = await fetch('https://mischifischiserver.herokuapp.com/websocket');
     const json = await response.json();
     setWS(json.adress.adress);
   } catch (error) {
     console.error(error);
   } finally {
     setLoading(false);
   }
 }
  
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false} style={{width: "100%", height: "100%", borderWidth: 0}}>
        <SafeAreaView style={LayoutStyles.collectionScreen}>
            <Text></Text>
            <CollectionContainer />
            
            <Modal animationType="slide" transparent={true} visible={modalVisible} >
              <ShareScreen setModalVisible={setModalVisible} modalVisible={modalVisible} ws={getWS} />
            </Modal>

            <Modal animationType="slide" transparent={true} visible={qrVisible} >
              <QrViewer setQrVisible={setQrVisible} qrVisible={qrVisible} />
            </Modal>
            <View style={{flexDirection:'row', borderWidth: 0, width:'100%', justifyContent:'center'}}>
              <Pressable style={({ pressed }) => [{ backgroundColor: pressed ? Colors.normalButtonPressed : Colors.normalButton }, LayoutStyles.normalButton]} onPress={() => setModalVisible(true)} >
                <Text style={LayoutStyles.normalButtonText}>SHARE</Text>
              </Pressable>
              {/* <Pressable style={({ pressed }) => [{ backgroundColor: pressed ? Colors.normalButtonPressed : Colors.normalButton }, LayoutStyles.normalButton]} onPress={() => setQrVisible(true)} >
                <Text style={LayoutStyles.normalButtonText}>QR</Text>
              </Pressable> */}
            </View>
        </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};