import { Box, IconButton, SwipeableDrawer } from '@mui/material';

import { toggleThemeDrawer } from '../../Store/Slices/themeSlice';
import { useAppDispatch, useAppSelector } from '../../Store/store';
import Menu from './Menu/Menu';

import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import SettingsIcon from '@mui/icons-material/Settings';

import { useEffect, useState } from 'react';

export default function Options() {
    // hooks
    const [scrollY, setScrollY] = useState(0);

    const { isOpenThemeDrawer } = useAppSelector((state) => state.theme);
    const dispatch = useAppDispatch();

    // dispatch
    const toggleDrawer = (): void => {
        dispatch(toggleThemeDrawer(!isOpenThemeDrawer));
    };

    const handleScroll = (): void => {
        if (scrollY > 70) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            window.scrollTo({
                top: document.body.offsetHeight - window.innerHeight,
                behavior: 'smooth',
            });
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', settingScrollY);

        function settingScrollY() {
            setScrollY(window.scrollY);
        }

        return () => removeEventListener('scroll', settingScrollY);
    });

    return (
        <Box sx={BoxSX}>
            <SwipeableDrawer
                PaperProps={{ sx: { overflow: 'visible' } }}
                sx={{ zIndex: 1300 }}
                anchor="right"
                swipeAreaWidth={0}
                onOpen={toggleDrawer}
                open={isOpenThemeDrawer}
                onClose={toggleDrawer}
                allowSwipeInChildren
                disableBackdropTransition
            >
                <Menu />
            </SwipeableDrawer>

            {!isOpenThemeDrawer && (
                <Box sx={BoxOptionSX}>
                    <IconButton
                        sx={{ ...KeyboardArrowUpIconButtonSX, ...IconButtonSX }}
                        onClick={handleScroll}
                        disableRipple
                    >
                        <KeyboardArrowUpIcon
                            sx={{
                                ...IconSX,
                                transform: `rotate(${scrollY > 70 ? 0 : 180}deg)`,
                            }}
                        />
                    </IconButton>

                    <IconButton
                        sx={{ ...SettingsIconButtonSX, ...IconButtonSX }}
                        onClick={toggleDrawer}
                        disableRipple
                    >
                        <SettingsIcon sx={IconSX} />
                    </IconButton>
                </Box>
            )}
        </Box>
    );
}

const BoxSX = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    paddingTop: '25px',
};

const BoxOptionSX = {
    position: 'fixed',
    right: '10px',
    bottom: '75px',
    zIndex: '5',

    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
};

const KeyboardArrowUpIconButtonSX = {
    animation: 'scaling 0.5s',
};

const SettingsIconButtonSX = {
    // position: 'fixed',
    // right: '10px',
    // bottom: '75px',
    // zIndex: '5',

    // position: 'absolute',
    // left: '-57.5px',
    // bottom: '70px',
    // visibility: 'visible',

    animation: 'scaling 0.5s',

    '&:hover .MuiSvgIcon-root': {
        transform: 'rotate(90deg)',
    },
};

const IconButtonSX = {
    cursor: 'pointer',
    color: 'secondary.contrastText',
    bgcolor: 'secondary.dark',
    transition: 'all 0.5s ease-out',
};

const IconSX = {
    transition: 'all 0.5s ease-out',
    fontSize: '30px',
};
