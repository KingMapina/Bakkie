import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from "tailwind-react-native-classnames"
import NavOptions from '../components/NavOptions'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { GOOGLE_MAPS_APIKEY } from "@env"
import { useDispatch } from 'react-redux'
import { setDestination, setOrigin } from '../slices/navSlice'
import NavFavourites from '../components/NavFavourites'
import { auth } from '../firebase'
import { useNavigation } from '@react-navigation/native'
import { colors } from '../styles'

const HomeScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handleSignOut = () => {
    auth
    .signOut()
    .then(() => {
        navigation.replace('LogInScreen')
    })
    .catch(error => alert(error.message))
}

  return (
    <SafeAreaView style = {tw`bg-white h-full`}>
      <View style = {tw`p-5`}>
        <View style={tw`flex-row justify-between`}>
          <Image
            source = {require('../assets/icon.png')}
            style = {{width: 100, height: 100, resizeMode: 'contain'}}

          />
          <TouchableOpacity
            onPress={handleSignOut}
            style={[{height:55,width:100, backgroundColor:colors.green, borderRadius:16}, tw`justify-center mt-4`]}
          >
            <Text style={tw`text-white text-lg font-semibold text-center`}>Sign Out</Text>
          </TouchableOpacity>
  
        </View>
        
        <GooglePlacesAutocomplete
          nearbyPlacesAPI='GooglePlacesSearch'
          debounce={400}
          placeholder= "Where from?"
          minLength={2}
          enablePoweredByContainer={false}
          fetchDetails={true}
          styles={{
            container:{
              flex: 0,
            },
            textInput:{
              fontSize: 18,
            },
          }}
          query={{
            key: GOOGLE_MAPS_APIKEY,
            language: 'en',
            components: 'country:za'
          }}
          onPress={(data, details = null) => {
            dispatch(setOrigin({
              location: details.geometry.location,
              description: data.description,
            }))
            dispatch(setDestination(null))
          }}
        />

        <NavOptions />
        <NavFavourites />
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})