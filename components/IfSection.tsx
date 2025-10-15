'use client'
import { motion } from 'framer-motion'

export default function IfSection() {
  const points = [
    'You want real Experience, real Anime culture, and real fun',
    'You hate wasting time on tourist traps',
    'You like to explore Tokyo Anime World like a local, not just snap pics',
    'You want to know the hidden gems and recommendations',
    'You want to get high-quality anime merchandise',
    'You love discovering something new'
  ]

  return (
    <section className="py-16 px-4 bg-[#F5E6D3]">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-12">
            This guide is for you if...
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Points list */}
            <div className="space-y-4">
              {points.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3"
                >
                  <span className="text-[#5AC8D8] mt-1 flex-shrink-0 text-xl">▶</span>
                  <p className="text-lg text-gray-700">{point}</p>
                </motion.div>
              ))}
            </div>
            
            {/* Image placeholder */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative h-96 bg-gradient-to-br from-[#6AC5D6] to-[#F5A623] rounded-lg overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center p-8">
                  <p className="text-white text-center">
                    [Image of person reading Bangkok travel guide with excited expression]
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}