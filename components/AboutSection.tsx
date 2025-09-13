'use client'
import { motion } from 'framer-motion'
import { InstagramIcon, TikTokIcon, YouTubeIcon, FacebookIcon } from './SocialIcons'

export default function AboutSection() {
  const socialStats = [
    {
      platform: "Instagram",
      count: "85K +",
      followers: "Instagram Followers",
      icon: "📷",
      color: "text-pink-600"
    },
    {
      platform: "TikTok", 
      count: "95K +",
      followers: "TikTok Followers",
      icon: "🎵",
      color: "text-black"
    },
    {
      platform: "YouTube",
      count: "16K +", 
      followers: "YouTube Subscribers",
      icon: "📺",
      color: "text-red-600"
    },
    {
      platform: "Facebook",
      count: "27K +",
      followers: "Facebook Followers", 
      icon: "📘",
      color: "text-blue-600"
    }
  ]

  return (
    <section className="py-16 lg:py-24 bg-brand-cream">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Logo and Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            {/* Logo */}
            <div className="mb-8">
              <h3 className="text-5xl text-gray-800 mb-2" style={{ fontFamily: 'Kalam, cursive', fontWeight: 'normal' }}>Haruki</h3>
              <h3 className="text-4xl font-bold text-brand-red" style={{ fontFamily: 'Kalam, cursive' }}>ANIME JOURNAL</h3>
            </div>
            
            {/* Profile Image */}
            <div className="bg-gray-300 rounded-lg w-80 h-80 mx-auto lg:mx-0 shadow-xl flex items-center justify-center">
              <p className="text-gray-600 text-center p-4">Haruki Profile Photo<br/>in Library/Bookstore</p>
            </div>
          </motion.div>

          {/* Right - About Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
              About Me
            </h2>
            <div className="border-t-2 border-gray-300 pt-6 mb-8">
              <p className="text-gray-700 text-lg leading-relaxed font-tt-interphases">
                <span className="font-league-spartan font-semibold">Haruki Anime Journal</span>, with 200K followers and over 200M total views, shares anime culture worldwide through engaging interviews. Our mission is to be a bridge between Japan and anime fans around the world, connecting communities and delivering authentic insights into the heart of Japanese anime.
              </p>
            </div>

            {/* Social Media Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {socialStats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className={`${stat.color} mb-2 flex justify-center`}>
                    {stat.platform === 'Instagram' && <InstagramIcon className="w-8 h-8" />}
                    {stat.platform === 'TikTok' && <TikTokIcon className="w-8 h-8" />}
                    {stat.platform === 'YouTube' && <YouTubeIcon className="w-8 h-8" />}
                    {stat.platform === 'Facebook' && <FacebookIcon className="w-8 h-8" />}
                  </div>
                  <div className="text-2xl lg:text-3xl font-bold text-gray-800 mb-1">
                    {stat.count}
                  </div>
                  <div className="text-sm text-gray-600">
                    {stat.followers}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}