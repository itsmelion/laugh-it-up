'use client'
import { ErrorMessage } from '@hookform/error-message';
import { PinInput, Button } from '@laugh-it-up/components';
import { useVerifyPin } from '@laugh-it-up/services';
import { FormProvider, useForm } from 'react-hook-form';

export function PinVerification() {
  const verifyPin = useVerifyPin();
  const form = useForm<{ pin: string }>();

  return (
    <FormProvider {...form}>
      <form
        className='gap-2 mt-1'
        onSubmit={form.handleSubmit((data) => {
          return verifyPin.execute({
            pin: data.pin,
            user_id: 'UUID-CHRIS-LION',
            country: 'NL',
          });
        })}
      >
        <PinInput
          name='pin'
          rules={{
            required: 'Fill in the pin you got on your phone',
            minLength: 4
          }}
        />

        <ErrorMessage
          name="pin"
          errors={form.formState.errors}
          as={<p className='form-error-message'/>}
        />

        <Button
          title='Confirm'
          type='submit'
          disabled={verifyPin.loading || form.formState.isDirty && !form.formState.isValid}
        />
      </form>
    </FormProvider>
  );
}
