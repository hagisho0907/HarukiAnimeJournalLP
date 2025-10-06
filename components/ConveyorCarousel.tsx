'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

interface CarouselItem {
  src: string
  alt: string
}

interface ConveyorCarouselProps {
  images: CarouselItem[]
  sectionId?: string
  title?: string
  description?: string
  backgroundColor?: string
  itemWidth?: {
    mobile: number
    desktop: number
  }
  animationDuration?: number
}

export default function ConveyorCarousel({
  images,
  sectionId = 'carousel-section',
  title = 'Gallery',
  description = 'Check out our collection',
  backgroundColor = 'bg-gray-50',
  itemWidth = { mobile: 300, desktop: 400 },
  animationDuration = 30
}: ConveyorCarouselProps) {
  // Duplicate images for seamless loop
  const allImages = [...images, ...images]

  return (
    <section id={sectionId} className={`${backgroundColor} py-16 lg:py-24 overflow-hidden`}>
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            {title}
          </h2>
          <p className="text-gray-600 text-lg">
            {description}
          </p>
        </motion.div>
      </div>

      {/* Conveyor Belt Container */}
      <div className="relative w-full overflow-hidden">
        <div className="conveyor-wrapper">
          <div className="conveyor-belt">
            {allImages.map((image, index) => (
              <div
                key={index}
                className="conveyor-item"
              >
                <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-lg bg-white">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    sizes="400px"
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
          gap: 0.5rem;
          animation: scroll ${animationDuration}s linear infinite;
          width: fit-content;
          padding: 0 2rem;
        }

        .conveyor-item {
          flex-shrink: 0;
          width: ${itemWidth.mobile}px;
        }

        @media (min-width: 768px) {
          .conveyor-item {
            width: ${itemWidth.desktop}px;
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
    </section>
  )
}