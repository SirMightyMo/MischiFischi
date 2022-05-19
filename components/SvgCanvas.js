import React, { useContext } from "react";
import { Button, View } from "react-native";
import LayoutStyles from "../constants/LayoutStyles";
import { AppContext } from "../data/AppContext";
import Fish from "./Fish";

import Background from '../assets/bg'
import Video from 'react-native';

// ----------------- TEST ----------------
import { returnFishBody1 } from './fishParts/Body1';
import { returnFishFins1 } from './fishParts/Fins1';
import { returnFishTail1 } from './fishParts/Tail1';
// ---------------------------------------


// Canvas to SVG

const childToWeb = child => {
  const { type, props } = child;
  const name = type && type.displayName;
  const webName = name && name[0].toLowerCase() + name.slice(1);
  const Tag = webName ? webName : type;
  return <Tag {...props}>{toWeb(props.children)}</Tag>;
};

const toWeb = children => React.Children.map(children, childToWeb);


export default SvgCanvas = () => {
  
  const [appData, setAppData] = useContext(AppContext);
  const currentFish = appData.fish.find(fish => fish.id === appData.currentId);

  const exportSVG = () => {
    // Console includes complete SVG-Output
    //TODO: Concatenate everything and send(?)
    console.log(`
    <svg id="${appData.currentId}" data-name="${appData.currentId}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1280 720">
      <defs>
      <linearGradient id="grad" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stop-color="${appData.fish[appData.currentId].color2}" />
        <stop offset="100%" stop-color="${appData.fish[appData.currentId].color1}" />
      </linearGradient>
      </defs>
    `);
    console.log(returnFishBody1());
    console.log(returnFishFins1());
    console.log(returnFishTail1())
    console.log(`</svg>`);
    /*
      TODO: Function/Switch required to get selected fish-parts (compare Fish.js)
      TODO: Filewriter?
    */
  }
  
  return (
    <View style={LayoutStyles.canvasContainer}>
      {/* TODO: Video-Background? */}
      {/* <Video
        source={require("../assets/fish/bg.mp4")}
        style={LayoutStyles.backgroundVideo}
        muted={true}
        repeat={true}
        resizeMode={"cover"}
        rate={1.0}
        ignoreSilentSwitch={"obey"}
      /> */}
      <Fish />
      {/* <Background style={{position: "absolute"}}/> */}
      <Button style={{position: "absolute"}} title="save" onPress={() => exportSVG()} />
    </View>
  )

};