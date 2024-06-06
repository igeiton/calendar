import { Button } from '@mui/material';

import { clearAllDays } from '../../../../Store/Slices/dateSlice';
import { clearAllNotes } from '../../../../Store/Slices/notesSlice';
import { useAppDispatch } from '../../../../Store/store';

export default function ClearAll() {
    // hooks
    const dispatch = useAppDispatch();

    // dispatch
    const clearNotes = (): void => {
        dispatch(clearAllNotes());
        dispatch(clearAllDays());
    };

    return (
        <Button sx={ButtonSX} onClick={clearNotes}>
            Очистить дни и записки
        </Button>
    );
}

const ButtonSX = {
    bgcolor: 'error.main',
    color: '#FFF',
    opacity: '0.5',
    borderRadius: '0px',
    transition: 'all 0.3s ease',
    '&:hover': { bgcolor: 'error.dark', opacity: '1' },
};
