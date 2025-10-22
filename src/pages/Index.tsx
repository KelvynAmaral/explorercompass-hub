import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import ForWho from "@/components/ForWho";
import FeaturedCities from "@/components/FeaturedCities";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";
import LeadModal from "@/components/LeadModal";

const LEAD_MODAL_STORAGE_KEY = "leadModalShown";

const Index = () => {
  const [showLeadModal, setShowLeadModal] = useState(false);

  useEffect(() => {
    // Check if modal has been shown before
    const hasShownModal = localStorage.getItem(LEAD_MODAL_STORAGE_KEY);
    
    if (!hasShownModal) {
      // Show modal after 5 seconds
      const timer = setTimeout(() => {
        setShowLeadModal(true);
        localStorage.setItem(LEAD_MODAL_STORAGE_KEY, "true");
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleCloseModal = () => {
    setShowLeadModal(false);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <HowItWorks />
        <FeaturedCities />
        <ForWho />
        <Pricing />
      </main>
      <Footer />
      <LeadModal isOpen={showLeadModal} onClose={handleCloseModal} />
    </div>
  );
};

export default Index;