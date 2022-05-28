import React from "react";
import { View, Text } from "react-native";
import LayoutStyles from "../constants/LayoutStyles";
import QRCode from "react-native-qrcode-svg";

export default QrCodeMaker = (props) => {

  return (
    <QRCode value={props.textToQr} />
  )


};