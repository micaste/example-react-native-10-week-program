
import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
  } from 'react-native';
import { palette } from '../utils/Palette.js';

  export const ExpandableText = ({style, children}) => {
      const [expanded, setExpanded] = useState(false)
      const handlePress = () => setExpanded(true)
      const containerStyle = expanded ? style : {
        ...styles.container,
        ...style
      };
      return <View style={containerStyle}>
          <Text style={styles.text} numberOfLines={expanded ? 0 : 3} ellipsizeMode="tail">{children}</Text>
          {!expanded ? <TouchableHighlight onPress={handlePress}><Text style={styles.readMoreText}>Read More…</Text></TouchableHighlight> : null}
      </View>
  }

  const styles = StyleSheet.create({
      container: {
          height: 64
      },
      text: {
          height: 48,
          color: palette.textColor
      },
      readMoreText: {
          color: palette.linkColor,
      }
  });