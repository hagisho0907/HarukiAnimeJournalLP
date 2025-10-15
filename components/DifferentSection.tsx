'use client'
import { motion } from 'framer-motion'

export default function DifferentSection() {
  return (
    <section className="py-16 px-4 bg-[#F5E6D3]">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            What makes this different?
          </h2>
          
          <div className="mb-8">
            <p className="text-lg mb-4">I've personally:</p>
            
            <ul className="space-y-3 text-gray-700 ml-8 list-disc">
              <li>Seen over 200 anime spots with my own eyes</li>
              <li>Explored every neighborhood in Tokyo</li>
              <li>Built friendships with locals who've shown me their favorite spots</li>
              <li>Researched what anime tourists really want by talking directly with visitors who came to Japan</li>
              <li>Helped hundreds of followers plan their perfect Tokyo Anime trip</li>
            </ul>
          </div>
          
          <p className="text-lg font-semibold italic mb-12">
            Now I've compiled everything into one definitive guide.
          </p>
          
          {/* Book showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative max-w-md mx-auto"
          >
            <div className="bg-[#6AC5D6] rounded-lg p-8 shadow-lg">
              <div className="bg-white rounded-lg p-4 h-64 flex items-center justify-center">
                <p className="text-gray-600 text-center">
                  [Bangkok Travel Guide Book and Digital Version Display]
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}