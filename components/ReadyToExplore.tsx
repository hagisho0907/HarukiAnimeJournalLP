'use client'
import { motion } from 'framer-motion'

export default function ReadyToExplore() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 bg-gray-400">
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-gray-300">Tokyo Shibuya Crossing Background Image</p>
        </div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl lg:text-6xl font-bold text-white mb-8"
        >
          Ready to Explore<br />
          Japan like a Local?
        </motion.h2>
      </div>
    </section>
  )
}