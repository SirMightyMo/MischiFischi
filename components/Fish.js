import React, { useContext } from "react";
import { G } from "react-native-svg";
import { AppContext } from "../data/AppContext";
import {getPatternURL} from './fishParts/Patterns';
import * as FPart from './fishParts/FishParts';

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
        return <FPart.Body1 gradientCol1={selectedFish.color1} gradientCol2={selectedFish.color2} pattern={getPatternURL(selectedFish.pattern)} />;
      case 1:
        return <FPart.Body2 gradientCol1={selectedFish.color1} gradientCol2={selectedFish.color2} pattern={getPatternURL(selectedFish.pattern)} />;
      case 2:
        return <FPart.Body3 gradientCol1={selectedFish.color1} gradientCol2={selectedFish.color2} pattern={getPatternURL(selectedFish.pattern)} />;
      case 3:
        return <FPart.Body4 gradientCol1={selectedFish.color1} gradientCol2={selectedFish.color2} pattern={getPatternURL(selectedFish.pattern)} />;
      case 4:
        return <FPart.Body5 gradientCol1={selectedFish.color1} gradientCol2={selectedFish.color2} pattern={getPatternURL(selectedFish.pattern)} />;
      case 5:
        return <FPart.Body6 gradientCol1={selectedFish.color1} gradientCol2={selectedFish.color2} pattern={getPatternURL(selectedFish.pattern)} />;
      case 6:
        return <FPart.Body7 gradientCol1={selectedFish.color1} gradientCol2={selectedFish.color2} pattern={getPatternURL(selectedFish.pattern)} />;
      default:
        break;
    }
  }
  //function that returns the svg component corresponding to the int found in 'selectedFish.fin' 
  const tailToRender = (selectedFish) => {
    switch (selectedFish.tail) {
      case 0:
        return <FPart.Tail1 gradientCol1={selectedFish.color1} gradientCol2={selectedFish.color2} pattern={getPatternURL(selectedFish.pattern)} />;
      case 1:
        return <FPart.Tail2 gradientCol1={selectedFish.color1} gradientCol2={selectedFish.color2} pattern={getPatternURL(selectedFish.pattern)} />;
      case 2:
        return <FPart.Tail3 gradientCol1={selectedFish.color1} gradientCol2={selectedFish.color2} pattern={getPatternURL(selectedFish.pattern)} />;
      case 3:
        return <FPart.Tail4 gradientCol1={selectedFish.color1} gradientCol2={selectedFish.color2} pattern={getPatternURL(selectedFish.pattern)} />;
      case 4:
        return <FPart.Tail5 gradientCol1={selectedFish.color1} gradientCol2={selectedFish.color2} pattern={getPatternURL(selectedFish.pattern)} />;
      case 5:
        return <FPart.Tail6 gradientCol1={selectedFish.color1} gradientCol2={selectedFish.color2} pattern={getPatternURL(selectedFish.pattern)} />;
      case 6:
        return <FPart.Tail7 gradientCol1={selectedFish.color1} gradientCol2={selectedFish.color2} pattern={getPatternURL(selectedFish.pattern)} />;
      default:
        break;
    }
  }
  //function that returns the svg component corresponding to the int found in 'selectedFish.fin' 
  const finToRender = (selectedFish) => {
    switch (selectedFish.fin) {
      case 0:
        return <FPart.Fins1 gradientCol1={selectedFish.color1} gradientCol2={selectedFish.color2} pattern={getPatternURL(selectedFish.pattern)} />;
      case 1:
        return <FPart.Fins2 gradientCol1={selectedFish.color1} gradientCol2={selectedFish.color2} pattern={getPatternURL(selectedFish.pattern)} />;
      case 2:
        return <FPart.Fins3 gradientCol1={selectedFish.color1} gradientCol2={selectedFish.color2} pattern={getPatternURL(selectedFish.pattern)} />;
      case 3:
        return <FPart.Fins4 gradientCol1={selectedFish.color1} gradientCol2={selectedFish.color2} pattern={getPatternURL(selectedFish.pattern)} />;
      case 4:
        return <FPart.Fins5 gradientCol1={selectedFish.color1} gradientCol2={selectedFish.color2} pattern={getPatternURL(selectedFish.pattern)} />;
      case 5:
        return <FPart.Fins6 gradientCol1={selectedFish.color1} gradientCol2={selectedFish.color2} pattern={getPatternURL(selectedFish.pattern)} />;
      case 6:
        return <FPart.Fins7 gradientCol1={selectedFish.color1} gradientCol2={selectedFish.color2} pattern={getPatternURL(selectedFish.pattern)} />;
      default:
        break;
    }
  }

  return (
    <G>
      {tailToRender(selectedFish)}
      {finToRender(selectedFish)}
      {bodyToRender(selectedFish)}
    </G>
  );
};