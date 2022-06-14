import React, { useState } from "react";
import { View, Text, StyleSheet, Pressable, Modal, SafeAreaView, Keyboard, TouchableWithoutFeedback } from "react-native";
import CollectionContainer from "../components/CollectionContainer";
import QrViewer from "../components/QrViewer";
import Colors from "../constants/Colors";
import LayoutStyles from "../constants/LayoutStyles";
import ShareScreen from "./ShareScreen";
import { WebsocketInput } from '../components/TextInput';

export default CollectionScreen = () => {
  const [getWS, setWS] = useState('wss://mischifischiserver.herokuapp.com');
  const [modalVisible, setModalVisible] = useState(false);
  const [qrVisible, setQrVisible] = useState(false);

  const getWebsocket = (text) => {
    if (text.substring(0, 4) == 'ws://' || text.substring(0, 5) == 'wss://') {
      setWS(text);
    } else {
      setWS('ws://'+text);
    }
  }
  
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false} style={{width: "100%", height: "100%"}}>
      <SafeAreaView style={LayoutStyles.collectionScreen}>
          <Text>your collection</Text>
          <CollectionContainer />
          
          <Modal animationType="slide" transparent={true} visible={modalVisible} >
            <ShareScreen setModalVisible={setModalVisible} modalVisible={modalVisible} ws={getWS} />
          </Modal>

          <Modal animationType="slide" transparent={true} visible={qrVisible} >
            <QrViewer setQrVisible={setQrVisible} qrVisible={qrVisible} />
          </Modal>
          <View style={{flexDirection:'row'}}>
            <Pressable style={({ pressed }) => [{ backgroundColor: pressed ? Colors.normalButtonPressed : Colors.normalButton }, LayoutStyles.normalButton]} onPress={() => setModalVisible(true)} >
              <Text style={LayoutStyles.normalButtonText}>SHARE</Text>
            </Pressable>
            <Pressable style={({ pressed }) => [{ backgroundColor: pressed ? Colors.normalButtonPressed : Colors.normalButton }, LayoutStyles.normalButton]} onPress={() => setQrVisible(true)} >
              <Text style={LayoutStyles.normalButtonText}>QR</Text>
            </Pressable>
          </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

// If input for websocket address is needed, put this into collection-screen return:
// <View>
//  <WebsocketInput ws={getWebsocket}/>
//</View>