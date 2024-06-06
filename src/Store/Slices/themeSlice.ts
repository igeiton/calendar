import { createSlice } from '@reduxjs/toolkit';

interface ITheme {
    isOpenThemeDrawer: boolean;
    theme: 'light' | 'dark';
    lightMode: {
        primary: Colors;
        secondary: Colors;
    };
    darkMode: {
        primary: Colors;
        secondary: Colors;
    };
}

interface Colors {
    main: string;
    dark: string;
    contrastText: string;
}

export const lightMode = {
    primary: {
        main: '#FFFFFF',
        dark: '#ECECEC',
        contrastText: '#212121',
    },
    secondary: {
        main: '#a6c1db',
        dark: '#1976d2',
        contrastText: '#FFFFFF',
    },
};

export const darkMode = {
    primary: {
        main: '#212121',
        dark: '#171717',
        contrastText: '#FFFFFF',
    },
    secondary: {
        main: '#3A3A3A',
        dark: '#171717',
        contrastText: '#FFFFFF',
    },
};

const slice = createSlice({
    name: 'slice',
    initialState: {
        isOpenThemeDrawer: false,
        theme: 'light',
        lightMode: lightMode,
        darkMode: darkMode,
    } as ITheme,
    reducers: {
        toggleThemeDrawer(state, action) {
            state.isOpenThemeDrawer = action.payload;
        },

        toggleTheme(state) {
            state.theme = state.theme === 'light' ? 'dark' : 'light';
        },

        changeTheme(state, action) {
            const mode = state.theme === 'light' ? 'lightMode' : 'darkMode';

            const option = action.payload.option;

            switch (option) {
                case 'primary.main': {
                    state[mode].primary.main = action.payload.color;
                    break;
                }
                case 'secondary.contrastText': {
                    state[mode].secondary.contrastText = action.payload.color;
                    break;
                }

                case 'secondary.main': {
                    state[mode].secondary.main = action.payload.color;
                    break;
                }

                case 'secondary.dark': {
                    state[mode].secondary.dark = action.payload.color;
                    break;
                }
            }
        },

        clearTheme(state) {
            if (state.theme === 'light') {
                state.lightMode = lightMode;
            } else {
                state.darkMode = darkMode;
            }
        },
    },
});

export const { toggleThemeDrawer, toggleTheme, changeTheme, clearTheme } =
    slice.actions;

export default slice.reducer;
