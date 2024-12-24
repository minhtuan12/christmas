'use client'

import { motion } from 'framer-motion'

export default function Envelope({ isOpen, children }) {
  return (
    <div className="relative w-full aspect-[4/3]">
      <motion.svg
        viewBox="0 0 400 300"
        className="w-full h-full"
        initial={false}
        animate={isOpen ? 'open' : 'closed'}
      >
        {/* Envelope body */}
        <motion.path
          d="M0 0 L400 0 L400 300 L0 300 Z"
          fill="#f0f0f0"
          stroke="#c0a080"
          strokeWidth="4"
        />

        {/* Envelope flap */}
        <motion.path
          d="M0 0 L200 150 L400 0"
          fill="#f0f0f0"
          stroke="#c0a080"
          strokeWidth="4"
          variants={{
            open: { rotateX: 180, transformOrigin: 'center top' },
            closed: { rotateX: 0, transformOrigin: 'center top' }
          }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        />

        {/* Decorative elements */}
        {/* <circle cx="200" cy="150" r="30" fill="#c0a080" />
        <path d="M185 150 L215 150 M200 135 L200 165" stroke="#f0f0f0" strokeWidth="4" /> */}
      </motion.svg>
      
      {isOpen && (
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          {children}
        </motion.div>
      )}
    </div>
  )
}
