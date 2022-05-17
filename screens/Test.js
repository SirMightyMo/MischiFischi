import * as React from "react";
import { Platform, StyleSheet, TouchableOpacity } from "react-native";
import { Svg, Rect } from "react-native-svg";
import ReactDOMServer from "react-dom/server";


import Body01 from '../assets/body01'
import Fin01 from '../assets/fin01'
import BackFin01 from '../assets/backFin01' 

const isWeb = Platform.OS === "web";

const childToWeb = child => {
  const { type, props } = child;
  const name = type && type.displayName;
  const webName = name && name[0].toLowerCase() + name.slice(1);
  const Tag = webName ? webName : type;
  return <Tag {...props}>{toWeb(props.children)}</Tag>;
};

const toWeb = children => React.Children.map(children, childToWeb);

export default class App extends React.Component {
    renderSvg() {
    return (
<Svg height="100%" width="100%" style={{ backgroundColor: "#FF0000" }}>

<Body01
          x="100%"
          y="100%"
          width="50"
          height="50"
          fill="#3399ff"
          strokeWidth="3"
          stroke="rgb(0,0,0)"
/>
               <Rect
          x="20%"
          y="20%"
          width="50"
          height="50"
          fill="#3399ff"
          strokeWidth="3"
          stroke="rgb(0,0,0)"
        />
      </Svg>
      /*
      <Fin01 height="100%" width="100%" fill='#0000FF'/>
      <Body01 height="100%" width="100%" fill='#00FF00'/>
      <Svg height="100%" width="100%" style={{ backgroundColor: "#33AAFF" }}>
        <Rect
          x="50%"
          y="50%"
          width="50"
          height="50"
          fill="#3399ff"
          strokeWidth="3"
          stroke="rgb(0,0,0)"
        />
      </Svg>*/
      /* <Svg height="100%" width="100%">
        <Body01 fillOpacity={1} strokeOpacity={1} fill='#FF0000' strokeWidth={20} stroke='#FF0000' />
        <Fin01 fillOpacity={1} strokeOpacity={1} fill='#00FF00' strokeWidth={20}  />
        <BackFin01 fillOpacity={1} strokeOpacity={1} fill='#0000FF' strokeWidth={20} stroke='#FF0000' />
      </Svg> */
    );
  }
  serialize = () => {
    const element = this.renderSvg();
    const webJsx = isWeb ? element : toWeb(element);
    const svgString = ReactDOMServer.renderToStaticMarkup(webJsx);
    console.log(svgString);
  };
  render() {
    return (
      <TouchableOpacity style={styles.container} onPress={this.serialize}>
        {this.renderSvg()}
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#ecf0f1"
  }
});