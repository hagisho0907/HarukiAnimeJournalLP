'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

interface FaqSectionProps {
  id?: string
}

export default function FaqSection({ id }: FaqSectionProps = {}) {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const faqs = [
    {
      question: "Is this just a tourist guide?",
      answer: "Nope. This is the opposite. It's built for anime fans who want the real Tokyo anime world — shops, culture, events, and local vibes."
    },
    {
      question: "What format is the book in?",
      answer: "It's a digital PDF. Mobile-friendly, works offline, no logins or apps needed."
    },
    {
      question: "How current is the info?",
      answer: "I live in Tokyo. This is based on my actual life as an anime creator here, and I'll update it if something major changes."
    },
    {
      question: "Is this worth it?",
      answer: "If it saves you from one overpriced figure, one wasted day, or one missed experience... it&apos;s already paid for itself."
    }
  ]

  return (
    <section id={id} className="bg-brand-cream py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-red-600 mb-12">
            FAQs
          </h2>
        </motion.div>

        {/* FAQ Grid */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-inset"
              >
                <h3 className="text-gray-900 text-lg md:text-xl font-bold leading-tight pr-4">
                  {faq.question}
                </h3>
                <div className={`flex-shrink-0 transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`}>
                  <span className="text-red-600 text-xl">🔻</span>
                </div>
              </button>
              
              <AnimatePresence>
                {openFaq === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6">
                      <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}