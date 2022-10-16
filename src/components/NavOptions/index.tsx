import React from 'react'
import { useNavigation } from '@react-navigation/native'
import tw from 'tailwind-react-native-classnames'
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native'
import { Icon } from 'react-native-elements'
import { useSelector } from 'react-redux'

import { selectOrigin } from '../../slices/navSlice'

type NavOptionsData = {
  id: string
  title: string
  image: string
  page: string
}

const navData: NavOptionsData[] = [
  {
    id: '1',
    title: 'Get a ride',
    image: 'https://links.papareact.com/3pn',
    page: 'Map'
  },
  {
    id: '2',
    title: 'Order food',
    image: 'https://links.papareact.com/28w',
    page: 'Eats'
  }
]

export default function NavOptions() {
  const navigation = useNavigation()
  const origin = useSelector(selectOrigin)
  return (
    <FlatList
      data={navData}
      horizontal
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => navigation.navigate(item.page)}
          disabled={!origin}
          style={tw`p-2 pl-6 pb-8 bg-gray-200 m-2 w-40`}
        >
          <View style={tw`${!origin ? 'opacity-20' : ''}`}>
            <Image
              style={{ width: 120, height: 120, resizeMode: 'contain' }}
              source={{ uri: item.image }}
            />
            <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
            <Icon
              tvParallaxProperties={undefined}
              style={tw`p-2 bg-black rounded-full w-10 mt-4`}
              type="antdesign"
              name="arrowright"
              color="white"
            />
          </View>
        </TouchableOpacity>
      )}
    />
  )
}
