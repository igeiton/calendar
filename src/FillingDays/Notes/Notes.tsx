import { Box, Skeleton, SwipeableDrawer } from '@mui/material';

import { INote, toggleNotesDrawer } from '../../Store/Slices/notesSlice';
import { useAppDispatch, useAppSelector } from '../../Store/store';

import EditNote from './EditNote';

export default function Notes() {
    // hooks
    const { isOpenNotesDrawer, idOfDay, noteList } = useAppSelector(
        (state) => state.notes
    );
    const { isOpenThemeDrawer } = useAppSelector((state) => state.theme);

    const dispatch = useAppDispatch();

    // dispatch
    const toggleDrawer = (): void => {
        dispatch(toggleNotesDrawer(!isOpenNotesDrawer));
    };

    // functions
    const findNote = (id: string): INote => {
        const template: INote = {
            id,
            title: '',
            description: '',
            color: '',
        };

        for (let i = 0; i < noteList.length; i++) {
            if (noteList[i].id === idOfDay) {
                return noteList[i];
            }
        }

        return template;
    };

    // const
    const note: INote = findNote(idOfDay);

    if (isOpenThemeDrawer) return null;

    return (
        <>
            <SwipeableDrawer
                PaperProps={{
                    sx: PaperPropsSX,
                }}
                anchor="bottom"
                swipeAreaWidth={50}
                onOpen={toggleDrawer}
                open={isOpenNotesDrawer}
                onClose={toggleDrawer}
                allowSwipeInChildren
                disableBackdropTransition
            >
                <Box sx={{ ...BoxSX, top: -25 }} onClick={toggleDrawer}>
                    <Skeleton animation="wave" sx={SkeletonSX} />
                </Box>

                <EditNote note={note} />
            </SwipeableDrawer>
        </>
    );
}

const PaperPropsSX = {
    overflow: 'visible',
    minHeight: '50vh',
    bgcolor: 'primary.main',
    color: 'primary.contrastText',
};

export const BoxSX = {
    position: 'absolute',
    left: '0',
    visibility: 'visible',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    cursor: 'pointer',
};

export const SkeletonSX = {
    width: '100px',
    height: '100%',
    backgroundColor: 'primary.contrastText',
    opacity: 0.11,
};
