import React from 'react';
import {View} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {styles} from './style';

const style = EStyleSheet.create(styles);

export type FloatingType = {
  children: any;
};

export const Floating = ({children}: FloatingType) => {
  return <View style={style.Floating}>{children}</View>;
};
