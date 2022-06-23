import React, {useContext} from 'react';
import { AppContext } from "../data/AppContext";
import { storeData } from '../data/AppStorage';
import { View, TextInput } from 'react-native';

export const TextInputBox = (props) => {
  return (
    <TextInput
      {...props}
      editable
      maxLength={140}
    />
  );
}

export const MultilineTextInput = (props) => {
  const [appData, setAppData] = useContext(AppContext);
  const selectedFish = appData.fish.find(fish => fish.id === appData.currentId);

  const placehholderText = `Wie lautet dein Vorschlag, um die Weltmeere zu erhalten, sie nachhaltig zu nutzen und Biodiversität zu schützen?`

  const getText = () => {
    const fishText = selectedFish.text;
    if (fishText != "") {
      return fishText;
    } else {
      return placehholderText;
    }
  }

  const onChangeText = (text) => {
    props.checkAndSetText(text);    
    props.setCharCount(140 - text.length);
  }
  
  return (
    <View
      style={{
        backgroundColor: "lightblue",
        /* borderBottomColor: '#000000', */
        /* borderBottomWidth: 1, */
        width: "100%",
        maxHeight: "60%",
        marginBottom: 10,
        borderRadius: 20,
        paddingVertical: 20,
        paddingHorizontal: 10
      }}>
      <TextInputBox
        multiline
        numberOfLines={4}
        onChangeText={text => onChangeText(text)}
        placeholder={getText()}
        style={{padding: 25, width: "100%", height: "100%"}}
      />
    </View>
  );
}

export const WebsocketInput = (props) => {
  
  return (
    <TextInput
        style={[props.style,{borderWidth: 1, width: 250, height: 25, padding: 5, borderColor: 'white', margin: 15, color: 'white'}]}
        onChangeText={text => props.ws(text)}
        //value={text}
        placeholder={"127.0.0.1:42 | Websocket-Adress"}
        placeholderTextColor="rgba(255, 255, 255, 0.5)"
        autoCorrect={false}
      />
  );
}