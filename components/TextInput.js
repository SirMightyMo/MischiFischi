import React from 'react';
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

export const MultilineTextInput = () => {
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
        clearTextOnFocus
        placeholder="You better save ocean – tell me how!"
        style={{padding: 25, width: "100%", height: "100%"}}
      />
    </View>
  );
}