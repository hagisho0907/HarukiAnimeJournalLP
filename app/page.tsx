import TopSection from '@/components/TopSection'
import TroublesAndReasonSection from '@/components/TroublesAndReasonSection'
import InsideSection from '@/components/InsideSection'
import TestimonialsNew from '@/components/TestimonialsNew'
import AboutSection from '@/components/AboutSection'
import FaqSection from '@/components/FaqSection'
import LimitedSection from '@/components/LimitedSection'
import ContactSection from '@/components/ContactSection'
import SectionDivider from '@/components/SectionDivider'
import StickyCTA from '@/components/StickyCTA'

export default function Home() {
  return (
    <>
      <main>
        <TopSection />
        <SectionDivider variant="wave" />
        
        <TroublesAndReasonSection />
        <SectionDivider variant="wave" />
        
        <InsideSection />
        <SectionDivider variant="wave" />
        
        <TestimonialsNew />
        <SectionDivider variant="wave" />
        
        <AboutSection />
        
        <FaqSection />
        <LimitedSection />
        <ContactSection />
      </main>
      
      <StickyCTA
        title="Get Your Ultimate Tokyo Anime Guide!"
        description="Join thousands exploring authentic anime spots"
        buttonText="Get It Now"
        buttonUrl="https://harukianimejournal.myshopify.com/products/the-ultimate-tokyo-anime-guide-1"
        price="$19"
        hideAtSectionId="faq-section"
      />
    </>
  )
}