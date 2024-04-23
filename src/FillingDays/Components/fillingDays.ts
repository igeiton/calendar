import { IDate } from '../../Store/Slices/dateSlice';

export interface Days {
    month: string;
    year: string;
    day: string;
}

export function fillingDays(date: IDate): Days[] {
    // const diff: number = getDiff(date);

    // const fillsArray: string[] = [];

    // const [startYear, startMonth, startDay]: string[] = date.start.split('-');

    // const dailyStart: number = new Date(date.start).getDay();

    // for (let i = 1; i < (dailyStart === 0 ? 7 : dailyStart); i++) {
    //     fillsArray.push('');
    // }

    // for (let i = 0; i < diff; i++) {
    //     const current: Date = new Date(
    //         Number(startYear),
    //         Number(startMonth) - 1,
    //         Number(startDay) + i
    //     );

    //     fillsArray.push(current.toLocaleDateString('LT'));
    // }

    // return fillsArray;

    //// =============================

    const diff: number = getDiff(date);

    const filArray: Days[] = [];

    const splittedDate: string[] = date.start.split('-');

    const startDate = {
        year: Number(splittedDate[0]),
        month: Number(splittedDate[1]),
        day: Number(splittedDate[2]),
    } as { year: number; month: number; day: number };

    for (let i = 0; i < diff; i++) {
        const current: Date = new Date(
            Number(startDate.year),
            Number(startDate.month) - 1,
            Number(startDate.day) + i
        );

        if (
            months[current.getMonth()] !== filArray[filArray.length - 1]?.month
        ) {
            const dayOfWeek = current.getDay();
            for (let j = 1; j < (dayOfWeek === 0 ? 7 : dayOfWeek); j++) {
                filArray.push({
                    month: months[current.getMonth()],
                    year: current.getFullYear().toString(),
                    day: '',
                });
            }
        }

        filArray.push({
            month: months[current.getMonth()],
            year: current.getFullYear().toString(),
            day: current.toLocaleDateString('LT'),
        });
    }

    return filArray;
}

function getDiff(date: IDate): number {
    const start: number = new Date(date.start).getTime();
    const end: number = new Date(date.end).getTime();

    const diff: number = (end - start) / (1000 * 60 * 60 * 24) + 1;

    return diff;
}

export const daily: string[] = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'];

export const months: { [key: number]: string } = {
    0: 'Январь',
    1: 'Февраль',
    2: 'Март',
    3: 'Апрель',
    4: 'Май',
    5: 'Июнь',
    6: 'Июль',
    7: 'Август',
    8: 'Сентябрь',
    9: 'Октябрь',
    10: 'Ноябрь',
    11: 'Декабрь',
};

export const colors: string[] = [
    '#FF6B6B',
    '#FFD166',
    '#118AB2',
    '#06D6A0',
    '#EF476F',
    '#FF0000',
    '#0000FF',
    '#9400D3',
    '#7CfC00',
    '#FF69B4',
];
