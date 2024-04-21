import { useState } from 'react';

export default function Today() {
    const [time, setTime] = useState({
        date: new Date().toLocaleDateString(),
        time: new Date().toLocaleTimeString(),
    });

    setInterval(() => {
        setTime((prev) => ({
            date: new Date().toLocaleDateString(),
            time: new Date().toLocaleTimeString(),
        }));
    }, 1000);
    return (
        <div className="today">
            <div>Сейчас:</div>
            <div>{time.date}</div>
            <div>{time.time}</div>
        </div>
    );
}
