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
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left side - Guide showcase */}
            <div className="flex justify-center">
              <div className="relative max-w-sm">
                <img 
                  src="/images/reason-section/reason.png" 
                  alt="Tokyo Anime Guide showcase"
                  className="w-full h-auto object-cover rounded-lg"
                />
              </div>
            </div>

            {/* Right side - Reasons grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {reasons.map((reason, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-3xl mb-3">{reason.icon}</div>
                  <h3 className="text-red-600 font-bold text-lg mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-sm">
                    {reason.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}