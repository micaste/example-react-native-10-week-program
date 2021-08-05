import React from 'react';
import _fp from 'lodash/fp';
import {
    Switch,
    StyleSheet,
    Text,
    TouchableWithoutFeedback,
    View,
} from 'react-native';
import { palette } from '../../utils/Palette';

export const ListItem = ({value, onChange, label, isDisabled}) => {
    return <TouchableWithoutFeedback onPress={isDisabled ? undefined : onChange}>
        <View style={styles.view}>
            <Switch value={value} disabled={isDisabled} />
            <Text style={_fp.assign(styles.text, value ? styles.textSelected : {})}>{label}</Text>
        </View>
    </TouchableWithoutFeedback>
}

const styles = StyleSheet.create({
    view: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    text: {
        color: palette.textColor,
        marginLeft: 15,
        fontSize: 14,
        lineHeight: 16
    },
    textSelected: {
        textDecorationLine: 'line-through',
        opacity: 0.29
    }
});