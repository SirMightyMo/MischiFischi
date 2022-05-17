
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {
  SliderHuePicker,
  SliderSaturationPicker,
  SliderValuePicker,
} from 'react-native-slider-color-picker';
import tinycolor from 'tinycolor2';

const changeColor = (color) => {
  console.log(tinycolor(color).toHex())
}

const sliderWidth = 200

export default ColorSlider = () =>{
return(
<View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />

      <SliderHuePicker
        oldColor={'#ff0000'}
        trackStyle={[{ height: 12, width: sliderWidth - 48 }]}
        thumbStyle={styles.thumb}
        useNativeDriver={true}
        onColorChange={changeColor}
      />


      <SliderValuePicker

        oldColor={'#ff0000'}
        minimumValue={0.02}
        step={0.05}
        trackStyle={[{ height: 12, width: sliderWidth - 48 }]}
        trackImage={require('react-native-slider-color-picker/brightness_mask.png')}
        thumbStyle={styles.thumb}
        onColorChange={color => changeColor(color)}
        style={{ height: 12, borderRadius: 6, backgroundColor: 'black' }}
      />

      <SliderSaturationPicker
        oldColor={'#ff0000'}
        trackStyle={[{ height: 12, width: sliderWidth - 48 }]}
        thumbStyle={styles.thumb}
        useNativeDriver={true}
        onColorChange={changeColor}
        style={{ height: 12, borderRadius: 6, backgroundColor: tinycolor({ h: tinycolor('#ff0000').toHsv().h, s: 1, v: 1 }).toHexString() }}
      />

    </View>
    )
    }

    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
    });