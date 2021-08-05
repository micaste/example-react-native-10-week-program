// For useState to re-render components, we need
// the state reference to change after each update.
// For that reason, we use lodash_fp instead to
// perform immutable transformations, without
// using real immutable objects

import _fp from 'lodash/fp';

export const changeCurrentWeek = (previousState, newCurrentWeek) => {
    return _fp.set('currentWeek', newCurrentWeek, previousState);
}

export const toggleWeekItem = (previousState, weekIndex, itemIndex) => {
    const path = ['weeks', weekIndex, 'completion', itemIndex];
    const previousValue = _fp.get(path, previousState);
    return _fp.set(path, !previousValue, previousState);
}

export const setProgramFinished = (previousState) => {
    return _fp.set('programFinished', true, previousState);
}