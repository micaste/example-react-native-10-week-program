import { data } from '../data/data.js';
import Observable from '../utils/Observable.js';
import { useEffect, useState } from 'react';
import lodash from 'lodash';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Some typing of the state and data with Typescript will be a big plus

export const initialState = {
    currentWeek: 0,
    programFinished: false,
    weeks: data.map((week, index) => ({completion: data[index].items.reduce((completion, weeklyItem, weeklyItemIndex) => {
        completion[weeklyItemIndex] = false;
        return completion;
    }, {})}))
}

export const state = new Observable(initialState);

const STATE_STORAGE_KEY = 'app_state';

const readStorage = () => AsyncStorage.getItem(STATE_STORAGE_KEY).then(stringValue => {
    const value = stringValue !== null ? JSON.parse(stringValue) : undefined;
    if (value) {
        state.setValue(value);
    }
}).catch(error => {
    console.error("Error while reading from storage: ", error)
})

readStorage();

// Since this API is asynchronous, we debounce the saving of the state
// to mitigate the overlap. The more proper way would be to implement
// a queue and invalidation of the asynchronous calls to make sure that the
// order is maintained, without a debounce
const saveStorage = lodash.debounce(() => {
    AsyncStorage.setItem(STATE_STORAGE_KEY, JSON.stringify(state.value))
}, 200);

// There is no need to remove this listener that lives with
// the runtime
state.addListener(() => {
    saveStorage()
}, false);

export const useAppState = () => {
    const [appState, setAppState] = useState(initialState);
    useEffect(() => {
        const removeListener = state.addListener(setAppState);
        return removeListener;
    }, []);
    return appState;
}

