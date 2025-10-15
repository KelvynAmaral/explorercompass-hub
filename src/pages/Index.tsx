import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import ForWho from "@/components/ForWho";
import FeaturedCities from "@/components/FeaturedCities";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";

const Index = () => {
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
    </div>
  );
};

export default Index;