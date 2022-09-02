import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors } from '../styles'
import tw from 'tailwind-react-native-classnames'
import { useNavigation } from '@react-navigation/native'

const ChoiceScreen = () => {
    const navigation = useNavigation();
  return (
    <SafeAreaView style={tw`flex-1 h-1 justify-center`}>
        <Text style={tw`font-bold text-center`}>Choose your option...</Text>
        <TouchableOpacity 
        onPress={()=> navigation.navigate('DriverHome')}
        style={[{height:55, borderRadius:16,borderWidth:2, borderColor:colors.green, width:'80%', alignSelf:'center', justifyContent:'center' }, tw`flex items-center m-4`]}>
            <Text style={tw`text-lg font-bold`}>I am a Driver</Text>
        </TouchableOpacity>
        <TouchableOpacity 
        onPress={()=> navigation.navigate('HomeScreen')}
        style={[tw`flex items-center`, {height:55, borderRadius:16, backgroundColor:colors.green, width:'80%', justifyContent:'center', alignSelf:'center'}]}>
            <Text style={tw`text-white text-lg font-bold`}>I want Transport</Text>
        </TouchableOpacity>
    </SafeAreaView>
      
  )
}

export default ChoiceScreen

const styles = StyleSheet.create({})