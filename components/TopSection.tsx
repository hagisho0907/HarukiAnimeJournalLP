'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import ConveyorCarousel from './ConveyorCarousel'

export default function TopSection() {
  const carouselImages = [
    { src: '/images/top/1.PNG', alt: 'Tokyo Anime Guide Page 1' },
    { src: '/images/top/2.PNG', alt: 'Tokyo Anime Guide Page 2' },
    { src: '/images/top/3.PNG', alt: 'Tokyo Anime Guide Page 3' },
    { src: '/images/top/4.PNG', alt: 'Tokyo Anime Guide Page 4' },
    { src: '/images/top/5.PNG', alt: 'Tokyo Anime Guide Page 5' },
    { src: '/images/top/6.PNG', alt: 'Tokyo Anime Guide Page 6' },
    { src: '/images/top/7.PNG', alt: 'Tokyo Anime Guide Page 7' }
  ]

  return (
    <section className="bg-brand-cream relative overflow-hidden py-16">
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
      </div>

      {/* Conveyor Carousel */}
      <ConveyorCarousel
        images={carouselImages}
        sectionId="top-carousel"
        title=""
        description=""
        backgroundColor="bg-transparent"
        itemWidth={{ mobile: 250, desktop: 300 }}
        animationDuration={20}
      />

      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-center gap-12"
        >
          <div className="flex flex-col items-center text-center">
            <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
              <Image src="/images/top/Rob.png" alt="Rob from NYC" width={128} height={128} className="w-full h-full object-cover" />
            </div>
            <h3 className="text-xl font-bold mb-2">Rob, NYC</h3>
            <div className="flex text-brand-yellow text-2xl mb-2">★★★★★</div>
            <p className="text-gray-700 max-w-xs">
              Thanks to this guidebook, I found anime treasures you'd never come across in the US. 
              It's literally like a treasure map drawn by locals in Japan.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
              <Image src="/images/top/Kaan.png" alt="Kaan from Istanbul" width={128} height={128} className="w-full h-full object-cover" />
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