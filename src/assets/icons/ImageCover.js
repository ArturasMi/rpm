import Svg, {Polygon} from 'react-native-svg';
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
        style={{
          enableBackground: 'new 0 0 512 512',
        }}>
        <Polygon
          fill={color}
          points="472,111 472,254.716 369.754,152.47 341.469,180.754 395.716,235 115.896,235 170.143,180.754 141.857,152.47 
			40,254.327 40,111 0,111 0,401 40,401 40,255.673 141.857,357.53 170.143,329.246 115.896,275 395.716,275 341.469,329.246 
			369.754,357.53 472,255.284 472,401 512,401 512,111 		"
        />
      </Svg>
    </View>
  );
};

export default ImageContain;
