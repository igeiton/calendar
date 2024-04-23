import LightModeIcon from '@mui/icons-material/LightMode';
import NightsStayIcon from '@mui/icons-material/NightsStay';
import { Switch } from '@mui/material';

import { toggleTheme } from '../../../Store/Slices/themeSlice';
import { useAppDispatch, useAppSelector } from '../../../Store/store';

export default function ToggleTheme() {
    // hooks
    const { theme }: { theme: string } = useAppSelector((state) => state.theme);

    const dispatch = useAppDispatch();

    // functions
    const changeTheme = (): void => {
        dispatch(toggleTheme());
    };

    return (
        <>
            <Switch
                sx={SwitchSX}
                icon={<LightModeIcon sx={IconsSX(theme)} />}
                checkedIcon={<NightsStayIcon sx={IconsSX(theme)} />}
                checked={theme === 'dark'}
                onChange={changeTheme}
                disableRipple
            />
        </>
    );
}

const SwitchSX = {
    alignSelf: 'center',
    marginBottom: '5px',
    '& .MuiSwitch-switchBase': {
        border: '1px solid #000',
        width: '15px',
        height: '15px',
        left: '12px',
        top: '12px',
        bgcolor: 'white',

        '&:hover': {
            bgcolor: 'white',
        },
    },

    '& .MuiSwitch-track': {
        width: '100%',
        height: '18px',
        border: '1px solid #000',
        borderRadius: '10px',
        backgroundColor: 'white',
        opacity: 1,
    },
    '& .MuiSwitch-switchBase.Mui-checked+.MuiSwitch-track': {
        backgroundColor: '#000',
        border: '1px solid #FFF',
        opacity: 1,
    },
    '& .MuiSwitch-switchBase.Mui-checked': {
        bgcolor: 'black',
        border: '1px solid #FFF',
        transform: 'translateX(14px)',
    },
};

const IconsSX = (theme: string) => {
    return {
        color: theme === 'dark' ? 'yellow' : 'black',
        width: '15px',
        height: '15px',
    };
};
