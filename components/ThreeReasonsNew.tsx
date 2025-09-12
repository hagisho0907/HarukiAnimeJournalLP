'use client'
import { motion } from 'framer-motion'
import WaveDivider from './WaveDivider'

export default function ThreeReasonsNew() {
  return (
    <>
      {/* Wave transition from red to cream */}
      <WaveDivider color="#ED1C24" />
      
      <section className="bg-brand-cream py-16 lg:py-24">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          {/* You'll be alright! */}
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-xl text-gray-700 mb-8"
          >
            You&apos;ll be <span className="text-brand-red font-bold">alright!</span>
          </motion.p>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-4"
          >
            <span className="text-6xl lg:text-7xl font-bold text-brand-red">3 Reasons</span>
            <br />
            <span className="text-3xl lg:text-4xl font-bold text-gray-800">Why This Guidebook Stands Out</span>
          </motion.h2>

          {/* Reason 1 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-16 mb-12"
          >
            {/* Reason Badge */}
            <div className="flex justify-center mb-8">
              <div className="bg-brand-red text-white rounded-full w-24 h-24 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-xs font-bold">REASON</div>
                  <div className="text-3xl font-bold">1</div>
                </div>
              </div>
            </div>

            <h3 className="text-4xl lg:text-5xl font-bold mb-8">
              <span className="text-gray-700">100+ Pieces of</span>{' '}
              <span className="text-brand-red">100% Reliable</span>{' '}
              <span className="text-gray-700">Information</span>
            </h3>

            {/* Key Features Box and Phone Mockups for Reason 1 */}
            <div className="flex flex-col lg:flex-row justify-center items-center mt-12 gap-12">
              {/* Key Features Box */}
              <div className="lg:w-1/2">
                <div className="bg-white rounded-full px-8 py-3 inline-block mb-6 border border-gray-400">
                  <span className="text-gray-700 font-medium">Key Features</span>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed text-left max-w-md">
                  Info online or even from ChatGPT can be outdated or wrong. This guide is written by an anime native who has lived in Tokyo for over 25 years and carefully selects only the latest and most accurate details.
                </p>
              </div>
              
              {/* Phone Mockups */}
              <div className="lg:w-1/2 relative">
                <div className="flex space-x-4">
                  <div className="bg-gray-300 rounded-lg w-48 h-96 shadow-xl flex items-center justify-center transform -rotate-3">
                    <p className="text-gray-600 text-center p-4">Ultimate Tokyo Anime Guide</p>
                  </div>
                  <div className="bg-gray-300 rounded-lg w-48 h-96 shadow-xl flex items-center justify-center transform rotate-3">
                    <p className="text-gray-600 text-center p-4">Tokyo Map with Locations</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Reason 2 */}
            <div className="mt-24">
              <div className="flex justify-center mb-8">
                <div className="bg-brand-red text-white rounded-full w-24 h-24 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-xs font-bold">REASON</div>
                    <div className="text-3xl font-bold">2</div>
                  </div>
                </div>
              </div>

              <h3 className="text-4xl lg:text-5xl font-bold mb-8">
                <span className="text-gray-700">Secret Spots From</span>{' '}
                <span className="text-brand-red">Real Otaku</span>
              </h3>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}