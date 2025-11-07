import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ImpactStats from '@/components/ImpactStats';
import CampaignsSection from '@/components/CampaignsSection';
import InitiativesSection from '@/components/InitiativesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import BlogSection from '@/components/BlogSection';
import DonationCTA from '@/components/DonationCTA';
import Footer from '@/components/Footer';
import MobileDonateButton from '@/components/MobileDonateButton';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ImpactStats />
      <CampaignsSection />
      <InitiativesSection />
      <TestimonialsSection />
      <BlogSection />
      <DonationCTA />
      <Footer />
      <MobileDonateButton />
    </main>
  );
}
