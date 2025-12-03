'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function QuestionSection() {
  const questions = [
    "Where's the closet anime store?",
    "Can you give me anime spots?",
    "I'm going to NYC next week. I already visited 13 TIMES.",
    "But I still get asked if there's hidden spots"
  ]

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
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            And every single day, my DMs blow up with the same questions like:
          </h2>
        </motion.div>

        {/* Phone mockup with messages */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative mb-8 max-w-2xl mx-auto"
        >
          <img 
            src="/images/question-section/question.png" 
            alt="Phone mockup with DM messages"
            className="w-full h-auto object-cover rounded-lg"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-2xl md:text-3xl italic font-bold">
            So... I did!
          </p>
        </motion.div>
      </div>
    </section>
  )
}