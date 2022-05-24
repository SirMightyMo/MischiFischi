import React, { useContext } from "react";
import { G } from "react-native-svg";
import { AppContext } from "../data/AppContext";
import {getPatternURL} from './fishParts/Patterns';
import Body1 from './fishParts/Body1';
import Body2 from './fishParts/Body2';
import Body3 from './fishParts/Body3';
import Body4 from './fishParts/Body4';
import Fins1 from './fishParts/Fins1';
import Fins2 from './fishParts/Fins2';
import Fins3 from './fishParts/Fins3';
import Fins4 from './fishParts/Fins4';
import Tail1 from './fishParts/Tail1';
import Tail2 from './fishParts/Tail2';
import Tail3 from './fishParts/Tail3';
import Tail4 from './fishParts/Tail4';

export default Fish = (props) => {
  const [appData, setAppData] = useContext(AppContext);

  // checks if props has 'fishId' value set. If Value is set it gets used to finde fish to render. 
  const selectedFish = props.fishId === undefined ? 
  appData.fish.find(fish => fish.id === appData.currentId) : 
  appData.fish.find(fish => fish.id === props.fishId)

  //function that returns the svg component corresponding to the int found in 'selectedFish.body' 
  const bodyToRender = (selectedFish) => {
    switch (selectedFish.body) {
      case 0:
        return <Body1 gradientCol1={selectedFish.color1} gradientCol2={selectedFish.color2} pattern={getPatternURL(selectedFish.pattern)} />;
      case 1:
        return <Body2 gradientCol1={selectedFish.color1} gradientCol2={selectedFish.color2} pattern={getPatternURL(selectedFish.pattern)} />;
      case 2:
        return <Body3 gradientCol1={selectedFish.color1} gradientCol2={selectedFish.color2} pattern={getPatternURL(selectedFish.pattern)} />;
      case 3:
        return <Body4 gradientCol1={selectedFish.color1} gradientCol2={selectedFish.color2} pattern={getPatternURL(selectedFish.pattern)} />;
      default:
        break;
    }
  }
  //function that returns the svg component corresponding to the int found in 'selectedFish.fin' 
  const tailToRender = (selectedFish) => {
    switch (selectedFish.fin) {
      case 0:
        return <Tail1 gradientCol1={selectedFish.color1} gradientCol2={selectedFish.color2} pattern={getPatternURL(selectedFish.pattern)} />;
      case 1:
        return <Tail2 gradientCol1={selectedFish.color1} gradientCol2={selectedFish.color2} pattern={getPatternURL(selectedFish.pattern)} />;
      case 2:
        return <Tail3 gradientCol1={selectedFish.color1} gradientCol2={selectedFish.color2} pattern={getPatternURL(selectedFish.pattern)} />;
      case 3:
        return <Tail4 gradientCol1={selectedFish.color1} gradientCol2={selectedFish.color2} pattern={getPatternURL(selectedFish.pattern)} />;
      default:
        break;
    }
  }
  //function that returns the svg component corresponding to the int found in 'selectedFish.backFin' 
  const backFinToRender = (selectedFish) => {
    switch (selectedFish.backFin) {
      case 0:
        return <Fins1 gradientCol1={selectedFish.color1} gradientCol2={selectedFish.color2} pattern={getPatternURL(selectedFish.pattern)} />;
      case 1:
        return <Fins2 gradientCol1={selectedFish.color1} gradientCol2={selectedFish.color2} pattern={getPatternURL(selectedFish.pattern)} />;
      case 2:
        return <Fins3 gradientCol1={selectedFish.color1} gradientCol2={selectedFish.color2} pattern={getPatternURL(selectedFish.pattern)} />;
      case 3:
        return <Fins4 gradientCol1={selectedFish.color1} gradientCol2={selectedFish.color2} pattern={getPatternURL(selectedFish.pattern)} />;
      default:
        break;
    }
  }

  return (
    <G>
      {tailToRender(selectedFish)}
      {backFinToRender(selectedFish)}
      {bodyToRender(selectedFish)}
    </G>
  );
};