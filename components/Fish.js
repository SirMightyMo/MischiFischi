import Svg, { ForeignObject } from "react-native-svg";
import React, { useContext, useState } from "react";
import { View, Text } from "react-native";
import { AppContext } from "../data/AppContext";
import LayoutStyles from "../constants/LayoutStyles";
import Body01 from '../assets/body01'
import Fin01 from '../assets/fin01'
import BackFin01 from '../assets/backFin01'
import Background from '../assets/bg'
import { Button } from "react-native-elements";

export default Fish = () => {
  const [appData, setAppData] = useContext(AppContext);

  const [opacity, setOpacity] = useState('0');

  const buttonHandler = () => {
    console.log('click')
    if(appData.body == 1){
      setOpacity('100%')
      console.log('click')
    }
}

  return (
  <View style={{ borderColor:'red', borderWidth:2, margin:10}}>
      <Button style={{flex:1}} title='on' onPress={() => buttonHandler()} />
    <Svg style={{flex:1}} >
      <Background />
      <ForeignObject x={100} y={100}>
        <Body01 fillOpacity={opacity} strokeOpacity={opacity} />
      </ForeignObject>

      <Fin01 fillOpacity='0%' strokeOpacity='0%' />
      <BackFin01 />
    </Svg>

  </View>
  );
};

//width='1920px' height='1080px' viewBox="0 0 1920 1080" 