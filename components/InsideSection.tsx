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
              className="flex flex-col md:flex-row items-center gap-8"
            >
              <div className="bg-brand-red text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold flex-shrink-0">
                {feature.number}
              </div>
              
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-bold mb-2">
                  <span className="text-brand-red">{feature.title.split(' ')[0]}</span>{' '}
                  {feature.title.split(' ').slice(1).join(' ')}
                </h3>
                <p className="text-xl text-gray-700">{feature.subtitle}</p>
              </div>

              <div className="flex-1">
                <div className="bg-gray-100 rounded-lg p-4 h-40 flex items-center justify-center">
                  <div className="grid grid-cols-3 gap-2 w-full max-w-xs">
                    {[...Array(6)].map((_, i) => (
                      <div key={i} className="bg-gray-300 rounded h-12"></div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 bg-gray-100 rounded-lg p-8"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-8">
            What this <span className="text-gray-500">guidebook</span><br />
            <span className="text-brand-red">Gives</span> you
          </h3>

          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="bg-brand-red text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold flex-shrink-0">
                1
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">100+ spots with the latest and most accurate info</h4>
                <div className="bg-white rounded-lg p-4 h-32"></div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-brand-red text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold flex-shrink-0">
                2
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">Interactive maps and navigation</h4>
                <div className="bg-white rounded-lg p-4 h-32"></div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-brand-red text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold flex-shrink-0">
                3
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">Exclusive insider tips and explanations</h4>
                <div className="bg-white rounded-lg p-4 h-32 flex items-center justify-center text-gray-500">
                  説明説明説明説明説明説明説明説明<br />
                  説明説明説明説明説明説明説明説明<br />
                  説明説明
                </div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center mt-12"
          >
            <p className="text-3xl font-bold mb-6">
              BUY NOW SAVE <span className="text-brand-red">$30</span>
            </p>
            <motion.a
              href="https://harukianimejournal.myshopify.com/products/the-ultimate-tokyo-anime-guide-1"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-brand-yellow text-black font-bold py-4 px-12 rounded-lg text-xl hover:bg-yellow-400 transition-all duration-200 shadow-lg inline-block"
            >
              Get It Now
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}