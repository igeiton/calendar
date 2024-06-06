import { ThemeProvider, createTheme } from '@mui/material';
import { lightMode, darkMode } from '../Store/Slices/themeSlice';

export default function ThemeMUI({
    children,
    theme,
}: {
    children: JSX.Element;
    theme: any;
}) {
    const currentTheme = createTheme({
        palette: {
            ...(theme === 'light' ? lightMode : darkMode),
        },
    });
    return <ThemeProvider theme={currentTheme}>{children}</ThemeProvider>;
}
