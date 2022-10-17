import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import tw from 'tailwind-react-native-classnames'
import { useDispatch } from 'react-redux'

import { useNavigation } from '@react-navigation/native'

import { GOOGLE_MAPS_APIKEY } from '@env'
import { setDestination } from '../../slices/navSlice'
import NavFavourites from '../NavFavourites'

export default function NavigateCard() {
  const dispatch = useDispatch()
  const navigation = useNavigation()
  return (
    <SafeAreaView style={tw`bg-white flex-1`}>
      <Text style={tw`text-center py-5 text-xl`}>Good Morning!</Text>
      <View style={tw`border-t border-gray-200 flex-shrink`}>
        <View style={tw``}>
          <GooglePlacesAutocomplete
            placeholder="Where to?"
            debounce={400}
            nearbyPlacesAPI={'GooglePlacesSearch'}
            styles={toInputBoxStyles}
            fetchDetails={true}
            enablePoweredByContainer={false}
            query={{
              key: GOOGLE_MAPS_APIKEY,
              language: 'en'
            }}
            onPress={(data, details = null) => {
              dispatch(
                setDestination({
                  location: details?.geometry.location,
                  description: data.description
                })
              )
              navigation.navigate('RideOptionsCard')
            }}
          />
        </View>
        <NavFavourites />
      </View>
    </SafeAreaView>
  )
}
const toInputBoxStyles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingTop: 20,
    flex: 0
  },
  textInput: {
    backgroundColor: '#DDDDDF',
    borderRadius: 0,
    fontSize: 18
  },
  textInputContainer: {
    paddingHorizontal: 20,
    paddingBottom: 0
  }
})
