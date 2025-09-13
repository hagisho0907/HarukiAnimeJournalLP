'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

interface Card {
  id: number;
  image: string;
  title: string;
}

const CardCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const mainCards: Card[] = [
    { id: 1, image: '/images/anime-card-1.jpg', title: 'Tokyo Anime Guide Cover' },
    { id: 2, image: '/images/anime-card-2.jpg', title: 'Akihabara Guide' },
    { id: 3, image: '/images/anime-card-3.jpg', title: 'Anime Cafe Map' },
  ];

  const backgroundCards = [
    { id: 4, rotation: -15, x: -200, y: -50, scale: 0.8 },
    { id: 5, rotation: 25, x: 250, y: -80, scale: 0.7 },
    { id: 6, rotation: -30, x: -280, y: 120, scale: 0.6 },
    { id: 7, rotation: 20, x: 300, y: 100, scale: 0.75 },
    { id: 8, rotation: -20, x: -150, y: -150, scale: 0.65 },
    { id: 9, rotation: 35, x: 180, y: 180, scale: 0.7 },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % mainCards.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [mainCards.length]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % mainCards.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + mainCards.length) % mainCards.length);
  };

  return (
    <div className="relative w-full max-w-[500px] mx-auto h-[500px] flex items-center justify-center" style={{ contain: 'layout' }}>
      {/* Background cards stack */}
      <div className="relative w-64 h-[450px]">
        {mainCards.map((card, index) => {
          const offset = (index - currentIndex + mainCards.length) % mainCards.length;
          const isActive = offset === 0;
          const isPrevious = offset === mainCards.length - 1;
          const isNext = offset === 1;
          
          if (offset > 1 && offset < mainCards.length - 1) return null;
          
          return (
            <motion.div
              key={card.id}
              className="absolute inset-0"
              animate={{
                x: isPrevious ? -60 : isNext ? 60 : 0,
                y: isPrevious ? 20 : isNext ? 20 : 0,
                scale: isActive ? 1 : 0.85,
                opacity: isActive ? 1 : 0.4,
                rotate: isPrevious ? -15 : isNext ? 15 : 0,
                zIndex: isActive ? 30 : isPrevious ? 10 : isNext ? 10 : 0,
              }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              onClick={isActive ? undefined : () => setCurrentIndex(index)}
              style={{ cursor: isActive ? 'default' : 'pointer' }}
            >
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden w-full h-full border-4 border-yellow-400">
                <div className="bg-gradient-to-br from-purple-100 to-pink-100 w-full h-full flex flex-col items-center justify-center p-8">
                  <div className="text-6xl mb-4">📖</div>
                  <h3 className="text-2xl font-bold text-gray-800 text-center">
                    {card.title}
                  </h3>
                  <p className="text-gray-600 mt-2">Page {index + 1} of 3</p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Navigation buttons */}
      <button
        onClick={handlePrev}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-200 z-10"
        aria-label="Previous card"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={handleNext}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-200 z-10"
        aria-label="Next card"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots indicator */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {mainCards.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-200 ${
              index === currentIndex ? 'bg-brand-red w-6' : 'bg-gray-400'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default CardCarousel;