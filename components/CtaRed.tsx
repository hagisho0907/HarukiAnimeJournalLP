'use client'
import { motion } from 'framer-motion'
import WaveDivider from './WaveDivider'
import { trackEvent } from '../utils/trackEvent'

export default function CtaRed() {
  return (
    <>
      {/* Inverted Wave transition from cream to red */}
      <div className="bg-brand-cream">
        <svg
          className="w-full h-20"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V120H0Z"
            fill="#ED1C24"
          />
        </svg>
      </div>
      
      <section className="bg-brand-red py-16 text-center text-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-2xl lg:text-3xl mb-8"
          >
            <span className="text-brand-yellow font-bold">Unlock the secrets of Japan&apos;s otaku culture</span>{' '}
            and start planning<br />
            your ultimate anime, manga, and game pilgrimage.
          </motion.h2>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => trackEvent('InitiateCheckout', { value: 29, currency: 'USD' })}
            className="bg-brand-yellow text-black font-bold py-4 px-12 rounded-lg text-xl hover:bg-yellow-400 transition-all duration-200 shadow-lg"
          >
            Get It Now
          </motion.button>
        </div>
      </section>
    </>
  )
}