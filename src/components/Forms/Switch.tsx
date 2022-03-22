import React, {useState} from 'react';
import {Animated, TouchableOpacity} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {styles} from './styles';

const style = EStyleSheet.create(styles);
let allow = true;

export const Switch = ({value, onChange, size, gaps}) => {
  const [switchValue, updateValue] = useState(value ?? false);
  const [animate1] = useState(new Animated.Value(value ? 1 : 0));
  const [animate3] = useState(new Animated.Value(value ? 1 : 0));
  const [animate4] = useState(new Animated.Value(value ? 1 : 0));
  const backgroundColor = animate1.interpolate({
    inputRange: [0, 1],
    outputRange: ['rgba(255, 255, 255, 0.1)', 'rgba(50, 183, 110 ,1)'],
  });
  const switchWidth = animate3.interpolate({
    inputRange: [0, 1],
    outputRange: [size - gaps, size - gaps + 5],
  });
  const switchMargin = animate4.interpolate({
    inputRange: [0, 1],
    outputRange: [gaps / 2, 27],
  });

  const toggleSwitch = e => {
    if (allow) {
      allow = false;
      if (!switchValue) {
        Animated.timing(animate3, {
          toValue: 1,
          duration: 200,
          useNativeDriver: true,
        }).start(() => {
          Animated.timing(animate4, {
            toValue: 1,
            duration: 200,
            useNativeDriver: true,
          }).start(() => {});
          Animated.timing(animate3, {
            toValue: 0,
            duration: 200,
            useNativeDriver: true,
          }).start(() => {});
          Animated.timing(animate1, {
            toValue: 1,
            duration: 200,
            useNativeDriver: true,
          }).start(() => {
            updateValue(!switchValue);
            onChange(!switchValue);
            allow = true;
          });
        });
      } else {
        Animated.timing(animate3, {
          toValue: 1,
          duration: 200,
          useNativeDriver: false,
        }).start(() => {
          Animated.timing(animate4, {
            toValue: 0,
            duration: 200,
            useNativeDriver: false,
          }).start(() => {});
          Animated.timing(animate3, {
            toValue: 0,
            duration: 200,
            useNativeDriver: false,
          }).start(() => {});
          Animated.timing(animate1, {
            toValue: 0,
            duration: 200,
            useNativeDriver: false,
          }).start(() => {
            updateValue(!switchValue);
            onChange(!switchValue);
            allow = true;
          });
        });
      }
    }
  };

  return (
    <TouchableOpacity
      onPress={toggleSwitch}
      style={{width: size * 2, height: size}}>
      <Animated.View
        style={{
          ...style.Switch,
          borderRadius: size,
          width: size * 2,
          height: size,
          backgroundColor: backgroundColor,
        }}>
        <Animated.View
          style={{
            backgroundColor: '#fff',
            width: switchWidth,
            height: size - gaps,
            borderRadius: size - gaps,
            marginTop: gaps / 2,
            marginLeft: switchMargin,
          }}
        />
      </Animated.View>
    </TouchableOpacity>
  );
};
