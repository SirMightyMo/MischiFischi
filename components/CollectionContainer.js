import { Collection } from "immutable";
import React, { useContext } from "react";
import { View,FlatList, Platform, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import LayoutStyles from "../constants/LayoutStyles";
import { AppContext } from "../data/AppContext";
import CollectionTile from "./CollectionTile";

export default CollectionContainer = () => {
  const [appData, setAppData] = useContext(AppContext);
  const fishCollection = appData.fish;

  return (
    < View style={LayoutStyles.collectionContainer} >
    <Text>Collection Container</Text>

    <FlatList
      data={fishCollection}
      renderItem={(itemData) => { return <CollectionTile title={itemData.item.id} id={itemData.item.id} /> }}
      numColumns={2}
      style={{width:'100%'}}
    />
    </View >

  )
}