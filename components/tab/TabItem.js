import React from 'react';
import {
    TouchableWithoutFeedback,
    StyleSheet,
    Text,
    View,
  } from 'react-native';
import { palette } from '../../utils/Palette';

export const TabItem = ({isDisabled, isActive, children, onPress}) => {
    return <View style={styles.view}>
        {isDisabled ?
        <Text style={styles.text}>{children}</Text> :
        <TouchableWithoutFeedback onPress={onPress}>
            <Text style={styles.button}>{children}</Text>
        </TouchableWithoutFeedback>}
    {isActive ? <View style={styles.underline}/> : null}
    </View>
}

const styles = StyleSheet.create({
    view: {
        marginRight: 10
    },
    text: {
        color: palette.textColor,
        fontSize: 14,
        lineHeight: 16,
        opacity: 0.28,
        textAlign: 'center',
        marginHorizontal: 10
    },
    button: {
        color: palette.textColor,
        fontSize: 14,
        lineHeight: 16,
        textAlign: 'center'
    },
    underline: {
        marginTop: 3,
        height: 3,
        backgroundColor: palette.tabUnderlineColor
    }
});
