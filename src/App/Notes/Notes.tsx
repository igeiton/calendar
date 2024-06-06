import { Box, Skeleton, SwipeableDrawer, Typography } from '@mui/material';

import {
    INote,
    addNote,
    toggleNotesDrawer,
} from '../../Store/Slices/notesSlice';
import { useAppDispatch, useAppSelector } from '../../Store/store';

import { months } from '../Calendar/Days/DaysActions/data';
import EditNote from './EditNote';
import { useState } from 'react';

export default function Notes() {
    // hooks

    const { isOpenNotesDrawer, idOfDay } = useAppSelector(
        (state) => state.notes
    );
    const { isOpenThemeDrawer } = useAppSelector((state) => state.theme);

    const [value, setValue] = useState({
        id: idOfDay,
        title: '',
        description: '',
        color: '',
    } as INote);

    const dispatch = useAppDispatch();

    // dispatch
    const toggleDrawer = (): void => {
        dispatch(addNote({ ...value }));

        dispatch(toggleNotesDrawer(!isOpenNotesDrawer));
    };

    // functions
    const convertDate = (date: string) => {
        const year = date.slice(0, 4);
        const month = date.slice(5, 7);
        const day = date.slice(8, 10);

        return months[+month - 1] + ' ' + day + ', ' + year;
    };

    return (
        <SwipeableDrawer
            PaperProps={{
                sx: PaperPropsSX,
            }}
            sx={{ zIndex: 1200 }}
            anchor="bottom"
            swipeAreaWidth={isOpenThemeDrawer ? 0 : 60}
            onOpen={toggleDrawer}
            open={isOpenNotesDrawer}
            onClose={toggleDrawer}
            allowSwipeInChildren
            disableBackdropTransition
        >
            <Box
                sx={{
                    ...BoxSX,
                    padding: '10px 0 15px 0',
                    top: isOpenThemeDrawer ? '10px' : '-65px',
                }}
                onClick={toggleDrawer}
            >
                <Skeleton animation="wave" sx={SkeletonSX} />

                <Typography sx={TypographySX} variant="h6">
                    {/* {note.id} */}
                    {convertDate(idOfDay)}
                </Typography>
            </Box>

            <EditNote
                idOfDay={idOfDay}
                isOpenNotesDrawer={isOpenNotesDrawer}
                value={value}
                setValue={setValue}
            />
        </SwipeableDrawer>
    );
}

const TypographySX = {
    width: '100%',
    opacity: '0.75',
    textAlign: 'center',
};

const PaperPropsSX = {
    overflow: 'visible',
    minHeight: '50vh',
    width: '900px',
    maxWidth: '100vw',
    justifySelf: 'center',
    bgcolor: 'primary.main',
    color: 'primary.contrastText',
    padding: '10px 0px',
};

export const BoxSX = {
    transition: '.5s ease',
    boxShadow: '0px -5px 5px 0px rgba(0, 0, 0, 0.25)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '5px',
    borderRadius: '25px 25px 0 0',
    bgcolor: 'primary.dark',
    position: 'absolute',
    left: '0',
    visibility: 'visible',
    width: '100%',
    justifyContent: 'center',
    cursor: 'pointer',
};

export const SkeletonSX = {
    width: '100px',
    height: '100%',
    backgroundColor: 'primary.contrastText',
    opacity: 0.11,
};
