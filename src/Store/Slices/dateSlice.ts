import { createSlice } from '@reduxjs/toolkit';

export interface IDates {
    date: IDate;
}

export interface IDate {
    start: string;
    end: string;
}

const dateSlice = createSlice({
    name: 'slice',
    initialState: {
        date: {
            start: new Date().toLocaleDateString('LT'),
            end: new Date(Date.now() + 6.048e8 * 4).toLocaleDateString('LT'),
        },
    } as IDates,
    reducers: {
        changeDate(state, action) {
            state.date = action.payload;
        },

        clearAllDays(state) {
            state.date = {
                start: new Date().toLocaleDateString('LT'),
                end: new Date().toLocaleDateString('LT'),
            };
        },
    },
});

export const { changeDate, clearAllDays } = dateSlice.actions;

export default dateSlice.reducer;
