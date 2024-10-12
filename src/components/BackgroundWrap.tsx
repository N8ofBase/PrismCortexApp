import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../utils/CONST_LAYOUTS';

interface BackgroundWrapProps {
    image: string;
    children: React.ReactNode;
}

const BackgroundWrap = ( {image, children}: BackgroundWrapProps ) => {
  return (
    <View style={styles.container}>
      <View style={styles.image}>
        <Image source={image} style={styles.image} />
      </View>
      <View style={styles.container}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex:1},

  image: {
    position: 'absolute',
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
  },
});

export default BackgroundWrap;