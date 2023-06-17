import type { Meta } from '@storybook/react';
import { Reviews } from './Reviews';

const reviews = [
  {
    content: "It's good. There are many cool stickers!",
    author: "Fikri Aziz",
    rate: 4
  }
];

const Story: Meta<typeof Reviews> = {
  component: Reviews,
  title: 'Reviews',
};
export default Story;

export const Primary = {
  args: {
    reviews
  },
};
