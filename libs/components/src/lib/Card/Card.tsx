import React from 'react'
import styles from './Card.module.css'

export const Card: React.FC<React.PropsWithChildren> = (props) => (
  <section className={styles.card} {...props} />
)
