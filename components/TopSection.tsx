'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function TopSection() {
  return (
    <section className="bg-brand-cream min-h-screen relative overflow-hidden py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-brand-red">Avoid</span> the <span className="text-brand-red">Tourist Traps</span>
            <br />
            in <span className="text-brand-red">Japan</span> with this
            <br />
            <span className="text-black">Anime guide book!</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative mb-16"
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-white rounded-lg shadow-lg p-2">
                <Image src="/images/tokyo-train-map.jpg" alt="Tokyo Train Map" width={200} height={150} className="w-full h-auto" />
              </div>
              <div className="bg-white rounded-lg shadow-lg p-2">
                <Image src="/images/guide-book-cover.jpg" alt="Tokyo Anime Guide" width={200} height={150} className="w-full h-auto" />
              </div>
              <div className="bg-white rounded-lg shadow-lg p-2">
                <Image src="/images/akiba-station.jpg" alt="Akihabara Station Guide" width={200} height={150} className="w-full h-auto" />
              </div>
              <div className="bg-white rounded-lg shadow-lg p-2">
                <Image src="/images/anime-shop.jpg" alt="Anime Shop Guide" width={200} height={150} className="w-full h-auto" />
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-center gap-12"
        >
          <div className="flex flex-col items-center text-center">
            <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
              <Image src="/images/rob-avatar.jpg" alt="Rob from NYC" width={128} height={128} className="w-full h-full object-cover" />
            </div>
            <h3 className="text-xl font-bold mb-2">Rob, NYC</h3>
            <div className="flex text-brand-yellow text-2xl mb-2">★★★★★</div>
            <p className="text-gray-700 max-w-xs">
              Thanks to this guidebook, I found anime treasures you&apos;d never come across in the US. 
              It&apos;s literally like a treasure map drawn by locals in Japan.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
              <Image src="/images/kaan-avatar.jpg" alt="Kaan from Istanbul" width={128} height={128} className="w-full h-full object-cover" />
            </div>
            <h3 className="text-xl font-bold mb-2">Kaan, Istanbul</h3>
            <div className="flex text-brand-yellow text-2xl mb-2">★★★★★</div>
            <p className="text-gray-700 max-w-xs">
              On my first trip to Japan I wasted 150 USD on a fake anime figure, but after getting 
              this guidebook I can finally shop with confidence. Thanks!
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}