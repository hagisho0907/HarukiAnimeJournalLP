'use client'
import { motion } from 'framer-motion'

export default function ReviewSection() {
  const reviews = [
    {
      name: 'Robert',
      location: 'New York City',
      rating: 5,
      review: 'This was perfect for my solo trip! I was nervous about exploring Tokyo\'s anime spots alone, but this guide made everything feel easy. The shop guides and tips helped me avoid feeling like a lost tourist.',
      avatar: '[Avatar placeholder]'
    },
    {
      name: 'Ren',
      location: 'Los Angeles',
      rating: 5,
      review: 'I\'ve bought other anime guides and they were just lists of places. This feels like a real guidebook for fans who want more than just Instagram photo spots. Honestly... this should cost more.',
      avatar: '[Avatar placeholder]'
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
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            What Travelers Are Saying
          </h2>
          
          <div className="space-y-6">
            {reviews.map((review, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white border-4 border-red-600 rounded-lg p-6 md:p-8"
              >
                {/* Rating stars */}
                <div className="flex justify-center mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-2xl">★</span>
                  ))}
                </div>
                
                {/* Review text */}
                <p className="text-gray-700 text-center mb-6 text-lg leading-relaxed">
                  &quot;{review.review}&quot;
                </p>
                
                {/* Reviewer info */}
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-gray-300 rounded-full mb-2 flex items-center justify-center">
                    <span className="text-gray-600 text-sm">{review.avatar}</span>
                  </div>
                  <p className="font-bold text-lg">{review.name}</p>
                  <p className="text-gray-600">{review.location}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Additional reviews note */}
          <div className="mt-12 text-center">
            <p className="text-gray-600 italic">
              [Additional reviews would be displayed here - see review2.png and review3.png for more testimonials]
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}