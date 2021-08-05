import React from 'react';
import {
    StyleSheet,
    View,
  } from 'react-native';

import { ListItem } from './ListItem';

export const CheckList = ({items, completion, onChange, allDisabled}) => {
    const getChangeHandler = (index) => () => {
        onChange(index);
    }
    return <View>
        {items.map((item, index) => {
            return <View style={styles.listItem} key={item.text}>
                <ListItem
                    isDisabled={allDisabled}
                    label={item.text}
                    onChange={getChangeHandler(index)}
                    value={completion[index]}
                    style={styles.listItem} />
            </View>
        })}
    </View>
}
const styles = StyleSheet.create({
    listItem: {
        marginTop: 28
    }
});