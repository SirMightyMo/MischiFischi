import React, { useState, useEffect } from 'react';
import MainNavigator from './navigator/MainNavigator';
import { AppContext } from './data/AppContext';
import FishModel from './models/FishModel';
import { getData } from './data/AppStorage';
import uuid from 'react-native-uuid';

export default App => {
  //default data for first time app gets opened:
  const UUID = uuid.v4();
  const [appData, setAppData] = useState({
    currentId: UUID,
    fish: [new FishModel(UUID, 0, 0, 0, '#ff0000', '#00ff00', 0, False, "")]
  });
  //get data from local storage and overwrite default data
  useEffect(() => {
    getData().then((returnValue) => { setAppData(JSON.parse(returnValue)) }).catch(() => console.log('no local data found, using default data...'))
  }, []);

  return (
    <AppContext.Provider value={[appData, setAppData]}>
      <MainNavigator />
    </AppContext.Provider>
  );
}
