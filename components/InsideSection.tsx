'use client'
import { motion } from 'framer-motion'

export default function InsideSection() {
  const features = [
    {
      number: 1,
      title: "100+ Trusted spots",
      subtitle: "from real Japanese otaku",
      description: "Carefully curated locations loved by local anime fans",
      icon: "📍"
    },
    {
      number: 2,
      title: "Never get lost!",
      subtitle: "A Google Maps Link List",
      description: "Direct links to every location for easy navigation",
      icon: "🗺️"
    },
    {
      number: 3,
      title: "No tour guide needed!",
      subtitle: "Ready to use Tour Courses",
      description: "Pre-planned routes for the perfect anime adventure",
      icon: "🚶"
    }
  ]

  return (
    <section className="bg-brand-cream py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold text-center mb-16"
        >
          Let&apos;s See<br />
          What&apos;s Inside...
        </motion.h2>

        <div className="space-y-12">
          {features.map((feature, index) => (
            <motion.div
              key={feature.number}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="flex items-center gap-8"
            >
              <div className="bg-brand-red text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold flex-shrink-0">
                {feature.number}
              </div>
              
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-bold mb-2">
                  <span className="text-brand-red">{feature.title.split(' ')[0]}</span>{' '}
                  {feature.title.split(' ').slice(1).join(' ')}
                </h3>
                <p className="text-xl text-gray-700">{feature.subtitle}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}