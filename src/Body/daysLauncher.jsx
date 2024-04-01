import { useDispatch } from 'react-redux';
import { toggleColor } from '../store/selectedDate';
import { dateMethodsPick } from '../components/addDaysToArray';
import { updateNoteLink } from '../store/notes';
// import { useNavigate } from 'react-router-dom';

export default function DaysLauncher({ day, index }) {
    // const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleSubmit = () => {
        dispatch(toggleColor({ index }));
    };

    function handleUpdateNotes(noteLink) {
        dispatch(updateNoteLink({ noteLink }));
    }

    const handleStyles = () => {
        const border = day.colored && day.number !== '' ? 'yellow' : '';
        const background = day.style ? 'even' : 'odd';
        const empty = day.number === '' ? 'empty' : '';
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
                day.number && handleSubmit();
                handleUpdateNotes(day.number);
            }}
            key={index}
            className={`day ${handleStyles()}`}
        >
            {day.number === '' ? '' : dateMethodsPick(day.number, 'getDate')}
        </div>
    );
}
