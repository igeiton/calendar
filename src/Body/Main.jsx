import { useDispatch, useSelector } from 'react-redux';
import { applyDays, hasNote } from '../store/selectedDate';
import { useEffect } from 'react';
import { dateDiff, dateMethodsPick } from '../components/addDaysToArray';
import DaysLauncher from './daysLauncher';
import { Link } from 'react-router-dom';

export default function Main() {
    const selectedDate = useSelector((state) => state.selectedDate);
    const dateDays = useSelector((state) => state.selectedDate.dateDays);
    const notes = useSelector((state) => state.notes.notes);

    const noteLink = useSelector((state) => state.notes.noteLink);

    const diff = dateDiff(selectedDate.startDate, selectedDate.endDate);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(applyDays({ dateDaysDiff: diff }));
    }, [selectedDate.startDate, selectedDate.endDate]);

    useEffect(() => {
        for (let i = 0; i < dateDays.length; i++) {
            const note = dateMethodsPick(
                dateDays[i].number,
                'toLocaleDateString',
                true
            );
            if (!notes[note]?.title && !notes[note]?.body) {
                dispatch(hasNote({ day: i, hasNote: false }));
                continue;
            }

            dispatch(hasNote({ day: i, hasNote: true }));
        }
    }, [dateDays]);

    return (
        <>
            <section className="main">
                <div className="dayOfWeek">
                    <div>Пн</div>
                    <div>Вт</div>
                    <div>Ср</div>
                    <div>Чт</div>
                    <div>Пт</div>
                    <div>Сб</div>
                    <div>Вс</div>
                </div>

                <div className="days">
                    {dateDays.map((day, index) => (
                        <DaysLauncher day={day} index={index} key={index} />
                    ))}
                </div>
                {/* <span className="legend">
                    * Нажмите два раза на день, чтобы открыть заметку
                </span> */}
                <Link
                    className="editNote"
                    to={`${dateMethodsPick(
                        noteLink,
                        'toLocaleDateString',
                        true
                    )}`}
                >
                    <button>
                        Редактировать заметку на{' '}
                        <span>
                            {dateMethodsPick(
                                noteLink,
                                'toLocaleDateString',
                                true
                            )}
                        </span>
                    </button>
                </Link>
            </section>
        </>
    );
}
