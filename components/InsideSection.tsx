'use client'
import { motion } from 'framer-motion'

export default function InsideSection() {
  const sections = [
    {
      number: 1,
      title: "Hello Tokyo as an Anime Fan",
      items: [
        "Haruki&apos;s Story",
        "5 must-visit areas every anime fan should explore",
        "Reasons anime fans love Tokyo",
        "Everything you need to know before traveling to Tokyo"
      ],
      details: [
        "• Greetings",
        "• Why these 5 areas are special",
        "  → Akihabara",
        "  → Nakano",
        "  → Ikebukuro",
        "  → Shibuya & Harajuku",
        "  → Across Tokyo",
        "• 8 Recommended Areas for Hotel Booking"
      ]
    },
    {
      number: 2,
      title: "Hidden Gems of Tokyo Anime Places",
      items: [
        "Insider info gathered from interviews with over 300 Japanese otaku",
        "100+ info About Tokyo Anime shops, Experience",
        "Know exactly which shops carry the type of anime goods you&apos;re looking for"
      ],
      details: [
        "• Must-visit spots every tourist checks out",
        "• Special places anime fans should not miss",
        "• Hidden gems only local otaku know about",
        "• 33 detailed spots in Akihabara",
        "• 23 detailed spots in Nakano",
        "• 23 detailed spots in Ikebukuro",
        "• 18 detailed spots in Shibuya & Harajuku"
      ]
    },
    {
      number: 3,
      title: "How to more easy Access in to Tokyo Anime World",
      items: [
        "Haruki&apos;s completely original tour courses",
        "Akihabara Exclusive Course",
        "Nakano Insider Course",
        "Ikebukuro Fan-Favorite Course",
        "Shibuya & Harajuku Highlights Course",
        "Across Tokyo Ultimate Course"
      ],
      details: [
        "• Quick and easy 2–3 hour courses",
        "• Optimized shop-hopping with no wasted time",
        "• Includes travel times between spots",
        "• Recommended nearby food spots",
        "• Direct links to each detailed shop page"
      ]
    },
    {
      number: 4,
      title: "Local Knowledge Packed TIPS",
      items: [
        "Useful insights you can only get from someone living in Japan",
        "Information on weather, best times to visit, things to watch out for, history, and more",
        "Here are some examples of the tips included:"
      ],
      details: [
        "• Beware of Tourist Pricing on Figures",
        "• What is Akihabara&apos;s Pedestrian Paradise?",
        "• Mandarake, the Backbone of Nakano&apos;s Anime Scene",
        "• What is Nakano Broadway?",
        "• Ikebukuro Station is a Dungeon",
        "• What is Otome Road?",
        "• The Legendary 8th Floor of...",
        "• And more"
      ]
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
          <h2 className="text-4xl md:text-5xl font-bold text-red-600 mb-8">
            What&apos;s Inside
          </h2>
          
          <div className="space-y-6 text-gray-800 text-lg mb-8">
            <p>
              This isn&apos;t some generic PDF with &quot;Top 10 Anime Shops in Tokyo.&quot;
            </p>
            
            <p>
              This is deep, curated, and built to make you feel like you already live here.
            </p>
            
            <p className="font-bold text-xl">
              Here&apos;s everything you will get inside:
            </p>
          </div>
        </motion.div>

        {/* Section Cards */}
        <div className="grid gap-8">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg border-4 border-red-500 p-6 md:p-8"
            >
              <div className="mb-6">
                <span className="text-orange-500 text-xl font-bold">Section {section.number} ;</span>
                <h3 className="text-red-600 text-2xl md:text-3xl font-bold mt-2">
                  {section.title}
                </h3>
              </div>
              
              {/* Main items with checkmarks */}
              <div className="mb-6">
                {section.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-start gap-3 mb-3">
                    <span className="text-green-600 text-xl mt-1">✓</span>
                    <p className="text-gray-800 font-medium">{item}</p>
                  </div>
                ))}
              </div>
              
              {/* Detailed breakdown */}
              <div className="text-left">
                {section.details.map((detail, detailIndex) => (
                  <p key={detailIndex} className="text-gray-700 mb-1">
                    {detail}
                  </p>
                ))}
              </div>
              
              {/* Decorative images */}
              <div className="mt-6 flex justify-center">
                <div className="w-32 h-20 rounded-lg overflow-hidden">
                  <img 
                    src={`/images/inside-section/section-${section.number}.png`} 
                    alt={`Section ${section.number} visual`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}