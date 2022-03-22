import Svg, {Polygon, Path, Rect} from 'react-native-svg';
import React from 'react';
import {View, StyleSheet} from 'react-native';

const Edit = ({size, color}) => {
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
        <Polygon fill={color} points="51.2,353.28 0,512 158.72,460.8" />
        <Rect
          fill={color}
          x="89.73"
          y="169.097"
          transform="matrix(0.7071 -0.7071 0.7071 0.7071 -95.8575 260.3719)"
          width="353.277"
          height="153.599"
        />
        <Path
          fill={color}
          d="M504.32,79.36L432.64,7.68c-10.24-10.24-25.6-10.24-35.84,0l-23.04,23.04l107.52,107.52l23.04-23.04
			C514.56,104.96,514.56,89.6,504.32,79.36z"
        />
      </Svg>
    </View>
  );
};

export default Edit;
