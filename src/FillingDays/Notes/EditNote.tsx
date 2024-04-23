import { Container, Divider, Input, Paper, Typography } from '@mui/material';

import { INote, addNote } from '../../Store/Slices/notesSlice';
import { useAppDispatch } from '../../Store/store';

import { DividerSX } from '../Calendar';
import Colorizing from './Colorizing';

interface IProps {
    note: INote;
}

export default function EditNote({ note }: IProps) {
    // hooks
    const dispatch = useAppDispatch();

    // dispatch
    const dispatchNote = (field: string, value: string): void => {
        dispatch(
            addNote({
                ...note,
                [field]: value,
            })
        );
    };

    return (
        <Container sx={ContainerSX}>
            <Typography sx={TypographySX} variant="h6">
                {note.id}
            </Typography>

            <Paper sx={PaperSX} elevation={3} square>
                <Typography sx={TypographySX} variant="caption">
                    Название
                </Typography>
                <Input
                    value={note.title}
                    onChange={(e) => dispatchNote('title', e.target.value)}
                    disableUnderline
                    sx={InputSX}
                />
            </Paper>

            <Divider sx={{ ...DividerSX, margin: '10px 0', width: '75%' }} />

            <Paper sx={PaperSX} elevation={3} square>
                <Typography sx={TypographySX} variant="caption">
                    Описание
                </Typography>
                <Input
                    onChange={(e) =>
                        dispatchNote('description', e.target.value)
                    }
                    value={note.description}
                    disableUnderline
                    sx={{ ...InputSX, minHeight: '100px' }}
                    multiline
                />
            </Paper>

            <Colorizing note={note} />
        </Container>
    );
}

const ContainerSX = {
    display: 'flex',
    flex: '1 1 auto',
    flexDirection: 'column',
    alignItems: 'center',

    padding: '20px',
    gap: '10px',
};

const PaperSX = {
    width: '75%',
    paddingRight: '5px',
    paddingTop: '4px',
    padding: '4px 8px 1px 4px',
    borderRadius: '5px',
    bgcolor: 'primary.main',
    color: 'primary.contrastText',
    border: '1px solid #000',
    borderColor: '#ECECEC',
};

const TypographySX = {
    width: '100%',
    opacity: '0.5',
    marginBottom: '10px',
};

const InputSX = {
    backgroundColor: 'inherit',
    width: '100%',
    outline: 'none',
    border: 'none',
    resize: 'none',
    borderRadius: '5px',
    color: 'primary.contrastText',
};
