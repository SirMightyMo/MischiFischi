import * as React from "react";
import { G, Path } from "react-native-svg";

// props.pattern instead of fill="none" for using pattern
const Tail1 = (props) => (
    <G id="tailfin">
      <Path
        id="tailfinfill"
        style={{
          fill: "url(#grad)",
        }}
        d="m175.81 169.94-15.25-9.25-15.5-8.5-14.75-1.25-12 4-4 5.5v3.75l-1.75 6.62-2.37 7.5-.88 8.13-1.87 13.82-1.63 16.05 1.38 17.63 2.5 14.37 4.75 11.38 5.62 3.87 7.88 1 11.37-3.5 11.88-7.87 12.87-9.88 7.75-5.87 8.63-3.75 10.75-7.25-7.5-40.88-7.88-15.62z"
      />
      <Path
        id="tailfinfill"
        style={{
          fill: "none",
        }}
        d="m175.81 169.94-15.25-9.25-15.5-8.5-14.75-1.25-12 4-4 5.5v3.75l-1.75 6.62-2.37 7.5-.88 8.13-1.87 13.82-1.63 16.05 1.38 17.63 2.5 14.37 4.75 11.38 5.62 3.87 7.88 1 11.37-3.5 11.88-7.87 12.87-9.88 7.75-5.87 8.63-3.75 10.75-7.25-7.5-40.88-7.88-15.62z"
      />
      <G id="tailfin-2" data-name="tailfin">
        <Path
          className="tail1-2"
          style={{stroke: "#000", strokeWidth: 2}}
          d="M172.13 167.23c-4.45-2.64-8.86-5.37-13.38-7.88-5.29-2.94-10.59-6-16.63-7.08-7.4-1.34-14.69-1.3-21.84 1.8-4.56 2-6.35 5.24-6.54 9.89a15.59 15.59 0 0 1-.84 5.16c-2.67 6.58-3.74 13.46-4.34 20.47s-1.55 14-2.11 21a100.67 100.67 0 0 0-.5 14.72c.67 9.75 2.1 19.48 5.77 28.59 1.6 4 3.38 8.63 8.35 9.77a27.55 27.55 0 0 0 8.7.31c9.33-.9 16.71-5.92 23.75-11.65s13.94-11.8 22.08-16.1a4.91 4.91 0 0 1 1.4-.23"
        />
        <Path
          className="tail1-2"
          style={{stroke: "#000", strokeWidth: 2}}
          d="M141 192.6c-8.73 2.64-17.43 5.35-26.2 7.85a44.65 44.65 0 0 1-7.07.87M144.31 179c-10.79-1.43-21.49-.48-32.18 1.09M138.86 211.69a205.52 205.52 0 0 1-29.2 16.05 8.81 8.81 0 0 1-2.71.31M148.13 229.14c-9.09 9.76-19.65 17.86-30 26.17a5.77 5.77 0 0 1-1.08.55M142.68 164.23c-7.51-1.72-15.08-.84-22.64-.53-2 .08-4 .35-6 .53"
        />
      </G>
    </G>
)

export default Tail1;

export function returnFishTail1() {
    return (
      `
  <defs>
    <style>
      .tail1-1, #tailfinfill {
        fill: url('#grad');
      }

      .tail1-2 {
        fill: none;
        stroke: #000;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-width: 2px;
      }
    </style>
  </defs>
  <g id="fish1">
    <g id="tailfin">
      <polygon id="tailfinfill" class="tail1-1" points="175.81 169.94 160.56 160.69 145.06 152.19 130.31 150.94 118.31 154.94 114.31 160.44 114.31 164.19 112.56 170.81 110.19 178.31 109.31 186.44 107.44 200.26 105.81 216.31 107.19 233.94 109.69 248.31 114.44 259.69 120.06 263.56 127.94 264.56 139.31 261.06 151.19 253.19 164.06 243.31 171.81 237.44 180.44 233.69 191.19 226.44 183.69 185.56 175.81 169.94"/>
      <g id="tailfin-2" data-name="tailfin">
        <g>
          <path id="tailfinfill" class="tail1-2" d="M172.13,167.23c-4.45-2.64-8.86-5.37-13.38-7.88-5.29-2.94-10.59-6-16.63-7.08-7.4-1.34-14.69-1.3-21.84,1.8-4.56,2-6.35,5.24-6.54,9.89a15.59,15.59,0,0,1-.84,5.16c-2.67,6.58-3.74,13.46-4.34,20.47s-1.55,14-2.11,21a100.67,100.67,0,0,0-.5,14.72c.67,9.75,2.1,19.48,5.77,28.59,1.6,4,3.38,8.63,8.35,9.77a27.55,27.55,0,0,0,8.7.31c9.33-.9,16.71-5.92,23.75-11.65s13.94-11.8,22.08-16.1A4.91,4.91,0,0,1,176,236"/>
          <path class="tail1-2" d="M141,192.6c-8.73,2.64-17.43,5.35-26.2,7.85a44.65,44.65,0,0,1-7.07.87"/>
          <path class="tail1-2" d="M144.31,179c-10.79-1.43-21.49-.48-32.18,1.09"/>
          <path class="tail1-2" d="M138.86,211.69a205.52,205.52,0,0,1-29.2,16.05,8.81,8.81,0,0,1-2.71.31"/>
          <path class="tail1-2" d="M148.13,229.14c-9.09,9.76-19.65,17.86-30,26.17a5.77,5.77,0,0,1-1.08.55"/>
          <path class="tail1-2" d="M142.68,164.23c-7.51-1.72-15.08-.84-22.64-.53-2,.08-4,.35-6,.53"/>
        </g>
      </g>
    </g>
  </g>
  `
    )
  };