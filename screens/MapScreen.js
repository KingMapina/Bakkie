import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import Map from '../components/Map'
import MapView from 'react-native-maps'
import { createStackNavigator } from '@react-navigation/stack'
import { StackActions } from '@react-navigation/native'
import TransportOptionsCard from '../components/TransportOptionsCard'
import NavigateCard from '../components/NavigateCard'

const MapScreen = () => {

  const Stack = createStackNavigator();

  return (
    <View>
      <View style = {tw`h-1/2`}>
        <Map />
      </View>
      <View style = {tw`h-1/2`}>
        <Stack.Navigator>
          <Stack.Screen
              name='NavigateCard'
              component={NavigateCard}
              options={{
                headerShown: false,
              }}
          />
          <Stack.Screen
              name='TransportOptionsCard'
              component={TransportOptionsCard}
              options={{
                headerShown: false,
              }}
          />
        </Stack.Navigator>
      </View>
    </View>
  )
}

export default MapScreen