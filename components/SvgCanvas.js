import React, { useContext } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { AppContext } from "../data/AppContext";
import LayoutStyles from "../constants/LayoutStyles";
import Fish from "./Fish";
import { Svg, Rect } from "react-native-svg";
import Background from '../assets/bg'
import ReactDOMServer from "react-dom/server";
import Video from 'react-native';

// Canvas to SVG

const isWeb = Platform.OS === "web";
const childToWeb = child => {
  const { type, props } = child;
  const name = type && type.displayName;
  const webName = name && name[0].toLowerCase() + name.slice(1);
  const Tag = webName ? webName : type;
  return <Tag {...props}>{toWeb(props.children)}</Tag>;
};

const toWeb = children => React.Children.map(children, childToWeb);

renderSvg = () => {
  return (
      <Fish />      
  );
}
serialize = () => {
  const element = renderSvg();
  const webJsx = isWeb ? element : toWeb(element);
  console.log(webJsx)
  const svgString = ReactDOMServer.renderToStaticMarkup(webJsx);
  console.log(svgString);
};

/* render = () => {
  return (
    <TouchableOpacity style={styles.container} onPress={this.serialize}>
      {this.renderSvg()}
    </TouchableOpacity>
  );
} */

export default SvgCanvas = () => {
  const [appData, setAppData] = useContext(AppContext);
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
      {/* <Button style={{position: "absolute"}} title="save" onPress={() => serialize()} /> */}
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