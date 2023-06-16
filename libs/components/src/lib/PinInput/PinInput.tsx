'use client'
import React, { forwardRef, useCallback, useRef, useState } from 'react';
import { useController, UseControllerProps } from 'react-hook-form';

import styles from './PinInput.module.css';

export const PinInput = forwardRef<HTMLInputElement, UseControllerProps<{ pin: string }>>((props) => {
  const { field } = useController(props);
  const [pin, setPin] = useState<string[]>(field.value?.split('') || new Array(4).fill(''));
  const inputRefs = useRef<HTMLInputElement[]>([]);

  const focusPinAt = (pinAt = 0) => {
    const input = inputRefs.current[pinAt];
    if (input) input.focus();
  };

  const onChange = useCallback((ev: React.ChangeEvent<HTMLInputElement>, idx = 0) => {
    const {value} = ev.target;
    if (!value) return;

    setPin((old) => {
      const newVal = [...old];
      newVal[idx] = value.slice(-1);
      field.onChange(newVal.join().replace(/,/g, '')); // send change to form
      return newVal;
    });

    // if thers another field, shift focus to next one.
    if (idx < 4) focusPinAt(idx + 1);
    else field.onBlur();
  }, [field]);

  const handleBackspace = useCallback((ev: React.KeyboardEvent<HTMLInputElement>, idx = 0) => {
    const { code } = ev.nativeEvent;
    if (code !== 'Backspace') return;

    focusPinAt(Math.max(0, idx - 1));

    setPin((old) => {
      const newVal = [...old];
      newVal[idx] = '';
      field.onChange(newVal.join().replace(/,/g, '')); // send change to form
      return newVal;
    });
  }, [field]);

  return (
    <fieldset className={styles.wrapper} ref={field.ref}>
      {pin.map((v, i) => (
        <input
          {...props}
          ref={(instance) => {
            if (instance) inputRefs.current[i] = instance;
          }}
          onKeyDown={(ev) => handleBackspace(ev, i)}
          onChange={(ev) => onChange(ev, i)}
          key={i}
          autoFocus={i === 0}
          autoComplete='one-time-code'
          value={v || ''}
          maxLength={1}
          min={0}
          max={9}
          className={styles.input}
          type="number"
        />
      ))}
    </fieldset>
  );
})
