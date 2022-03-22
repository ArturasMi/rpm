import React from 'react';
import {View, Text, TouchableHighlight} from 'react-native';
import {ProgressiveImage} from '../../components/ProgressiveImage';
import LinearGradient from 'react-native-linear-gradient';
import ImagePicker from 'react-native-image-crop-picker';
import EStyleSheet from 'react-native-extended-stylesheet';
import {styles} from './styles';
import {Colors} from '../../configs';

import Edit from '../../assets/icons/Edit';

const style = EStyleSheet.create(styles);

export const ProfilePicture = ({value, onChange, error}) => {
  const selectImage = () => {
    ImagePicker.openPicker({
      width: 400,
      height: 400,
      cropping: true,
      mediaType: 'photo',
      cropperToolbarWidgetColor: '#ffffff',
      cropperToolbarTitle: '',
      cropperToolbarColor: Colors.colorBlack,
      cropperStatusBarColor: Colors.colorBlack,
      cropperActiveWidgetColor: Colors.colorMain,
    })
      .then(image => onChange(image.path))
      .catch(err => onChange(null));
  };

  return (
    <View style={style.UploadProfilePic}>
      <LinearGradient
        colors={[Colors.colorMain, '#006429']}
        style={style.ProfilePicture}>
        <View style={style.ProfilePicBackground}>
          {value ? (
            <ProgressiveImage
              style={style.ProfilePictureImage}
              source={{
                uri: value,
              }}
            />
          ) : (
            <Text style={style.NoImage} onPress={selectImage}>
              Upload Image
            </Text>
          )}
          {value && (
            <TouchableHighlight
              underlayColor="rgba(0,0,0,0)"
              onPress={selectImage}
              style={style.RemoveImagePress}>
              <View style={style.RemoveImage}>
                <Edit size={20} color={Colors.colorMain} />
              </View>
            </TouchableHighlight>
          )}
        </View>
      </LinearGradient>
      {error && <Text style={style.ErrorMessage}>{error}</Text>}
    </View>
  );
};
