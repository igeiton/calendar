import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { addNote, updateNote } from '../store/notes';

interface Notes {
    [keys: string]: string;
}

interface Ref {
    current: {
        style: { backgroundColor: string };
        innerText: string;
        disabled: boolean;
    };
}

// type Event = { // event button
//     target: {
//         name: string;
//         innerText: string;
//     };
//     preventDefault: () => void;
// };
type Value = {
    title: string;
    body: string;
};

export default function Note() {
    const param: any = useParams();
    const notes: Notes = useSelector(
        (state: any) => state.notes.notes[param.date]
    );

    const navigate = useNavigate();

    const [value, setValue] = useState({
        title: notes?.title || '',
        body: notes?.body || '',
    });

    const refTitle: any = useRef();
    const refBody: any = useRef();
    const refSave: any = useRef();
    const refClear: any = useRef();

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(addNote({ noteLink: param.date }));
    }, [param.date]);

    function handleSubmit(event: string, value: Value) {
        dispatch(
            updateNote({
                noteLink: param.date,
                title: value.title,
                body: value.body,
            })
        );

        if (event === refSave.current.innerText)
            saved('Сохранено', 'rgba(0, 255, 0, 0.5)', refSave);
        else {
            saved('Очищено', 'black', refClear);
        }
    }

    function saved(text: string, color: string, ref: Ref) {
        const prevRef = ref.current.innerText;
        ref.current.style.backgroundColor = color;
        ref.current.innerText = text;
        ref.current.disabled = true;

        setTimeout(() => {
            ref.current.style.backgroundColor = '';
            ref.current.innerText = prevRef;
            ref.current.disabled = false;
        }, 1000);
    }

    return (
        <div className="note">
            <div>{param.date}</div>
            <button onClick={() => navigate('/')} className="goBack">
                Назад
            </button>

            <form action="">
                <label>
                    Название:
                    <input
                        ref={refTitle}
                        type="text"
                        value={value.title}
                        onChange={(event) =>
                            setValue({ ...value, title: event.target.value })
                        }
                    />
                </label>

                <label>
                    Заметка:
                    <textarea
                        ref={refBody}
                        type="text"
                        value={value.body}
                        onChange={(event) => {
                            setValue({ ...value, body: event.target.value });
                        }}
                        style={{
                            height:
                                Math.max(refBody.current?.scrollHeight, 100) +
                                'px',
                        }}
                    />
                </label>

                <div className="buttons">
                    <button
                        ref={refClear}
                        onClick={(event: any) => {
                            event.preventDefault();
                            handleSubmit(event.target.innerText, {
                                title: '',
                                body: '',
                            });
                            setValue({ title: '', body: '' });
                        }}
                    >
                        Очистить
                    </button>
                    <button
                        ref={refSave}
                        onClick={(event: any) => {
                            event.preventDefault();
                            handleSubmit(event.target.innerText, value);
                        }}
                    >
                        Сохранить
                    </button>
                </div>
            </form>
        </div>
    );
}
