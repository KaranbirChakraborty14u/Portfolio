import React from 'react'
import { motion } from 'framer-motion'

const DevAnimation = () => {
  const floatingIcons = ['💾', '💻', '🖥️', '☁️', '⚙️']

  return (
    <div className="relative w-72 h-72 flex items-center justify-center rounded-3xl bg-gradient-to-br from-indigo-100 to-blue-300 dark:from-gray-800 dark:to-gray-900 overflow-hidden">
      {/* Developer */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="text-[90px] z-20"
      >
        🧑‍💻
      </motion.div>

      {/* Floating Icons */}
      {floatingIcons.map((icon, i) => (
        <motion.div
          key={i}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: [-50, 50, -50], opacity: 1 }}
          transition={{
            duration: 3 + i * 0.3,
            repeat: Infinity,
            repeatType: 'reverse',
            delay: i * 0.4
          }}
          className="text-3xl absolute"
          style={{
            top: `${Math.random() * 60 + 10}%`,
            left: `${Math.random() * 60 + 10}%`
          }}
        >
          {icon}
        </motion.div>
      ))}
    </div>
  )
}

export default DevAnimation
