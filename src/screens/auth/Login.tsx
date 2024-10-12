import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface LoginProps {}

const Login = ( props: LoginProps ) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Login</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: 'lightblue',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Login;