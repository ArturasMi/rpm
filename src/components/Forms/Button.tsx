import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {styles} from './styles';

const style = EStyleSheet.create(styles);

export type ButtonType = {
  container?: any;
  button?: any;
  onPress: (t: any) => void;
  value: string;
  children?: any;
};

export const Button = ({
  container,
  button,
  onPress,
  value,
  children,
}: ButtonType) => {
  return children ? (
    <TouchableOpacity
      onPress={onPress}
      style={[style.ButtonContainer, container]}>
      {children}
    </TouchableOpacity>
  ) : (
    <View style={[style.ButtonContainer, container]}>
      <Text onPress={onPress} style={[style.Button, button]}>
        {value}
      </Text>
    </View>
  );
};
