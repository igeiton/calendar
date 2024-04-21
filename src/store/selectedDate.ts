import { createSlice } from '@reduxjs/toolkit';
import { addDaysToArray, dateToday } from '../components/addDaysToArray';
import { Props } from '../Body/daysLauncher';

// interface State {
//     startDate: string;
//     endDate: string;
//     dateDaysDiff: number;
//     dateDays: {
//         number: number;
//         style: number;
//         hasNote: boolean;
//         colored?: boolean;
//         find?: any;
//     }[];
// }

// interface Action {
//     payload: Props;
// }

const selectedDateSlice = createSlice({
    name: 'date',
    initialState: {
        startDate: dateToday,
        endDate: dateToday,
        dateDaysDiff: 1,
        dateDays: [],
    },
    reducers: {
        applyDate(state: any, action: any) {
            state.startDate = action.payload.startDate;
            state.endDate = action.payload.endDate;
        },

        applyDays(state: any, action: any) {
            state.dateDaysDiff = action.payload.dateDaysDiff;

            state.dateDays = addDaysToArray(state, action.payload.dateDaysDiff);
        },

        toggleColor(state: any, action: any) {
            state.dateDays[action.payload.index].colored =
                !state.dateDays[action.payload.index].colored;
        },

        hasNote(state: any, action: any) {
            state.dateDays[action.payload.day].hasNote = action.payload.hasNote;
        },
    },
});

export const { applyDate, applyDays, toggleColor, hasNote } =
    selectedDateSlice.actions;

export default selectedDateSlice.reducer;
