import Svg, {Path} from 'react-native-svg';
import React from 'react';
import {View, StyleSheet} from 'react-native';

const Car = ({size, color}) => {
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
        <Path
          fill={color}
          d="M146.219,333.781L94.72,282.283c-10.091-10.069-23.467-15.616-37.717-15.616H21.333c-5.888,0-10.667,4.779-10.667,10.667
			S15.445,288,21.333,288h35.669c8.405,0,16.661,3.413,22.613,9.365l33.301,33.301H21.333c-5.888,0-10.667,4.779-10.667,10.667
			c0,5.888,4.779,10.667,10.667,10.667h117.333c4.309,0,8.192-2.603,9.856-6.592S149.269,336.832,146.219,333.781z"
        />
        <Path
          fill={color}
          d="M138.667,384c-5.888,0-10.667,4.779-10.667,10.667v32c0,5.888-4.8,10.667-10.667,10.667h-64
			c-5.867,0-10.667-4.779-10.667-10.667V384c0-5.888-4.779-10.667-10.667-10.667S21.333,378.112,21.333,384v42.667
			c0,17.643,14.357,32,32,32h64c17.643,0,32-14.357,32-32v-32C149.333,388.779,144.555,384,138.667,384z"
        />
        <Path
          fill={color}
          d="M463.595,203.883c-29.397-15.381-95.381-22.549-207.595-22.549s-178.197,7.168-207.595,22.549
			C14.912,221.376,0,250.603,0,298.667c0,46.208,10.581,86.4,11.029,88.085c1.237,4.672,5.461,7.915,10.304,7.915h93.483
			l40.405,20.203c1.493,0.747,3.136,1.131,4.779,1.131h192c1.643,0,3.285-0.384,4.757-1.131l40.427-20.203h93.483
			c4.843,0,9.067-3.243,10.304-7.915c0.448-1.685,11.029-41.877,11.029-88.085C512,250.603,497.088,221.376,463.595,203.883z
			 M482.24,373.333h-87.552c-1.664,0-3.307,0.384-4.779,1.131l-40.427,20.203H162.517l-40.405-20.203
			c-1.493-0.747-3.136-1.131-4.779-1.131H29.781c-2.965-13.589-8.448-42.944-8.448-74.667c0-40.171,10.709-62.165,36.928-75.883
			c25.557-13.355,92.075-20.117,197.739-20.117s172.181,6.763,197.739,20.117c26.219,13.717,36.928,35.712,36.928,75.883
			C490.667,330.389,485.184,359.744,482.24,373.333z"
        />
        <Path
          fill={color}
          d="M490.667,330.667h-91.584l33.28-33.301c5.973-5.952,14.208-9.365,22.635-9.365h35.669c5.888,0,10.667-4.779,10.667-10.667
			s-4.779-10.667-10.667-10.667h-35.669c-14.251,0-27.627,5.547-37.717,15.616l-51.499,51.499
			c-3.029,3.051-3.947,7.637-2.304,11.627s5.547,6.592,9.856,6.592h117.333c5.888,0,10.667-4.779,10.667-10.667
			C501.333,335.445,496.555,330.667,490.667,330.667z"
        />
        <Path
          fill={color}
          d="M382.997,272.811c-1.771-3.755-5.525-6.144-9.664-6.144H138.667c-4.139,0-7.893,2.389-9.664,6.144
			c-1.749,3.733-1.195,8.171,1.472,11.349l53.333,64c2.027,2.432,5.035,3.84,8.192,3.84h128c3.157,0,6.165-1.408,8.192-3.84
			l53.333-64C384.192,280.981,384.747,276.544,382.997,272.811z M314.987,330.667H196.992L161.429,288h189.12L314.987,330.667z"
        />
        <Path
          fill={color}
          d="M468.459,209.088c-12.139-27.904-52.757-119.872-66.88-131.883c-17.6-14.955-68.011-23.872-134.912-23.872h-21.333
			c-66.901,0-117.312,8.917-134.912,23.851c-14.123,12.011-54.763,103.979-66.88,131.883c-2.325,5.419,0.149,11.691,5.547,14.037
			c5.376,2.347,11.691-0.107,14.037-5.525c24.085-55.445,53.547-117.056,61.12-124.117c8.213-6.976,42.965-18.795,121.088-18.795
			h21.333c78.123,0,112.875,11.819,121.045,18.752c7.616,7.104,37.077,68.693,61.163,124.16c1.749,4.032,5.696,6.421,9.792,6.421
			c1.408,0,2.88-0.277,4.245-0.875C468.309,220.779,470.784,214.485,468.459,209.088z"
        />
        <Path
          fill={color}
          d="M480,373.333c-5.888,0-10.667,4.779-10.667,10.667v42.667c0,5.888-4.8,10.667-10.667,10.667h-64
			c-5.867,0-10.667-4.779-10.667-10.667v-32c0-5.888-4.779-10.667-10.667-10.667c-5.888,0-10.667,4.779-10.667,10.667v32
			c0,17.643,14.357,32,32,32h64c17.643,0,32-14.357,32-32V384C490.667,378.112,485.888,373.333,480,373.333z"
        />
      </Svg>
    </View>
  );
};

export default Car;
