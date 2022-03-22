import React, {useState} from 'react';
import {View, Animated, TouchableHighlight, Text} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {styles} from './styles';

const style = EStyleSheet.create(styles);

export const Checkbox = ({container, onRight, onChange, value, error}) => {
  const [animation] = useState(new Animated.Value(value ? 1 : 0));
  let throttled = false;
  const onPress = () => {
    if (!throttled) {
      onChange(!value);
      if (value)
        Animated.timing(animation, {
          toValue: 0,
          duration: 200,
          useNativeDriver: false,
        }).start();
      else
        Animated.timing(animation, {
          toValue: 1,
          duration: 200,
          useNativeDriver: false,
        }).start();
      setTimeout(() => {
        throttled = true;
      }, 300);
    }
  };

  const boxInterpolation = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ['rgb(31, 31, 40)', '#ffffff30'],
  });

  const borderInterpolation = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ['#ffffff30', '#ffffff30'],
  });

  const checkInterpolation = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });
  const animatedStyle = {
    backgroundColor: boxInterpolation,
    borderColor: borderInterpolation,
  };

  return (
    <>
      <TouchableHighlight underlayColor="rgba(255,255,255,0)" onPress={onPress}>
        <View style={style.Flex}>
          <View style={style.CheckboxContainer} {...container}>
            <Animated.View style={{...style.CheckContainer, ...animatedStyle}}>
              <Animated.View
                style={{...style.Check, opacity: checkInterpolation}}
              />
            </Animated.View>
          </View>
          {onRight}
        </View>
      </TouchableHighlight>
      {error && <Text style={style.ErrorMessage}>{error}</Text>}
    </>
  );
};
