import { Box } from '@mui/material';

import DatePicker from './DatePicker';
import Menu from './Menu/Menu';

export default function Options() {
    return (
        <Box sx={BoxSX}>
            <Menu />

            <Box sx={{ display: 'flex', gap: '10px', width: '100%' }}>
                <DatePicker />
            </Box>
        </Box>
    );
}

const BoxSX = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    paddingTop: '25px',
};
