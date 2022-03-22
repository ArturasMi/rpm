import React, {useEffect, useState} from 'react';
import {View, Text, StatusBar, FlatList, TouchableOpacity} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import EStyleSheet from 'react-native-extended-stylesheet';
import ProgressiveImage from '../../components/ProgressiveImage';
import FadeIn from '../../components/Animate/FadeIn';
import ScreenTitle from '../../components/ScreenTitle';
import EmptyList from '../../assets/icons/EmptyList';
import {isOdd} from '../../helpers/functions';
import styles from './styles';

const style = EStyleSheet.create(styles);
const delayBetween = 50;

const Gallery = ({navigation}) => {
  const [collections, updateCollections] = useState('loading');
  useEffect(() => {
    firestore().collection('gallery_collections').onSnapshot(onResult, onError);
  }, []);

  const onResult = (querySnapshot) => updateCollections(querySnapshot._docs);
  const onError = (error) => updateCollections('error');

  const GalleryItem = ({item, index}) => {
    const margin = isOdd(index) ? {marginLeft: 10} : {marginRight: 10};
    return (
      <View style={{width: '50%'}}>
        <FadeIn delay={delayBetween * index + delayBetween} key={item.id}>
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => navigation.navigate('GalleryWatch', {id: item.id})}>
            <View style={style.GalleryItem}>
              <View style={{...margin, ...style.ImageContainer}}>
                <ProgressiveImage
                  source={{uri: item._data.image}}
                  style={style.Image}
                />
                <View style={style.ImageCaption}>
                  <Text style={style.Date}>{item._data.date}</Text>
                  <Text
                    style={style.Title}
                    numberOfLines={2}
                    ellipsizeMode="tail">
                    {item._data.title}
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </FadeIn>
      </View>
    );
  };

  const shiftCollection = (array) => {
    let list = array ? [...array] : [];
    list?.length > 1 ? list.shift() : [];
    return list;
  };

  return (
    <View style={style.Gallery}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <View style={style.Container}>
        {typeof collections === 'object' ? (
          <FlatList
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            alwaysBounceVertical={true}
            style={style.GalleryList}
            contentContainerStyle={style.GalleryListContainer}
            data={shiftCollection(collections)}
            numColumns={2}
            renderItem={GalleryItem}
            keyExtractor={(item) => item.id}
            ListHeaderComponent={() =>
              collections?.length ? (
                <>
                  <ScreenTitle title="Our Memories" disableBack />
                  {collections?.length && (
                    <Text style={style.CategoryTitle}>Latest memory</Text>
                  )}
                  <View style={{width: '100%'}}>
                    <TouchableOpacity
                      activeOpacity={1}
                      onPress={() =>
                        navigation.navigate('GalleryWatch', {
                          id: collections[0].id,
                        })
                      }>
                      <FadeIn delay={0}>
                        <View style={style.GalleryItem}>
                          <View style={style.ImageContainer}>
                            <ProgressiveImage
                              source={{uri: collections[0]._data.image}}
                              style={style.FirstImage}
                            />
                            <View style={style.ImageCaption}>
                              <Text style={style.FirstDate}>
                                {collections[0]._data.date}
                              </Text>
                              <Text
                                style={style.FirstTitle}
                                numberOfLines={2}
                                ellipsizeMode="tail">
                                {collections[0]._data.title}
                              </Text>
                            </View>
                          </View>
                        </View>
                      </FadeIn>
                    </TouchableOpacity>
                    {collections?.length > 1 ? (
                      <Text style={style.CategoryTitle}>Previous memories</Text>
                    ) : null}
                  </View>
                </>
              ) : null
            }
          />
        ) : (
          <EmptyList />
        )}
      </View>
    </View>
  );
};

export default Gallery;
