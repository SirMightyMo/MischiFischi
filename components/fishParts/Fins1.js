import * as React from "react"
import Svg, { Defs, G, Path, LinearGradient, Stop } from "react-native-svg"

/* Gradients on iOS won't work, so these functions define wether gradient is used or not */
function colorFillApp(color) {
  return Platform.OS === 'ios' ? color : "url(#grad)";
}

function colorFillExport(color) {
  return Platform.OS === 'ios' ? color : "url('#grad')";
}

const Fins1 = (props) => (
  <Svg
    data-name="fins1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 640 360"
    {...props}
  >
    <Defs>
      <LinearGradient id="grad" x1="0" y1="0" x2="1" y2="0">
        <Stop offset="0" stopColor={props.gradientCol2} stopOpacity="1" />
        <Stop offset="1" stopColor={props.gradientCol1} stopOpacity="1" />
      </LinearGradient>
    </Defs>
    <G id="fins">
      <Path
        id="finsfill"
        style={{
          fill: colorFillApp(props.gradientCol2),
        }}
        d="m296.06 109.69-5.25-12.25-1.25-7.5 3.25-8.25 6-5 11.5-6.5 13.5-3.75 11-2h19l5.19 2 6.06 1.75 5 2.75 4 5 2.5 7v10.25l-1.5 7-3.5 5.75-4.25 184.75 2 9-1.75 7.75-6.75 5-11.47 2.25-16.28 2.39-8.14-.24h-9.61l-7.54-1.26-6.8-2.07-4.73-3.18-.85-6.05 1.36-3 2.06-2.39 1.69-3.7.75-3.75-5.19-181.75z"
      />
      <G id="fins-2" data-name="fins">
        <Path
          className="fins1-2"
          style={{stroke: "#000", strokeWidth: 2}}
          d="M302.45 287.53c-1 3.09-1.93 6.21-3 9.26a8.67 8.67 0 0 1-1.88 2.73c-2.91 3.11-3.13 10.79.08 12.74a29.69 29.69 0 0 0 9 3.54A66.11 66.11 0 0 0 318 317a106.87 106.87 0 0 0 13.63 0c10.86-1 21.85-1.47 31.92-6.47 4.29-2.13 6.14-5.81 5.51-10.65-.12-.95.49-2 .76-3M365.45 122.26a29.34 29.34 0 0 1 6.3-17.16c5.61-7.2 6.19-15.21 4.36-23.75-1-4.85-2.78-9.24-7.41-11.68a33.93 33.93 0 0 0-8.45-3.5c-6.54-1.4-13.08-2.89-19.89-2.59a87.33 87.33 0 0 0-24.56 4.9 71.09 71.09 0 0 0-19.3 9.65A15.92 15.92 0 0 0 290 91.7c.16 6.38 2.83 12.14 5.81 17.77 1.52 2.86 2.25 6.14 3.35 9.23.26.73.54 1.46.82 2.18"
        />
        <Path 
          className="fins1-2"
          style={{stroke: "#000", strokeWidth: 2}}
          d="M357.81 66.35Q356 79.18 354.26 92c-.42 3-.9 6-1.36 9M339 66.63c1.72 8.58 1.5 17.24 1.1 25.91v2.45M309.54 74.81q2.32 7.64 4.63 15.27c.49 1.63.91 3.27 1.37 4.91M324.27 68.26a80.17 80.17 0 0 1 2.18 19.09M298.91 78.35q1.77 5.59 3.55 11.18M366.27 286.71q1.23 5.32 2.45 10.64M317.18 304.44c.18 3.27.36 6.55.55 9.82M330.27 305c.27 2.73.55 5.45.82 8.18M305.73 306.07c-.82 2.64-1.64 5.27-2.45 7.91M355.91 302.25c.55 2.36 1.09 4.73 1.64 7.09M343.91 305.53l2.73 7.09"
        />
      </G>
    </G>
  </Svg>
)

export default Fins1;

export function returnFishFins1(color) {
    return (
      `
  <defs>
    <style>
      .fins1-1, #finsfill {
        fill: ${colorFillExport(color)};
      }

      .fins1-2 {
        fill: none;
        stroke: #000;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-width: 2px;
      }
    </style>
  </defs>
  <g id="fish1">
    <g id="fins">
      <polygon id="finsfill" class="fins1-1" points="296.06 109.69 290.81 97.44 289.56 89.94 292.81 81.69 298.81 76.69 310.31 70.19 323.81 66.44 334.81 64.44 344.56 64.44 353.81 64.44 359 66.44 365.06 68.19 370.06 70.94 374.06 75.94 376.56 82.94 376.56 93.19 375.06 100.19 371.56 105.94 367.31 290.69 369.31 299.69 367.56 307.44 360.81 312.44 349.34 314.69 333.06 317.08 324.92 316.84 315.31 316.84 307.77 315.58 300.97 313.51 296.24 310.33 295.39 304.28 296.75 301.28 298.81 298.89 300.5 295.19 301.25 291.44 296.06 109.69"/>
      <g id="fins-2" data-name="fins">
        <g>
          <path id="finsfill" class="fins1-2" d="M302.45,287.53c-1,3.09-1.93,6.21-3,9.26a8.67,8.67,0,0,1-1.88,2.73c-2.91,3.11-3.13,10.79.08,12.74a29.69,29.69,0,0,0,9,3.54A66.11,66.11,0,0,0,318,317a106.87,106.87,0,0,0,13.63,0c10.86-1,21.85-1.47,31.92-6.47,4.29-2.13,6.14-5.81,5.51-10.65-.12-.95.49-2,.76-3"/>
          <path id="finsfill" class="fins1-2" d="M365.45,122.26a29.34,29.34,0,0,1,6.3-17.16c5.61-7.2,6.19-15.21,4.36-23.75-1-4.85-2.78-9.24-7.41-11.68a33.93,33.93,0,0,0-8.45-3.5c-6.54-1.4-13.08-2.89-19.89-2.59a87.33,87.33,0,0,0-24.56,4.9,71.09,71.09,0,0,0-19.3,9.65A15.92,15.92,0,0,0,290,91.7c.16,6.38,2.83,12.14,5.81,17.77,1.52,2.86,2.25,6.14,3.35,9.23.26.73.54,1.46.82,2.18"/>
          <path class="fins1-2" d="M357.81,66.35Q356,79.18,354.26,92c-.42,3-.9,6-1.36,9"/>
          <path class="fins1-2" d="M339,66.63c1.72,8.58,1.5,17.24,1.1,25.91,0,.82,0,1.64,0,2.45"/>
          <path class="fins1-2" d="M309.54,74.81q2.32,7.64,4.63,15.27c.49,1.63.91,3.27,1.37,4.91"/>
          <path class="fins1-2" d="M324.27,68.26a80.17,80.17,0,0,1,2.18,19.09"/>
          <path class="fins1-2" d="M298.91,78.35q1.77,5.59,3.55,11.18"/>
          <path class="fins1-2" d="M366.27,286.71q1.23,5.32,2.45,10.64"/>
          <path class="fins1-2" d="M317.18,304.44c.18,3.27.36,6.55.55,9.82"/>
          <path class="fins1-2" d="M330.27,305c.27,2.73.55,5.45.82,8.18"/>
          <path class="fins1-2" d="M305.73,306.07c-.82,2.64-1.64,5.27-2.45,7.91"/>
          <path class="fins1-2" d="M355.91,302.25c.55,2.36,1.09,4.73,1.64,7.09"/>
          <path class="fins1-2" d="M343.91,305.53l2.73,7.09"/>
        </g>
      </g>
    </g>
  </g>
  `
    )
  };