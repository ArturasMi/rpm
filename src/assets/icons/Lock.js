import Svg, {Path} from 'react-native-svg';
import React from 'react';
import {View, StyleSheet} from 'react-native';

const ImageContain = ({size, color}) => {
  return (
    <View
      style={[
        StyleSheet.absoluteFill,
        {
          alignItems: 'center',
          justifyContent: 'center',
        },
      ]}>
      <Svg
        width={size}
        height={size}
        viewBox="0 0 512 512"
        fill={color}
        style={{
          enableBackground: 'new 0 0 512 512',
        }}>
        <Path
          d="M400,188H187.963v-82.23c0-36.266,30.505-65.77,68-65.77s68,29.504,68,65.77V144h40v-38.23
			c0-58.322-48.449-105.77-108-105.77c-59.551,0-108,47.448-108,105.77V188H112c-33.084,0-60,26.916-60,60v204
			c0,33.084,26.916,60,60,60h288c33.084,0,60-26.916,60-60V248C460,214.916,433.084,188,400,188z M420,452c0,11.028-8.972,20-20,20
			H112c-11.028,0-20-8.972-20-20V248c0-11.028,8.972-20,20-20h288c11.028,0,20,8.972,20,20V452z"
        />
        <Path
          d="M256,286c-20.435,0-37,16.565-37,37c0,13.048,6.76,24.51,16.963,31.098V398c0,11.045,8.954,20,20,20
			c11.045,0,20-8.955,20-20v-43.855C286.207,347.565,293,336.08,293,323C293,302.565,276.435,286,256,286z"
        />
      </Svg>
    </View>
  );
};

export default ImageContain;