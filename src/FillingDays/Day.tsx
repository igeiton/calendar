import { Typography } from '@mui/material';

import { INote, getNote, toggleNotesDrawer } from '../Store/Slices/notesSlice';
import { useAppDispatch, useAppSelector } from '../Store/store';
import { Days } from './Components/fillingDays';

interface IProps {
    day: Days;
    days: Days[];
    index: number;
}

export default function Day({ day, days, index }: IProps) {
    // hooks
    const { noteList }: { noteList: INote[] } = useAppSelector(
        (state) => state.notes
    );

    const dispatch = useAppDispatch();

    // const
    const dayCount: string = day.day.split('-')[2];
    const currentDay: INote = noteList.find((note) => note.id === day.day) || {
        id: '',
        title: '',
        description: '',
        color: '',
    };

    // dispatch
    const handleOpenDrawer = (): void => {
        if (day.day !== '') {
            dispatch(toggleNotesDrawer(true));
            dispatch(getNote(day.day));
        }
    };

    return (
        <>
            {days[index].month !== days[index - 1]?.month && (
                <Typography sx={TypographySX}>
                    {day.month} {day.year}
                </Typography>
            )}
            <Typography
                onClick={handleOpenDrawer}
                sx={styles(day.day, currentDay)}
            >
                {dayCount}
            </Typography>
        </>
    );
}

const TypographySX = {
    gridColumn: '1 / -1',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'primary.contrastText',
};

const styles = (day: any, currentDay: INote) => {
    const odd: number = day.split('-')[1] % 2;
    const empty: boolean = day === '';

    return {
        backgroundColor: currentDay.color
            ? currentDay.color
            : empty
            ? 'inherit'
            : odd
            ? 'secondary.main'
            : 'secondary.dark',

        border: '1px solid #000',
        borderColor: currentDay.color
            ? currentDay.color
            : empty
            ? 'primary.main'
            : odd
            ? 'secondary.main'
            : 'secondary.dark',

        color: 'secondary.contrastText',
        maxWidth: '100px',
        padding: '6px',
        borderRadius: '5px',
        textAlign: 'center',
        cursor: 'pointer',

        position: 'relative',
        ':after': {
            position: 'absolute',
            content: currentDay.title || currentDay.description ? '"*"' : '""',
            top: '1.5px',
            right: '5px',
        },
    };
};
