import * as React from "react";
import { G, Path } from "react-native-svg";

// props.pattern instead of fill="none" for using pattern
const Tail4 = (props) => (
<G id="tailfin">
  <Path
    id="tailfinfill"
    style={{
      fill: "url(#grad)",
    }}
    d="m102.52 115.64 8.94 12.5 8.81 12 8.25 11.75 9.25 15.25 4.5 6.5 3.5 7.75 2 6 1 10.56v32.94l-2 14.94-6 11.06 14.5-6.25 12.5-9 7.12-6.25 11.88-14.75-8.5-39-6.07-11.56-11.81-11.94-10.37-11-13.5-11.75-13.5-9.25-20.5-10.5z"
  />
  <G id="tailfin-2" data-name="tailfin">
    <Path d="M142.48 255.7c6.52-3.7 12.52-6.64 18.12-10.31s10.57-8 16.09-12.3c-3.45 8.19-32 26.08-38.1 24.12 3.74-2.82 5.44-6.88 6.61-11.16 3.71-13.51 3.72-27.27 2.51-41.09-.57-6.5-.66-13.11-2-19.46a44.24 44.24 0 0 0-5.82-14.5c-9.43-14.66-19.29-29.06-29.23-43.38-3-4.38-6.88-8.2-10.36-12.27l-1.87-2.21c30.32 12.54 53.69 32.83 74.33 56.63l-.85 1.09C152.4 149.22 131 130 104.16 117.65c.51.69 1 1.41 1.53 2.07 13.39 16.12 24.66 33.71 35.69 51.46a47.1 47.1 0 0 1 7 22.89c.57 11.68 1.51 23.37 1.43 35.06 0 6.06-1.69 12.17-3.1 18.14-.71 2.73-2.53 5.11-4.23 8.43Z" />
    <Path
      className="cls-2"
      style={{stroke: "#000", strokeWidth: 2}}
      d="M102.85 116.68c5.91 7.91 12.08 15.64 17.66 23.77 7.36 10.73 14.4 21.68 21.28 32.72 4.05 6.5 5.57 13.83 5.83 21.51.36 10.73 1.53 21.46 1.43 32.18-.07 8.16-1.29 16.38-4.77 24-.78 1.7-1.8 3.28-2.71 4.92"
    />
    <Path
      className="cls-2"
      style={{stroke: "#000", strokeWidth: 2}}
      d="M99 113.68c6.27 3.36 12.53 6.76 18.82 10.08a113.81 113.81 0 0 1 24.24 16.94q12.84 11.84 25.34 24c1.75 1.7 2.95 4 4.41 6M177 233.41c-3.27 2.91-6.25 6.27-9.88 8.63-7.34 4.77-15 9.09-22.61 13.4-1.86 1.05-4.15 1.33-6.24 2"
    />
  </G>
</G>
)

export default Tail4;

export function returnFishTail4() {
    return (
      `
    <defs>
      <style>
        .tail4fill {
          fill: url(#grad);
        }
  
        .tail4stroke {
          fill: none;
          stroke: #000;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-width: 2px;
        }
      </style>
    </defs>
    <g id="tailfin">
      <polygon id="tailfinfill" class="tail4fill" points="102.52 115.64 111.46 128.14 120.27 140.14 128.52 151.89 137.77 167.14 142.27 173.64 145.77 181.39 147.77 187.39 148.77 197.95 148.77 205.39 148.77 216.64 148.77 230.89 146.77 245.83 140.77 256.89 155.27 250.64 167.77 241.64 174.89 235.39 186.77 220.64 178.27 181.64 172.2 170.08 160.39 158.14 150.02 147.14 136.52 135.39 123.02 126.14 102.52 115.64"/>
      <g id="tailfin-2" data-name="tailfin">
        <g>
          <path d="M142.48,255.7C149,252,155,249.06,160.6,245.39s10.57-8,16.09-12.3c-3.45,8.19-32,26.08-38.1,24.12,3.74-2.82,5.44-6.88,6.61-11.16,3.71-13.51,3.72-27.27,2.51-41.09-.57-6.5-.66-13.11-2-19.46A44.24,44.24,0,0,0,139.89,171c-9.43-14.66-19.29-29.06-29.23-43.38-3-4.38-6.88-8.2-10.36-12.27l-1.87-2.21c30.32,12.54,53.69,32.83,74.33,56.63l-.85,1.09C152.4,149.22,131,130,104.16,117.65c.51.69,1,1.41,1.53,2.07,13.39,16.12,24.66,33.71,35.69,51.46a47.1,47.1,0,0,1,7,22.89c.57,11.68,1.51,23.37,1.43,35.06,0,6.06-1.69,12.17-3.1,18.14C146,250,144.18,252.38,142.48,255.7Z"/>
          <path class="tail4stroke" d="M102.85,116.68c5.91,7.91,12.08,15.64,17.66,23.77,7.36,10.73,14.4,21.68,21.28,32.72,4.05,6.5,5.57,13.83,5.83,21.51.36,10.73,1.53,21.46,1.43,32.18-.07,8.16-1.29,16.38-4.77,24-.78,1.7-1.8,3.28-2.71,4.92"/>
          <path class="tail4stroke" d="M99,113.68c6.27,3.36,12.53,6.76,18.82,10.08a113.81,113.81,0,0,1,24.24,16.94q12.84,11.84,25.34,24c1.75,1.7,2.95,4,4.41,6"/>
          <path class="tail4stroke" d="M177,233.41c-3.27,2.91-6.25,6.27-9.88,8.63-7.34,4.77-15,9.09-22.61,13.4-1.86,1.05-4.15,1.33-6.24,2"/>
        </g>
      </g>
    </g>
  `
    )
  };