import React, { useState, useEffect } from 'react';
import MainNavigator from './navigator/MainNavigator';
import { AppContext } from './data/AppContext';
import FishModel from './models/FishModel';
import { getData } from './data/AppStorage';
import uuid from 'react-native-uuid';

export default App => {
  //default data:
  const [appData, setAppData] = useState({
    currentId: 0,
    idCounter: 0,
    /* 
      Default fish when you open the App for the first time:
      FishModel: [{id:0 ,body:0 ,fin:0 ,backFin:0, color1:'#FF0000', color2:'#00FF00'}]
    */
    fish: [new FishModel(uuid.v4(), 0, 0, 0, '#ff0000', '#00ff00', 0)]
  });
  //get data from local storage 
  useEffect(() => {
    getData().then((returnValue) => { setAppData(JSON.parse(returnValue)) }).catch(() => console.log('no local data found, using default data...'))
  }, []);

  return (
    <AppContext.Provider value={[appData, setAppData]}>
      <MainNavigator />
    </AppContext.Provider>
  );
}
