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
    if (fishText != undefined) {
      return fishText;
    } else {
      return placehholderText;
    }
  }

/*   const onChangeText = (text) => {
    selectedFish.newtext = text;
    setAppData(appData => ({
      currentId: appData.currentId,
      fish: appData.fish.map(fish => fish.id === appData.currentId ? selectedFish : fish),
    }));
    storeData(appData);
  } */
  
  return (
    <View
      style={{
        backgroundColor: "lightblue",
        /* borderBottomColor: '#000000', */
        /* borderBottomWidth: 1, */
        width: "100%",
        height: "80%",
        marginBottom: 10,
        borderRadius: 20,
        paddingVertical: 20,
        paddingHorizontal: 10
      }}>
      <TextInputBox
        multiline
        numberOfLines={4}
        onChangeText={text => props.onChangeText(text)}
        placeholder={getText()}
        style={{padding: 25, width: "100%", height: "100%"}}
      />
    </View>
  );
}