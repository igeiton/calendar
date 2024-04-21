import { createSlice } from '@reduxjs/toolkit';
import { dateMethodsPick } from '../components/addDaysToArray';

interface State {
    noteLink: string;
    notes: {
        [key: string]: Note;
    };
}

interface Action {
    payload: Note;
}

interface Note {
    noteLink: string;
    title: string;
    body: string;
}

const notesSlice = createSlice({
    name: 'notes',
    initialState: {
        noteLink: dateMethodsPick(new Date(), 'toLocaleDateString'),
        notes: {},
    },
    reducers: {
        addNote(state: State, action: Action): void {
            state.notes[action.payload.noteLink] = {
                ...state.notes[action.payload.noteLink],
                noteLink: action.payload.noteLink,
            };
        },

        updateNote(state: State, action: Action): void {
            state.notes[action.payload.noteLink] = {
                ...state.notes[action.payload.noteLink],
                title: action.payload.title,
                body: action.payload.body,
            };
            console.log(state.notes[action.payload.noteLink]);
        },

        updateNoteLink(state: State, action: Action): void {
            state.noteLink = action.payload.noteLink;
        },
    },
});

export const { addNote, updateNote, updateNoteLink } = notesSlice.actions;

export default notesSlice.reducer;
