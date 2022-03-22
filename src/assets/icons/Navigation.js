import Svg, {Polygon} from 'react-native-svg';
import React from 'react';

const Navigation = ({size, colors}) => {
  return (
    <Svg
      x="0px"
      y="0px"
      viewBox="0 0 512 512"
      width={size}
      height={size}
      style={{enableBackground: 'new 0 0 512 512'}}>
      <Polygon
        style={{fill: colors[0]}}
        points="256,0.96 0,511.04 256,354.096 512,511.04 "
      />
      <Polygon
        style={{fill: colors[1]}}
        points="256,0.96 0,511.04 256,354.096 256,203.016 "
      />
    </Svg>
  );
};

export default Navigation;
