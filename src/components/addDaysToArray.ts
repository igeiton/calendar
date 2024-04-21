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

interface SelectedDate {
    startDate: string;
    endDate: string;
    dateDaysDiff: number;
    dateDays: DateDays;
}

interface Day {
    number: number;
    style: number;
    hasNote: boolean;
    colored?: boolean;
    find?: any;
}

export function addDaysToArray(selectedDate: SelectedDate, days: number) {
    const arr: Day[] = [];
    const [startYear, startMonth, startDay] = selectedDate.startDate.split('-');
    const [endYear, endMonth, endDay] = selectedDate.endDate.split('-');

    const startDayWeek: number = new Date(
        Number(startYear),
        Number(startMonth) - 1,
        Number(startDay)
    ).getDay();
    const endDateWeek: number = new Date(
        Number(endYear),
        Number(endMonth) - 1,
        Number(endDay)
    ).getDay();

    for (let i = 1; i < (startDayWeek === 0 ? 7 : startDayWeek); i++) {
        arr.push({ number: -1, style: -1, hasNote: false });
    }

    for (let i = 0; i < days; i++) {
        const newDay: Day = {
            number: new Date(
                Number(startYear),
                Number(startMonth) - 1,
                Number(startDay) + i
            ).getTime(),
            style:
                new Date(
                    Number(startYear),
                    Number(startMonth) - 1,
                    Number(startDay) + i
                ).getMonth() % 2,
            hasNote: false,
        };

        const oldDay: Day = selectedDate.dateDays.find((day: Day) => {
            if (Number(day.number) === Number(newDay.number)) {
                return day;
            }
        });

        arr.push(oldDay || newDay);
    }

    for (let i = endDateWeek; i < 7 && endDateWeek !== 0; i++) {
        arr.push({ number: -1, style: -1, hasNote: false });
    }
    return arr;
}

// export function convertDaysInArray(arr) {
//     const array = arr.map((day) => {
//         return day.number === ''
//             ? day
//             : { ...day, number: new Date(day.number).getDate() };
//     });

//     return array;
// }

export function dateDiff(date1: any, date2: any): number {
    date1 = date1.split('-');
    date2 = date2.split('-');

    date1 = new Date(date1[0], date1[1] - 1, date1[2]);
    date2 = new Date(date2[0], date2[1] - 1, date2[2]);

    return Math.round((date2 - date1) / (1000 * 60 * 60 * 24)) + 1;
}

export const dateToday: string = new Date()
    .toLocaleDateString()
    .split('.')
    .reverse()
    .join('-');

export function dateMethodsPick(
    variable: number | Date,
    method: string,
    split: boolean = false
): string {
    const date: string = new Date(variable)[method]();

    if (split) {
        return date.split('.').join('-');
    }
    return date;
}
