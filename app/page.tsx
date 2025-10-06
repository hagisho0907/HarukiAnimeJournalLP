import TopSection from '@/components/TopSection'
import TroublesAndReasonSection from '@/components/TroublesAndReasonSection'
import InsideSection from '@/components/InsideSection'
import TestimonialsNew from '@/components/TestimonialsNew'
import AboutSection from '@/components/AboutSection'
import FaqSection from '@/components/FaqSection'
import LimitedSection from '@/components/LimitedSection'
import ContactSection from '@/components/ContactSection'
import SectionDivider from '@/components/SectionDivider'

export default function Home() {
  return (
    <main>
      <TopSection />
      <SectionDivider variant="wave" fromColor="bg-brand-cream" toColor="bg-brand-cream" />
      
      <TroublesAndReasonSection />
      <SectionDivider variant="curve" fromColor="bg-brand-cream" toColor="bg-brand-cream" />
      
      <InsideSection />
      <SectionDivider variant="zigzag" fromColor="bg-brand-cream" toColor="bg-white" />
      
      <TestimonialsNew />
      <SectionDivider variant="dots" />
      
      <AboutSection />
      
      <FaqSection />
      <LimitedSection />
      <ContactSection />
    </main>
  )
}