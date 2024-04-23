import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Button,
    Input,
} from '@mui/material';

import { useState } from 'react';

import { changeTheme, clearTheme } from '../../../../Store/Slices/themeSlice';
import { useAppDispatch, useAppSelector } from '../../../../Store/store';

import { chooseColor } from '../Components/chooseColor';
import MainsColor from './MainColors';
import SecondaryColors from './SecondaryColors';

export default function ChangeTheme() {
    // hooks
    const { theme, lightMode, darkMode } = useAppSelector(
        (state) => state.theme
    );
    const [option, setOption] = useState('');

    const dispatch = useAppDispatch();

    // functions
    const getColor = () => {
        return chooseColor(option, theme, lightMode, darkMode);
    };

    // dispatch
    const clearingTheme = (): void => {
        dispatch(clearTheme());
    };

    const changingTheme = (color: string): void => {
        dispatch(changeTheme({ option, color }));
    };

    return (
        <Accordion sx={AccordionSX} disableGutters square>
            <AccordionSummary
                expandIcon={
                    <ExpandMoreIcon sx={{ color: 'primary.contrastText' }} />
                }
            >
                Настройки темы
            </AccordionSummary>

            <AccordionDetails sx={AccordionDetailsSX}>
                <MainsColor setOption={setOption} option={option} />

                <SecondaryColors setOption={setOption} option={option} />

                <Input
                    disabled={!option}
                    type="color"
                    value={getColor()}
                    onChange={(e) => changingTheme(e.target.value)}
                    sx={InputSX}
                    inputProps={{
                        sx: inputPropsSX,
                    }}
                    disableUnderline
                />

                <Button
                    variant="contained"
                    onClick={clearingTheme}
                    sx={ButtonSX}
                >
                    Очистить эту тему
                </Button>
            </AccordionDetails>
        </Accordion>
    );
}

export const AccordionSX = {
    bgcolor: 'primary.main',
    color: 'primary.contrastText',
    borderRadius: '0px',
};

export const AccordionDetailsSX = {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
};

const ButtonSX = {
    bgcolor: 'error.main',
    color: '#FFF',
    opacity: '0.5',
    borderRadius: '0px',
    transition: 'all 0.3s ease',
    '&:hover': { bgcolor: 'error.dark', opacity: '1' },
};

const InputSX = {
    width: '100%',
    height: '30px',
};

const inputPropsSX = {
    width: '100%',
    height: '100%',
    cursor: 'pointer',
    ':disabled': {
        opacity: '0.5',
        cursor: 'auto',
    },
};
