import { Meta, StoryObj } from '@storybook/react';

import Redux from '../Redux';
import Day from '../../App/Calendar/Days/Day';

const meta: Meta<typeof Day> = {
    title: 'App/Day',
    component: Day,
    tags: ['autodocs'],
    decorators: [(Story) => <Redux>{Story()}</Redux>],
};

export default meta;

// =============================== Stories

type Story = StoryObj<typeof Day>;

export const Themes: Story = {
    args: {
        day: {
            day: '2022-01-01',
            month: 'January',
            year: '2022',
        },
        days: [
            {
                day: '',
                month: '',
                year: '',
            },
        ],
        index: 0,
    },
};
