import React, { useContext } from "react";
import { View, FlatList, Platform, Text } from "react-native";
import LayoutStyles from "../constants/LayoutStyles";
import { AppContext } from "../data/AppContext";
import CollectionTile from "./CollectionTile";
import { storeData } from "../data/AppStorage";

export default CollectionContainer = () => {
  const [appData, setAppData] = useContext(AppContext);
  const fishCollection = appData.fish;
  const clickHandler = (id) => {
    console.log('collection click')
    setAppData(appData => ({
      currentId: id,
      idCounter: appData.idCounter,
      fish: appData.fish,
    }));
    storeData(appData);
  }

  return (
    < View style={LayoutStyles.collectionContainer} >
      <Text style={{fontSize: 16, fontWeight: 'bold', color: 'white'}}>Your Collection</Text>

      <FlatList
        data={fishCollection}
        renderItem={(itemData) => {
          return <CollectionTile
            //title={itemData.item.id}
            id={itemData.item.id}
            onPress={() => clickHandler(itemData.item.id)}
            isActive={appData.currentId === itemData.item.id} />
        }}
        numColumns={2}
        style={{ width: '100%' }}
      />
    </View >
  )
}