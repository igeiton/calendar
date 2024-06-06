import { Box } from '@mui/material';

import ClearAll from './ClearingDate/ClearAll';
import ChangeTheme from './Theme/Settings/ChangeTheme';
import ToggleTheme from './Theme/ToggleTheme';

export default function Menu() {
    return (
        <Box sx={BoxSX}>
            <ToggleTheme />

            <ChangeTheme />

            <ClearAll />
        </Box>
    );
}

const BoxSX = {
    backgroundColor: 'primary.main',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'visible',
    maxWidth: '100vw',
    height: '100vh',
};
