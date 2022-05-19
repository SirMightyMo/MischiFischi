import React, { useContext, useState } from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";
import { AppContext } from "../data/AppContext";
import LayoutStyles from "../constants/LayoutStyles";
import Fish from "./Fish";
import { Svg, Rect, G } from "react-native-svg";
import Background from '../assets/bg'
import ReactDOMServer from "react-dom/server";
import Video from 'react-native';


// ----------------- TEST ----------------

import {returnFishBody} from '../components/fishPartsJSX/fishBody1';

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
    console.log(returnFishBody(appData.fish[appData.currentId].color1, appData.fish[appData.currentId].color2));
    /*
      TODO: Function/Switch required to get selected fish-parts (compare Fish.js)
      TODO: Filewriter?
    */
  }
  
  return (
    <View style={LayoutStyles.canvasContainer}>
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

/* <View style={LayoutStyles.canvasContainer}>
<Text>See Fish</Text>
<Svg>
<Background />
<Fish />
</Svg>
</View> */