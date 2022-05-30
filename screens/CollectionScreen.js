import React, { useState } from "react";
import { View, Text, StyleSheet, Pressable, Modal, SafeAreaView } from "react-native";
import CollectionContainer from "../components/CollectionContainer";
import QrViewer from "../components/QrViewer";
import Colors from "../constants/Colors";
import LayoutStyles from "../constants/LayoutStyles";
import ShareScreen from "./ShareScreen";

export default CollectionScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [qrVisible, setQrVisible] = useState(false);
  return (
    <SafeAreaView style={LayoutStyles.collectionScreen}>
      <Text>your collection</Text>
      <CollectionContainer />

      <Modal animationType="slide" transparent={true} visible={modalVisible} >
        <ShareScreen setModalVisible={setModalVisible} modalVisible={modalVisible} />
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
  );
};