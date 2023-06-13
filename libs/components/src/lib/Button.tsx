import React from 'react';

import styles from './Button.module.css';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
}

export function Button (props: ButtonProps) {
  const { children, title, ...restProps } = props;

  return (
    <button title={title} {...restProps} className={styles.button}>
      <div className={styles['fire-gradient']}>
        <div className={styles['bezel-reflection']}>
          <span className={styles['inner-button']}>
            {title || children}
          </span>
        </div>
      </div>
    </button>
  );
}
