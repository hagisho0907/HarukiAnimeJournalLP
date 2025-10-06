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
      <SectionDivider variant="wave" fromColor="#FFF8F3" toColor="#FFF8F3" />
      
      <TroublesAndReasonSection />
      <SectionDivider variant="curve" fromColor="#FFF8F3" toColor="#FFF8F3" />
      
      <InsideSection />
      <SectionDivider variant="zigzag" fromColor="#FFF8F3" toColor="#FFFFFF" />
      
      <TestimonialsNew />
      <SectionDivider variant="dots" />
      
      <AboutSection />
      
      <FaqSection />
      <LimitedSection />
      <ContactSection />
    </main>
  )
}