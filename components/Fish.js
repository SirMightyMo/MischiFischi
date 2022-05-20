import React, { useContext } from "react";
import { Dimensions } from 'react-native';
import Svg, { G } from "react-native-svg";
import { AppContext } from "../data/AppContext";

import Body1 from './fishParts/Body1'; // TESTDATA
import Fins1 from './fishParts/Fins1'; // TESTDATA
import Tail1 from './fishParts/Tail1'; // TESTDATA

export default Fish = () => {
  const [appData, setAppData] = useContext(AppContext);
  const selectedFish = appData.fish.find(fish => fish.id === appData.currentId);

  //function that returns the svg component corresponding to the int found in 'selectedFish.body' 
  const bodyToRender = (selectedFish) => {
    switch (selectedFish.body) {
      case 0:
        return <Body1 gradientCol1={selectedFish.color1} gradientCol2={selectedFish.color2} />;
      case 1:
        return <Body1 gradientCol1={selectedFish.color1} gradientCol2={selectedFish.color2} />;
      case 2:
        return <Body1 gradientCol1={selectedFish.color1} gradientCol2={selectedFish.color2} />;
      default:
        break;
    }
  }
  //function that returns the svg component corresponding to the int found in 'selectedFish.fin' 
  const tailToRender = (selectedFish) => {
    switch (selectedFish.fin) {
      case 0:
        return <Tail1 gradientCol1={selectedFish.color1} gradientCol2={selectedFish.color2} />;
      case 1:
        return <Tail1 gradientCol1={selectedFish.color1} gradientCol2={selectedFish.color2} />;
      case 2:
        return <Tail1 gradientCol1={selectedFish.color1} gradientCol2={selectedFish.color2} />;
      default:
        break;
    }
  }
  //function that returns the svg component corresponding to the int found in 'selectedFish.backFin' 
  const backFinToRender = (selectedFish) => {
    switch (selectedFish.backFin) {
      case 0:
        return <Fins1 gradientCol1={selectedFish.color1} gradientCol2={selectedFish.color2} />;
      case 1:
        return <Fins1 gradientCol1={selectedFish.color1} gradientCol2={selectedFish.color2} />;
      case 2:
        return <Fins1 gradientCol1={selectedFish.color1} gradientCol2={selectedFish.color2} />;
      default:
        break;
    }
  }

   /* 
   Wraps all fish components in one JSX-SVG-Component.
   TODO: Check scale & positions with final fish-components 
   TODO: Calculate Scale
  */

   const windowWidth = Dimensions.get('window').width;
   const viewBox = "0 0 " + Math.floor(windowWidth) + " " + Math.floor(windowWidth/1.7777777777);

  const WrappedFishSvg = () => (
    <Svg height="100%" width="100%" viewBox={viewBox}>
      <G scale="1">
        {bodyToRender(selectedFish)}
      </G>
      <G scale="1">
        {tailToRender(selectedFish)}
      </G>
      <G scale="1">
        {backFinToRender(selectedFish)}
      </G>
    </Svg>
  );

  return (
      <WrappedFishSvg />
  );
};