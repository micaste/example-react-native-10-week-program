import React, { useEffect, useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
  } from 'react-native';
import { data } from '../../data/data.js';
import { TabBar } from '../tab/TabBar.js';
import {palette} from '../../utils/Palette.js';
import {ExpandableText} from '../ExpandableText.js';
import {Button} from '../Button.js';
import { initialState, state, useAppState } from '../../state/state.js';
import { CheckList } from '../checklist/CheckList.js';
import { changeCurrentWeek, toggleWeekItem, setProgramFinished } from '../../state/reducers.js';

const isWeekDisabled = (indexRequested, appState) => {
    return indexRequested > appState.currentWeek;
}

export const WeekView = () => {

    const appState = useAppState();
    const [weekDisplayed, setWeekDisplayed] = useState(appState.currentWeek);

    const handleTabChange = index => {
        setWeekDisplayed(index + 1);
    }

    // When the currentWeek changes in the state (for ex, read from remote),
    // we want to force the view displayed
    useEffect(() => {
        setWeekDisplayed(appState.currentWeek)
    }, [appState.currentWeek]);

    if (appState.currentWeek <= 0 || weekDisplayed <= 0) {
        // When we initialize the hook, the week is 0
        // even though we shouldn't display this component
        // with it
        return null
    }

    const handleChecklistChange = index => {
        state.updateValue(previousState => toggleWeekItem(previousState, weekDisplayed - 1, index));
    }

    return <View style={styles.container}>
        <ExpandableText style={styles.introText}>Follow Dr. Leah Legos Biofeedback program to help your body develop a new reflex. In this 10 week program you will learn highly effective breathing strategies to regulate your emotions, get better sleep, build resilience to stress, and improve mental and physical performance.</ExpandableText>
        <TabBar onTabChange={handleTabChange} activeTab={weekDisplayed - 1} tabs={data.map((week, index) => ({text: week.name, isDisabled: isWeekDisabled(index + 1, appState)}))} />
        <Text style={styles.paragraph}>
            {data[weekDisplayed - 1].introText}
        </Text>
        <View styles={styles.checklistWrapper}>
            <CheckList
                allDisabled={weekDisplayed !== appState.currentWeek || appState.programFinished}
                weekDisplayed={weekDisplayed}
                items={data[weekDisplayed - 1].items}
                completion={appState.weeks[weekDisplayed -1].completion}
                onChange={handleChecklistChange}
                style={styles.checklist} />
        </View>
        <ButtonView weekDisplayed={weekDisplayed} appState={appState} onWeekDisplayChange={setWeekDisplayed} />
    </View>
};

const ButtonView = ({appState, weekDisplayed, onWeekDisplayChange}) => {
    if (weekDisplayed !== appState.currentWeek) {
        const handleRestart = () => {
            state.setValue(initialState);
        }
        return <View style={styles.buttonView}>
            <Button onClick={handleRestart}>RESTART PROGRAM</Button>
        </View>
    }
    const weekCompletion = appState.weeks[weekDisplayed - 1].completion;
    const weekCompleted = data[weekDisplayed - 1].items.every((item, index) => weekCompletion[index] === true)
    if (!weekCompleted) {
        return null;
    }
    if (weekDisplayed === data.length) {
        const handleFinishProgram = () => {
            state.updateValue(previousState => setProgramFinished(previousState));
        }
        return <View style={styles.buttonView}>
            {appState.programFinished ? <Text style={styles.finishedText}>Congrats!</Text> : null}
            <Button onClick={handleFinishProgram} isDisabled={appState.programFinished}>FINISH PROGRAM</Button>
        </View>
    }
    const handleUnlockNextWeek = () => {
        state.updateValue(previousState => changeCurrentWeek(previousState, weekDisplayed + 1));
    }
    return <View style={styles.buttonView}>
        <Button onClick={handleUnlockNextWeek}>UNLOCK WEEK {weekDisplayed + 1}</Button>
    </View>;
}



const styles = StyleSheet.create({
    checklistWrapper: {
        paddingHorizontal: 19
    },
    container: {
        marginTop: 43,
    },
    introText: {
        marginBottom: 41
    },
    buttonView: {
        marginTop: 108,
        width: '100%',
        flexDirection: 'column',
        alignItems: 'center',
    },
    paragraph: {
        marginTop: 29,
        marginBottom: 43,
        marginHorizontal: 18,
        color: palette.textColor
    },
    finishedText: {
        color: palette.textColor,
        fontSize: 36,
        lineHeight: 44,
        marginBottom: 31
    }
});
