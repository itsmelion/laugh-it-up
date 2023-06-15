'use client'
import React, { forwardRef, useRef, useState } from 'react'

import styles from './PinInput.module.css'

export const PinInput = forwardRef<HTMLInputElement>((props, ref) => {
  const [pin, setPin] = useState<string[]>(new Array(4).fill(''));
  const inputRefs = useRef<HTMLInputElement[]>([]);

  const focusPinAt = (pinAt = 0) => {
    const input = inputRefs.current[pinAt];
    if (input) input.focus();
  };

  const onChange = (ev: React.ChangeEvent<HTMLInputElement>, idx = 0) => {
    const {value} = ev.target;
    if (!value) return;

    setPin((old) => {
      const newVal = [...old];
      newVal[idx] = value.slice(-1);
      return newVal;
    });

    // if thers another field, shift focus to next one.
    if (idx < 4) focusPinAt(idx + 1);
  };

  const handleBackspace = (ev: React.KeyboardEvent<HTMLInputElement>, idx = 0) => {
    const { code } = ev.nativeEvent;
    if (code !== 'Backspace') return;

    focusPinAt(Math.max(0, idx - 1));
    setPin((old) => {
      const newVal = [...old];
      newVal[idx] = '';
      return newVal;
    });
  };

  return (
    <fieldset className={styles.wrapper}>
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
