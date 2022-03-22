import React from 'react';
import {View} from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import EStyleSheet from 'react-native-extended-stylesheet';
import styles from './styles';
const style = EStyleSheet.create(styles);
const SearchInput = ({longitude, latitude, updateMap, mapRef}) => {
  return (
    <View style={style.SearchInputContainer}>
      <GooglePlacesAutocomplete
        placeholder="Search"
        enablePoweredByContainer={true}
        minLength={2} // minimum length of text to search
        autoFocus={false}
        fetchDetails={true}
        onPress={(data, details = null) => {
          console.log('asd ', {data, details, latitude, longitude});
          updateMap({
            destination: {
              longitude: details.geometry.location.lng,
              latitude: details.geometry.location.lat,
            },
          });
          // 'details' is provided when fetchDetails = true
          // updateDestination({
          //   longitude: details.geometry.location.lng,
          //   latitude: details.geometry.location.lat,
          // });
          // console.log('RETURNED ', {data, details});
          console.log('mapRef ', mapRef);
          mapRef.animateCamera({
            center: {
              latitude,
              longitude,
            },
            heading: 50,
            pitch: 90,
            zoom: 23,
            altitude: 1,
          });
        }}
        getDefaultValue={() => {
          return ''; // text input default value
        }}
        query={{
          // available options: https://developers.google.com/places/web-service/autocomplete
          key: 'AIzaSyDYqMNlDvZv8_X5cwJmWmtqCDLqmoXjRlo',
          language: 'en',
          components: 'country:lt',
        }}
      />
    </View>
  );
};

export default SearchInput;
