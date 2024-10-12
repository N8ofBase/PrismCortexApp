// import React from 'react';
// import { View, Text, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
// import BackgroundWrap from '../../components/BackgroundWrap';
// import backgroundImage from '../../../assets/images/appLanding.png';
// import PrismText from '../../components/PrismText';
// import PrismInput from '../../components/PrismInput';
// import PrismButton from '../../components/PrismButton';

// interface SignupProps {}

// const Signup = ( props: SignupProps ) => {
  
  
//   return (
    
//     <BackgroundWrap image={backgroundImage}>
//       <View style={styles.container}>
      
//         <View style={styles.inputWrapper}>
//           <View style={styles.title}>
//         <PrismText headingL bold>Connect to the Cortex</PrismText>
//         </View>
//         <View style={styles.input}>
          
//             <PrismInput placeholder='email'/>
//             <PrismInput placeholder='password'/>

//         </View>
//         <PrismButton>Connect</PrismButton>    
//             <PrismText bold>Become a Neuron (sign up) </PrismText>
//             <PrismText bold>Brain Fog? (forgot password) </PrismText>
//         </View>
        
//       </View>
//       </BackgroundWrap>
      
//   );
// };
// const styles = StyleSheet.create({
//   container: {
//     alignItems: 'center',
//   },
//   title: {
//     justifyContent: 'center',
    
//   },
//   inputWrapper: {
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: 500,
  
//   },
//   input: {
//    marginTop: 20, 
  
//   },

// });

// export default Signup;


import React from 'react';
import { View, Text, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import BackgroundWrap from '../../components/BackgroundWrap';
import backgroundImage from '../../../assets/images/appLanding.png';
import PrismText from '../../components/PrismText';
import PrismInput from '../../components/PrismInput';
import PrismButton from '../../components/PrismButton';

interface SignupProps {}

const Signup = ( props: SignupProps ) => {
  const [credentials, setCredentials] = React.useState({
    Email:'',
    Password: '',
  });
  
  return (
    
    <BackgroundWrap image={backgroundImage}>
      <View style={styles.container}>
      
        <View style={styles.inputWrapper}>
          <View style={styles.title}>
        <PrismText headingL bold>Connect to the Cortex</PrismText>
        </View>
        <View style={styles.input}>
          {Object.keys(credentials).map((key: string) => (
            <PrismInput 
            key={key}
            value={credentials[key as keyof typeof credentials]}
            onChangeText={(text) => setCredentials(
              (prevState) => ({ ...prevState, [key]: text }))}
            placeholder={key} />
          ))}
        </View>
        <PrismButton>Connect</PrismButton>    
            <PrismText bold>Become a Neuron (sign up) </PrismText>
            <PrismText bold>Brain Fog? (forgot password) </PrismText>
        </View>
        
      </View>
      </BackgroundWrap>
      
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  title: {
    justifyContent: 'center',
    
  },
  inputWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 500,
  
  },
  input: {
   marginTop: 20, 
  
  },

});

export default Signup;