'use client'
import { motion } from 'framer-motion'

export default function ReviewSection() {
  const reviews = [
    {
      name: 'Robert',
      location: 'New York City',
      rating: 5,
      review: 'This was perfect for my solo trip! I was nervous about exploring Tokyo&apos;s anime spots alone, but this guide made everything feel easy. The shop guides and tips helped me avoid feeling like a lost tourist.',
      avatar: 'R'
    },
    {
      name: 'Ren',
      location: 'Los Angeles',
      rating: 5,
      review: 'I&apos;ve bought other anime guides and they were just lists of places. This feels like a real guidebook for fans who want more than just Instagram photo spots. Honestly... this should cost more.',
      avatar: 'R'
    },
    {
      name: 'Kaan',
      location: 'Istanbul',
      rating: 5,
      review: 'Haruki explains things no other guide does. How to avoid overpriced tourist traps, where real local otaku actually go, and the smartest way to explore each area. It&apos;s not flashy, it&apos;s just real.',
      avatar: 'K'
    },
    {
      name: 'Freddy.Elen',
      location: 'Newport Beach',
      rating: 5,
      review: 'I wish I had this earlier! I wasted hours searching through TikTok, YouTube vlogs and blogs. This guide would&apos;ve solved everything instantly. It puts everything in one place and actually feels made for anime fans.',
      avatar: 'F'
    },
    {
      name: 'Vincent',
      location: 'Italy',
      rating: 5,
      review: 'I didn&apos;t just want to shop, I wanted to experience real otaku culture. This guide gave my trip purpose. With Haruki&apos;s insights, I discovered hidden spots and shops that perfectly matched my vibe.',
      avatar: 'V'
    },
    {
      name: 'Anonymous',
      location: 'Verified Buyer',
      rating: 5,
      review: 'I&apos;m not a seasoned traveler and Tokyo felt overwhelming at first. But this guide broke everything down in a chill, easy way. I felt way more prepared and excited. Zero regrets buying this!',
      avatar: '?'
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
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-8">
            What Travelers Are Saying
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg border-4 border-red-600 p-6"
            >
              {/* Rating stars */}
              <div className="flex justify-center mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-2xl">★</span>
                ))}
              </div>
              
              {/* Review text */}
              <p className="text-gray-700 text-center mb-6 text-base leading-relaxed">
                &quot;{review.review}&quot;
              </p>
              
              {/* Reviewer info */}
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-gray-300 rounded-full mb-2 flex items-center justify-center">
                  <span className="text-gray-600 text-xl font-bold">{review.avatar}</span>
                </div>
                <p className="font-bold text-lg text-black">{review.name}</p>
                <p className="text-gray-600">{review.location}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Guide showcase at bottom */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="bg-gradient-to-br from-red-400 to-orange-300 rounded-lg p-8 shadow-xl max-w-xs">
              <div className="bg-white rounded p-4 text-center">
                <h3 className="text-xl font-bold text-red-600 mb-2">Tokyo</h3>
                <h4 className="text-lg font-bold text-orange-500">Anime Guide</h4>
                <p className="text-xs text-gray-600 mt-2">Ultimate Anime Guide</p>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-12 h-8 bg-white rounded shadow-lg transform rotate-12"></div>
            <div className="absolute -bottom-2 -left-2 w-8 h-8 bg-white rounded shadow-lg transform -rotate-12"></div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}