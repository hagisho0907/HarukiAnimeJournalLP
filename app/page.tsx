import TopSection from '@/components/TopSection'
import TroubleSection from '@/components/TroubleSection'
import AboutSection from '@/components/AboutSection'
import QuestionSection from '@/components/QuestionSection'
import IntroduceSection from '@/components/IntroduceSection'
import InsideSection from '@/components/InsideSection'
import BonusSection from '@/components/BonusSection'
import ReasonSection from '@/components/ReasonSection'
import DifferentSection from '@/components/DifferentSection'
import ReviewSection from '@/components/ReviewSection'
import GetSection from '@/components/GetSection'
import IfSection from '@/components/IfSection'
import TrustSection from '@/components/TrustSection'
import FaqSection from '@/components/FaqSection'
import ContactSection from '@/components/ContactSection'
import StickyCTA from '@/components/StickyCTA'

export default function Home() {
  return (
    <>
      <main>
        <TopSection />
        <TroubleSection />
        <AboutSection id="about" />
        <QuestionSection />
        <IntroduceSection />
        <InsideSection />
        <BonusSection />
        <ReasonSection />
        <DifferentSection />
        <ReviewSection />
        <GetSection />
        <IfSection />
        <TrustSection />
        <FaqSection id="faq" />
        <ContactSection id="contact" />
      </main>
      <StickyCTA
        buttonUrl="https://harukianimejournal.myshopify.com/products/the-ultimate-tokyo-anime-guide-1"
        price="$29"
        hideAtSectionId="contact"
        alternateContent={{
          title: "Ready to Explore the Real Tokyo Anime World?",
          description: "No more tourist traps. No more 20-tab research spirals. Just real, curated Tokyo anime culture in your pocket.",
          buttonText: "Get the Real Tokyo Anime Experience"
        }}
        alternateStartSection="faq"
      />
    </>
  )
}