import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import FeaturesSection from "@/components/features-section"
import SmartHomesSection from "@/components/smart-homes-section"
import ServicesSection from "@/components/services-section"
import ProjectSection from "@/components/project-section"
import Footer from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <SmartHomesSection />
        <ServicesSection />
        <ProjectSection />
      </main>
      <Footer />
    </div>
  )
}
