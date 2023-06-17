import type { Meta } from '@storybook/react';
import { DynamicBackground } from './DynamicBackground';

const Story: Meta<typeof DynamicBackground> = {
  component: DynamicBackground,
  title: 'DynamicBackground',
};
export default Story;

export const Primary = {
  args: {},
};
