import TopSection from '@/components/TopSection'
import TroublesAndReasonSection from '@/components/TroublesAndReasonSection'
import InsideSection from '@/components/InsideSection'
import TestimonialsNew from '@/components/TestimonialsNew'
import AboutSection from '@/components/AboutSection'
import FaqSection from '@/components/FaqSection'
import LimitedSale from '@/components/LimitedSale'
import ContactSection from '@/components/ContactSection'

export default function Home() {
  return (
    <main>
      <TopSection />
      <TroublesAndReasonSection />
      <InsideSection />
      <TestimonialsNew />
      <AboutSection />
      <FaqSection />
      <LimitedSale />
      <ContactSection />
    </main>
  )
}