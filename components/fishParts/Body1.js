import * as React from "react";
import Svg, { Defs, LinearGradient, Path, Stop } from "react-native-svg";

/* Gradients on iOS won't work, so these functions define wether gradient is used or not */
function colorFill(color1) {
  return Platform.OS === 'ios' ? color1 : "url(#grad)";
}

const Body1 = (props) => (
  
  <Svg
    data-name="body1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1280 720"
    {...props}
  >
    <Defs>
      <LinearGradient id="grad" x1="0" y1="0" x2="1" y2="0">
        <Stop offset="0" stopColor={props.gradientCol2} stopOpacity="1" />
        <Stop offset="1" stopColor={props.gradientCol1} stopOpacity="1" />
      </LinearGradient>
    </Defs>
    <Path
      id="Body"
      d="m566.53 292.17-37.87 16-34.46 16.4-20.14 10.68L460 342.6l-4.74 6.6-4.18 12.33-.29 9.38-.26 7.47 2.42 13.43 4.29 9.8 5.07 8 5 4.08 36.22 23.22 28.85 11.34 35.78 13.66 21.57 3.41 19.71 2.2 24.11-.22 18.61-1 19-1.32 12.55-2.31 14.42-2.87 13.1-3.85 13.55-4.18s12.44-3.09 12.77-3.2 6.71-3.85 6.71-3.85 8.37-3.74 8.81-4 19.16-11.23 19.16-11.23l19.26-17.84 25.76-28.29 4.63-4.51 4.07-5.84 1.43-5.72-1.54-7.16 11.23-11 7.27-6.05.33-2.21-15-8-41.17-17.4-40.62-14.42-38.21-12-41.72-7.26-18.17-2.1-18.93-1.32-17.62.33-9.83 2.18L588 285Z"
      style={{
        fill: colorFill(props.gradientCol1),
      }}
    />
    <Path style={{fill: "#000"}} d="M621.81 468.84c-22.35.77-43.88-3.9-65.17-9.86-7.22-2-14.16-5.07-21.11-7.94-10.4-4.29-20.78-8.63-31-13.3-12.85-5.85-24.42-13.79-35.6-22.38-4.47-3.43-9.16-6.5-12.06-11.45a44 44 0 0 1-3.57-7.54c-3-8.42-5.05-17-4.79-26.05a43.7 43.7 0 0 1 5.73-21.3 21.34 21.34 0 0 1 8.41-8.47c14.92-7.87 29.64-16.1 44.66-23.76 8.14-4.17 16.71-7.49 25.12-11.14 7.81-3.38 15.6-6.82 23.52-10 18.55-7.36 37.1-14.94 57-17.69 7.82-1.07 15.93-.32 23.89-.13 24.06.59 47.66 4.74 71 10.27 13.29 3.16 26.32 7.54 39.31 11.84 16.79 5.57 33.46 11.46 50.08 17.51 7.4 2.69 14.64 5.91 21.78 9.24 8 3.71 15.73 7.81 23.57 11.78 3.54 1.79 3.8 3.4 1 6-5 4.6-10 9.18-15.11 13.69-1.34 1.19-2.11 2.31-1.36 4.17 2.68 6.6.21 11.81-4.29 16.71-10.92 11.89-21.24 24.35-32.63 35.76-8.93 8.94-18.42 17.52-30.13 23-3 1.43-5.75 3.46-8.7 5-7.44 4-15 7.62-23.28 9.68-10.19 2.53-20.08 6.24-30.27 8.76-17.68 4.39-35.75 6.06-53.92 6.67-7.4.37-14.74.67-22.08.93Zm202.75-106.6c-.53.44-1 .81-1.48 1.24-7.34 6.76-14.54 13.67-22 20.25-12.18 10.69-24.54 21.16-36.85 31.67-.36.31-1.11.18-1.67.27 0-.58-.22-1.4.08-1.71a39 39 0 0 1 4.27-4.16c3.58-2.91 7.4-5.54 10.87-8.56 11.49-10 22.89-20.12 34.29-30.21q10.58-9.37 21.05-18.87c3.61-3.26 7.11-6.64 10.8-10.09a10 10 0 0 0-1.62-1.49c-8.8-4.48-17.39-9.49-26.49-13.26-15.49-6.41-31.22-12.29-47-17.94-19.76-7.06-39.42-14.38-59.81-19.23-25.91-6.11-52.14-10.34-78.83-10.95-5.43-.12-11-.38-16.3.38-19.93 2.85-38.43 10.46-57 17.69-8 3.12-15.92 6.55-23.82 10-9.16 3.95-18.32 7.89-27.36 12.12-6.56 3.07-12.91 6.6-19.37 9.91-7.43 3.81-14.87 7.57-22.29 11.39a9.27 9.27 0 0 0-1.68 1.33c-8.64 7.73-11.44 18-11.52 28.93-.11 14.89 4.74 28.31 13.89 40.12.26.33.77.47 1.14.72 3.08 2.07 6.1 4.24 9.25 6.21 8.37 5.23 16.52 10.9 25.27 15.4 9.82 5.05 20.14 9.17 30.36 13.4 8.71 3.61 17.42 7.34 26.41 10.09a217.37 217.37 0 0 0 69 9.45c7.7-.18 15.4-.63 23.1-.91a236 236 0 0 0 49.5-6.88c9.56-2.43 18.88-5.8 28.41-8.39a78 78 0 0 0 17.27-6.42c6-3.27 12.38-6.05 18.34-9.47 9.6-5.51 17.68-13.11 25.4-20.83C800 401.48 811 388.61 822.48 376.3c3.98-4.3 4.88-8.65 2.08-14.06Z" />
    <Path style={{fill: "#000"}} d="M788 340.93c.29 14.84-12.33 26.52-24.83 28.53-11.23 1.8-20.93-2-28.24-10.14-9.87-11.05-9.22-26.09 4.32-36.2 8.53-6.36 17.9-8.94 28.41-5.88 7.06-1.14 10.52 4.27 14.49 8.3s5.77 9.54 5.85 15.39ZM731.6 344c1.17 6.46 4.25 12.52 10.75 16.78 14.18 9.3 29.76 6.41 38.63-8.07 7.1-11.6 3-28.09-12.73-32.71-12.22-3.57-22.43.4-31.08 9.27-3.78 3.86-5.17 8.59-5.57 14.73ZM629.12 392.51c-4.74.78-9.57.34-14.35.44s-9.71 0-14.89 0c1.14.77 2.17 1.4 3.15 2.11 3.28 2.39 3.43 5.49.08 7.74a54.78 54.78 0 0 1-7.28 3.61 8 8 0 0 0-2.62 1.53c2.91.26 5.84.36 8.71.85 1.38.23 3.5.95 3.76 1.87a6 6 0 0 1-1.07 4.65c-1.53 2-3.67 3.46-5.57 5.15a6.14 6.14 0 0 0-1.86 2.27 16.19 16.19 0 0 0 2.16-.86q12.06-6.86 24.09-13.75c3.54-2 7.05-4.11 10.66-6 .59-.31 1.68.35 2.54.57-.36.74-.53 1.83-1.12 2.16-12.07 6.83-23.16 15.36-36.07 20.71a23.17 23.17 0 0 1-5.38 1.8 3.79 3.79 0 0 1-3.22-1.23c-.42-.74.09-2.57.82-3.28 2.32-2.28 5-4.23 7.43-6.36 1.48-1.27 2.86-2.65 4.29-4-.08-.3-.15-.61-.23-.91-2.18-.25-4.35-.57-6.54-.73-3.44-.24-6.89-.28-10.31-.62-.89-.09-1.7-.95-2.54-1.46.74-.69 1.37-1.68 2.24-2 4-1.52 8.09-2.7 12-4.34 1.73-.72 3.12-2.24 4.67-3.4a27 27 0 0 0-4.22-3.46c-2-1.05-4.26-1.49-6.3-2.43a12 12 0 0 1-2.56-2.2c1-.59 2-1.69 3-1.68 6.35.05 12.7.29 19 .58 4.89.22 9.78.57 14.66.92a18 18 0 0 1 2.84.66ZM692.19 333.24A28.36 28.36 0 0 1 690 337c-2.71 3.4-5.71 6.59-8.3 10.08a48.88 48.88 0 0 0-9.66 24.5 10.72 10.72 0 0 0 1.53 6.4 149.51 149.51 0 0 0 10.09 13.8c6.44 7.84 13.16 15.46 19.69 23.23.51.61.44 1.71.64 2.59-1-.1-2.35.19-2.92-.35-2.37-2.23-4.58-4.65-6.72-7.1-4.83-5.53-9.72-11-14.31-16.73-3.39-4.23-6.41-8.78-9.47-13.27-2.39-3.51-2.53-7.41-1.72-11.49a56.36 56.36 0 0 1 15.78-29.83l6.45-6.34c.39.21.75.51 1.11.75Z" />
    <Path style={{fill: "#000"}} d="M758.27 357.88a19.49 19.49 0 0 1-14.56-6.25c-4.44-4.55-3.73-9.71-1.55-14.89 2.83-6.72 8.28-10.35 15.3-11 6.8-.64 13 1.73 16.71 7.63 4.33 6.81 4.21 14.17-2.64 19.62a22 22 0 0 1-13.26 4.89Z" />
  </Svg>
)

