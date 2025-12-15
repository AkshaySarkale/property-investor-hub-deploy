import { useState, useEffect } from "react";
import SplashScreen from "@/components/SplashScreen";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PropertiesSection from "@/components/PropertiesSection";
import WhyInvestSection from "@/components/WhyInvestSection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [hasSeenSplash, setHasSeenSplash] = useState(false);

  useEffect(() => {
    // Check if user has seen splash in this session
    const seen = sessionStorage.getItem("safal-splash-seen");
    if (seen) {
      setShowSplash(false);
      setHasSeenSplash(true);
    }
  }, []);

  const handleSplashComplete = () => {
    setShowSplash(false);
    setHasSeenSplash(true);
    sessionStorage.setItem("safal-splash-seen", "true");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Splash Screen */}
      {showSplash && !hasSeenSplash && (
        <SplashScreen onComplete={handleSplashComplete} />
      )}

      {/* Main Content */}
      <main>
        <Navbar />
        <HeroSection />
        <PropertiesSection />
        <WhyInvestSection />
        <ServicesSection />
        <TestimonialsSection />
        <ContactSection />
        <Footer />
      </main>
    </div>
  );
};

export default Index;
