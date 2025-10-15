'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import BookConveyorCarousel from './BookConveyorCarousel'

export default function TopSection() {
  return (
    <section className="bg-brand-cream min-h-screen flex items-center py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="text-red-600">Avoid</span>{' '}
            <span className="text-black">the</span>{' '}
            <span className="text-red-600">Tourist Traps</span>
          </h1>
          <h2 className="text-2xl md:text-4xl font-bold mb-2">
            <span className="text-black">in</span>{' '}
            <span className="text-red-600">Japan</span>{' '}
            <span className="text-black">with this</span>
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold text-black">
            Anime guide book!
          </h3>
        </motion.div>

        {/* Book carousel */}
        <BookConveyorCarousel />

        {/* Description */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mb-12 max-w-3xl mx-auto"
        >
          <p className="text-lg md:text-xl text-gray-800">
            This isn&apos;t another copy-paste travel guide. It&apos;s a blueprint created by a Tokyo-based anime native for
            travelers who want the real otaku experience without spending hours researching. Skip the tourist traps,
            find the right shops, cafés, and events, and vibe through the city like you live here.
          </p>
        </motion.div>

        {/* Reviews */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col md:flex-row gap-6 justify-center"
        >
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full mr-4 overflow-hidden relative">
                <Image
                  src="/images/testimonial/Robert.PNG"
                  alt="Rob from NYC"
                  fill
                  className="object-cover object-center"
                  sizes="48px"
                />
              </div>
              <div>
                <div className="flex mb-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
                <p className="font-bold">Rob <span className="text-gray-500">NYC</span></p>
              </div>
            </div>
            <p className="text-gray-700">
              I found anime treasures you&apos;d never come across in the US
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full mr-4 overflow-hidden relative">
                <Image
                  src="/images/testimonial/Kaan.PNG"
                  alt="Kaan from Istanbul"
                  fill
                  className="object-cover object-center"
                  sizes="48px"
                />
              </div>
              <div>
                <div className="flex mb-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
                <p className="font-bold">Kaan <span className="text-gray-500">Istanbul</span></p>
              </div>
            </div>
            <p className="text-gray-700">
              A list of reliable shops that saved me the trouble of searching on my own
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}