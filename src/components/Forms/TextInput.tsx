import React from 'react';
import {
  View,
  TextInput as Input,
  Text,
  NativeSyntheticEvent,
  TextInputChangeEventData,
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {styles} from './styles';

const style = EStyleSheet.create(styles);

export type TextInputType = {
  value: string;
  placeholder?: string;
  onChange: (value: string) => void;
  prefix?: any;
  error?: any;
  options?: any;
};

export const TextInput = ({
  value,
  placeholder,
  onChange,
  prefix,
  error,
  options,
}: TextInputType) => {
  const onInputChange = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
    onChange(e.nativeEvent.text);
  };
  return (
    <View style={style.TextInputContainer}>
      {prefix && <View style={style.Prefix}>{prefix}</View>}
      <Input
        placeholderTextColor="rgba(255,255,255,0.5)"
        style={prefix ? style.TextInputWithPrefix : style.TextInput}
        value={value.toString()}
        placeholder={placeholder}
        onChange={onInputChange}
        {...options}
      />
      {error && <Text style={style.ErrorMessage}>{error}</Text>}
    </View>
  );
};
