import { Box, Divider, List, ListItemText } from '@mui/material';

import { IDate } from '../Store/Slices/dateSlice';
import { useAppSelector } from '../Store/store';

import { Days, daily, fillingDays } from './Components/fillingDays';
import Day from './Day';
import Notes from './Notes/Notes';

export default function Calendar() {
    const { date }: { date: IDate } = useAppSelector((state) => state.date);
    const days: Days[] = fillingDays(date);

    return (
        <Box>
            <List sx={ListSX}>
                {daily.map((name: string, index: number) => (
                    <ListItemText
                        sx={ListItemTextSX}
                        key={index}
                        primary={name}
                    />
                ))}
            </List>

            <Divider sx={{ ...DividerSX, marginBottom: '15px' }} />

            <Box sx={BoxSX}>
                {days.map((day: Days, index: number) => (
                    <Day key={index} day={day} days={days} index={index} />
                ))}
            </Box>

            <Notes />
        </Box>
    );
}

const ListSX = {
    display: 'grid',
    gridTemplateColumns: 'repeat(7, 1fr)',
    gap: '10px',
};

///// выровнять по центру
const ListItemTextSX = {
    flex: '1 0 0',
    textAlign: 'center',
    color: 'primary.contrastText',
};

export const DividerSX = {
    width: '100%',
    bgcolor: 'primary.contrastText',
    opacity: '0.11',
};

const BoxSX = {
    display: 'grid',
    gridTemplateColumns: 'repeat(7, minmax(0, 1fr))',
    gridAutoRows: '30px',
    gap: '10px',
};
