import { createSlice } from '@reduxjs/toolkit';
import { dateMethodsPick } from '../components/addDaysToArray';

const notesSlice = createSlice({
    name: 'notes',
    initialState: {
        noteLink: dateMethodsPick(new Date(), 'toLocaleDateString'),
        notes: {},
    },
    reducers: {
        addNote(state, action) {
            state.notes[action.payload.noteLink] = {
                ...state.notes[action.payload.noteLink],
                noteLink: action.payload.noteLink,
            };
        },

        updateNote(state, action) {
            state.notes[action.payload.noteLink] = {
                ...state.notes[action.payload.noteLink],
                title: action.payload.title,
                body: action.payload.body,
            };
        },

        updateNoteLink(state, action) {
            state.noteLink = action.payload.noteLink;
        },
    },
});

export const { addNote, updateNote, updateNoteLink } = notesSlice.actions;

export default notesSlice.reducer;
