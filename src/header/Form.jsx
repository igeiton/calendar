import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { applyDate } from '../store/selectedDate';
import { dateToday } from '../components/addDaysToArray';
import Today from './Today';

export default function Form() {
    const selectedDate = useSelector((state) => state.selectedDate);

    const [value, setValue] = useState({
        startDate: selectedDate.startDate,
        endDate: selectedDate.endDate,
    });

    const refInputMin = useRef();
    const refInputMax = useRef();

    const dispatch = useDispatch();

    function focus(event) {
        event === 'min'
            ? refInputMin.current.showPicker()
            : refInputMax.current.showPicker();
    }

    useEffect(() => {
        dispatch(
            applyDate({ startDate: value.startDate, endDate: value.endDate })
        );
    }, [value]);

    return (
        <form action="#">
            <Today />

            <label
                onClick={(event) => focus(event.currentTarget.htmlFor)}
                htmlFor="min"
            >
                <div>Начало</div>
                <div>{value.startDate}</div>
                <input
                    ref={refInputMin}
                    id="min"
                    min={new Date().toISOString().split('T')[0]}
                    max={value.endDate}
                    type="date"
                    value={value.startDate}
                    onChange={(event) =>
                        setValue({
                            ...value,
                            startDate: event.target.value,
                        })
                    }
                />
            </label>

            <label
                onClick={(event) => focus(event.currentTarget.htmlFor)}
                htmlFor="max"
            >
                <div>Конец</div>
                <div>{value.endDate}</div>
                <input
                    ref={refInputMax}
                    id="max"
                    min={value.startDate}
                    type="date"
                    value={value.endDate}
                    onChange={(event) =>
                        setValue({
                            ...value,
                            endDate: event.target.value,
                        })
                    }
                />
            </label>
            <button
                type="submit"
                onClick={() => {
                    setValue({
                        startDate: dateToday,
                        endDate: dateToday,
                    });
                }}
            >
                Сбросить
            </button>
        </form>
    );
}
