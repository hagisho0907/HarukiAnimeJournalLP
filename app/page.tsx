import HeroNew from '@/components/HeroNew'
import RedBanner from '@/components/RedBanner'
import PlanningSection from '@/components/PlanningSection'
import TroublesSection from '@/components/TroublesSection'
import ThreeReasonsNew from '@/components/ThreeReasonsNew'
import CtaRed from '@/components/CtaRed'
import GlimpseSection from '@/components/GlimpseSection'
import ReadyToExplore from '@/components/ReadyToExplore'
import AboutSection from '@/components/AboutSection'

export default function Home() {
  return (
    <main>
      <HeroNew />
      <RedBanner />
      <PlanningSection />
      <TroublesSection />
      <ThreeReasonsNew />
      <CtaRed />
      <GlimpseSection />
      <ReadyToExplore />
      <AboutSection />
    </main>
  )
}