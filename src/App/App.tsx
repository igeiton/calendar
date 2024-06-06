import { Box, Container, ThemeProvider, createTheme } from '@mui/material';

import Calendar from './Calendar/Calendar';
import Options from './Options/Options';

import { useAppSelector } from '../Store/store';
import Notes from './Notes/Notes';

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
            <Box sx={BoxSX}>
                <Container sx={ContainerSX}>
                    <Options />
                    <Calendar />
                    <Notes />
                </Container>
            </Box>
        </ThemeProvider>
    );
}

const BoxSX = {
    minWidth: '100%',
    backgroundColor: 'primary.main',
};

const ContainerSX = {
    display: 'flex',
    flexDirection: 'column',
    padding: '30px',
    paddingTop: '0px',
    paddingBottom: '200px',
    width: '600px',
    maxWidth: '100%',
    minHeight: '100vh',
};
