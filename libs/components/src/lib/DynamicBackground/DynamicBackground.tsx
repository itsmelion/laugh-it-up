'use client'
import { motion } from 'framer-motion';
import Image from 'next/image';


import styles from './DynamicBackground.module.css'

import purpleBallVector from './assets/purple_ball.svg'
import whiteBallVector from './assets/whiteball.svg'
import wavyVector from './assets/wavy.svg'
import plusVector from './assets/plus.svg'
import arrowsVector from './assets/arrows.svg'
import dimeVector from './assets/diamond.svg'

export function DynamicBackground() {

  return (
    <div className={styles.wrapper}>
      <motion.div
        animate={{
          rotate: [0, 540],
          x: ["calc(0vw - 100%)", "calc(105vw - 100%)"],
          y: ['calc(0vh - 100%)', 'calc(8vh - 100%)'],
        }}
        transition={{ repeat: Infinity, repeatType: 'loop', duration: 60 }}>
        <Image src={purpleBallVector} width={48} height={48} alt='purple ball decoration' />
      </motion.div>

      <motion.div
        animate={{
          rotate: [0, 180],
          x: ["calc(5vw - 100%)", "calc(100vw - 100%)"],
          y: ['calc(1vh - 100%)', 'calc(9vh - 100%)'],
        }}
        transition={{ repeat: Infinity, repeatType: 'reverse', duration: 20, ease: 'circInOut'  }}>
        <Image src={whiteBallVector} width={72} height={72} alt='white ball decoration' />
      </motion.div>

      <motion.div
        animate={{
          rotate: [0, 90, 0],
          x: ["calc(0vw - 100%)", "calc(100vw - 100%)", "calc(105vw - 100%)"],
          y: ['calc(6vh - 100%)', 'calc(6vh - 100%)', 'calc(6vh - 100%)'],
        }}
        transition={{ repeat: Infinity, repeatType: 'mirror', duration: 40, ease: 'easeIn' }}>
        <Image src={wavyVector} width={110} height={113} alt='wavy decoration' />
      </motion.div>

      <motion.div
        animate={{
          rotate: [0, 0, 270, 270, 0],
          scale: [1, 0, 1.2, 0.2, 1.5],
          x: ['90vw', '90vw', '80vw', '80vw', '70vw'],
          y: ['5vh', '4vh', '3vh', '3vh', '5vh'],
        }}
        transition={{ repeat: Infinity, repeatType: 'reverse', duration: 5 }}>
        <Image src={plusVector} width={10} height={10} alt='plus decoration' />
      </motion.div>

      <motion.div
        animate={{
          rotate: [43,43,43],
          x: ["calc(-3vw - 100%)", "calc(103vw - 100%)"],
          y: ['calc(8vh - 100%)'],
        }}
        transition={{ repeat: Infinity, repeatType: 'loop', duration: 3, repeatDelay: 2, ease: 'easeInOut' }}>
        <Image src={arrowsVector} width={30} height={30} alt='arrow decoration' />
      </motion.div>

      <motion.div
        animate={{
          rotate: [0, 0, 540, 540, 0],
          scale: [0, 0.4, 1, 0.4, 0.4],
          x: ['60vw', '60vw', '60vw', '60vw', '60vw'],
          y: ['3vh', '3vh', '3vh', '3vh', '3vh'],
        }}
        transition={{ repeat: Infinity, repeatType: 'reverse', duration: 3, repeatDelay: 2, ease: 'easeInOut' }}>
        <Image src={dimeVector} width={30} height={30} alt='diamond decoration' />
      </motion.div>

      <motion.div
        animate={{
          rotate: [540, 540, 0, 0, 0],
          scale: [0.4, 0.15, 0.4, 0, 0],
          x: ['30vw', '30vw', '30vw', '30vw', '30vw'],
          y: ['7vh', '7vh', '7vh', '7vh', '7vh'],
        }}
        transition={{ repeat: Infinity, repeatType: 'reverse', duration: 3, repeatDelay: 2, ease: 'easeInOut' }}>
        <Image src={dimeVector} width={30} height={30} alt='diamond decoration' />
      </motion.div>
    </div>
  )
}
