import React, {useState} from 'react';
import {View, Animated} from 'react-native';
import FastImage from 'react-native-fast-image';

export const ProgressiveImage = props => {
  const [fadeAnim] = useState(new Animated.Value(0));
  const {source, style, resizeMode} = props;
  const uri = source.uri;

  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View>
      {source && uri && (
        <Animated.View style={{opacity: fadeAnim}}>
          {console.log('HUH?')}
          <FastImage
            style={style}
            source={{
              uri: uri,
              priority: FastImage.priority.high,
            }}
            onLoadEnd={fadeIn}
            resizeMode={resizeMode ?? FastImage.resizeMode.cover}
          />
        </Animated.View>
      )}
    </View>
  );
};
