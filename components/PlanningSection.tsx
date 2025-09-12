'use client'
import { motion } from 'framer-motion'

export default function PlanningSection() {
  return (
    <section className="py-16 lg:py-24 bg-brand-cream">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              Planning Your Otaku<br />
              Pilgrimage to Japan?
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              This guidebook is here to level up your journey,<br />
              with easy to follow maps, insider tips, and must<br />
              visit anime, manga, and game hotspots across<br />
              Tokyo. From Akihabara&apos;s electric streets to<br />
              hidden gem cafés and shops, we&apos;ll guide you<br />
              through the city&apos;s geek culture without getting<br />
              lost in the maze of trains and endless options.
            </p>
          </motion.div>

          {/* Photo Collage */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gray-200 rounded-lg overflow-hidden shadow-xl"
          >
            <div className="aspect-square relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-gray-500 text-center p-4">300+ Local Otaku Photos Collage</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}