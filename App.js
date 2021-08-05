import React from 'react';
import {
  StyleSheet,
} from 'react-native';

import {ContentWrapper} from './components/ContentWrapper.js';
import { IntroView } from './components/IntroView.js';
import { WeekView } from './components/week/WeekView.js';
import {useAppState} from './state/state.js';

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

const App = () => {
  const appState = useAppState();

  return <ContentWrapper>
    {appState.currentWeek === 0 ?
      <IntroView /> :
      <WeekView />
    }
    </ContentWrapper>
}

export default App;
