import React, { useContext } from "react";
import {View,  Pressable, Text, TouchableWithoutFeedback, Keyboard, SafeAreaView } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import LayoutStyles from "../constants/LayoutStyles";
import { AppContext } from "../data/AppContext";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../constants/Colors";
import QRCode from 'react-native-qrcode-svg';

export default QrViewer = (props) => {

  const [appData, setAppData] = useContext(AppContext);
  const selectedFish = appData.fish.find(fish => fish.id === appData.currentId);

  const closeQrWindow = () => {
    props.setQrVisible(!props.qrVisible);
  }
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
