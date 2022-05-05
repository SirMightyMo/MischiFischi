import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import MainNavigator from './navigator/MainNavigator';
import { AppContext } from './data/AppContext';
import Fish from './components/Fish';

export default App => {

  const [appData, setAppData] = useState({

    currentId: 0,
    fish: [{id: 0 ,body: 1 , fin:1 , backFin:1,  color:'#FF0000'}]
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
