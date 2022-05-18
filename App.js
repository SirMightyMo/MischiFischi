import React, { useState } from 'react';
import MainNavigator from './navigator/MainNavigator';
import { AppContext } from './data/AppContext';
import FishModel from './models/FishModel';

export default App => {

  const [appData, setAppData] = useState({
    currentId: 0,
    /* 
      Default fish when you open the App for the first time:
      FishModel: [{id:0 ,body:0 ,fin:0 ,backFin:0, color1:'#FF0000', color2:'#00FF00'}]
    */
    fish: [new FishModel(0, 0, 0, 0, '#ff0000','#00ff00')]
  });

  return (
    <AppContext.Provider value={[appData, setAppData]}>
      <MainNavigator />
    </AppContext.Provider>
  );
}
