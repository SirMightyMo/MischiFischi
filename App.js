import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import MainNavigator from './navigator/MainNavigator';
import { AppContext } from './data/AppContext';
import FishModel from './models/FishModel';
import ShareScreen from './screens/ShareScreen';

export default App => {

  const [appData, setAppData] = useState({

    currentId: 0,
    fish: [new FishModel(0,1,1,1,'#ff0000')]
    //fish: [{id: 0 ,body: 1 , fin:1 , backFin:1,  color:'#FF0000'}]
  });


  return (
    <AppContext.Provider value={[appData, setAppData]}>
      <MainNavigator />
    </AppContext.Provider>
  );
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
