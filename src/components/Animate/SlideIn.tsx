import React, {useState} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import {Animated} from 'react-native';

export const SlideIn = ({children, delay, duration}) => {
  const [animate] = useState(new Animated.Value(0));

  useFocusEffect(
    React.useCallback(() => {
      Animated.timing(animate, {
        toValue: 1,
        duration: duration ?? 200,
        delay: delay ?? 0,
        useNativeDriver: true,
      }).start(() => {});
      return () =>
        Animated.timing(animate, {
          toValue: 0,
          duration: 0,
          useNativeDriver: true,
        }).start(() => {});
    }, []),
  );

  const opacity = animate.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  const translateY = animate.interpolate({
    inputRange: [0, 1],
    outputRange: [70, 0],
  });

  return (
    <Animated.View
      style={{
        opacity,
        transform: [
          {
            translateY,
          },
        ],
      }}>
      {children}
    </Animated.View>
  );
};
