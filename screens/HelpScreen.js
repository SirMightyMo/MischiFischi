import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from 'expo-linear-gradient';
import React from "react";
import { Alert, Keyboard, Pressable, SafeAreaView, Text, TouchableWithoutFeedback, View } from "react-native";
import LayoutStyles from "../constants/LayoutStyles";
import Colors from "../constants/Colors";

export default HelpScreen = (props) => {  
  return (
    <SafeAreaView>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false} style={{width: "100%", height: "100%"}}>
        <View style={[LayoutStyles.modalShareView, {backgroundColor: 'rgba(7, 20, 44, 1)'}]}>
          <LinearGradient colors={[Colors.bgGradientTop, Colors.bgGradientBottom]} style={LayoutStyles.modalGradient} >

{/*ToDo: text needs Style */}
            <Text>
              Hallo Welt,

              diese App soll dir die Socken ausziehen und das Hirn weg blasen.

              Viel Spaß

            </Text>

              <View style={{flex: 1, justifyContent: "space-between", alignItems: "center", width: "100%", paddingVertical: 35, paddingHorizontal: 20}}>
                <Pressable style={({ pressed }) => [{ backgroundColor: pressed ? Colors.normalButtonPressed : Colors.normalButton}, LayoutStyles.normalButton]} onPress={() => props.setModalVisible(!props.modalVisible)} >
                  <Text style={LayoutStyles.normalButtonText}>Verstanden!</Text>
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
