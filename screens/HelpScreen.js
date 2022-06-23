import { Ionicons, FontAwesome5 } from "@expo/vector-icons";
import { LinearGradient } from 'expo-linear-gradient';
import React from "react";
import { Alert, Keyboard, Pressable, SafeAreaView, Text, TouchableWithoutFeedback, View, ScrollView, Image } from "react-native";
import LayoutStyles from "../constants/LayoutStyles";
import Colors from "../constants/Colors";

export default HelpScreen = (props) => {
  return (
    <SafeAreaView>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false} style={{ width: "100%", height: "100%" }}>
        <ScrollView style={[LayoutStyles.modalHelpView, { backgroundColor: 'transparent' }]}>
          <LinearGradient colors={[Colors.bgGradientTop, Colors.bgGradientBottom]} style={LayoutStyles.modalGradient} >
            {/*ToDo: text needs Style */}
            <View style={LayoutStyles.textContainer}>

              <Text style={[LayoutStyles.text, {textAlign: 'left', fontWeight: 'normal'}]}>

                <Text style={[LayoutStyles.titleText, {textDecorationLine: 'underline'}]}>
                  MischiFischi
                </Text>

                {"\n"} {"\n"}
                Diese App soll spielerisch vermitteln, wie schön Artenvielfalt sein kann:
                Mittels eines Baukastensystems und unterschiedlichen Bestandteilen wie Farben,
                Mustern und Formen kann ein selbst gestalteter Fisch erstellt und exportiert werden.
                {"\n"}{"\n"}
                Am 01.07.2022 kannst du diese erstellten Fische dann an eine Videoprojektion an der HAW senden, 
                um sie dort mit den Fischen anderer Ausstellungsbesucher schwimmend in einem virtuellen Becken zu beobachten.
                {"\n"}{"\n"}

                <Text style={{textAlign: 'center', fontWeight: 'bold'}}>Viel Spaß!</Text>{"\n"}{"\n"}

              </Text>
              <Text style={[LayoutStyles.titleText, {textDecorationLine: 'underline'}]}>
                  Navigation:
              </Text>

              <Text style={[LayoutStyles.text, {textAlign: 'left', fontWeight: 'normal'}]}>

                In der unteren Navigationsleiste findest du zwei Tabs, mit denen du zwischen den beiden Hauptbereichen wechseln kannst: {"\n"}{"\n"}
                <Ionicons style={{ color: 'white' }} name="build" size={25} /><Text style={{color: 'white'}}> Build</Text>{"\n"}
                Hier kannst du dir aus den verschiedensten Bausteinen deinen eigenen Fisch erstellen. {"\n"}{"\n"}
                <Ionicons style={{ color: 'white' }} name="grid" size={25} /><Text style={{color: 'white'}}> Collection</Text>{"\n"}
                Deine erstellten Fische landen hier und können von hier aus exportiert werden.
                {"\n"}{"\n"}
              
              </Text>
            </View>

            <View style={[LayoutStyles.textContainer]}>
            <Text style={[LayoutStyles.text, {textAlign: 'left', fontWeight: 'normal'}]}>
              <Text style={{fontWeight: 'bold'}}><Ionicons style={{ color: '#03045E' }} name="build" size={25} /> HOW TO BUILD</Text>{"\n"}
              In der oberen Hälfte des Screens findest du den zu aktuell zur Bearbeitung ausgewählten Fisch und einige Icons. {"\n"}{"\n"}


              <Ionicons style={{ color: 'white' }} name="information-circle" size={25} /><Text style={{color: 'white'}}> Hilfe-Screen</Text>{"\n"}
              Hiermit gelangst du zurück zu diesem Hilfebildschirm. {"\n"}{"\n"}

              <FontAwesome5 style={{ color: 'white' }} name="plus-circle" size={25} /><Text style={{color: 'white'}}> Neuer Fisch</Text>{"\n"}
              Ein Tap auf das Plus erstellt einen neuen Fisch, den du beliebig bearbeiten kannst.{"\n"}{"\n"}

              <Ionicons style={{ color: 'white' }} name="md-trash-sharp" size={25} /><Text style={{color: 'white'}}> Fisch entfernen</Text>{"\n"}
              Dieser Button entfernt den aktuell angezeigten Fisch. Vor dem Löschen musst du die Aktion bestätigen. Es bleibt immer ein Fisch 
              zum Bearbeiten bestehen – der letzte Fisch kann also nicht entfernt werden.{"\n"}{"\n"}


              <Ionicons style={{ color: 'white' }} name="chevron-back-outline" size={25} />
              <Ionicons style={{ color: 'white' }} name="chevron-forward-outline" size={25} /><Text style={{color: 'white'}}> Fisch wechseln</Text>{"\n"}
              Über die Pfeiltasten kannst du zwischen deinen bereits erstellten Fischen wechseln.{"\n"}{"\n"}

              <FontAwesome5 style={{ color: 'white' }} name="dice" size={25} /><Text style={{color: 'white'}}> Zufällige Fischbausteine</Text>{"\n"}
              Mit diesem Button werden die Bestandteile des aktuell ausgewählten Fisches zufällig durcheinander gewürfelt.{"\n"}{"\n"}

              <Ionicons style={{ color: 'white' }} name="download-outline" size={25} /><Text style={{color: 'white'}}> Bild-Export</Text>{"\n"}
              Gefällt dir dein erstellter Fisch so sehr, dass du ihn gerne in deiner Foto-Bibliothek haben möchtest, kannst du ihn hierüber exportieren.{"\n"}{"\n"}

              <Ionicons style={{ color: 'white' }} name="save" size={25} /><Text style={{color: 'white'}}> Speichern</Text>{"\n"}
              Auch ohne den Button werden sämtliche Änderungen an deinem Fisch immer sofort gespeichert! Der Speichern-Button führt dich direkt zum Collection-Screen.{"\n"}{"\n"}

              Im unteren Teil des Screens findest du alle Buttons, um deinen eigenen Fisch zu gestalten.
              </Text>

            </View>

            <View style={[LayoutStyles.textContainer]}>
            <Text style={[LayoutStyles.text, {textAlign: 'left', fontWeight: 'normal'}]}>
              <Text style={{fontWeight: 'bold'}}><Ionicons style={{ color: '#03045E' }} name="grid" size={25} /> COLLECTION</Text>{"\n"}
              In dieser Ansicht findest du alle Fische, die du jemals erstellt hast. Mit einem Tap auf einen Fisch markierst du ihn und wählst ihn aus, um ihn durch einen Wechsel in den 
              Build-Screen noch einmal zu bearbeiten (Achtung: Änderungen werden direkt gespeichert) oder um ihn über den  
              <Text style={{fontWeight: 'bold', color: 'white'}}> SHARE </Text>Button an die Videoprojektion zu senden.{"\n"}{"\n"}
              Um etwas darüber zu reflektieren, wie sich die Biodiversität in unseren Weltmeeren schützen lässt, die Ozeane erhalten und nachhaltig genutzt werden können, 
              bitten wir dich in der SHARE-Ansicht darum, einen kurzen Vorschlag (max. 140 Zeichen) zu diesen Themen zu formulieren.

            
              </Text>

            </View>

            <View style={{ flex: 1, justifyContent: "space-between", alignItems: "center", width: "100%", paddingVertical: 10, paddingHorizontal: 20 }}>
              <Pressable style={({ pressed }) => [{ backgroundColor: pressed ? Colors.normalButtonPressed : Colors.normalButton }, LayoutStyles.normalButton]} onPress={() => props.setModalVisible(!props.modalVisible)} >
                <Text style={LayoutStyles.normalButtonText}>Verstanden!</Text>
              </Pressable>
            </View>

          </LinearGradient>

          <Pressable onPress={() => props.setModalVisible(!props.modalVisible)} android_disableSound={true} style={[{ alignSelf: 'flex-end', top: 15, right: 15, elevation: 3, position: "absolute" }]}>
            <Ionicons style={{ color: "#00000050" }} name="ios-close-circle" size={25} />
          </Pressable>

        </ScrollView>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  )
};
