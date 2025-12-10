'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function QuestionSection() {
  return (
    <section className="bg-brand-cream py-16 px-4">
      <div className="container mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-8 text-red-500">
            I guess you're still planning your Tokyo trip like this
          </h2>
          
          <p className="text-lg md:text-xl text-gray-700 mb-8">
            You've got 27 tabs open, saved Instagram Reels and Tiktok videos, watched 5 hours of YouTube vlogs queued up... and you're still thinking:
          </p>
          
          <div className="space-y-4 mb-8">
            <div className="flex items-center text-left text-lg md:text-xl">
              <span className="text-red-500 mr-4">▶</span>
              <span>Where do I even start?</span>
            </div>
            <div className="flex items-center text-left text-lg md:text-xl">
              <span className="text-red-500 mr-4">▶</span>
              <span>Am I just doing what every other tourist does?</span>
            </div>
            <div className="flex items-center text-left text-lg md:text-xl">
              <span className="text-red-500 mr-4">▶</span>
              <span>Is this stuff even legit or just influencer hype?</span>
            </div>
          </div>
          
          <p className="text-2xl md:text-3xl italic font-bold text-black">
            If that's you...keep reading. You just found what you didn't even know you needed.
          </p>
        </motion.div>
        
        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 max-w-3xl mx-auto"
        >
          <Image
            src="/images/question-section/question.png"
            alt="Tokyo planning illustration"
            width={800}
            height={600}
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  )
}