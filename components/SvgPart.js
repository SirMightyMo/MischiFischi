
// unused


import React from "react";
import Svg, { ForeignObject } from 'react-native-svg';

export default SvgPart = (asset, x, y, width, height) => {
  return (
    <ForeignObject x={x} y={y}>
      <Svg height={height} width={width} >
        {asset}
      </Svg>
    </ForeignObject>

  )
}