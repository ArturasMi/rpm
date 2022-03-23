import React, {useState} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import {Animated} from 'react-native';

const FadeIn = ({children, delay, duration}) => {
  const [opacity] = useState(new Animated.Value(0));

  useFocusEffect(
    React.useCallback(() => {
      Animated.timing(opacity, {
        toValue: 1,
        duration: duration ?? 200,
        delay: delay ?? 0,
        useNativeDriver: true,
      }).start(() => {});
      return () =>
        Animated.timing(opacity, {
          toValue: 0,
          duration: 0,
          useNativeDriver: true,
        }).start(() => {});
    }, []),
  );

  return <Animated.View style={{opacity: opacity}}>{children}</Animated.View>;
};

export default FadeIn;
