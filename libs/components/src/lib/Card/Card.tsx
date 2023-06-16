import React from 'react'
import Image from 'next/image'

import styles from './Card.module.css'
import yellowCircle from './yellow-circle.svg'

export const Card: React.FC<React.PropsWithChildren> = (props) => (
  <div className={`relative ${styles.cardWrapper}`}>
    <section className={styles.card} {...props} />

    <div className={`relative ${styles.decorationWrapper}`}>
      <Image
        className={styles.decorativeCircle}
        src={yellowCircle}
        width={70}
        height={70}
        alt='decorative circle'
      />
    </div>
  </div>
)
