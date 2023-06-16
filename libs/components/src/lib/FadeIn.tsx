'use client'
import { motion } from 'framer-motion';

export function FadeIn(props) {
  return (
    <motion.div
      initial={{ y: -50, opacity: 0,  }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 50, opacity: 0 }}
      {...props}
    />
  )
}
