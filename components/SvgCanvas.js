import React, { useContext } from "react";
import { View, Text } from "react-native";
import Svg, { ForeignObject } from "react-native-svg";
import LayoutStyles from "../constants/LayoutStyles";
import Pfeile from '../assets/pfeile.svg'
import { AppContext } from "../data/AppContext";


export default SvgCanvas = () => {
  const [appData, setAppData] = useContext(AppContext);

  return (
    <View style={LayoutStyles.canvasContainer}>
      <Text>See Fish</Text>

      <Svg height="100%" width="100%" viewBox="0 0 500 500" >

        <ForeignObject x={appData.fish[0].xPos} y={appData.fish[0].yPos}  >
          <Pfeile height="100%" width="100%" fill='#00ff00' stroke='#ff0000' />
        </ForeignObject>

      </Svg>
    </View>
  );
};