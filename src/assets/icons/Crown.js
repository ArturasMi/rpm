import Svg, {Path, Polygon} from 'react-native-svg';
import React from 'react';
import {View, StyleSheet} from 'react-native';

const Home = ({size, color}) => {
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
        fill={color}
        viewBox="0 0 512 512"
        style={{
          enableBackground: 'new 0 0 512 512',
        }}>
        <Polygon points="392,399.17 377,399.17 133.45,399.17 118.45,399.17 103.45,399.17 103.45,438.95 407,438.95 407,399.17 		" />
        <Polygon
          points="138.83,152.23 117.96,203.12 131.44,209.76 144.93,216.4 161.39,224.5 173.62,207.03 182.26,194.69 
			190.89,182.36 		"
        />
        <Polygon
          points="373.17,152.23 320.12,182.93 328.76,195.26 337.39,207.6 349.22,224.5 366.84,215.83 380.32,209.19 
			393.81,202.55 		"
        />
        <Path
          d="M469.7,148.67c-21.63,0-39.51,16.3-42,37.27c-0.2,1.65-0.3,3.33-0.3,5.03c0,3.82,0.51,7.53,1.47,11.05
			c1.33,4.93,3.54,9.51,6.44,13.55l-30.08,14.81l-13.49,6.64l-1.68,0.83h-0.01l-11.8,5.8l-38.85,19.13l-28.07-40.09l-7.55-10.79
			v-0.01l-1.09-1.55l-8.63-12.33l-29.02-41.46c5.08-1.18,9.82-3.28,14.02-6.12c4.23-2.84,7.92-6.45,10.88-10.61
			c4.92-6.91,7.82-15.36,7.82-24.47c0-23.33-18.97-42.3-42.3-42.3c-23.32,0-42.3,18.97-42.3,42.3c0,9.02,2.84,17.39,7.67,24.26
			c2.94,4.18,6.61,7.81,10.82,10.68c4.18,2.86,8.9,4.99,13.97,6.2l-28.67,40.95l-8.63,12.33l-1.85,2.65l-6.79,9.7l-28.46,40.66
			l-37.71-18.56l-12.42-6.12l-1.06-0.52l-13.49-6.64L73.8,214.83c3.35-3.74,6.05-8.08,7.91-12.83s2.88-9.91,2.89-15.3v-0.08
			c0-23.33-18.97-42.31-42.3-42.31c-23.32,0-42.3,18.98-42.3,42.31c0,21.39,15.97,39.14,36.62,41.92c1.86,0.25,3.75,0.38,5.68,0.38
			c3.42,0,6.74-0.41,9.93-1.18c4.99-1.2,9.64-3.29,13.77-6.09l47.12,132.52l5.33,15h273.71l5.33-15l46.19-129.88
			c3.97,3.11,8.5,5.52,13.42,7.06c3.98,1.25,8.21,1.92,12.6,1.92c0.9,0,1.79-0.03,2.67-0.09c22.08-1.38,39.63-19.79,39.63-42.21
			C512,167.64,493.02,148.67,469.7,148.67z"
        />
      </Svg>
    </View>
  );
};

export default Home;
