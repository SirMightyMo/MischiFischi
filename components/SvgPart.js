import React from "react";
import Svg, { ForeignObject } from 'react-native-svg';

export default SvgPart = (Asset, x, y, width, height) => {
  return (
    <ForeignObject x={x} y={y}>
      <Asset height={height} width={width} />
    </ForeignObject>

  )
}