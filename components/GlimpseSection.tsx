'use client'
import { motion } from 'framer-motion'

export default function GlimpseSection() {
  const samplePages = [
    {
      title: "HOW TO USE",
      subtitle: "HOW TO USE THE MAPS IN THIS GUIDEBOOK",
      color: "bg-orange-500",
      description: "Sample page preview"
    },
    {
      title: "AKIHABARA", 
      subtitle: "AKIHABARA RADIO KAIKAN",
      color: "bg-green-500",
      description: "Sample page preview"
    },
    {
      title: "ACCESS",
      subtitle: "AREAS WITH EASY ACCESS TO AKIHABARA (EAST TOKYO)",
      color: "bg-orange-400",
      description: "Sample page preview"
    },
    {
      title: "TIPS ON",
      subtitle: "MANDARAKE, THE BACKBONE OF HARAJUKU ANIME SCENE",
      color: "bg-cyan-400",
      description: "Sample page preview"
    }
  ]

  return (
    <section className="bg-brand-cream py-16 lg:py-24">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Get a Glimpse!
          </h2>
          <p className="text-gray-600 text-lg">
            Discover what our COMPLETE GUIDES have to offer! Check out sample pages from our guidebooks.
          </p>
        </motion.div>

        {/* Sample Pages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {samplePages.map((page, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className={`${page.color} h-8 flex items-center justify-center`}>
                <span className="text-white text-xs font-bold">{page.title}</span>
              </div>
              <div className="p-4 h-64">
                <h3 className="font-bold text-sm mb-2 text-gray-800">
                  {page.subtitle}
                </h3>
                <div className="bg-gray-200 rounded h-40 flex items-center justify-center">
                  <p className="text-gray-500 text-xs text-center">{page.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}