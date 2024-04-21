import { useDispatch } from 'react-redux';
import { toggleColor } from '../store/selectedDate';
import { dateMethodsPick } from '../components/addDaysToArray';
import { updateNoteLink } from '../store/notes';
// import { useNavigate } from 'react-router-dom';

export interface Props {
    day: {
        number: number;
        style: boolean;
        hasNote: boolean;
        colored?: boolean;
    };
    index: number;
}

export default function DaysLauncher({ day, index }: Props) {
    // const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleSubmit = () => {
        dispatch(toggleColor({ index: index }));
    };

    function handleUpdateNotes(noteLink: number) {
        day.number !== -1 && dispatch(updateNoteLink({ noteLink }));
    }

    const handleStyles = () => {
        const border = day.colored && day.number !== -1 ? 'yellow' : '';
        const background = day.style ? 'even' : 'odd';
        const empty = day.number === -1 ? 'empty' : '';
        const hasNote = day.hasNote ? 'hasNote' : '';

        return `${border} ${background} ${empty} ${hasNote}`;
    };

    // function handleToNote() {
    //     if (day.number === '') return;
    //     const link = dateMethodsPick(day.number, 'toLocaleDateString', true);
    //     navigate(link);
    // }

    return (
        <div
            // onDoubleClickCapture={handleToNote}
            onClick={() => {
                handleSubmit();
                handleUpdateNotes(day.number);
            }}
            key={index}
            className={`day ${handleStyles()}`}
        >
            {day.number === -1 ? '' : dateMethodsPick(day.number, 'getDate')}
        </div>
    );
}
