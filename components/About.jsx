import { infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "framer-motion"
import DevAnimation from './DevAnimation'

const About = ({ isDarkMode }) => {
  return (
    <motion.div id="about" className="w-full px-[10%] py-16 scroll-mt-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h3
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-2 text-lg font-Ovo">Introduction
      </motion.h3>

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-5xl font-Ovo">About Us
      </motion.h2>

      {/* Layout Section */}
      <div className="flex flex-col lg:flex-row items-center gap-12 mt-16">

        {/* Animation Left */}
        <DevAnimation />

        {/* Text Right */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex-1"
        >
          <p className="mb-8 text-lg leading-relaxed font-Ovo">
            We are experienced fullstack developers with over a decade of professional expertise in the field.
            Throughout our career, we've collaborated with prestigious organizations, contributing to their success and digital growth.
          </p>

          {/* Info Boxes */}
          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8"
          >
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <motion.li
                whileHover={{ scale: 1.05 }}
                className="border border-gray-400 rounded-xl p-5 cursor-pointer hover:bg-lightHover dark:border-white dark:hover:bg-darkHover/40 duration-300"
                key={index}
              >
                <Image src={isDarkMode ? iconDark : icon} alt={title} className="w-7 mb-4" />
                <h3 className="font-semibold text-gray-700 dark:text-white">{title}</h3>
                <p className="text-sm text-gray-600 dark:text-white/80">{description}</p>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default About
