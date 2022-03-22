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
      <Svg width={size} height={size} viewBox="0 0 512 512">
        <Path
          fill={color}
          d="m186 0h40v512h-40v-249.867188l-95.773438 96.925782-28.453124-28.117188 54.289062-54.941406h-116.0625v-40h115.679688l-53.828126-53.863281 28.292969-28.273438 95.855469 95.914063zm326 236h-115.714844l53.855469-53.859375-28.28125-28.28125-95.859375 95.855469v-249.714844h-40v512h40v-249.804688l95.777344 96.867188 28.445312-28.125-54.320312-54.9375h116.097656zm0 0"
        />
      </Svg>
    </View>
  );
};

export default ImageContain;
