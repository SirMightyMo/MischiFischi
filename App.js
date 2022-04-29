import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import MainNavigator from './navigator/MainNavigator';
import { AppContext } from './data/AppContext';

export default App => {

  const [appData, setAppData] = useState({ xPos: 0, yPos: 0 });


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
