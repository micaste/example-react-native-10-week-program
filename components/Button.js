import React from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    Text
  } from 'react-native';
import { palette } from '../utils/Palette';

export const Button = ({children, onClick}) => {
    return <TouchableOpacity
    style={styles.button}
    onPress={onClick}
  >
    <Text style={styles.text}>{children}</Text>
  </TouchableOpacity>
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: palette.buttonColor,
        height: 53,
        maxWidth: 257,
        borderRadius: 26,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
    },
    text: {
      color: palette.textColor,
      fontSize: 14
    }
});