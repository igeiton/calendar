import { Typography, styled } from '@mui/material';
import { INote } from '../../../Store/Slices/notesSlice';

export const StyledTypography = styled(Typography)({
    gridColumn: '1 / -1',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '25px 0px 5px',
});
export const TypographySX = {
    color: 'primary.contrastText',
};

// functions
export const StyledBadge = (day: any, note: INote) => {
    const weekends =
        new Date(day).getDay() === 0 || new Date(day).getDay() === 6;
    const odd: boolean = new Date(day).getMonth() % 2 === 0;
    const empty: boolean = day === '';
    const today: boolean = day === new Date().toLocaleDateString('LT');

    return {
        backgroundColor: today
            ? 'primary.contrastText'
            : getBackgroundColor(note, odd, empty, weekends),
        width: '100%',
        height: '30px',
        boxSizing: 'border-box',

        border: '1px solid',
        borderColor: today ? 'primary.contrastText' : 'transparent',

        color: today ? 'primary.main' : 'secondary.contrastText',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '5px',
        cursor: empty ? 'default' : 'pointer',

        '& .MuiBadge-badge': {
            top: '5px',
            right: '5px',
            backgroundColor: 'secondary.contrastText',
        },
    };
};

function getBackgroundColor(
    note: INote,
    odd: boolean,
    empty: boolean,
    weekends: boolean
) {
    if (note.color) return note.color;

    if (empty) return 'transparent';

    if (odd) return weekends ? 'secondary.dark' : 'secondary.main';

    return weekends ? 'secondary.main' : 'secondary.dark';
}
