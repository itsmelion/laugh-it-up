import type { Meta } from '@storybook/react';
import { PinInput } from './PinInput';
import { useForm } from 'react-hook-form';

function Wrapper() {
  const form = useForm<{ pin: string }>();
  return <PinInput name='pin' control={form.control} />;
}

const Story: Meta<typeof PinInput> = {
  component: Wrapper,
  title: 'PinInput',
};
export default Story;

export const Primary = {
  args: {},
};
