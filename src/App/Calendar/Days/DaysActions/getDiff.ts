import { IDate } from '../../../../Store/Slices/dateSlice';

export default function getDiff(date: IDate): number {
    const start: number = new Date(date.start).getTime();
    const end: number = new Date(date.end).getTime();

    const diff: number = (end - start) / (1000 * 60 * 60 * 24) + 1;

    return diff;
}
