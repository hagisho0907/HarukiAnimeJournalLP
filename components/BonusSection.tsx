'use client'
import { motion } from 'framer-motion'

export default function BonusSection() {
  return (
    <section className="py-16 px-4 bg-[#F5E6D3]">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            PLUS: Get Access to This <span className="text-red-600">Exclusive Bonus!</span>
          </h2>
          
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-8">
              The Hidden Tokyo Food Gems Map
            </h3>
            
            {/* Map Image Placeholder */}
            <div className="relative max-w-xs mx-auto mb-8">
              <div className="bg-gray-200 rounded-lg shadow-lg p-8 h-64 flex items-center justify-center">
                <p className="text-gray-600">
                  Hidden Tokyo Food Gems Map Image Placeholder
                </p>
              </div>
              {/* Speech bubble */}
              <div className="absolute -left-12 top-8 w-12 h-12 bg-red-500 rounded-full flex items-center justify-center">
                <div className="absolute -right-2 top-4 w-4 h-4 bg-red-500 transform rotate-45"></div>
              </div>
            </div>
            
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
              Growing up in Tokyo, I&apos;ve eaten my way through the city and found both legendary spots and hidden gems. And trust me, I&apos;m not keeping them to myself.
            </p>
            
            <p className="text-lg mb-8">
              <strong>As part of this guide, you&apos;ll get full access to my personal Google Map collection featuring 160+ food spots across the city.</strong>
            </p>
            
            <div className="text-left max-w-xl mx-auto space-y-3 mb-12">
              <div className="flex items-start gap-3">
                <span className="text-green-600 flex-shrink-0 text-xl leading-relaxed">✓</span>
                <p className="text-gray-700">
                  Local ramen shops, long-established izakayas,anime-themed cafes, late-night eats, and more...
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-600 flex-shrink-0 text-xl leading-relaxed">✓</span>
                <p className="text-gray-700">
                  Updated regularly as I discover new favorites.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-600 flex-shrink-0 text-xl leading-relaxed">✓</span>
                <p className="text-gray-700">
                  Works directly in Google Maps. Just tap and go.
                </p>
              </div>
            </div>
            
            <p className="text-xl font-bold">
              You won&apos;t find this list in any guides, blogs, or TikTok feeds.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}