'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

interface CarouselItem {
  src: string
  alt: string
}

interface BookConveyorCarouselProps {
  images?: CarouselItem[]
}

export default function BookConveyorCarousel({
  images = [
    { src: '/images/top-section/carousel-1.jpg', alt: 'Tokyo Anime Guide Book' },
    { src: '/images/top-section/carousel-2.jpg', alt: 'Map Feature' },
    { src: '/images/top-section/carousel-3.jpg', alt: 'Shop Directory' },
    { src: '/images/top-section/carousel-4.jpg', alt: 'Area Guide' }
  ]
}: BookConveyorCarouselProps) {
  // Duplicate images for seamless loop
  const allImages = [...images, ...images]

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="relative mb-12 overflow-hidden"
    >
      {/* Conveyor Belt Container */}
      <div className="relative w-full overflow-hidden">
        <div className="conveyor-wrapper">
          <div className="conveyor-belt">
            {allImages.map((image, index) => (
              <div
                key={index}
                className="conveyor-item"
              >
                <div className="relative h-[420px] md:h-[520px] rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 250px, 350px"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .conveyor-wrapper {
          display: flex;
          align-items: center;
          position: relative;
          width: 100%;
          height: 100%;
        }

        .conveyor-belt {
          display: flex;
          gap: 1.5rem;
          animation: scroll 25s linear infinite;
          width: fit-content;
          padding: 0 1rem;
        }

        .conveyor-item {
          flex-shrink: 0;
          width: 250px;
        }

        @media (min-width: 768px) {
          .conveyor-item {
            width: 350px;
          }
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .conveyor-belt:hover {
          animation-play-state: paused;
        }
      `}</style>
    </motion.div>
  )
}