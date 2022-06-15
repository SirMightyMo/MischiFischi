import React, { useState, useEffect } from 'react';
import MainNavigator from './navigator/MainNavigator';
import { AppContext } from './data/AppContext';
import FishModel from './models/FishModel';
import { getData } from './data/AppStorage';
import uuid from 'react-native-uuid';
import { Modal } from "react-native";
import HelpScreen from './screens/HelpScreen';

export default App => {
  //default data for first time app gets opened:
  const UUID = uuid.v4();
  const [modalVisible, setModalVisible] = useState(false);
  const [appData, setAppData] = useState({
    currentId: UUID,
    fish: [new FishModel(UUID, 0, 0, 0, '#ff0000', '#00ff00', 0, false, "")]
  });
  //get data from local storage and overwrite default data
  useEffect(() => {
    getData().then((returnValue) => { setAppData(JSON.parse(returnValue)) }).catch( () =>setModalVisible(true), () => console.log('no local data found, using default data...'))
  }, []);

  return (
    <AppContext.Provider value={[appData, setAppData]}>
      <MainNavigator />
      <Modal animationType="slide" transparent={true} visible={modalVisible} >
        <HelpScreen setModalVisible={setModalVisible} modalVisible={modalVisible} />
      </Modal>
    </AppContext.Provider>

  );
}
