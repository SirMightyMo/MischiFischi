import React, {useState} from "react";
import { View, Text, StyleSheet, Pressable, Modal } from "react-native";
import CollectionContainer from "../components/CollectionContainer";
import LayoutStyles from "../constants/LayoutStyles";
import ShareScreen from "./ShareScreen";

export default CollectionScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={LayoutStyles.collectionScreen}>
      <Text>your collection</Text>
      <CollectionContainer />

      <Modal animationType="slide" transparent={true} visible={modalVisible} >
        <ShareScreen setModalVisible={setModalVisible} modalVisible={modalVisible} />
      </Modal>

      <Pressable style={LayoutStyles.normalButton} onPress={() => setModalVisible(true)} >
        <Text style={LayoutStyles.normalButtonText}>SHARE</Text>
      </Pressable>
    </View>
  );
};