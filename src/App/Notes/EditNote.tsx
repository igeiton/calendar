import { Container, Divider, Paper, TextField } from '@mui/material';

import { memo, useCallback, useEffect } from 'react';
import { useAppSelector } from '../../Store/store';
import Colorizing from './Colorizing';
import { INote } from '../../Store/Slices/notesSlice';

interface IProps {
    idOfDay: string;
    isOpenNotesDrawer: boolean;
    value: INote;
    setValue: (value: INote) => void;
}

function EditNote({ idOfDay, isOpenNotesDrawer, value, setValue }: IProps) {
    const { noteList } = useAppSelector((state) => state.notes);

    const handleGetNote = useCallback(() => {
        for (let i = 0; i < noteList.length; i++) {
            if (noteList[i].id === idOfDay) {
                return {
                    ...noteList[i],
                    id: idOfDay,
                };
            }
        }

        return {
            id: idOfDay,
            title: '',
            description: '',
            color: '',
        };
    }, [idOfDay, noteList]);

    useEffect(() => {
        setValue(handleGetNote());
    }, [isOpenNotesDrawer]);

    return (
        <Container sx={{ ...ContainerSX }}>
            <Paper sx={PaperSX} elevation={3} square>
                <TextField
                    label="Название"
                    variant="filled"
                    value={value.title}
                    onChange={
                        (e) => setValue({ ...value, title: e.target.value })
                        // addingNote('title', e.target.value)
                    }
                    autoComplete="off"
                    sx={TextFieldSX}
                    InputProps={{
                        disableUnderline: true,
                        sx: InputSX,
                    }}
                />
            </Paper>

            <Divider sx={{ ...DividerSX, margin: '10px 0', width: '75%' }} />

            <Paper sx={PaperSX} elevation={3} square>
                <TextField
                    label="Описание"
                    variant="filled"
                    value={value.description}
                    onChange={(e) =>
                        setValue({ ...value, description: e.target.value })
                    }
                    type="text"
                    multiline
                    sx={TextFieldSX}
                    InputProps={{
                        disableUnderline: true,
                        sx: InputSX,
                        minRows: 5,
                    }}
                    inputProps={{ style: { borderRadius: '5px' } }}
                />
            </Paper>

            {isOpenNotesDrawer && (
                <Colorizing
                    value={value}
                    setColor={(color: string) => setValue({ ...value, color })}
                />
            )}
        </Container>
    );
}

export default memo(EditNote);

/// remove rounded

const TextFieldSX = {
    outline: 'none',
    width: '100%',
    border: '1px solid #E3E3E3',
    minHeight: '100%',

    boxSizing: 'border-box',

    '& .MuiFilledInput-root': {
        borderRadius: '5px',
        color: 'primary.contrastText',
    },
    '&.MuiTextField-root': {
        borderRadius: '5px',
    },
    '&.MuiTextField-root .Mui-focused': {
        color: 'primary.contrastText',
        bgcolor: 'primary.main',
    },
    '& .MuiInputLabel-root': {
        color: 'primary.contrastText',
        opacity: '0.5',
    },
};
const InputSX = {
    backgroundColor: 'primary.main',
    width: '100%',

    '&:hover': {
        backgroundColor: 'inherit',
    },
};

const ContainerSX = {
    display: 'flex',
    flex: '1 1 auto',
    flexDirection: 'column',
    alignItems: 'center',

    padding: '20px',
    gap: '10px',

    overflow: 'auto',
    scrollbarWidth: 'none',
};

const PaperSX = {
    width: '75%',
    bgcolor: 'transparent',
    color: 'primary.contrastText',
    borderColor: 'transparent',
    borderRadius: '5px',
};

const DividerSX = {
    width: '100%',
    bgcolor: 'primary.contrastText',
    opacity: '0.11',
};
