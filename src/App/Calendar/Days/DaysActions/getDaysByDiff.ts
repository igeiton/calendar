import { IDate } from '../../../../Store/Slices/dateSlice';
import { months } from './data';
import getDiff from './getDiff';

export interface Days {
    month: string;
    year: string;
    day: string;
}

export default function getDaysByDiff(date: IDate): Days[] {
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
