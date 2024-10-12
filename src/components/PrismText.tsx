import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface PrismTextProps {
    headingL?: boolean
    heading?: boolean
    headingS?: boolean
    bodyS?: boolean
    bold?: boolean
    center?: boolean
    color?: string
    children?: React.ReactNode
}

const PrismText = ({ 
    headingL,
    heading,
    headingS,
    bodyS,
    center = false,
    bold,
    color,
    children
 }: PrismTextProps) => {

let fontSize = 15
if(headingL) {
    fontSize = 40
}
if(heading) {
    fontSize = 30
}
if(headingS) {
    fontSize = 20
}
if(bodyS) {
    fontSize = 11
}

  return (
      <Text style={{fontSize,
        alignSelf: center ? 'center' : 'auto',
        fontWeight: bold ? '800' : '400',
        color: color ? color : '#fff',
      }}>{children}</Text>
  );
};


export default PrismText;