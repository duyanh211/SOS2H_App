import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './screens/layouts/Login';


const App = ()=>{
  const Stack = createNativeStackNavigator();
  return(
  <NavigationContainer>
    <Stack.Screen name="Login" component={Login} 
        options={{ headerShown: true }}
        />
  </NavigationContainer>
  )
}

export default App;
