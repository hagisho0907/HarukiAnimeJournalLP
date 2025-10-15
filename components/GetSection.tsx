'use client'
import { motion } from 'framer-motion'

export default function GetSection() {
  return (
    <section className="py-16 px-4 bg-[#F5E6D3]">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white border-4 border-red-600 rounded-lg p-8 md:p-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-8">
            Get ALL of this...
          </h2>
          
          <p className="text-lg text-gray-700 mb-8">
            Everything you need to explore, understand, and experience Tokyo's anime world like a local, from hidden gems and insider tips to shops, hotels, and ready-to-go itineraries.
          </p>
          
          <ul className="space-y-3 text-gray-700 mb-8">
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>ebook with 162+ pages of everything to know about Tokyo anime spots</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Insider tips only locals know</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Itineraries (one for each of the 5 must-visit anime areas)</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Recommended hotel areas for easy access to major anime districts</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Offline PDF — use it anywhere, no apps needed</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Curated by an anime fan who actually lives here</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>BONUS: Hidden Tokyo Food Spots Map</span>
            </li>
          </ul>
          
          <div className="text-center pt-8 border-t border-gray-200">
            <p className="text-xl font-bold mb-4">
              Total Value: $75
            </p>
            
            <p className="text-4xl font-bold text-red-600">
              Only $29.95 today!
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}