import React from 'react'
import { View, Text } from 'react-native'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'

export default function Home() {
  const reduxState = useSelector((state: RootState) => state)
  console.log(reduxState)

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>{reduxState.destination}</Text>
    </View>
  )
}
