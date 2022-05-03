import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import MainNavigator from './navigator/MainNavigator';
import { AppContext } from './data/AppContext';
import Fish from './models/fish';

export default App => {

  const [appData, setAppData] = useState({

    idCounterFish: 0,
    fish: [new Fish(0,100,100)]
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
