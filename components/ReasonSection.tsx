'use client'
import { motion } from 'framer-motion'

export default function ReasonSection() {
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
            Why This Guide Works
          </h2>
          
          {/* Book showcase with red border */}
          <div className="relative max-w-2xl mx-auto">
            <div className="border-4 border-red-600 rounded-lg p-8 bg-white">
              <div className="relative h-96 flex items-center justify-center">
                <p className="text-gray-600 text-center">
                  [Bangkok Travel Guide Book Showcase - Physical book, digital version on tablet, and opened book spread]
                </p>
              </div>
            </div>
            
            {/* Speech bubble */}
            <div className="absolute -left-12 top-12 w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center">
              <div className="absolute -right-2 top-6 w-4 h-4 bg-gray-300 transform rotate-45"></div>
            </div>
          </div>
          
          {/* Additional content would go here based on reason2.png */}
          <div className="mt-12 text-center">
            <p className="text-gray-600 italic">
              [Additional reasons and benefits would be displayed here - see reason2.png for more content]
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}