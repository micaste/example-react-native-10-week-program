import React, {useCallback} from 'react';
import {
    Alert,
    Image,
    Linking,
    StyleSheet,
    TouchableOpacity,
    Text
  } from 'react-native';

export const AmazonButton = ({children, linkUrl}) => {
    const handlePress = useCallback(async () => {
      // Checking if the link is supported for links with custom URL scheme.
      const supported = await Linking.canOpenURL(linkUrl);

      if (supported) {
        await Linking.openURL(linkUrl);
      } else {
        Alert.alert(`Don't know how to open this URL: ${linkUrl}`);
      }
    }, [linkUrl]);
    return <TouchableOpacity
    style={styles.button}
    onPress={handlePress}
  >
    <Image style={styles.image} source={require('../static/Amazon_logo.png')} />
    <Text style={styles.text}>{children}</Text>
  </TouchableOpacity>
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#FFFFFF',
        height: 53,
        maxWidth: 257,
        borderRadius: 26,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        flexDirection: 'row'
    },
    image: {
        // flex: 1,
        // justifyContent: "center",
        // alignItems: 'center'
    },
    text: {
      color: '#000',
      fontSize: 14
    }
});