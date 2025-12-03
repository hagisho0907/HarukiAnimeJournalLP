'use client'
import { motion } from 'framer-motion'

export default function TrustSection() {
  const credentials = [
    {
      title: 'AmiAmi',
      description: 'Collaborated with one of the world\'s largest anime shops'
    },
    {
      title: 'Anime Expo (USA)',
      description: 'Covered and reported from the largest overseas anime convention'
    },
    {
      title: 'Takashii from Japan',
      description: 'Featured on his YouTube channel (2M+ subscribers)'
    },
    {
      title: 'Association of Japanese Animations (AJA)',
      description: 'Participated in the Anime Industry Report 2024 launch seminar'
    },
    {
      title: 'AnimeJapan 2025',
      description: 'Covered and reported on major anime industry companies'
    },
    {
      title: 'Comic Market Winter 2024',
      description: 'Attended as press, covering and reporting from the event'
    }
  ]

  return (
    <section className="py-16 px-4 bg-[#F5E6D3]">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-red-600 text-center mb-8">
            Why Trust Haruki and this book?
          </h2>
          
          <div className="text-lg text-gray-700 mb-12 space-y-4">
            <p>
              Haruki is an anime creator based in Tokyo who shares Japan&apos;s anime culture with the world. He has 200K+ followers across social platforms and within the first six months of posting, his videos have already surpassed 100M views. People don&apos;t just watch him; they ask where to shop, what to see, and how to experience anime in Japan like a local.
            </p>
          </div>
          
          <h3 className="text-2xl font-bold mb-8">Featured and Trusted By:</h3>
          
          <div className="space-y-4 mb-12">
            {credentials.map((cred, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-3"
              >
                <span className="text-red-500 mt-1 flex-shrink-0 text-2xl">🏆</span>
                <div>
                  <p className="font-bold">{cred.title}</p>
                  <p className="text-gray-600">— {cred.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Photo collage */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="/images/trust-section/trust.JPG" 
                alt="Photo collage of Haruki at various anime events and with industry professionals"
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}