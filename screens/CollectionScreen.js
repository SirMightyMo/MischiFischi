import React, {useState} from "react";
import { View, Text, StyleSheet, Pressable, Modal, SafeAreaView } from "react-native";
import CollectionContainer from "../components/CollectionContainer";
import Colors from "../constants/Colors";
import LayoutStyles from "../constants/LayoutStyles";
import ShareScreen from "./ShareScreen";

export default CollectionScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <SafeAreaView style={LayoutStyles.collectionScreen}>
      <Text>your collection</Text>
      <CollectionContainer />

      <Modal animationType="slide" transparent={true} visible={modalVisible} >
        <ShareScreen setModalVisible={setModalVisible} modalVisible={modalVisible} />
      </Modal>

      <Pressable style={({ pressed }) => [{ backgroundColor: pressed ? Colors.normalButtonPressed : Colors.normalButton}, LayoutStyles.normalButton]} onPress={() => setModalVisible(true)} >
        <Text style={LayoutStyles.normalButtonText}>SHARE</Text>
      </Pressable>
    </SafeAreaView>
  );
};