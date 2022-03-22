import Svg, {Path} from 'react-native-svg';
import React from 'react';
import {View, StyleSheet} from 'react-native';

const More = ({size, color}) => {
  return (
    <Svg
      version="1.1"
      x="0px"
      y="0px"
      width={size}
      height={size}
      fill={color}
      viewBox="0 0 210 210"
      style={{enableBackground: 'new 0 0 210 210'}}>
      <Path
        id="XMLID_89_"
        d="M25,80C11.215,80,0,91.215,0,105s11.215,25,25,25c13.785,0,25-11.215,25-25S38.785,80,25,80z"
      />
      <Path
        id="XMLID_91_"
        d="M105,80c-13.785,0-25,11.215-25,25s11.215,25,25,25c13.785,0,25-11.215,25-25S118.785,80,105,80z"
      />
      <Path
        id="XMLID_93_"
        d="M185,80c-13.785,0-25,11.215-25,25s11.215,25,25,25c13.785,0,25-11.215,25-25S198.785,80,185,80z"
      />
    </Svg>
  );
};

export default More;
