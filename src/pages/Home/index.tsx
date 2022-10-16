import React from 'react'
import { Text, SafeAreaView, StyleSheet } from 'react-native'
import { useSelector } from 'react-redux'
import tw from 'tailwind-react-native-classnames'
import { RootState } from '../../store'

export default function Home() {
  const reduxState = useSelector((state: RootState) => state)
  console.log(reduxState)

  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <Text style={tw`text-red-500 p-10`}>{reduxState.destination}</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
