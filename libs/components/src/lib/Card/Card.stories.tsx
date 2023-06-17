import type { Meta } from '@storybook/react';
import { Card } from './Card';

const Story: Meta<typeof Card> = {
  component: Card,
  title: 'Card',
};
export default Story;

export const Primary = {
  args: {
    children: <div style={{ height: 100, width: 200 }} />
  },
};
