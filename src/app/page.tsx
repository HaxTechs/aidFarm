import Hero from "@/components/hero"
import Offerings from "@/components/offerings"
import { FarmGallery } from "@/components/farm-gallery"  
import WhyAidFarm from "@/components/why-aidfarm"
import Stats from "@/components/stats"
import Testimonials from "@/components/testimonials"
import FinalCTA from "@/components/final-cta"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background font-sans">
      <Hero />
      <Offerings />
      <WhyAidFarm />
      <FarmGallery />
      <Stats />
      <Testimonials />
      <FinalCTA />
      <Footer />
    </main>
  )
}
