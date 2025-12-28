'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function IntroduceSection() {
  return (
    <section className="bg-brand-cream py-16 px-4">
      <div className="container mx-auto max-w-6xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <p className="text-lg uppercase mb-4">INTRODUCING MY EBOOK</p>
          <h2 className="text-4xl md:text-6xl font-bold text-red-600">
            THE ULTIMATE<br />
            TOKYO ANIME GUIDE
          </h2>
        </motion.div>

        {/* Ebook mockup */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative mb-12 max-w-3xl mx-auto"
        >
          <img 
            src="/images/introduce-section/introduce.png" 
            alt="Ebook mockup with devices"
            className="w-full h-auto object-cover rounded-lg"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto space-y-6 text-lg"
        >
          <p>
            <strong>A no-BS, local-level ebook that shows you how to actually explore Tokyo&apos;s anime culture</strong><br />
            Not outdated blogs. Not a brochure. Not a bunch of recycled BS tips.
          </p>
          
          <p>
            This is a curated, street-level guide written by a local who lives in Tokyo, for fans who want real anime shops, cafés, and gatherings.<br />
            <strong className="italic">This is the guide I wish I had when I started exploring Akihabara</strong> and the one thousands of my followers have been asking for.
          </p>
        </motion.div>
      </div>
    </section>
  )
}