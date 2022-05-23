import React from "react";
import { View, Text } from "react-native";
import CollectionContainer from "../components/CollectionContainer";
import LayoutStyles from "../constants/LayoutStyles";

export default CollectionScreen = () => {
  return (
    <View style={LayoutStyles.collectionScreen}>
      <Text>your collection</Text>
      <CollectionContainer />
      
    </View>
  );
};