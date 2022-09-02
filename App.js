import { StatusBar } from 'expo-status-bar';
import { KeyboardAvoidingView, Platform, StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import HomeScreen from './screens/HomeScreen';
import MapScreen from './screens/MapScreen';
import LogInScreen from './screens/LogInScreen'
import EmailLogIn from './screens/EmailLogIn'
import EmailSignUp from './screens/EmailSignUp'
import ChoiceScreen from './screens/ChoiceScreen';
import { store } from './store';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import "react-native-gesture-handler";
import { createStackNavigator } from '@react-navigation/stack';
import tw from 'tailwind-react-native-classnames';
import DriverHome from './screens/DriverHome';

export default function App() {

  const Stack = createStackNavigator();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <KeyboardAvoidingView 
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style= {tw`flex-1`}
            keyboardVerticalOffset= {Platform.OS === 'ios' ? -64 : 0 }  
          >
            <Stack.Navigator>
              <Stack.Screen 
                name ="LogInScreen"
                component = {LogInScreen}
                options ={{headerShown:false}}
              />
              <Stack.Screen 
                name ="EmailLogIn"
                component = {EmailLogIn}
                options ={{headerShown:false}}
              />
              <Stack.Screen 
                name ="EmailSignUp"
                component = {EmailSignUp}
                options ={{headerShown:false}}
              />
              <Stack.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="ChoiceScreen"
                component={ChoiceScreen}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="MapScreen"
                component={MapScreen}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="DriverHome"
                component={DriverHome}
                options={{
                  headerShown: false,
                }}
              />
            </Stack.Navigator>
          </KeyboardAvoidingView>
          
          {/*<HomeScreen />*/}
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
