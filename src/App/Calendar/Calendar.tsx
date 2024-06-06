// IU components
// Store
import { IDate } from '../../Store/Slices/dateSlice';
import { useAppSelector } from '../../Store/store';
// Components
// Styles
import DatePicker from './DatePicker';
import Days from './Days/Days';

export default function Calendar() {
    // hooks
    const { date }: { date: IDate } = useAppSelector((state) => state.date);
    const { theme }: { theme: 'light' | 'dark' } = useAppSelector(
        (state) => state.theme
    );

    return (
        <>
            <DatePicker date={date} theme={theme} />

            <Days date={date} />
        </>
    );
}
