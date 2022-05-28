import React from 'react';
import { SliderHuePicker, SliderSaturationPicker, SliderValuePicker,} 
from '../local_modules/react-native-slider-color-picker';
import { Dimensions, StyleSheet, View, } from 'react-native';
import tinycolor from 'tinycolor2';

//const { width, } =  Dimensions.get('window');
const width = '90%';
export default ColorTool = props => {

    const oldColor = props.oldColor;
    const colorHandler = props.colorHandler;

    changeColor = (colorHsvOrRgb, resType) => {
        colorHandler(tinycolor(colorHsvOrRgb).toHexString());
    }

    return (
        <View style={styles.container}>
            <View style={{ marginHorizontal: 24, marginTop: 10, height: 12, width: width  }}>
                <SliderHuePicker
                    ref={view => { sliderHuePicker = view; }}
                    oldColor={props.oldColor}
                    trackStyle={[{ height: 12, width: width  }]}
                    thumbStyle={styles.thumb}
                    useNativeDriver={true}
                    onColorChange={changeColor}
                />
            </View>
            <View style={{ marginHorizontal: 24, marginTop: 10, height: 12, width: width  }}>
                <SliderSaturationPicker
                    ref={view => { sliderSaturationPicker = view; }}
                    oldColor={props.oldColor}
                    trackStyle={[{ height: 12, width: width  ,borderRadius:10,borderWidth:1, borderColor:'transparent'}]} 
                    thumbStyle={styles.thumb}
                    useNativeDriver={true}
                    onColorChange={changeColor}
                    backgroundColor={ tinycolor({ h: tinycolor(oldColor).toHsv().h, s: 1, v: 1 }).toHexString()}
                    style={{
                        height: 12,
                        borderRadius: 6,
                    }}
                />
            </View>
            <View style={{ marginHorizontal: 24, marginTop: 10, marginBottom: 10, height: 12, width: width }}>
                <SliderValuePicker
                    ref={view => { sliderValuePicker = view; }}
                    oldColor={props.oldColor}
                    minimumValue={0.02}
                    step={0.05}
                    trackStyle={[{ height: 12, width: width  }]}
                    thumbStyle={styles.thumb}
                    onColorChange={changeColor}
                    style={{ height: 12, borderRadius: 6  }}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        borderColor:'black',
        borderWidth:2,
        borderRadius :10,
        justifyContent:'center',
        height:'100%'

    },
    thumb: {
        width: 20,
        height: 20,
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowRadius: 2,
        shadowOpacity: 0.35,
    },
});