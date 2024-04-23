import { Container, ThemeProvider, createTheme } from '@mui/material';

import Calendar from './FillingDays/Calendar';
import Options from './Options/Options';

import { useAppSelector } from './Store/store';

export default function App() {
    const { theme, lightMode, darkMode } = useAppSelector(
        (state) => state.theme
    );

    const currentTheme = createTheme({
        palette: {
            ...(theme === 'light' ? lightMode : darkMode),
        },
    });

    return (
        <ThemeProvider theme={currentTheme}>
            <Container sx={ContainerSX}>
                <Options />
                <Calendar />
            </Container>
        </ThemeProvider>
    );
}

const ContainerSX = {
    display: 'flex',
    flexDirection: 'column',
    padding: '30px',
    paddingTop: '0px',
    maxWidth: '100vw',
    minHeight: '100vh',
    backgroundColor: 'primary.main',
};

// const theme = (theme: string) =>
//     createTheme({
//         palette: {
//             ...(theme === 'light' ? lightMode : darkMode),
//         },
//     });

// const lightMode = {
//     primary: {
//         main: '#FFF',
//         dark: '#ECECEC',
//         contrastText: '#212121',
//     },
//     secondary: {
//         main: '#a6c1db',
//         dark: '#1976d2',
//         contrastText: '#FFF',
//     },
// };

// const darkMode = {
//     primary: {
//         main: '#212121',
//         dark: '#171717',
//         contrastText: '#FFF',
//     },
//     secondary: {
//         main: '#212121',
//         dark: '#171717',
//         contrastText: '#FFF',
//     },
// };
