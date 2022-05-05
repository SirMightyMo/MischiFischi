import * as React from "react";
import { Platform, StyleSheet, TouchableOpacity } from "react-native";
import { Svg, Rect } from "react-native-svg";
import ReactDOMServer from "react-dom/server";

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
      <Svg height="100%" width="100%" style={{ backgroundColor: "#33AAFF" }}>
        <Rect
          x="50"
          y="50"
          width="50"
          height="50"
          fill="#3399ff"
          strokeWidth="3"
          stroke="rgb(0,0,0)"
        />
      </Svg>
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
    backgroundColor: "#ecf0f1",
    padding: 8
  }
});