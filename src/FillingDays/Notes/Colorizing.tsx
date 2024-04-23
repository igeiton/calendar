import BorderClearIcon from '@mui/icons-material/BorderClear';
import { Box, Container, Input } from '@mui/material';

import { addNote } from '../../Store/Slices/notesSlice';
import { useAppDispatch } from '../../Store/store';

import { colors } from '../Components/fillingDays';

export default function Colorizing({ note }: any) {
    // hooks
    const dispatch = useAppDispatch();

    // dispatch
    const changeColor = (color: string): void => {
        dispatch(
            addNote({
                ...note,
                color,
            })
        );
    };

    return (
        <Box sx={BoxSX}>
            <Container sx={ContainerSX}>
                {colors.map((color) => (
                    <Box
                        key={color}
                        sx={{ ...ColorsSX, backgroundColor: color }}
                        onClick={() => changeColor(color)}
                    />
                ))}

                <BorderClearIcon sx={IconSX} onClick={() => changeColor('')} />
            </Container>

            <Container>
                <Input
                    type="color"
                    sx={InputSX}
                    value={note.color || '#000000'}
                    onChange={(e) => changeColor(e.target.value)}
                    inputProps={{
                        sx: {
                            color: 'primary.contrastText',
                            cursor: 'pointer',
                            opacity: note.color ? '1' : '0.3',
                        },
                    }}
                    disableUnderline
                />
            </Container>
        </Box>
    );
}

const BoxSX = {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    paddingTop: '10px',
    color: 'primary.contrastText',
};

const ContainerSX = {
    display: 'flex',
    gap: '5px',
    flex: '0 1 auto',
};

const ColorsSX = {
    width: '15px',
    height: '15px',
    cursor: 'pointer',
    alignSelf: 'center',

    // borderRadius: '50%',
    borderRadius: '3px',
};

const InputSX = {
    display: 'flex',
    width: '100%',
};

const IconSX = {
    width: '17px',
    height: '17px',
    color: 'primary.contrastText',
    // borderRadius: '50%',
    cursor: 'pointer',
};
