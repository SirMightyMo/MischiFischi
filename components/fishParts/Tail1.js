import * as React from "react"
import Svg, { Defs, G, Path, LinearGradient, Stop } from "react-native-svg"

/* Gradients on iOS won't work, so these functions define wether gradient is used or not */
function colorFill(color1) {
  return Platform.OS === 'ios' ? color1 : "url(#grad)";
}

const Tail1 = (props) => (
  <Svg
    data-name="tail1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 496.95 286.36"
    {...props}
  >
    <Defs>
      <LinearGradient id="grad" x1="0" y1="0" x2="1" y2="0">
        <Stop offset="0" stopColor={props.gradientCol2} stopOpacity="1" />
        <Stop offset="1" stopColor={props.gradientCol1} stopOpacity="1" />
      </LinearGradient>
    </Defs>
    <G id="tailfin_4_">
      <Path
        id="tailfinfill_2_"
        style={{
          fill: colorFill(props.gradientCol1),
        }}
        d="m95.04 112.86-15.25-9.25-15.5-8.5-14.75-1.25-12 4-4 5.5v3.75l-1.75 6.62-2.37 7.5-.88 8.13-1.87 13.82-1.63 16.05 1.38 17.63 2.5 14.37 4.75 11.38 5.62 3.87 7.88 1 11.37-3.5 11.88-7.87 12.87-9.88 7.75-5.87 8.63-3.75 10.75-7.25-7.5-40.88z"
      />
      <G id="tailfin_5_">
        <Path
          style={{stroke: "#000", strokeWidth: 2}}
          className="st1"
          d="M91.36 110.15c-4.45-2.64-8.86-5.37-13.38-7.88-5.29-2.94-10.59-5.98-16.63-7.08-7.4-1.34-14.69-1.3-21.84 1.8-4.56 1.97-6.35 5.24-6.54 9.89-.07 1.74-.2 3.58-.84 5.16-2.67 6.58-3.74 13.46-4.34 20.47-.6 7.01-1.55 13.99-2.11 21.01-.39 4.89-.83 9.84-.5 14.72.67 9.75 2.1 19.48 5.77 28.59 1.6 3.97 3.38 8.63 8.35 9.77 2.78.64 5.83.59 8.7.31 9.33-.9 16.71-5.92 23.75-11.65 7.07-5.75 13.94-11.8 22.08-16.1.39-.21.9-.2 1.36-.29"
        />
        <Path
          style={{stroke: "#000", strokeWidth: 2}}
          className="st1"
          d="M60.27 135.52c-8.73 2.64-17.43 5.35-26.2 7.85-2.26.64-4.71.6-7.07.87M63.54 121.88c-10.79-1.43-21.49-.48-32.18 1.09M58.09 154.61C48.85 160.85 39 166 28.89 170.66c-.78.36-1.8.22-2.71.31M67.36 172.06c-9.09 9.76-19.65 17.86-30.01 26.17-.31.25-.72.37-1.08.55M61.91 107.15c-7.51-1.72-15.08-.84-22.64-.53-2 .08-4 .35-6 .53"
        />
      </G>
    </G>
  </Svg>
)

export default Tail1;

export function returnFishTail1() {
    return (
      `
      <defs>
      <style>
        .cls-1 {
          fill: url('#grad');
        }
  
        .cls-2 {
          fill: none;
          stroke: #000;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-width: 2px;
        }
      </style>
    </defs>
    <g id="tailfin">
      <polygon id="tailfinfill" class="cls-1" points="95.04 112.86 79.79 103.61 64.29 95.11 49.54 93.86 37.54 97.86 33.54 103.36 33.54 107.11 31.79 113.73 29.42 121.23 28.54 129.36 26.67 143.18 25.04 159.23 26.42 176.86 28.92 191.23 33.67 202.61 39.29 206.48 47.17 207.48 58.54 203.98 70.42 196.11 83.29 186.23 91.04 180.36 99.67 176.61 110.42 169.36 102.92 128.48 95.04 112.86"/>
      <g id="tailfin-2" data-name="tailfin">
        <path class="cls-2" d="M91.36,110.15c-4.45-2.64-8.86-5.37-13.38-7.88-5.29-2.94-10.59-6-16.63-7.08C54,93.85,46.66,93.89,39.51,97c-4.56,2-6.35,5.24-6.54,9.89a15.59,15.59,0,0,1-.84,5.16c-2.67,6.58-3.74,13.46-4.34,20.47s-1.55,14-2.11,21a100.67,100.67,0,0,0-.5,14.72c.67,9.75,2.1,19.48,5.77,28.59,1.6,4,3.38,8.63,8.35,9.77a27.55,27.55,0,0,0,8.7.31c9.33-.9,16.71-5.92,23.75-11.65s13.94-11.8,22.08-16.1a4.91,4.91,0,0,1,1.36-.29"/>
        <path class="cls-2" d="M60.27,135.52c-8.73,2.64-17.43,5.35-26.2,7.85a44.65,44.65,0,0,1-7.07.87"/>
        <path class="cls-2" d="M63.54,121.88c-10.79-1.43-21.49-.48-32.18,1.09"/>
        <path class="cls-2" d="M58.09,154.61a205.52,205.52,0,0,1-29.2,16,8.81,8.81,0,0,1-2.71.31"/>
        <path class="cls-2" d="M67.36,172.06c-9.09,9.76-19.65,17.86-30,26.17a5.77,5.77,0,0,1-1.08.55"/>
        <path class="cls-2" d="M61.91,107.15c-7.51-1.72-15.08-.84-22.64-.53-2,.08-4,.35-6,.53"/>
      </g>
    </g>
  `
    )
  };