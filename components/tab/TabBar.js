import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    Image,
    View,
  } from 'react-native';
import {TabItem} from './TabItem.js';

export const TabBar = ({activeTab, tabs}) =>
<View style={styles.scrollContainer}>
    <ScrollView style={styles.scrollView} bounces={false} showsVerticalScrollIndicator={false} horizontal={true}>
        {tabs.map((tab, tabIndex) =>
            <TabItem key={tab.text} isDisabled={tab.isDisabled} isActive={activeTab === tabIndex}>{tab.text}</TabItem>
        )}
    </ScrollView>
    </View>
TabBar.defaultProps = {
    activeTab: 0
}

const styles = StyleSheet.create({
    scrollContainer: {
        flex: 1
    },
    scrollView: {
        height: 22,
        width: '100%',
        flexWrap: 'nowrap',
        flexDirection: 'row'

    }
});