import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native';
import Signup from '../screens/auth/Signup';
import Login from '../screens/auth/Login';
import { STANDARD_NAVIGATION_OPTIONS } from '../utils/NavigationOptions';
import { StatusBar } from 'expo-status-bar';

const {Navigator, Screen} = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <>
    <StatusBar style='light' />
      <Navigator>
        
        <Screen options={STANDARD_NAVIGATION_OPTIONS} name="Signup" component={Signup} />
        <Screen name="Login" component={Login} />
      </Navigator>
      </>
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

export default AuthStack;