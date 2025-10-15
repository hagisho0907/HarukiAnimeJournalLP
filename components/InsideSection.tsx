'use client'
import { motion } from 'framer-motion'

export default function InsideSection() {
  return (
    <section className="py-16 px-4 bg-[#F5E6D3]">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-red-600 mb-12">
            What&apos;s Inside
          </h2>
          
          <div className="space-y-6 text-gray-800 text-lg mb-8">
            <p>
              This isn&apos;t some generic PDF with &quot;Top 10 Anime Shops in Tokyo.&quot;
            </p>
            
            <p>
              This is deep, curated, and built to make you feel like you already live here.
            </p>
            
            <p className="font-bold text-xl">
              Here&apos;s everything you will get inside:
            </p>
          </div>

          {/* Placeholder for content cards/items that would be shown in inside2-5.png */}
          <div className="mt-12 bg-white/50 rounded-lg p-8">
            <p className="text-gray-600 italic">
              [Inside content items would be displayed here - see inside2.png to inside5.png for detailed content]
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}