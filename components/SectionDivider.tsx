'use client'

interface SectionDividerProps {
  variant?: 'wave' | 'zigzag' | 'curve' | 'dots' | 'gradient'
  fromColor?: string
  toColor?: string
}

export default function SectionDivider({ 
  variant = 'wave', 
  fromColor = '#FFF8F3',
  toColor = '#FFFFFF'
}: SectionDividerProps) {
  
  if (variant === 'wave') {
    return (
      <div className="relative h-6 -mt-1">
        <svg
          className="absolute bottom-0 w-full h-6"
          preserveAspectRatio="none"
          viewBox="0 0 1440 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#EF4444" />
              <stop offset="50%" stopColor="#FCD34D" />
              <stop offset="100%" stopColor="#EF4444" />
            </linearGradient>
          </defs>
          <path
            d="M0,24 L0,8 Q360,24 720,8 T1440,8 L1440,24 Z"
            fill="url(#waveGradient)"
          />
        </svg>
      </div>
    )
  }

  if (variant === 'zigzag') {
    return (
      <div className="relative h-8 -mt-1">
        <svg
          className="absolute bottom-0 w-full h-8"
          preserveAspectRatio="none"
          viewBox="0 0 1440 32"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,32 L80,0 L160,32 L240,0 L320,32 L400,0 L480,32 L560,0 L640,32 L720,0 L800,32 L880,0 L960,32 L1040,0 L1120,32 L1200,0 L1280,32 L1360,0 L1440,32 Z"
            fill={toColor}
          />
        </svg>
      </div>
    )
  }

  if (variant === 'curve') {
    return (
      <div className="relative h-16 -mt-1">
        <svg
          className="absolute bottom-0 w-full h-16"
          preserveAspectRatio="none"
          viewBox="0 0 1440 64"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,64 L0,0 Q720,64 1440,0 L1440,64 Z"
            fill={toColor}
          />
        </svg>
      </div>
    )
  }

  if (variant === 'dots') {
    return (
      <div className="relative py-8 bg-white">
        <div className="flex justify-center items-center space-x-3">
          {[...Array(7)].map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full ${i === 3 ? 'bg-brand-red w-3 h-3' : 'bg-gray-300'}`}
            />
          ))}
        </div>
      </div>
    )
  }

  if (variant === 'gradient') {
    return (
      <div 
        className="h-24"
        style={{
          background: `linear-gradient(to bottom, ${fromColor}, ${toColor})`
        }}
      />
    )
  }

  return null
}