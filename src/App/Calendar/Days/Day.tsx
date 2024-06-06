// UI components
import { Badge } from '@mui/material';
// Store
import {
    INote,
    getNote,
    toggleNotesDrawer,
} from '../../../Store/Slices/notesSlice';
import { useAppDispatch, useAppSelector } from '../../../Store/store';
// Components
import { Days } from './DaysActions/getDaysByDiff';
// Styles
import { StyledBadge, StyledTypography, TypographySX } from './Day.styled';
import { memo } from 'react';

interface IProps {
    day: Days;
    days: Days[];
    index: number;
}

function Day({ day, days, index }: IProps) {
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
                <StyledTypography
                    sx={{ ...TypographySX, animation: 'scaling 0.5s' }}
                >
                    {day.month} {day.year}
                </StyledTypography>
            )}

            <Badge
                invisible={
                    currentDay.title || currentDay.description ? false : true
                }
                variant="dot"
                sx={{
                    ...StyledBadge(day.day, currentDay),
                    animation: `scaling ${Math.random() * 1000 + 100}ms ease-out`,
                    transition: 'bgcolor inherit',
                }}
                onClick={handleOpenDrawer}
            >
                {dayCount}
            </Badge>
        </>
    );
}

export default memo(Day);
