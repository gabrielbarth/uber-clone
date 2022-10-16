import React from 'react'
import { StyleSheet, Image, View } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import tw from 'tailwind-react-native-classnames'

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
