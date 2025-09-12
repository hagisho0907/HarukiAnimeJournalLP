import Hero from '@/components/Hero'
import Problem from '@/components/Problem'
import Reasons from '@/components/Reasons'
import Testimonial from '@/components/Testimonial'
import CTA from '@/components/CTA'

export default function Home() {
  return (
    <main>
      <Hero />
      <Problem />
      <Reasons />
      <Testimonial />
      <CTA />
    </main>
  )
}