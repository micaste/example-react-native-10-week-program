/**
 * On every screen the app always displays the same background,
 * with a content that changes. This wrapper receives generic children.
 */
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
import {palette} from '../utils/Palette.js';

const ContentWrapper = ({children}) => {
    return <SafeAreaView style={styles.darkBackground}>
        <StatusBar hidden backgroundColor={styles.statusBar.backgroundColor} />
        <ScrollView
            style={styles.darkBackground}
            contentInsetAdjustmentBehavior="automatic"
            >
                <View style={styles.header}>
                    <Image source={require('../static/Lagos_Oct10.png')} style={styles.headerImage}/>
                    <Text style={styles.headerTitle}>
                        10 Week Breathing Program
                    </Text>
                </View>
                <View style={styles.container}>
                    {children}
                </View>
            
            </ScrollView>  
    </SafeAreaView>
}

const HEADER_HEIGHT = 176

const styles = StyleSheet.create({
    darkBackground: {
        backgroundColor: palette.appBackground
    },
    statusBar: {
        backgroundColor: palette.headerBackground,
    },
    header: {
        backgroundColor: palette.headerBackground,
        paddingTop: 50,
        paddingRight: 75,
        width: '100%',
        height: HEADER_HEIGHT,
        flexDirection: 'row',
        position: 'absolute'
    },
    headerTitle: {
        fontWeight: 'bold',
        fontSize: 27,
        lineHeight: 28,
        color: palette.textColor
    },
    headerImage: {
        height: 107,
        width: 103
    },
    container: {
        marginTop: HEADER_HEIGHT - 30,
        backgroundColor: palette.appBackground,
        borderTopLeftRadius: 26,
        borderTopRightRadius: 26
    }
});

export {ContentWrapper};