'use client'
import { motion } from 'framer-motion'

export default function TroublesAndReasonSection() {
  return (
    <section className="bg-brand-cream py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-6xl font-bold text-center mb-8 text-gray-800">
            You might run into<br />
            some <span className="text-brand-red">Trouble</span>, like...
          </h2>
          
          <div className="space-y-6 text-lg md:text-xl">
            <div className="flex items-start">
              <span className="text-2xl mr-4">•</span>
              <p>
                Getting stuck in <span className="text-brand-red font-bold">Cheap tourist-trap</span><br />
                shops on your Japan trip
              </p>
            </div>
            
            <div className="flex items-start">
              <span className="text-2xl mr-4">•</span>
              <p>
                Overpaying for tours that feel<br />
                <span className="text-brand-red font-bold">Generic</span> and <span className="text-brand-red font-bold">Boring</span>
              </p>
            </div>
            
            <div className="flex items-start">
              <span className="text-2xl mr-4">•</span>
              <p>
                Not knowing which shops real<br />
                Japanese anime fans <span className="text-brand-red font-bold">Actually Trust</span>
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h2 className="text-3xl md:text-6xl font-bold text-center mb-8 text-gray-800">
            Why this guidebook<br />
            <span className="text-brand-red">Can Solve</span> your problems
          </h2>
          
          <div className="space-y-6 text-lg md:text-xl">
            <div className="flex items-start">
              <span className="text-2xl mr-4">•</span>
              <p>
                <span className="text-brand-red font-bold">162</span> pages of <span className="text-brand-red font-bold">Trusted Info</span><br />
                from 25 years living in Japan
              </p>
            </div>
            
            <div className="flex items-start">
              <span className="text-2xl mr-4">•</span>
              <p>
                Packed with <span className="text-brand-red font-bold">Hidden gems</span> from<br />
                interviews with 300+ Japanese otaku
              </p>
            </div>
            
            <div className="flex items-start">
              <span className="text-2xl mr-4">•</span>
              <p>
                <span className="text-brand-red font-bold">Removes</span> the <span className="text-brand-red font-bold">Language barrier</span><br />
                with a Japanese author fluent in English
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}