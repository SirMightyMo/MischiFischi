import * as React from "react"
import Svg, { Defs, G, Path, LinearGradient, Stop } from "react-native-svg"

/* Gradients on iOS won't work, so these functions define wether gradient is used or not */
function colorFillApp(color) {
  return Platform.OS === 'ios' ? color : "url(#grad)";
}

function colorFillExport(color) {
  return Platform.OS === 'ios' ? color : "url('#grad')";
}

const Fins2 = (props) => (
  <Svg
    data-name="fins2"
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
    <Path
      style={{
        fill: colorFillApp(props.gradientCol2),
      }}
      d="m313.39 108.8-9.75-3.5-14.25-8.25-9.75-9.25 7-7.75-.25-5.5-2-1.5 1.5-6.5-2.75-2.75 2-8.25-3-3 1.5-9h-2l1.75-8.75-1.75-1.25v-6.5l-3.5-4v-6l-2.75-6.75h2.75l14.25 9.5 15.94 12.25 7.93 7 10.19 8.37 10.5 8.69 14.94 14.06 8.25 8.69 7.69 8.56 13.62 17.56 1.38 3.82.75 26.25V293.3l-1.57 3.12-14.62 12.56-15.38 12.57-19.87 13.12-15.56 7.5-9.19 3.19-7.31 1.31-2.11-1.08.18-2.86 1.46-2.43-1.6-1.69-9.09-7.83-.61-3.14 1.36-1.88 1.41-1.96 1.36-1.13 1.4-1.5.7-.84-3.37-3.57-2.34-2.95-.1-1.31 1.64-1.08 2.96-1.83 2.01-1.4 2.63-2.02 2.76-1.55 1.97-1.64 1.92-1.17 1.5-1.12 2.82-1.93 2.25-1.31 2.53-1.78 1.4-1.31-.33-1.74-.23-3.7-.09-5.86-.05-4.08-.91-158.62-.12-9.13v-2.43z"
    />
    <G data-name="fins">
      <Path style={{fill: "#000"}} d="m282.24 35.83-3-.16a12.61 12.61 0 0 1 .1-1.61 40.73 40.73 0 0 0 1.17-5.47c.12-1.74-.15-3.58-2.78-3.41a2.6 2.6 0 0 1-.8-2A9.52 9.52 0 0 0 275.47 13a20.88 20.88 0 0 1-1.66-3.06c1.4-.14 2.79-.33 4.19-.4.3 0 .64.32.93.53 7.51 5.27 15.33 10.15 22.45 15.89 14.57 11.75 29.08 23.6 43 36.11 9 8.11 17.12 17.27 25.24 26.31 4.59 5.12 8.43 10.93 12.51 16.49a6.42 6.42 0 0 1 1.25 3.25c.45 8.34.78 16.69 1.1 25a11 11 0 0 1-.47 2.5h-.7a18.85 18.85 0 0 1-.37-2.23c-.39-8-.66-16-1.19-23.95a10 10 0 0 0-1.81-4.91c-4-5.6-8-11.25-12.51-16.49a310.53 310.53 0 0 0-36.23-36.12c-10.92-9.18-21.88-18.32-33-27.21-6.11-4.86-12.66-9.16-19.06-13.63-.57-.4-1.55-.22-2.34-.3a5.73 5.73 0 0 0 .45 2.1 12.45 12.45 0 0 1 2.33 9c-.07.54.06 1.41.42 1.65 2.53 1.66 2.5 4.2 2.66 6.78.05.8.64 2.09 1.23 2.25 10 2.85 18.22 9.06 26.5 14.89 7.85 5.53 15 12 22.47 18.12a2.46 2.46 0 0 1 .85 1.84c-1.48-1.09-3-2.12-4.43-3.26-11-8.78-21.92-17.71-34.09-24.92-2.89-1.71-5.88-3.25-8.86-4.79a13 13 0 0 0-2.36-.76c-.4 2.25-.88 4.21-1 6.19a2.91 2.91 0 0 0 1.03 2.24c8.28 5.1 16.75 9.9 24.9 15.2 5.92 3.85 11.43 8.35 17.13 12.54 1.32 1 2.7 1.87 4 2.79l-.71.63-45.26-30.16c0 3.22-.26 5.79.12 8.27a5.29 5.29 0 0 0 2.49 3.14c18 10.24 33.5 24 50.41 35.84a1.89 1.89 0 0 1 .92 1.54 51 51 0 0 1-4.77-2.76c-10.23-7.41-20.4-14.91-30.63-22.32-4.27-3.09-8.63-6-13-9-.94-.65-2-1.14-3.1-1.76-.58 2.58-1.08 4.84-1.73 7.74a320.21 320.21 0 0 1 50.34 32.7c-16.07-9.79-31.1-21.25-48-30l-1.17 4.95 34.52 19-.68 1.25L288 74.16c-.61 3.56.1 5.51 2.92 7.25 7.5 4.62 14.71 9.7 22 14.61a17.4 17.4 0 0 1 1.61 1.37c-.14.2-.28.4-.43.59l-26.21-17.71c-2.72 2.69-5 5-7.38 7.24a5.14 5.14 0 0 1-1.75.66 6 6 0 0 1-.09-2.17 2.87 2.87 0 0 1 1.4-1.6c2.91-1.25 3.8-4 4.95-6.51.57-1.25.65-2.28-1.16-2.54s-1.83-1.44-1.24-2.83a14.19 14.19 0 0 0 1.46-3.78c.09-1-.78-2-1.06-3.1a9.36 9.36 0 0 1-.5-3.4c.21-1.68 1.08-3.31 1.13-5 0-1-1.09-1.93-1.53-3-.34-.82-.86-1.95-.55-2.59 1.42-2.93 1.71-5.47-1.09-7.83-.5-.42-.51-1.79-.29-2.6.49-1.66 1.24-3.29 2.05-5.39ZM293.55 320.47c-1.62-1.77-3-3.15-4.26-4.69-1.88-2.36-1.6-3.82.91-5.49 7.86-5.23 15.72-10.44 23.9-15.86v-15.88l.73-.08a6.27 6.27 0 0 1 .47 1.53c.15 4.72.29 9.44.34 14.16a2.62 2.62 0 0 1-.85 1.95c-7.71 5.3-15.47 10.52-23.22 15.75-.67.45-1.42.79-2.64 1.46 1.8 2.07 3.48 4 5.24 6l10.11-9.43.5.53c-4.59 4.84-9.15 9.71-13.77 14.53-2.71 2.83-2.74 4.5.24 7 2.43 2 5 3.85 7.75 6 3.36-7.22 6.8-13.92 12.86-18.67l.6.42c-.3.45-.61.9-.9 1.35-3.12 4.77-6.31 9.5-9.3 14.35-.63 1-.5 2.51-.78 3.77a3.6 3.6 0 0 1-.54 1.07q-1.37 2.16-2.75 4.32l.53 1c1.5-.11 3-.19 4.5-.33.72-.07 1.43-.27 2.14-.38 4.38-.66 7.45-2.18 8.45-7.38.89-4.63 3.44-8.94 5.27-13.38s3.67-8.9 5.53-13.33a3.88 3.88 0 0 1 1.57-1.94c-1.75 11.73-9.65 21.18-12.31 33.34 4.23-1.84 8.09-3.16 11.6-5.12a266.94 266.94 0 0 0 55.78-41.12 7 7 0 0 0 1.87-4 70.79 70.79 0 0 0 .25-9c0-.69-.81-1.36-.83-2.06a7.42 7.42 0 0 1 .69-2.29c.55.45 1.56.87 1.58 1.34.19 4.62.4 9.25.18 13.86-.06 1.3-1.3 2.81-2.4 3.74-10.51 8.89-20.74 18.18-31.8 26.35s-22.46 15.85-35.71 20.13A92 92 0 0 1 303 347c-5.28.94-6.56-.69-5.05-5.76.1-.35.19-.7.22-.83-3-2.63-6-5.05-8.79-7.75s-2.71-5.54 0-8.24c1.42-1.42 2.87-2.72 4.17-3.95Z" />
      <Path style={{fill: "#000"}} d="M281.73 21.2a14.08 14.08 0 0 1 2.25.73c26.67 13.87 65.25 49.33 78.59 72.52-1.9-1.83-3.43-3.09-4.71-4.58-4.33-5-8.63-10.08-12.83-15.22-17.27-21.09-38.94-36.95-61.46-51.8a22.06 22.06 0 0 0-2-1.08c.03-.19.1-.38.16-.57ZM280.83 89.28a23.4 23.4 0 0 0 2.27 1.84c8 5.1 16 10.21 24.13 15.2a8.29 8.29 0 0 0 4.35 1.37c2.66-.1 3.17 1.19 3.24 3.41.16 4.8.47 9.6.7 14.4a1.6 1.6 0 0 1-.59 1.24c-2.8-5.31-.86-11.18-1.87-16.58-12.32-2.9-22.12-10.08-31.39-18.17a8.77 8.77 0 0 1-1.37-2.31Z" />
    </G>
  </Svg>
)

