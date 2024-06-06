import type { Preview } from '@storybook/react';

import { withThemeFromJSXProvider } from '@storybook/addon-styling';

import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';

import { lightMode, darkMode } from '../src/Store/Slices/themeSlice';

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
};

export default preview;

const lightTheme = createTheme({
    palette: {
        mode: 'light',
        ...lightMode,
    },
});

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        ...darkMode,
    },
});

export const decorators = [
    withThemeFromJSXProvider({
        themes: {
            light: lightTheme,
            dark: darkTheme,
        },
        defaultTheme: 'light',
        Provider: ThemeProvider,
        GlobalStyles: CssBaseline,
    }),
];
