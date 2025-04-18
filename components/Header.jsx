import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

const Header = () => {
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
      
      {/* Always side‑by‑side, but smaller on phones */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
        className="flex flex-row flex-wrap items-center justify-center gap-4 sm:gap-6"
      >
        <a
          href="https://www.linkedin.com/in/karanbir-chakraborty-a39471147/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={assets.profile_img}
            alt="karan"
            className="rounded-full w-20 sm:w-28 md:w-32 hover:scale-105 transition-transform duration-300"
          />
        </a>
        
        <a
          href="https://www.linkedin.com/in/harsh-lahoty-932849232/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={assets.profile_image2}
            alt="harsh"
            className="rounded-full w-20 sm:w-28 md:w-32 hover:scale-105 transition-transform duration-300"
          />
        </a>
        
        <a
          href="https://www.linkedin.com/in/debanjanchowdhury/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={assets.profile_image3}
            alt="debanjan"
            className="rounded-full w-20 sm:w-28 md:w-32 hover:scale-105 transition-transform duration-300"
          />
        </a>
      </motion.div>

      {/* Greeting */}
      <motion.h3
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo"
      >
        Hi! We are Karanbir, Harsh Lahoty and Debanjan.
        <Image src={assets.hand_icon} alt="waving hand" className="w-6" />
      </motion.h3>

      {/* Headline */}
      <motion.h1
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo"
      >
        Full Stack Developer based in India.
      </motion.h1>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="max-w-2xl mx-auto font-Ovo"
      >
        We are fullstack developers from Guwahati, India with 3 years of experience and built multiple projects.
      </motion.p>

      {/* Contact button */}
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          href="#contact"
          className="px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 dark:bg-transparent"
        >
          Contact me
          <Image src={assets.right_arrow_white} alt="contact arrow" className="w-4" />
        </motion.a>
      </div>
    </div>
  )
}

export default Header
