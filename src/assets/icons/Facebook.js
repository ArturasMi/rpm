import Svg, {Path} from 'react-native-svg';
import React from 'react';
import {View, StyleSheet} from 'react-native';

const Facebook = ({size}) => {
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
        style={{enableBackground: '0 0 24 24'}}
        viewBox="0 0 24 24">
        <Path
          d="m15.997 3.985h2.191v-3.816c-.378-.052-1.678-.169-3.192-.169-6.932 0-5.046 7.85-5.322 9h-3.487v4.266h3.486v10.734h4.274v-10.733h3.345l.531-4.266h-3.877c.188-2.824-.761-5.016 2.051-5.016z"
          fill="#3b5999"
        />
      </Svg>
    </View>
  );
};

export default Facebook;
