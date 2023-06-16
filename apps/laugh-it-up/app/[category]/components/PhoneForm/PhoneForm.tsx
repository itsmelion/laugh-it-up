'use client'

import { Button, PhoneInput } from '@laugh-it-up/components';
import { useTriggerPin } from '@laugh-it-up/services';
import { Controller, useForm } from 'react-hook-form';
import { parsePhoneNumber, ParseError } from 'libphonenumber-js';
import { ErrorMessage } from '@hookform/error-message';

import styles from './PhoneForm.module.css';
import { useParams, useRouter } from 'next/navigation';

export const PhoneForm = () => {
  const form = useForm<{ phone: string }>();
  const verifyPhoneRequest = useTriggerPin();
  const route = useRouter();
  const params = useParams();

  return (
    <form
      onSubmit={form.handleSubmit(async (data) => {
        const { phone } = data;
        const number = parsePhoneNumber(phone);

        await verifyPhoneRequest.execute({
          msisdn: number.formatInternational(),
          user_id: 'UUID-CHRIS-LION',
          country: number.country || 'NL',
        });

        route.push(`/${params.category}/verify`);
      })}
      className={styles.wrapper}>
      <p>Enter your number to get all the sticker packs.</p>
      <div className='mt-1'/>


      <Controller
        name='phone'
        control={form.control}
        rules={{
          required: 'I do need your number for that',
          validate(value) {
            try {
              parsePhoneNumber(value);
            } catch (error) {
              if (!(error instanceof ParseError)) return 'Weird phone number eh, mind to try again?';
              switch(error.message) {
                case 'TOO_SHORT': return 'kinda small, are you sure?';
                case 'TOO_LONG': return 'err.. this phone is looking kinda big. not sure about that';
                case 'INVALID_COUNTRY': return 'Is that a country code? I dont get it';
                case 'NOT_A_NUMBER': return 'Dont think thats a number';
                default: return error.message;
              }
            }
          }
        }}
        render={({field}) => (
          <PhoneInput {...field} />
        )}
      />

      <ErrorMessage
        name="phone"
        errors={form.formState.errors}
        as={<p className='form-error-message'/>}
      />

      <div className='mt-2'/>

      <Button
        type='submit'
        title='Submit to Subscribe'
        disabled={verifyPhoneRequest.loading}
      />
    </form>
  )
}
