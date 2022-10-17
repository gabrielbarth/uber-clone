import { StatusBar } from 'expo-status-bar'
import { Provider } from 'react-redux'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { store } from './src/store'

import Home from './src/pages/Home'
import Map from './src/pages/Map'
import { KeyboardAvoidingView, Platform } from 'react-native'

export default function App() {
  const Stack = createNativeStackNavigator()
  return (
    <Provider store={store}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? -64 : 0}
      >
        <NavigationContainer>
          <SafeAreaProvider>
            <Stack.Navigator initialRouteName="Home">
              <Stack.Screen
                name="Home"
                component={Home}
                options={{
                  headerShown: false
                }}
              />
              <Stack.Screen
                name="Map"
                component={Map}
                options={{
                  headerShown: false
                }}
              />
            </Stack.Navigator>
            <StatusBar style="auto" />
          </SafeAreaProvider>
        </NavigationContainer>
      </KeyboardAvoidingView>
    </Provider>
  )
}
