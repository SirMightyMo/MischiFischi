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
  const currentFish = appData.fish.find(fish => fish.id === appData.currentId)
  const fishToRender = (currentFish) => {
    switch (currentFish.body) {
      case 0:
        return (<Body01 fillOpacity={1} strokeOpacity={1} fill='#00FF00' strokeWidth={20} stroke='#FF0000' />)
      case 1:
        return (<Body01 fillOpacity={1} strokeOpacity={1} fill='#0000FF' strokeWidth={20} stroke='#FF0000' />)
      case 2:
        return (<Body01 fillOpacity={1} strokeOpacity={1} fill='#FF0000' strokeWidth={20} stroke='#FF0000' />)

      default:
        break;
    }
  }
return (
  fishToRender(currentFish)
);
  
};

//width='1920px' height='1080px' viewBox="0 0 1920 1080" 

/*


  if (currentFish.body == 1) {
    return (
      <Svg>
        <Background />
        <ForeignObject x={100} y={100}>
          <Body01 fillOpacity={1} strokeOpacity={1} fill='#00FF00' strokeWidth={20} stroke='#FF0000' />
        </ForeignObject>
        <Fin01 fillOpacity='0%' strokeOpacity='0%' />
        <BackFin01 />
      </Svg>
    );
  } else {
    return (
      <Svg>
        <Background />
        <ForeignObject x={100} y={100}>
          <Body01 fillOpacity={0} strokeOpacity={0} />
        </ForeignObject>
        <Fin01 fillOpacity='0%' strokeOpacity='0%' />
        <BackFin01 />
      </Svg>
    )
  }

  */