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

  //function that return the svg component corresponding to the int found in 'appData.fish[currentFishId].body' 
  const bodyToRender = (currentFish) => {
    switch (currentFish.body) {
      case 0:
        return (<Body01 fillOpacity={1} strokeOpacity={1} fill='#FF0000' strokeWidth={20} stroke='#FF0000' />)
      case 1:
        return (<Body01 fillOpacity={1} strokeOpacity={1} fill='#00FF00' strokeWidth={20} stroke='#FF0000' />)
      case 2:
        return (<Body01 fillOpacity={1} strokeOpacity={1} fill='#0000FF' strokeWidth={20} stroke='#FF0000' />)
      default:
        break;
    }
  }
  //function that return the svg component corresponding to the int found in 'appData.fish[currentFishId].fin' 
  const finToRender = (currentFish) => {
    switch (currentFish.fin) {
      case 0:
        return (<Fin01 fillOpacity={1} strokeOpacity={1} fill='#FF0000' strokeWidth={20}  />)
      case 1:
        return (<Fin01 fillOpacity={1} strokeOpacity={1} fill='#00FF00' strokeWidth={20}  />)
      case 2:
        return (<Fin01 fillOpacity={1} strokeOpacity={1} fill='#0000FF' strokeWidth={20}  />)
      default:
        break;
    }
  }
  //function that return the svg component corresponding to the int found in 'appData.fish[currentFishId].backFin' 
  const backFinToRender = (currentFish) => {
    switch (currentFish.backFin) {
      case 0:
        return (<BackFin01 fillOpacity={1} strokeOpacity={1} fill='#FF0000' strokeWidth={20} stroke='#FF0000' />)
      case 1:
        return (<BackFin01 fillOpacity={1} strokeOpacity={1} fill='#00FF00' strokeWidth={20} stroke='#FF0000' />)
      case 2:
        return (<BackFin01 fillOpacity={1} strokeOpacity={1} fill='#0000FF' strokeWidth={20} stroke='#FF0000' />)
      default:
        break;
    }
  }

  return (
    <Svg>
      {finToRender(currentFish)}
      {bodyToRender(currentFish)}
      {backFinToRender(currentFish)}
    </Svg>
  );
};