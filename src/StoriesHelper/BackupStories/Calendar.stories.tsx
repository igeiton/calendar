import { Meta, StoryObj } from '@storybook/react';

import Redux from '../Redux';
import Calendar from '../../App/Calendar/Calendar';

const meta: Meta<typeof Calendar> = {
    title: 'App/Calendar',
    component: Calendar,
    tags: ['autodocs'],
    decorators: [(Story) => <Redux>{Story()}</Redux>],
};

export default meta;

// =============================== Stories

type Story = StoryObj<typeof Calendar>;

export const Themes: Story = {
    args: {},
};
