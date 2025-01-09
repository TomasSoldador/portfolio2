'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface AnimateInViewProps {
  children: ReactNode
}

export function AnimateInView({ children }: AnimateInViewProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  )
}

