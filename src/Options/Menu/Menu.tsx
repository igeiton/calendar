import { Box, Skeleton, SwipeableDrawer } from '@mui/material';

import { toggleThemeDrawer } from '../../Store/Slices/themeSlice';
import { useAppDispatch, useAppSelector } from '../../Store/store';

import { SkeletonSX } from '../../FillingDays/Notes/Notes';
import ClearAll from './Days/ClearAll';
import ChangeTheme from './Theme/Theme Settings/ChangeTheme';
import ToggleTheme from './Theme/ToggleTheme';

export default function Menu() {
    // hooks
    const { isOpenThemeDrawer } = useAppSelector((state) => state.theme);
    const { isOpenNotesDrawer } = useAppSelector((state) => state.notes);
    const dispatch = useAppDispatch();

    // dispatch
    const toggleDrawer = (): void => {
        dispatch(toggleThemeDrawer(!isOpenThemeDrawer));
    };

    if (isOpenNotesDrawer) return null;

    return (
        <>
            <SwipeableDrawer
                PaperProps={{ sx: PaperPropsSX }}
                anchor="right"
                swipeAreaWidth={25}
                onOpen={toggleDrawer}
                open={isOpenThemeDrawer}
                onClose={toggleDrawer}
                allowSwipeInChildren
                disableBackdropTransition
            >
                <ToggleTheme />

                <ChangeTheme />

                <Box
                    sx={{ ...BoxSX, left: -15, top: 'calc(50% - 50px)' }}
                    onClick={toggleDrawer}
                >
                    <Skeleton
                        animation="wave"
                        sx={{
                            ...SkeletonSX,
                            width: '7.5px',
                            height: '100px',
                        }}
                    />
                </Box>

                <ClearAll />
            </SwipeableDrawer>
        </>
    );
}

const PaperPropsSX = {
    backgroundColor: 'primary.main',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    overflow: 'visible',
    paddingTop: '10px',
    paddingBottom: '15px',
    maxWidth: '100vw',
    height: '100vh',
};

const BoxSX = {
    position: 'absolute',
    left: '-15px',
    visibility: 'visible',
    width: '5%',
    display: 'flex',
    justifyContent: 'start',
    cursor: 'pointer',
};
