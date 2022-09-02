import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import tw from 'tailwind-react-native-classnames'
import { colors } from '../styles'

const DriverHome = () => {
    const navigation = useNavigation();

    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [phonenumber, setPhoneNumber] = useState('');
    const [carmodel, setCarModel] = useState('');
    const [carbrand, setCarBrand] = useState('');
    const [licenseplate, setLicensePlate] = useState('');
    const [carcolor, setCarColor] = useState('');
  return (
    

    <SafeAreaView style={tw`flex-1 justify-center`}>
        <Text style={tw`ml-11`}>About Driver</Text>
        <TextInput
            placeholder='First Name'
            style={[{borderWidth:2, borderRadius:16, height:50, width:'80%', borderColor:colors.grey4, alignSelf:'center'}, tw`justify-center py-5 px-3 mt-4`]}
            value={firstname}
            onChangeText={(text) => setFirstName(text)}
        />
        <TextInput
            placeholder='Last Name'
            style={[{borderWidth:2, borderRadius:16, height:50, width:'80%', borderColor:colors.grey4, alignSelf:'center'}, tw`justify-center py-5 px-3 mt-4`]}
            value={lastname}
            onChangeText={(text) => setLastName(text)}
        />
        <TextInput
            placeholder='Phone Number'
            style={[{borderWidth:2, borderRadius:16, height:50, width:'80%', borderColor:colors.grey4, alignSelf:'center'}, tw`justify-center py-5 px-3 mt-4`]}
            value={phonenumber}
            onChangeText={(text) => setPhoneNumber(text)}
        />
        <Text style={tw`ml-11 mt-6`}>About Car</Text>
        <TextInput
            placeholder='Car Brand'
            style={[{borderWidth:2, borderRadius:16, height:50, width:'80%', borderColor:colors.grey4, alignSelf:'center'}, tw`justify-center py-5 px-3 mt-4`]}
            value={carbrand}
            onChangeText={(text) => setCarBrand(text)}
        />
        <TextInput
            placeholder='Car Model'
            style={[{borderWidth:2, borderRadius:16, height:50, width:'80%', borderColor:colors.grey4, alignSelf:'center'}, tw`justify-center py-5 px-3 mt-4`]}
            value={carmodel}
            onChangeText={(text) => setCarModel(text)}
        />
        <TextInput
            placeholder='Car Color'
            style={[{borderWidth:2, borderRadius:16, height:50, width:'80%', borderColor:colors.grey4, alignSelf:'center'}, tw`justify-center py-5 px-3 mt-4`]}
            value={carcolor}
            onChangeText={(text) => setCarColor(text)}
        />
        <TextInput
            placeholder='License Plate'
            style={[{borderWidth:2, borderRadius:16, height:50, width:'80%', borderColor:colors.grey4, alignSelf:'center'}, tw`justify-center py-5 px-3 mt-4`]}
            value={licenseplate}
            onChangeText={(text) => setLicensePlate(text)}
        />
        <TouchableOpacity style={[{backgroundColor:colors.green, width:'80%', height:50, alignSelf:'center', borderRadius:16}, tw`justify-center mt-7`]}>
            <Text style={tw`text-lg text-center text-white font-semibold`}>Countinue</Text>
        </TouchableOpacity>

    </SafeAreaView>
  )
}

export default DriverHome

const styles = StyleSheet.create({})