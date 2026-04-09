import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import SocialProof from "@/components/landing/SocialProof";
import ResumeGallery from "@/components/landing/ResumeGallery";
import FeaturesGrid from "@/components/landing/FeaturesGrid";
import ExpandedFeatures from "@/components/landing/ExpandedFeatures";
import Pricing from "@/components/landing/Pricing";
import TestimonialsGrid from "@/components/landing/TestimonialsGrid";
import FAQ from "@/components/landing/FAQ";
import CTABanner from "@/components/landing/CTABanner";
import Footer from "@/components/landing/Footer";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <Hero />
    <SocialProof />
    <ResumeGallery />
    <FeaturesGrid />
    <ExpandedFeatures />
    <Pricing />
    <TestimonialsGrid />
    <FAQ />
    <CTABanner />
    <Footer />
  </div>
);

export default Index;
