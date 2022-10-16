import React from 'react'
import { StyleSheet, Image, View } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import tw from 'tailwind-react-native-classnames'

import { GOOGLE_MAPS_APIKEY } from '@env'
import NavOptions from '../../components/NavOptions'

export default function Home() {
  return (
    <SafeAreaProvider style={tw`bg-white h-full`}>
      <View style={tw`p-5`}>
        <Image
          style={{
            width: 100,
            height: 100,
            resizeMode: 'contain'
          }}
          source={{
            uri: 'https://links.papareact.com/gzs'
          }}
        />

        <GooglePlacesAutocomplete
          query={{
            key: GOOGLE_MAPS_APIKEY,
            language: 'en'
          }}
          minLength={2}
          enablePoweredByContainer={false}
          onPress={(data, details = null) => {
            console.log(data)
            console.log(details)
          }}
          fetchDetails={true}
          nearbyPlacesAPI="GooglePlacesSearch"
          debounce={400}
          placeholder="Where From?"
          styles={{
            container: {
              flex: 0
            },
            texInput: {
              fontSize: 18
            }
          }}
        />
        <NavOptions />
      </View>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
