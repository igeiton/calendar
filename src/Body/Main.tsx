import { useDispatch, useSelector } from 'react-redux';
import { applyDays, hasNote } from '../store/selectedDate';
import { useEffect } from 'react';
import {
    dateDiff,
    dateMethodsPick,
    dateToday,
} from '../components/addDaysToArray';
import DaysLauncher from './daysLauncher';
import { Link } from 'react-router-dom';

interface DateDays {
    number: number;
    style?: boolean;
    hasNote?: boolean;
    colored?: boolean;
}

export default function Main() {
    const selectedDate = useSelector((state: any) => state.selectedDate);
    const dateDays: DateDays[] = useSelector(
        (state: any) => state.selectedDate.dateDays
    );

    const notes = useSelector((state: any) => state.notes.notes);
    const noteLink = useSelector((state: any) => state.notes.noteLink);

    const diff = dateDiff(selectedDate.startDate, selectedDate.endDate);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(applyDays({ dateDaysDiff: diff }));
    }, [selectedDate.startDate, selectedDate.endDate]);

    useEffect(() => {
        for (let i = 0; i < dateDays.length; i++) {
            const note: string = dateMethodsPick(
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
                        dateToday,
                        'toLocaleDateString',
                        true
                    )}`}
                >
                    <button>
                        Редактировать заметку на{' '}
                        <span>
                            {dateMethodsPick(
                                typeof noteLink === 'number'
                                    ? noteLink
                                    : dateToday,
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