export default Body1;

export function returnFishBody1() {
  return (
    `
<defs>
  <style>
  #bodyFill {
      fill: url('#grad')	
  }
  #tail {
      fill: #000
  }
  </style>
</defs>   
<g id="body">
    <path id="bodyFill" d="M566.53,292.17l-37.87,16-34.46,16.4-20.14,10.68L460,342.6l-4.74,6.6-4.18,12.33-.29,9.38-.26,7.47,2.42,13.43,4.29,9.8,5.07,8,5,4.08,36.22,23.22,28.85,11.34,35.78,13.66,21.57,3.41,19.71,2.2,24.11-.22,18.61-1,19-1.32,12.55-2.31,14.42-2.87,13.1-3.85,13.55-4.18s12.44-3.09,12.77-3.2,6.71-3.85,6.71-3.85,8.37-3.74,8.81-4,19.16-11.23,19.16-11.23l19.26-17.84,25.76-28.29,4.63-4.51,4.07-5.84,1.43-5.72-1.54-7.16,11.23-11,7.27-6.05.33-2.21-15-8-41.17-17.4-40.62-14.42-38.21-12-41.72-7.26-18.17-2.1-18.93-1.32-17.62.33-9.83,2.18L588,285Z"/>
    <g id="tail">
      <path d="M621.81,468.84c-22.35.77-43.88-3.9-65.17-9.86-7.22-2-14.16-5.07-21.11-7.94-10.4-4.29-20.78-8.63-31-13.3-12.85-5.85-24.42-13.79-35.6-22.38-4.47-3.43-9.16-6.5-12.06-11.45a44,44,0,0,1-3.57-7.54c-3-8.42-5.05-17-4.79-26.05a43.7,43.7,0,0,1,5.73-21.3,21.34,21.34,0,0,1,8.41-8.47c14.92-7.87,29.64-16.1,44.66-23.76,8.14-4.17,16.71-7.49,25.12-11.14,7.81-3.38,15.6-6.82,23.52-10,18.55-7.36,37.1-14.94,57-17.69,7.82-1.07,15.93-.32,23.89-.13,24.06.59,47.66,4.74,71,10.27,13.29,3.16,26.32,7.54,39.31,11.84,16.79,5.57,33.46,11.46,50.08,17.51,7.4,2.69,14.64,5.91,21.78,9.24,8,3.71,15.73,7.81,23.57,11.78,3.54,1.79,3.8,3.4,1,6-5,4.6-10,9.18-15.11,13.69-1.34,1.19-2.11,2.31-1.36,4.17,2.68,6.6.21,11.81-4.29,16.71-10.92,11.89-21.24,24.35-32.63,35.76-8.93,8.94-18.42,17.52-30.13,23-3,1.43-5.75,3.46-8.7,5-7.44,4-15,7.62-23.28,9.68-10.19,2.53-20.08,6.24-30.27,8.76-17.68,4.39-35.75,6.06-53.92,6.67C636.49,468.28,629.15,468.58,621.81,468.84Zm202.75-106.6c-.53.44-1,.81-1.48,1.24-7.34,6.76-14.54,13.67-22,20.25-12.18,10.69-24.54,21.16-36.85,31.67-.36.31-1.11.18-1.67.27,0-.58-.22-1.4.08-1.71a39,39,0,0,1,4.27-4.16c3.58-2.91,7.4-5.54,10.87-8.56,11.49-10,22.89-20.12,34.29-30.21q10.58-9.37,21.05-18.87c3.61-3.26,7.11-6.64,10.8-10.09a10,10,0,0,0-1.62-1.49c-8.8-4.48-17.39-9.49-26.49-13.26-15.49-6.41-31.22-12.29-47-17.94C749.05,302.32,729.39,295,709,290.15c-25.91-6.11-52.14-10.34-78.83-10.95-5.43-.12-11-.38-16.3.38-19.93,2.85-38.43,10.46-57,17.69-8,3.12-15.92,6.55-23.82,10-9.16,3.95-18.32,7.89-27.36,12.12-6.56,3.07-12.91,6.6-19.37,9.91-7.43,3.81-14.87,7.57-22.29,11.39a9.27,9.27,0,0,0-1.68,1.33c-8.64,7.73-11.44,18-11.52,28.93-.11,14.89,4.74,28.31,13.89,40.12.26.33.77.47,1.14.72,3.08,2.07,6.1,4.24,9.25,6.21,8.37,5.23,16.52,10.9,25.27,15.4,9.82,5.05,20.14,9.17,30.36,13.4,8.71,3.61,17.42,7.34,26.41,10.09a217.37,217.37,0,0,0,69,9.45c7.7-.18,15.4-.63,23.1-.91a236,236,0,0,0,49.5-6.88c9.56-2.43,18.88-5.8,28.41-8.39a78,78,0,0,0,17.27-6.42c6-3.27,12.38-6.05,18.34-9.47,9.6-5.51,17.68-13.11,25.4-20.83C800,401.48,811,388.61,822.48,376.3,826.46,372,827.36,367.65,824.56,362.24Z"/>
      <path d="M788,340.93c.29,14.84-12.33,26.52-24.83,28.53-11.23,1.8-20.93-2-28.24-10.14-9.87-11.05-9.22-26.09,4.32-36.2,8.53-6.36,17.9-8.94,28.41-5.88,7.06-1.14,10.52,4.27,14.49,8.3S787.92,335.08,788,340.93ZM731.6,344c1.17,6.46,4.25,12.52,10.75,16.78,14.18,9.3,29.76,6.41,38.63-8.07,7.1-11.6,3-28.09-12.73-32.71-12.22-3.57-22.43.4-31.08,9.27C733.39,333.13,732,337.86,731.6,344Z"/>
      <path d="M629.12,392.51c-4.74.78-9.57.34-14.35.44s-9.71,0-14.89,0c1.14.77,2.17,1.4,3.15,2.11,3.28,2.39,3.43,5.49.08,7.74a54.78,54.78,0,0,1-7.28,3.61,8,8,0,0,0-2.62,1.53c2.91.26,5.84.36,8.71.85,1.38.23,3.5.95,3.76,1.87a6,6,0,0,1-1.07,4.65c-1.53,2-3.67,3.46-5.57,5.15a6.14,6.14,0,0,0-1.86,2.27,16.19,16.19,0,0,0,2.16-.86q12.06-6.86,24.09-13.75c3.54-2,7.05-4.11,10.66-6,.59-.31,1.68.35,2.54.57-.36.74-.53,1.83-1.12,2.16-12.07,6.83-23.16,15.36-36.07,20.71a23.17,23.17,0,0,1-5.38,1.8,3.79,3.79,0,0,1-3.22-1.23c-.42-.74.09-2.57.82-3.28,2.32-2.28,5-4.23,7.43-6.36,1.48-1.27,2.86-2.65,4.29-4-.08-.3-.15-.61-.23-.91-2.18-.25-4.35-.57-6.54-.73-3.44-.24-6.89-.28-10.31-.62-.89-.09-1.7-.95-2.54-1.46.74-.69,1.37-1.68,2.24-2,4-1.52,8.09-2.7,12-4.34,1.73-.72,3.12-2.24,4.67-3.4a27,27,0,0,0-4.22-3.46c-2-1.05-4.26-1.49-6.3-2.43a12,12,0,0,1-2.56-2.2c1-.59,2-1.69,3-1.68,6.35.05,12.7.29,19,.58,4.89.22,9.78.57,14.66.92a18,18,0,0,1,2.84.66Z"/>
      <path d="M692.19,333.24A28.36,28.36,0,0,1,690,337c-2.71,3.4-5.71,6.59-8.3,10.08a48.88,48.88,0,0,0-9.66,24.5,10.72,10.72,0,0,0,1.53,6.4,149.51,149.51,0,0,0,10.09,13.8c6.44,7.84,13.16,15.46,19.69,23.23.51.61.44,1.71.64,2.59-1-.1-2.35.19-2.92-.35-2.37-2.23-4.58-4.65-6.72-7.1-4.83-5.53-9.72-11-14.31-16.73-3.39-4.23-6.41-8.78-9.47-13.27-2.39-3.51-2.53-7.41-1.72-11.49a56.36,56.36,0,0,1,15.78-29.83l6.45-6.34C691.47,332.7,691.83,333,692.19,333.24Z"/>
      <path d="M758.27,357.88a19.49,19.49,0,0,1-14.56-6.25c-4.44-4.55-3.73-9.71-1.55-14.89,2.83-6.72,8.28-10.35,15.3-11,6.8-.64,13,1.73,16.71,7.63,4.33,6.81,4.21,14.17-2.64,19.62A22,22,0,0,1,758.27,357.88Z"/>
    </g>
</g> 
`
  )
};