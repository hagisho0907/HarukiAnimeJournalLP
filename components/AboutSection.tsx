'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function AboutSection() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 items-center"
        >
          {/* Text Content */}
          <div className="order-2 md:order-1">
            <h2 className="text-2xl md:text-3xl font-bold text-red-600 mb-4">
              Hey, I&apos;m Haruki! An Anime Lover Living in Tokyo
            </h2>
            
            <div className="space-y-4 text-gray-700">
              <p>
                I was born and raised in Tokyo,Nakano and grew up with anime every single day.
              </p>
              
              <p>
                But I realized something. Because of the language barrier, the cost of Japanese anime fan things has reached the world.
              </p>
              
              <p>
                So I picked up a camera. I started making videos and interviewing over 300 Japanese otaku and even people from anime companies in Japan to share the real story.
              </p>
              
              <p>
                Within six months those videos passed 100 million views across social.
              </p>
              
              <p>
                Then in 2025 I went to Anime Expo in LA. You guys energy blew me away. It was INSANE!
              </p>
              
              <p>
                That&apos;s when I knew. I want to connect Japan and the world through anime!
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 md:order-2">
            <div className="relative h-96 md:h-[500px] bg-gray-200 rounded-lg overflow-hidden">
              <p className="absolute inset-0 flex items-center justify-center text-gray-600">
                Haruki in anime store image placeholder
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}