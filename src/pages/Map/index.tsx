import React from 'react'
import { View, Text } from 'react-native'
import tw from 'tailwind-react-native-classnames'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import MapComponent from '../../components/MapComponent'
import NavigateCard from '../../components/NavigateCard'
import RideOptionsCard from '../../components/RideOptionsCard'

export default function Map() {
  const Stack = createNativeStackNavigator()
  return (
    <View>
      <Text>index</Text>

      <View style={tw`h-1/2`}>
        <MapComponent />
      </View>
      <View style={tw`h-1/2`}>
        <Stack.Navigator>
          <Stack.Screen
            name="NavigateCard"
            component={NavigateCard}
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen
            name="RideOptionsCard"
            component={RideOptionsCard}
            options={{
              headerShown: false
            }}
          />
        </Stack.Navigator>
      </View>
    </View>
  )
}
