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
import { TabBar } from './tab/TabBar.js';
import {data} from '../data/data.js';

// This will run only once, it is static
const introTabs = [{text: 'Intro', isDisabled: false}].concat(data.map(week => {
    return {text: week.name, isDisabled: true}
}))

export const IntroView = () =>
    <View style={styles.container}>
        <TabBar activeTab={0} tabs={introTabs} />
        <Text style={styles.title}>
        Welcome to the 10-week Heart Breath Mind program by Dr. Leah Lagos.
        </Text>
        <Image style={styles.image} source={require('../static/Book_Cover.png')}/>
        <Text style={styles.paragraph}>Dr. Lagos uses this exact program to help her patients and clients regulate their emotions, get better sleep, build resilience to stress, and improve mental and physical performance. The program guides you through a series of breathing and mindfulness exercises to retune your nervous system and synchronize your heart, breath, and mind.{'\n'}</Text>
        <Text style={styles.paragraph}>To rewire your body's stress response and boost your brain's performance, Dr. Lagos strongly recommends spending at least 20 minutes practicing breathing twice per day. This is a big commitment, but thousands of people have reaped the benefits of doing so. In as little as a few days of practice, people have reported boosts in energy, better sleep, better sex, digestion, and more.{'\n'}</Text>
        <Text style={styles.paragraph}>This app program is a companion to Dr. Lagos' new book: Heart Breath Mind, now available at all major book retailers.</Text>
    </View>;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 19,
        paddingTop: 45
    },
    title: {
        fontWeight: 'bold',
        fontSize: 16,
        lineHeight: 19,
        color: palette.textColor,
        marginTop: 24
    },
    image: {
        width: 98,
        height: 148,
        marginVertical: 35,
        alignSelf: 'center'
    },
    paragraph: {
        fontSize: 14,
        lineHeight: 18,
        color: palette.textColor
    }
});