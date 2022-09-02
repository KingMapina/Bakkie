import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { GOOGLE_MAPS_APIKEY } from "@env"
import { useDispatch } from 'react-redux'
import { setDestination } from '../slices/navSlice'
import TransportOptionsCard from './TransportOptionsCard'
import { useNavigation } from '@react-navigation/native'
import NavFavourites from './NavFavourites'
import { Icon } from 'react-native-elements'

const NavigateCard = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation();

  return (
    <SafeAreaView style = {tw`bg-white flex-1`}>
      <Text style = {tw`text-center py-5 text-xl`}>Let's help you transport</Text>
      <View style = {tw`border-t border-gray-200 flex-shrink`}>
            <GooglePlacesAutocomplete 
                placeholder='Where to?'
                debounce={400}
                fetchDetails={true}
                enablePoweredByContainer={false}
                returnKeyType={'search'}
                minLength={2}
                onPress={(data, details = null) => {
                    dispatch(
                        setDestination({
                            location: details.geometry.location,
                            description: data.description,
                        })
                    );
                    navigation.navigate("TransportOptionsCard")
                }}
                query={{
                    key: GOOGLE_MAPS_APIKEY,
                    language: 'en',
                    components: 'country:za'

                }}
                styles={{
                    container:{
                      flex: 0,
                      backgroundColor: "white",
                      paddingTop: 20,
                    },
                    textInput:{
                      fontSize: 18,
                      borderRadius:15,
                      backgroundColor: "#dddddf"
                    },
                    textInputContainer:{
                        paddingHorizontal: 20,
                        paddingBottom: 0,
                    },
                  }}
            />
            <NavFavourites />
            
      </View>
      <View style= {tw`flex-row bg-white justify-evenly py-2 mt-auto border-t border-gray-100`}>
                <TouchableOpacity
                onPress={() => navigation.navigate('TransportOptionsCard') } 
                style={[tw`flex flex-row justify-between bg-black w-24 px-4 py-3 rounded-full`, {backgroundColor:'#29AB01'}]}
                >
                    <Icon name='truck' type='font-awesome' color='white' size={16} />
                    <Text style={tw`text-white text-center`}>Bakkie</Text>
                </TouchableOpacity>
            </View>
    </SafeAreaView>
  )
}

export default NavigateCard

const styles = StyleSheet.create({})