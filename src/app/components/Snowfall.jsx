'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function Snowfall() {
  const [snowflakes, setSnowflakes] = useState([])

  useEffect(() => {
    const createSnowflake = () => {
      return {
        id: Math.random(),
        x: Math.random() * 100,
        y: -10,
        size: Math.random() * 3 + 2,
        opacity: Math.random() * 0.5 + 0.3
      }
    }

    const intervalId = setInterval(() => {
      setSnowflakes(prevSnowflakes => [
        ...prevSnowflakes.filter(flake => flake.y < 110),
        createSnowflake()
      ])
    }, 200)

    return () => clearInterval(intervalId)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none">
      {snowflakes.map(flake => (
        <motion.div
          key={flake.id}
          className="absolute rounded-full bg-white"
          style={{
            width: flake.size,
            height: flake.size,
            opacity: flake.opacity,
            x: `${flake.x}vw`,
            y: `${flake.y}vh`
          }}
          animate={{ y: '110vh' }}
          transition={{
            duration: Math.random() * 5 + 5,
            ease: 'linear'
          }}
        />
      ))}
    </div>
  )
}