export default Fins2;

export function returnFishFins2(color) {
    return (
      `
  <defs>
    <style>
      .fins2-1 {
        fill: ${colorFillExport(color)};
      }
    </style>
  </defs>
  <g id="fish2">
    <g id="fins">
      <polygon id="finsfill" class="fins2-1" points="313.39 108.8 303.64 105.3 289.39 97.05 279.64 87.8 286.64 80.05 286.39 74.55 284.39 73.05 285.89 66.55 283.14 63.8 285.14 55.55 282.14 52.55 283.64 43.55 281.64 43.55 283.39 34.8 281.64 33.55 281.64 27.05 278.14 23.05 278.14 17.05 275.39 10.3 278.14 10.3 292.39 19.8 308.33 32.05 316.26 39.05 326.45 47.42 336.95 56.11 351.89 70.17 360.14 78.86 367.83 87.42 381.45 104.98 382.83 108.8 383.58 135.05 383.58 282.3 383.58 293.3 382.01 296.42 367.39 308.98 352.01 321.55 332.14 334.67 316.58 342.17 307.39 345.36 300.08 346.67 297.97 345.59 298.15 342.73 299.61 340.3 298.01 338.61 288.92 330.78 288.31 327.64 289.67 325.76 291.08 323.8 292.44 322.67 293.84 321.17 294.54 320.33 291.17 316.76 288.83 313.81 288.73 312.5 290.37 311.42 293.33 309.59 295.34 308.19 297.97 306.17 300.73 304.62 302.7 302.98 304.62 301.81 306.12 300.69 308.94 298.76 311.19 297.45 313.72 295.67 315.12 294.36 314.79 292.62 314.56 288.92 314.47 283.06 314.42 278.98 313.51 120.36 313.39 111.23 313.39 108.8"/>
      <g id="fins-2" data-name="fins">
        <path d="M282.24,35.83l-3-.16a12.61,12.61,0,0,1,.1-1.61,40.73,40.73,0,0,0,1.17-5.47c.12-1.74-.15-3.58-2.78-3.41a2.6,2.6,0,0,1-.8-2A9.52,9.52,0,0,0,275.47,13a20.88,20.88,0,0,1-1.66-3.06c1.4-.14,2.79-.33,4.19-.4.3,0,.64.32.93.53,7.51,5.27,15.33,10.15,22.45,15.89,14.57,11.75,29.08,23.6,43,36.11,9,8.11,17.12,17.27,25.24,26.31,4.59,5.12,8.43,10.93,12.51,16.49a6.42,6.42,0,0,1,1.25,3.25c.45,8.34.78,16.69,1.1,25a11,11,0,0,1-.47,2.5h-.7a18.85,18.85,0,0,1-.37-2.23c-.39-8-.66-16-1.19-23.95a10,10,0,0,0-1.81-4.91c-4-5.6-8-11.25-12.51-16.49a310.53,310.53,0,0,0-36.23-36.12c-10.92-9.18-21.88-18.32-33-27.21-6.11-4.86-12.66-9.16-19.06-13.63-.57-.4-1.55-.22-2.34-.3a5.73,5.73,0,0,0,.45,2.1,12.45,12.45,0,0,1,2.33,9c-.07.54.06,1.41.42,1.65,2.53,1.66,2.5,4.2,2.66,6.78.05.8.64,2.09,1.23,2.25,10,2.85,18.22,9.06,26.5,14.89,7.85,5.53,15,12,22.47,18.12a2.46,2.46,0,0,1,.85,1.84c-1.48-1.09-3-2.12-4.43-3.26-11-8.78-21.92-17.71-34.09-24.92-2.89-1.71-5.88-3.25-8.86-4.79a13,13,0,0,0-2.36-.76c-.4,2.25-.88,4.21-1,6.19A2.91,2.91,0,0,0,284,42.11c8.28,5.1,16.75,9.9,24.9,15.2,5.92,3.85,11.43,8.35,17.13,12.54,1.32,1,2.7,1.87,4,2.79l-.71.63L284.06,43.11c0,3.22-.26,5.79.12,8.27a5.29,5.29,0,0,0,2.49,3.14c18,10.24,33.5,24,50.41,35.84A1.89,1.89,0,0,1,338,91.9a51,51,0,0,1-4.77-2.76c-10.23-7.41-20.4-14.91-30.63-22.32-4.27-3.09-8.63-6-13-9-.94-.65-2-1.14-3.1-1.76-.58,2.58-1.08,4.84-1.73,7.74A320.21,320.21,0,0,1,335.11,96.5c-16.07-9.79-31.1-21.25-48-30l-1.17,4.95,34.52,19-.68,1.25L288,74.16c-.61,3.56.1,5.51,2.92,7.25,7.5,4.62,14.71,9.7,22,14.61a17.4,17.4,0,0,1,1.61,1.37c-.14.2-.28.4-.43.59L287.89,80.27c-2.72,2.69-5,5-7.38,7.24a5.14,5.14,0,0,1-1.75.66,6,6,0,0,1-.09-2.17,2.87,2.87,0,0,1,1.4-1.6c2.91-1.25,3.8-4,4.95-6.51.57-1.25.65-2.28-1.16-2.54s-1.83-1.44-1.24-2.83a14.19,14.19,0,0,0,1.46-3.78c.09-1-.78-2-1.06-3.1a9.36,9.36,0,0,1-.5-3.4c.21-1.68,1.08-3.31,1.13-5,0-1-1.09-1.93-1.53-3-.34-.82-.86-1.95-.55-2.59,1.42-2.93,1.71-5.47-1.09-7.83-.5-.42-.51-1.79-.29-2.6C280.68,39.56,281.43,37.93,282.24,35.83Z"/>
        <path d="M293.55,320.47c-1.62-1.77-3-3.15-4.26-4.69-1.88-2.36-1.6-3.82.91-5.49,7.86-5.23,15.72-10.44,23.9-15.86V278.55l.73-.08a6.27,6.27,0,0,1,.47,1.53c.15,4.72.29,9.44.34,14.16a2.62,2.62,0,0,1-.85,1.95c-7.71,5.3-15.47,10.52-23.22,15.75-.67.45-1.42.79-2.64,1.46,1.8,2.07,3.48,4,5.24,6,3.88-3.62,7-6.53,10.11-9.43l.5.53c-4.59,4.84-9.15,9.71-13.77,14.53-2.71,2.83-2.74,4.5.24,7,2.43,2,5,3.85,7.75,6,3.36-7.22,6.8-13.92,12.86-18.67l.6.42c-.3.45-.61.9-.9,1.35-3.12,4.77-6.31,9.5-9.3,14.35-.63,1-.5,2.51-.78,3.77a3.6,3.6,0,0,1-.54,1.07q-1.37,2.16-2.75,4.32l.53,1c1.5-.11,3-.19,4.5-.33.72-.07,1.43-.27,2.14-.38,4.38-.66,7.45-2.18,8.45-7.38.89-4.63,3.44-8.94,5.27-13.38s3.67-8.9,5.53-13.33a3.88,3.88,0,0,1,1.57-1.94c-1.75,11.73-9.65,21.18-12.31,33.34,4.23-1.84,8.09-3.16,11.6-5.12a266.94,266.94,0,0,0,55.78-41.12,7,7,0,0,0,1.87-4,70.79,70.79,0,0,0,.25-9c0-.69-.81-1.36-.83-2.06a7.42,7.42,0,0,1,.69-2.29c.55.45,1.56.87,1.58,1.34.19,4.62.4,9.25.18,13.86-.06,1.3-1.3,2.81-2.4,3.74-10.51,8.89-20.74,18.18-31.8,26.35s-22.46,15.85-35.71,20.13A92,92,0,0,1,303,347c-5.28.94-6.56-.69-5.05-5.76.1-.35.19-.7.22-.83-3-2.63-6-5.05-8.79-7.75s-2.71-5.54,0-8.24C290.8,323,292.25,321.7,293.55,320.47Z"/>
        <path d="M281.73,21.2a14.08,14.08,0,0,1,2.25.73c26.67,13.87,65.25,49.33,78.59,72.52-1.9-1.83-3.43-3.09-4.71-4.58-4.33-5-8.63-10.08-12.83-15.22-17.27-21.09-38.94-36.95-61.46-51.8a22.06,22.06,0,0,0-2-1.08C281.6,21.58,281.67,21.39,281.73,21.2Z"/>
        <path d="M280.83,89.28a23.4,23.4,0,0,0,2.27,1.84c8,5.1,16,10.21,24.13,15.2a8.29,8.29,0,0,0,4.35,1.37c2.66-.1,3.17,1.19,3.24,3.41.16,4.8.47,9.6.7,14.4a1.6,1.6,0,0,1-.59,1.24c-2.8-5.31-.86-11.18-1.87-16.58-12.32-2.9-22.12-10.08-31.39-18.17a8.77,8.77,0,0,1-1.37-2.31Z"/>
      </g>
    </g>
  </g>
  `
    )
  };