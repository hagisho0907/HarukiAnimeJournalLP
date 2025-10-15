'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function TroubleSection() {
  return (
    <section className="bg-brand-cream py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-red-600 mb-6">
            I guess you&apos;re still planning your Tokyo trip like this
          </h2>
          <p className="text-lg md:text-xl text-gray-800 mb-8">
            You&apos;ve got 27 tabs open, saved Instagram Reels and Tiktok videos, watched 5 hours of YouTube vlogs queued up...
            and you&apos;re still thinking:
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="space-y-4 text-lg md:text-xl">
            <div className="flex items-start">
              <span className="text-blue-500 mr-3">▶</span>
              <p>Where do I even start?</p>
            </div>
            <div className="flex items-start">
              <span className="text-blue-500 mr-3">▶</span>
              <p>Am I just doing what every other tourist does?</p>
            </div>
            <div className="flex items-start">
              <span className="text-blue-500 mr-3">▶</span>
              <p>Is this stuff even legit or just influencer hype?</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <p className="text-lg md:text-xl italic">
            <span className="font-bold">If that&apos;s you...keep reading.</span> You just found
            what you didn&apos;t even know you needed.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="relative w-72 h-96 bg-gray-200 rounded-lg overflow-hidden">
            <p className="absolute inset-0 flex items-center justify-center text-gray-600">
              Stressed person image placeholder
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}