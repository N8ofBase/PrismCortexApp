import React from 'react';
import { View, Text, StyleSheet, TextInput, TextInputProps } from 'react-native';
import { SCREEN_WIDTH } from '../utils/CONST_LAYOUTS';
import { BACKGROUND_COLOR, PRIMARY_COLOR, SECONDARY_COLOR, SURFACE_COLOR, TEXT_COLOR, PLACEHOLDER_COLOR } from '../utils/COLORS';

interface PrismInputProps extends TextInputProps{
}

const PrismInput = ( {...restProps}: PrismInputProps) => {
  return (
    
      <View style={styles.container}>
        <TextInput
        style={{ 
            height: 60,
            width: SCREEN_WIDTH * .7,
            borderColor: PRIMARY_COLOR,
            borderWidth: 3,
            padding: 10,
            borderRadius: 7,
            backgroundColor: BACKGROUND_COLOR,
            color: TEXT_COLOR,
            marginBottom: 20,

         }}
         placeholderTextColor={PLACEHOLDER_COLOR}
         {...restProps}/>
      </View>
      
  );
};

const styles = StyleSheet.create({
  container: {}


});

export default PrismInput;