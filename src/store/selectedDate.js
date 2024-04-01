import { createSlice } from '@reduxjs/toolkit';
import { addDaysToArray, dateToday } from '../components/addDaysToArray';

const selectedDateSlice = createSlice({
    name: 'date',
    initialState: {
        startDate: dateToday,
        endDate: dateToday,
        dateDaysDiff: 1,
        dateDays: [],
    },
    reducers: {
        applyDate(state, action) {
            state.startDate = action.payload.startDate;
            state.endDate = action.payload.endDate;
        },
        applyDays(state, action) {
            state.dateDaysDiff = action.payload.dateDaysDiff;

            state.dateDays = addDaysToArray(state, action.payload.dateDaysDiff);
        },
        toggleColor(state, action) {
            state.dateDays[action.payload.index].colored =
                !state.dateDays[action.payload.index].colored;
        },
        hasNote(state, action) {
            state.dateDays[action.payload.day].hasNote = action.payload.hasNote;
        },
    },
});

export const { applyDate, applyDays, toggleColor, hasNote } =
    selectedDateSlice.actions;

export default selectedDateSlice.reducer;
