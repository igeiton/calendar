import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { addNote, updateNote } from '../store/notes';

export default function Note() {
    const param = useParams();
    const notes = useSelector((state) => state.notes.notes[param.date]);
    const navigate = useNavigate();

    const [value, setValue] = useState({
        title: notes?.title || '',
        body: notes?.body || '',
    });

    const refTitle = useRef();
    const refBody = useRef();
    const refSave = useRef();
    const refClear = useRef();

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(addNote({ noteLink: param.date }));
    }, [param.date]);

    function handleSubmit(event, value) {
        dispatch(
            updateNote({
                noteLink: param.date,
                title: value.title,
                body: value.body,
            })
        );

        if (event.innerText === refSave.current.innerText)
            saved('Сохранено', 'rgba(0, 255, 0, 0.5)', refSave);
        else {
            saved('Очищено', 'black', refClear);
        }
    }

    function saved(text, color, ref) {
        const prevRef = ref.current.innerText;
        ref.current.style.backgroundColor = color;
        ref.current.innerText = text;
        ref.current.disabled = true;

        const timeout = setTimeout(() => {
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
                        onClick={(event) => {
                            event.preventDefault();
                            handleSubmit(event.target, { title: '', body: '' });
                            setValue({ title: '', body: '' });
                        }}
                    >
                        Очистить
                    </button>
                    <button
                        ref={refSave}
                        onClick={(event) => {
                            event.preventDefault();
                            handleSubmit(event.target, value);
                        }}
                    >
                        Сохранить
                    </button>
                </div>
            </form>
        </div>
    );
}
