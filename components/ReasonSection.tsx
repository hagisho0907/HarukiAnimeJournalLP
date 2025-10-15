'use client'
import { motion } from 'framer-motion'

export default function ReasonSection() {
  const reasons = [
    {
      icon: "📥",
      title: "Curated, not crowdsourced",
      description: "I&apos;ve actually been to these places. I live here. I don&apos;t recommend anything I wouldn&apos;t take my friends to."
    },
    {
      icon: "📱",
      title: "Mobile-first, travel-friendly",
      description: "Download the ebook and keep it with you. Offline, no app needed. Use it on your flight in."
    },
    {
      icon: "🗺️",
      title: "Easy Access with Google Maps",
      description: "All the spots I introduce are linked directly to Google Maps, so you can access them easily without stress."
    },
    {
      icon: "🎬",
      title: "Behind-the-scenes access",
      description: "The stuff I don&apos;t post on social? The lowkey gems? Yeah, they&apos;re here. This is where they live. No filters, no filler."
    }
  ]

  return (
    <section className="py-16 px-4 bg-[#F5E6D3]">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-12">
            Why This Guide Works
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-lg border-4 border-red-500 p-6 md:p-8"
        >
          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Left side - Guide showcase */}
            <div>
              {/* Speech bubble */}
              <div className="relative mb-6">
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-gray-200 rounded-full border-2"></div>
              </div>
              
              {/* Guide mockup placeholder */}
              <div className="relative">
                <div className="bg-gradient-to-br from-red-400 to-orange-300 rounded-lg p-8 mb-4 shadow-xl">
                  <div className="bg-white rounded p-4 text-center">
                    <h3 className="text-2xl font-bold text-red-600 mb-2">Tokyo</h3>
                    <h4 className="text-xl font-bold text-orange-500">Anime Guide</h4>
                    <p className="text-sm text-gray-600 mt-4">Everything you need to explore Tokyo&apos;s anime culture</p>
                  </div>
                </div>
                
                {/* Physical book mockup */}
                <div className="relative -mt-8 ml-8">
                  <div className="bg-white rounded-lg shadow-lg p-4 transform rotate-6">
                    <div className="w-32 h-20 bg-gradient-to-br from-red-400 to-orange-300 rounded"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Reasons list */}
            <div className="space-y-6">
              {reasons.map((reason, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4"
                >
                  <div className="text-3xl">{reason.icon}</div>
                  <div>
                    <h3 className="text-red-600 font-bold text-lg mb-2">
                      {reason.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}