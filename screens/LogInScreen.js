import { StatusBar } from 'expo-status-bar';
import React, {useState, useRef, useEffect} from 'react';
import { StyleSheet, Text, View, Dimensions, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { colors, parameters } from '../styles';

const SCREEN_WIDTH = Dimensions.get('window').width

export default function LogInScreen({navigation}) {
    return(
        <View style = {styles.container} >
            <Text style = {styles.text1}>Welcome to Bakkie Finder</Text>
            <Image
            style = {styles.loginimge}
            source={require('../assets/undraw_Access_account_re_8spm.png')}
            />
            <TouchableOpacity onPress={()=>{navigation.navigate("EmailLogIn")}}>
                <View style = {styles.button1}>
                    <Text style = {styles.button1Text}>Sign In With Email</Text>
                </View> 
            </TouchableOpacity>

            {/*<TouchableOpacity onPress={()=>{navigation.navigate("PhoneLogIn")}}>
                <View style = {styles.button1}>
                    <Text style = {styles.button1Text}>Sign In With Phone</Text>
                </View>
            </TouchableOpacity>
            
            <TouchableOpacity>
                <View style = {styles.button1}>
                    <Text style = {styles.button1Text}>Sign In With Google</Text>
                </View>
            </TouchableOpacity>*/}
            
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:colors.white,
        paddingBottom:30,
        paddingTop:parameters.statusBarHeight
    },

    header:{
      backgroundColor:colors.green,
      height:parameters.headerHeight,
      alignItems:"flex-start"
     
    },
    
    image1:{
     
        height:100,
        width:100,
    
    },
    
    image2:{height:60,width:60,
            borderRadius:30,
          },

    loginimge:{height:410,width:380,
            borderRadius:30,
          },
    
    home:{
     backgroundColor:colors.green,
     paddingLeft:20,
     
    },
    
    text1:{
     color:colors.gray,
     fontSize:30,
     paddingBottom:20,
     paddingTop:20,
     paddingLeft:20,
    },
    
    text2:{
     color:colors.white,
     fontSize:16
    },
    
    view1:{
     flexDirection:"row",
     flex:1,
     paddingTop:30
    },
    
    button1:{
      height:50,
      width:"80%",
      backgroundColor:colors.green,
      borderRadius:15,
      alignSelf:"center",
      alignItems:"center",
      justifyContent:"center",
      marginTop:15
    },
    
    button1Text:{
     color:colors.white,
     fontSize:16,
     marginTop:-2
    
    },
    card:{
     alignItems:"center",
     margin:SCREEN_WIDTH/22
    
    },
    
    view2:{marginBottom:5,
          borderRadius:15,
          backgroundColor:colors.grey6
        },
    
        title:{
          color:colors.black,
          fontSize:16
        },
    view3:{flexDirection:"row",
             marginTop :5,
             height:50,
             backgroundColor:colors.grey5,
             alignItems:"center",
             justifyContent:"space-between",
            marginHorizontal:15
            
             },
    text3:{marginLeft:15,
            fontSize:20,
            color:colors.black
      },
    
    view4:{ flexDirection:"row",
            alignItems:"center",
            marginRight:15,
            backgroundColor:"white",
            paddingHorizontal:10,
            paddingVertical:2,
            borderRadius:20
            },
    
    view5:{ flexDirection:"row",
    alignItems:"center",
    backgroundColor:"white",
    paddingVertical:25,
    justifyContent:"space-between",
    marginHorizontal:15,
    borderBottomColor:colors.grey4,
    borderBottomWidth:1,
    flex:1
    },
    
    view6:{
    
    
    alignItems:"center",
    flex:5,
    flexDirection:"row"
    },
    view7:{
    backgroundColor:colors.grey6,
    height:40,
    width:40,
    borderRadius:20,
    alignItems:"center",
    justifyContent:"center",
    marginRight:20
    
    },
    
    map:{
       
    height: 150,
     marginVertical: 0,
     width:SCREEN_WIDTH*0.92
    },
    
    text4:{ fontSize:20,
          color:colors.black,
          marginLeft:20,
          marginBottom:20
        },
    
    icon1:  {marginLeft:10,
           marginTop:5
          },

    view8: {flex:4,
          marginTop:-25
        } ,
    carsAround: {
    width: 28,
    height: 14,
    
    }, 
    
    location: {
      width: 16,
      height: 16,
      borderRadius:8,
      backgroundColor:colors.blue,
      alignItems:"center",
      justifyContent:"center"
      
      }, 
      
    view9:{width:4,
    height:4,
    borderRadius:2,
    backgroundColor:"white"
    }


})
