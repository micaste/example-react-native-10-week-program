import { data } from '../data/data.js';
import Observable from '../utils/Observable.js';
import { useEffect, useState } from 'react';

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

export const useAppState = () => {
    const [appState, setAppState] = useState(initialState);
    useEffect(() => {
        const removeListener = state.addListener(setAppState);
        return removeListener;
    }, []);
    return appState;
}