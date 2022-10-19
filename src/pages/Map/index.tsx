import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import tw from 'tailwind-react-native-classnames'
import {
  createNativeStackNavigator,
  NativeStackNavigationProp
} from '@react-navigation/native-stack'

import MapComponent from '../../components/MapComponent'
import NavigateCard from '../../components/NavigateCard'
import RideOptionsCard from '../../components/RideOptionsCard'
import { Icon } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'
import { AppNavigationType } from '../../../App'

type MapStackParamList = {
  NavigateCard: undefined
  RideOptionsCard: undefined
}

export type MapNavigationType = NativeStackNavigationProp<MapStackParamList>

export default function Map() {
  const Stack = createNativeStackNavigator()
  const navigation = useNavigation<AppNavigationType>()
  return (
    <View>
      <TouchableOpacity
        style={tw`bg-gray-100 absolute top-16 left-8 z-50 p-3 rounded-full shadow-lg`}
        onPress={() => navigation.navigate('Home')}
      >
        <Icon name="menu" tvParallaxProperties={undefined} />
      </TouchableOpacity>

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
