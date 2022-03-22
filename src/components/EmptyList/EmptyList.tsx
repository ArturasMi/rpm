import React from 'react';
import {Text, View} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {styles} from './style';

const style = EStyleSheet.create(styles);

export const EmptyList = () => {
  return (
    <View style={style.EmptyList}>
      <Text style={style.EmptyListMessage}>Oh no! So empty</Text>
    </View>
  );
};
