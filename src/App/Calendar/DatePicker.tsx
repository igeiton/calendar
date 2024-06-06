import { Box, TextField } from '@mui/material';
import { memo, useRef } from 'react';
import { useAppDispatch } from '../../Store/store';
import { changeDate } from '../../Store/Slices/dateSlice';

function DatePicker({ date, theme }: any) {
    const ref1: any = useRef();
    const ref2: any = useRef();

    const dispatch = useAppDispatch();

    // functions
    const handleOpenDatePicker = (ref: any) => {
        ref.current.showPicker();
    };

    // dispatch
    const changingDate = (selectedDate: string, option: string): void => {
        dispatch(
            changeDate({
                ...date,
                [option]: selectedDate,
            })
        );
    };
    return (
        <Box sx={BoxSX}>
            <TextField
                sx={TextFieldSX}
                value={date.start}
                onClick={() => handleOpenDatePicker(ref1)}
                onChange={(e) => changingDate(e.target.value, 'start')}
                type="date"
                inputProps={{
                    ...inputPropsSX(theme, ref1),
                    max: date.end,
                }}
                helperText={'Начальная дата'}
                FormHelperTextProps={FormHelperTextPropsSX}
            />

            <TextField
                sx={TextFieldSX}
                value={date.end}
                onClick={() => handleOpenDatePicker(ref2)}
                onChange={(e) => changingDate(e.target.value, 'end')}
                type="date"
                inputProps={{
                    ...inputPropsSX(theme, ref2),
                    min: date.start,
                }}
                helperText={'Конечная дата'}
                FormHelperTextProps={FormHelperTextPropsSX}
            />
        </Box>
    );
}

export default memo(DatePicker);

const BoxSX = {
    display: 'flex',
    gap: '10px',
    width: '100%',
    bgcolor: 'primary.main',
    marginBottom: '10px',
};

const TextFieldSX = {
    width: '100%',
    '& .MuiInputBase-input': {
        textAlign: 'center',
        cursor: 'pointer',
    },
    '&:hover *': {
        cursor: 'pointer',
    },
};

const inputPropsSX = (theme: string, ref: any) => {
    return {
        ref: ref,
        sx: {
            backgroundColor: 'secondary.dark',
            borderRadius: '5px',
            color: '#FFF',
            colorScheme: theme,
        },
    };
};

const FormHelperTextPropsSX = {
    sx: {
        color: 'primary.contrastText',
        marginLeft: '0px',
        opacity: '0.5',
    },
};
