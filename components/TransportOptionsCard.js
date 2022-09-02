import { FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import tw from 'tailwind-react-native-classnames'
import { Icon } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { selectTravelTimeInformation } from '../slices/navSlice'

const TransportOptionsCard = () => {
  const navigation = useNavigation();
  const [selected, setSelected] = useState(null);
  const travelTimeInformation = useSelector(selectTravelTimeInformation);

  const data = [
    {
        id: 1921,
        title: "Small",
        multiplier: 1,
        image: require("../assets/truck(5).png"),
    },
    {
        id: 1922,
        title: "Large",
        multiplier: 1.2,
        image: require("../assets/truck_96.png"),
    },
  ];

  const SURGE_CHARGE_RATE = 17;

  return (
    <SafeAreaView style={tw`bg-white flex-grow`}>
      <View >
        <TouchableOpacity
        onPress={() => navigation.navigate('NavigateCard')}
        style={tw`absolute top-3 left-5 z-50 p-3 rounded-full`}
        >
          <Icon name='chevron-left' type='fontawesome' />
        </TouchableOpacity>
        <Text style={tw`text-center py-5 text-xl`}>Select Transport -{travelTimeInformation?.distance.text}</Text>
      </View>

      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({item:{id, title, multiplier, image}, item}) => (
          <TouchableOpacity
            onPress={() => setSelected(item)}
            style={tw`flex-row justify-between items-center px-10 pt-5 mr-0 ${id === selected?.id && "bg-gray-200"}`}
          >
            <Image
              style={{
                width: 100,
                height: 100,
                resizeMode: 'contain',
              }}
              source={image}
            />
            <View style={tw`ml-2`}>
              <Text style={tw`text-xl text-gray-600 font-semibold`}>{title}</Text>
              <Text>{travelTimeInformation?.duration.text}</Text>
            </View>
            <Text style={tw`text-2xl font-bold ml-3`}>
              {new Intl.NumberFormat('en-za', {
                style: 'currency',
                currency: 'ZAR',
              }).format(
                (travelTimeInformation?.duration.value * SURGE_CHARGE_RATE * multiplier)/100
              )}
            </Text>
          </TouchableOpacity>
        )}
      /> 
      <View>
        <TouchableOpacity
        disabled={!selected}
        style={[{backgroundColor:'#29AB01'}, tw` py-3 m-3 rounded-2xl ${!selected && "bg-gray-300"}` ]}
        >
          <Text style={tw`text-center text-white text-xl`}>Choose {selected?.title}</Text>
        </TouchableOpacity>
      </View>     
    </SafeAreaView>
  )
}

export default TransportOptionsCard

const styles = StyleSheet.create({})