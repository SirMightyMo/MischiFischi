import { Dimensions } from 'react-native';
import React, { useContext} from "react";
import { AppContext } from "../data/AppContext";
import Warp from 'warpjs';

import Svg, { SvgXml, ForeignObject, G, LinearGradient, Defs, Stop, Pattern, Path } from "react-native-svg";
import Body01 from '../assets/body01'
import Fin01 from '../assets/fin01'
import BackFin01 from '../assets/backFin01'

import Body1 from '../assets/fish/body1';
import Body2 from '../assets/fish/body2';
import Body3, {setColorsBody3} from '../components/fishPartsJSX/fishBody1';
import Backfins1 from '../assets/fish/backfins1';
import Backfins2 from '../assets/fish/backfins2';
import Tail1 from '../assets/fish/tail1';
import Tail2 from '../assets/fish/tail2';


export function test() {
  console.log("test");
}

export default Fish = ({childToParent}) => {
  const [appData, setAppData] = useContext(AppContext);
  const currentFish = appData.fish.find(fish => fish.id === appData.currentId);

  //function that return the svg component corresponding to the int found in 'appData.fish[currentFishId].body' 
  const bodyToRender = (currentFish) => {
    switch (currentFish.body) {
      case 0:
        return <Body1 fillOpacity={1} strokeOpacity={1} fill='#0000FF' strokeWidth={5} stroke={appData.fish[appData.currentId].color} />;
      case 1:
        return <Body2 fillOpacity={1} strokeOpacity={1} fill='#0000FF' strokeWidth={5} stroke={appData.fish[appData.currentId].color} />;
      case 2:
        return <Body3 gradientCol1={appData.fish[appData.currentId].color1} gradientCol2={appData.fish[appData.currentId].color2} stroke='#000' />;
      default:
        break;
    }
  }
  //function that return the svg component corresponding to the int found in 'appData.fish[currentFishId].fin' 
  const tailToRender = (currentFish) => {
    switch (currentFish.fin) {
      case 0:
        return <Tail1 fillOpacity={1} strokeOpacity={1} fill='#0000FF' strokeWidth={5} stroke='#FF0000' />;
      case 1:
        return <Tail2 fillOpacity={1} strokeOpacity={1} fill='url(#grad)' strokeWidth={5} stroke='#FF0000' />
      case 2:
        return <Fin01 fillOpacity={1} strokeOpacity={1} fill='#0000FF' strokeWidth={20} />;
      default:
        break;
    }
  }
  //function that return the svg component corresponding to the int found in 'appData.fish[currentFishId].backFin' 
  const backFinToRender = (currentFish) => {
    switch (currentFish.backFin) {
      case 0:
        return <Backfins1 fillOpacity={1} strokeOpacity={1} fill='#0000FF' strokeWidth={5} stroke='#FF0000' />;
      case 1:
        return <Backfins2 fillOpacity={1} strokeOpacity={1} fill='#0000FF' strokeWidth={5} stroke='#FF0000' />;
      case 2:
        return <BackFin01 fillOpacity={1} strokeOpacity={1} fill='#0000FF' strokeWidth={20} stroke='#FF0000' />;
      default:
        break;
    }
  }

   /* Wraps all fish components in one JSX-SVG-Component.
  TODO: Check scale & positions with final fish-components */
  const WrappedFishSvg = () => (
    <Svg height="100%" width="100%">
      <G scale="0.5" x="100" y="80">
        {bodyToRender(currentFish)}
      </G>
      <G scale="0.35" x="0" y="140">
        {tailToRender(currentFish)}
      </G>
      <G scale="0.8" x="10" y="34">
        {backFinToRender(currentFish)}
      </G>
    </Svg>
  );

//console.log(finToRender(currentFish))
  return (
      <WrappedFishSvg />
  );
};