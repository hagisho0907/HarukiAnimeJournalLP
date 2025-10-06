'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function TestimonialsNew() {
  const testimonials = [
    {
      name: "Rob",
      location: "NYC",
      text: "Thanks to this guidebook, I found anime treasures you'd never come across in the US. It's literally like a treasure map drawn by locals in Japan.",
      avatar: "/images/testimonial/Rob.png"
    },
    {
      name: "Kaan",
      location: "Istanbul",
      text: "On my first trip to Japan I wasted 150 USD on a fake anime figure, but after getting this guidebook I can finally shop with confidence. Thanks!",
      avatar: "/images/testimonial/Kaan.png"
    },
    {
      name: "Alex",
      location: "London",
      text: "This guidebook helped me navigate Akihabara without getting lost. Thanks to the maps and shop lists, I scored limited-edition figures and doujinshi I never thought I'd find. It truly leveled up my otaku pilgrimage.",
      avatar: "/images/testimonial/Alex Johnson.png"
    },
    {
      name: "Mei", 
      location: "Singapore",
      text: "I loved the recommendations for themed cafés and female-oriented shops. I discovered places dedicated to my favorite BL series and met other fans from around the world. This guide made my Tokyo trip unforgettable!",
      avatar: "/images/testimonial/Mei Wong.png"
    }
  ]

  return (
    <section className="py-16 lg:py-24 bg-brand-cream">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl lg:text-5xl font-bold text-center text-gray-800 mb-16"
        >
          Testimonials
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center"
            >
              <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
                <Image
                  src={testimonial.avatar}
                  alt={`${testimonial.name} from ${testimonial.location}`}
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <h3 className="text-xl font-bold mb-2">{testimonial.name}, {testimonial.location}</h3>
              
              <div className="flex text-brand-yellow text-2xl mb-4">★★★★★</div>
              
              <p className="text-gray-700 leading-relaxed">
                {testimonial.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}