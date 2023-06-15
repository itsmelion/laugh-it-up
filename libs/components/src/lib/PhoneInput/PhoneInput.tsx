import { forwardRef } from 'react'
import Image from 'next/image';
import {AsYouType, getExampleNumber} from 'libphonenumber-js';
import examples from 'libphonenumber-js/mobile/examples';

import styles from './PhoneInput.module.css'
import phoneIconVector from './phoneIcon.svg';

const exampleNumber = getExampleNumber('NL', examples)?.formatInternational();

export const PhoneInput = forwardRef<HTMLInputElement>((props, ref) => {
  const { value: incomingValue } = props;

  return (
    <label htmlFor="phone-input" className={styles.wrapper}>
      <Image
        alt='phone icon'
        src={phoneIconVector}
        height={20}
        width={12}
        className={styles.phoneIcon}
      />

      <input
        {...props}
        value={incomingValue}
        placeholder={`eg: ${exampleNumber}`}
        onChange={e => {
          const phoneObj = new AsYouType().input(e.target.value);
          props.onChange(phoneObj);
        }}
        className={styles.input}
        ref={ref}
        type="tel"
        autoComplete='phone'
        name="phone"
        id='phone-input'
      />
    </label>
  )
})
