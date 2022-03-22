import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import ChevronRight from '../../assets/icons/ChevronRight';
import {Constants} from '../../configs';

export type ScreenTitleType = {
  title: string;
  onBack?: () => void;
  disableBack?: boolean;
};

export const ScreenTitle = ({title, onBack, disableBack}: ScreenTitleType) => {
  const navigation = useNavigation();

  const onBackPress = () => {
    if (!onBack) navigation.goBack();
    else onBack();
  };

  return (
    <View
      style={{
        paddingTop: Constants.statusbarHeight,
        alignItems: 'flex-start',
      }}>
      {!disableBack && (
        <TouchableOpacity
          onPress={onBackPress}
          style={{
            paddingTop: 30,
            paddingLeft: 10,
            paddingRight: 30,
            marginTop: 20,
            transform: [{rotate: '180deg'}],
          }}>
          <ChevronRight size={40} color="#fff" />
        </TouchableOpacity>
      )}
      <Text
        style={{
          paddingTop: 30,
          fontSize: 28,
          lineHeight: 35,
          color: '#fff',
          fontFamily: 'Poppins-Medium',
        }}>
        {title}
      </Text>
    </View>
  );
};
