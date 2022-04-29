import React ,{useContext} from "react";
import { View, Text } from "react-native";
import Svg, { Circle, ForeignObject, Rect, SvgCss, SvgXml } from "react-native-svg";
import LayoutStyles from "../constants/LayoutStyles";
import Pfeile from '../assets/pfeile.svg'
import { AppContext } from "../data/AppContext";


export default SvgCanvas = () => {
   const [appData,setAppData] = useContext(AppContext);

  return (
    <View style={LayoutStyles.canvasContainer}>
      <Text>See Fish</Text>

      <Svg height="100%" width="100%" viewBox="0 0 500 500" >

        <ForeignObject x={appData.xPos} y={appData.yPos} >
          <Pfeile height="100%" width="100%" />
        </ForeignObject>
        <ForeignObject x={50} y={100} >
          <Pfeile height="100%" width="100%" />
        </ForeignObject>

        </Svg>
    </View>
  );
};

/*        <Circle cx="50" cy="50" r="45" stroke="blue" strokeWidth="2.5" fill="green" />
        <Rect x="10%" y="10%" width="50" height="50" stroke="red" strokeWidth="2" fill="yellow" rotation='-45.0' />
        <Pfeile width='100' height='100' color='red' />
        */