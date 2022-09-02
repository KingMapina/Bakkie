import { StyleSheet, Text,TouchableOpacity, View, Dimensions, KeyboardAvoidingView, TextInput } from 'react-native'
import React, { useEffect ,useState} from 'react'
import { colors, parameters } from '../styles';
import { auth } from '../firebase';

const SCREEN_WIDTH = Dimensions.get('window').width

const EmailLogIn = ({navigation}) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged(user => {
        if (user) {
          navigation.replace('ChoiceScreen')
        }
      })

      return unsubscribe
    }, []);
    

    /*const handleSignUp = () => {
        auth
        .createUserWithEmailAndPassword(email, password)
        .then(userCredentials => {
            const user  = userCredentials.user;
            console.log('Registered With',user.email);
        })
        .catch(error => alert(error.message))
    }*/

    const handleSignIn = () => {
        auth
        .signInWithEmailAndPassword(email, password)
        .then(userCredentials => {
            const user  = userCredentials.user;
            console.log('Signed In With:',user.email);
        }).catch(error => alert(error.message))
    }

  return (
    <KeyboardAvoidingView
        style={styles.container}
        behavior="padding"
    >
      <View style={styles.inputContainer}>
        <TextInput
            placeholder='Email'
            style={styles.input}
            value={email}
            onChangeText={(text) => setEmail(text)}

        />

        <TextInput
            placeholder='Password'
            style={styles.input}
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry
        />
      </View>

        <View style={styles.buttonContainer}>
            <TouchableOpacity
            onPress={handleSignIn}
            style={styles.button}>
                <Text style={styles.buttonText}>Sign In</Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={() => navigation.replace('EmailSignUp')}
            style={[styles.button, styles.buttonOutline]}>
                <Text style={styles.buttonOutlineText}>Or Create Account</Text>
            </TouchableOpacity>
        </View>
    </KeyboardAvoidingView>
  )
}

export default EmailLogIn

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    inputContainer:{
        width:"80%",

    },
    input:{
        backgroundColor:colors.white,
        paddingHorizontal:15,
        paddingVertical:10,
        borderRadius:10,
        marginBottom:5,
        borderWidth:1,
        borderColor:colors.grey3,
    },
    buttonContainer:{
        width:"80%",
        justifyContent:'center',
        alignItems:'center',
        marginTop:40,
    },
    button:{
        backgroundColor:colors.green,
        width:"100%",
        padding:15,
        borderRadius:10,
        alignItems:'center',
    },
    buttonOutline:{
        backgroundColor:colors.white,
        marginTop:5,
        borderWidth:2,
        borderColor:colors.green,
    },
    buttonText:{
        color:colors.white,
        fontSize:16,
        fontWeight:'700'
    },
    buttonOutlineText:{
        color:colors.green,
        fontSize:16,
        fontWeight:'700'
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
      height:40,
      width:350,
      backgroundColor:colors.green,
      borderRadius:20,
      alignSelf:"center",
      alignItems:"center",
      justifyContent:"center",
      marginTop:15
    },
    
    button1Text:{
     color:colors.white,
     fontSize:17,
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
