import { createSlice } from '@reduxjs/toolkit';

export interface INotes {
    isOpenNotesDrawer: boolean;
    idOfDay: string;
    noteList: INote[];
}

export interface INote {
    id: string;
    title: string;
    description: string;
    color: string;
}

const notesSLice = createSlice({
    name: 'notesSLice',
    initialState: {
        isOpenNotesDrawer: false,
        idOfDay: new Date().toLocaleDateString('LT'),
        noteList: [
            {
                id: '2024-04-22',
                title: 'Today',
                description: 'I started',
                color: '#FF0000',
            },
        ],
    } as INotes,
    reducers: {
        toggleNotesDrawer(state, action) {
            state.isOpenNotesDrawer = action.payload;
        },

        addNote(state, action) {
            const findNote = state.noteList.find(
                (note) => note.id === action.payload.id
            );

            if (findNote) {
                findNote.title = action.payload.title;
                findNote.description = action.payload.description;
                findNote.color = action.payload.color;
            } else {
                state.noteList.push(action.payload);
            }
        },

        getNote(state, action) {
            state.idOfDay = action.payload;
        },

        clearAllNotes(state) {
            state.noteList = [
                {
                    id: '2024-04-22',
                    title: 'Today',
                    description: 'I started',
                    color: '#FF0000',
                },
            ];
            state.idOfDay = new Date().toLocaleDateString('LT');
        },
    },
});

export const { toggleNotesDrawer, addNote, getNote, clearAllNotes } =
    notesSLice.actions;

export default notesSLice.reducer;
