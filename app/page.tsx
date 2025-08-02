import CustomCursor from "@/components/custom-cursor"
import Navigation from "@/components/navigation"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import ProjectsSection from "@/components/projects-section"
import HackathonsSection from "@/components/hackathons-section"
import CertificationsSection from "@/components/certifications-section"
import FreelanceSection from "@/components/freelance-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="relative">
      <CustomCursor />
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <HackathonsSection />
      {/* <CertificationsSection /> */}
      <FreelanceSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
