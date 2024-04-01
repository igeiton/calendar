// export function addDaysToArray(selectedDate, days) {
//     const arr = [];
//     const [startYear, startMonth, startDay] = selectedDate.startDate.split('-');
//     const [endYear, endMonth, endDay] = selectedDate.endDate.split('-');

//     const startDayWeek = new Date(startYear, startMonth - 1, startDay).getDay();
//     const endDateWeek = new Date(endYear, endMonth - 1, endDay).getDay();

//     function selectMonth(day) {
//         return new Date(startYear, startMonth - 1, day).getMonth();
//     }

//     function pushToArray(i) {
//         arr.push({
//             number: new Date(
//                 startYear,
//                 startMonth - 1,
//                 Number(startDay) + i
//             ).getDate(),
//             style: selectMonth(Number(startDay) + i) % 2,
//         });
//     }

//     for (let i = 1; i < (startDayWeek === 0 ? 7 : startDayWeek); i++) {
//         arr.push({ number: '' });
//     }
//     for (let i = 0; i < days; i++) {
//         pushToArray(i);
//     }
//     for (let i = endDateWeek; i < 7 && endDateWeek !== 0; i++) {
//         arr.push({ number: '' });
//     }

//     return arr;
// }

export function addDaysToArray(selectedDate, days) {
    const arr = [];
    const [startYear, startMonth, startDay] = selectedDate.startDate.split('-');
    const [endYear, endMonth, endDay] = selectedDate.endDate.split('-');

    const startDayWeek = new Date(startYear, startMonth - 1, startDay).getDay();
    const endDateWeek = new Date(endYear, endMonth - 1, endDay).getDay();

    for (let i = 1; i < (startDayWeek === 0 ? 7 : startDayWeek); i++) {
        arr.push({ number: '' });
    }

    for (let i = 0; i < days; i++) {
        const newDay = {
            number: new Date(
                startYear,
                startMonth - 1,
                Number(startDay) + i
            ).getTime(),
            style:
                new Date(
                    startYear,
                    startMonth - 1,
                    Number(startDay) + i
                ).getMonth() % 2,
            hasNote: false,
        };

        const oldDay = selectedDate.dateDays.find((day) => {
            if (Number(day.number) === Number(newDay.number)) {
                return day;
            }
        });

        arr.push(oldDay || newDay);
    }

    for (let i = endDateWeek; i < 7 && endDateWeek !== 0; i++) {
        arr.push({ number: '' });
    }
    return arr;
}

export function convertDaysInArray(arr) {
    const array = arr.map((day) => {
        return day.number === ''
            ? day
            : { ...day, number: new Date(day.number).getDate() };
    });

    return array;
}

export function dateDiff(date1, date2) {
    date1 = date1.split('-');
    date2 = date2.split('-');

    date1 = new Date(date1[0], date1[1] - 1, date1[2]);
    date2 = new Date(date2[0], date2[1] - 1, date2[2]);

    return Math.round((date2 - date1) / (1000 * 60 * 60 * 24)) + 1;
}

export const dateToday = new Date()
    .toLocaleDateString()
    .split('.')
    .reverse()
    .join('-');

export function dateMethodsPick(variable, method, split = false) {
    const date = new Date(variable)[method]();

    if (split) {
        return date.split('.').join('-');
    }
    return date;
}
