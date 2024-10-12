import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AuthStack from './src/navigation/AuthStack';
import { STANDARD_NAVIGATION_OPTIONS } from './src/utils/NavigationOptions';

const {Navigator, Screen} = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Navigator>
        <Screen options={ STANDARD_NAVIGATION_OPTIONS} name="AuthStack" component={AuthStack} />
      </Navigator>
    </NavigationContainer>
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
