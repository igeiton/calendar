import BorderClearIcon from '@mui/icons-material/BorderClear';
import { Box, Container, Input } from '@mui/material';

import { colors } from '../Calendar/Days/DaysActions/data';

export default function Colorizing({ value, setColor }: any) {
    const changeColor = (color: string): void => {
        setColor(color);
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
                    value={value.color || '#000000'}
                    onChange={(e) => changeColor(e.target.value)}
                    inputProps={{
                        sx: {
                            color: 'primary.contrastText',
                            cursor: 'pointer',
                            opacity: value.color ? '1' : '0.3',
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
    animation: 'fading 1s',
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
