
import React from 'react';
import HeroSection from '../components/HeroSection';
import QRGeneratorSection from '../components/QRGeneratorSection';
import FeaturesSection from '../components/FeaturesSection';
import UseCasesSection from '../components/UseCasesSection';
import PricingSection from '../components/PricingSection';
import AnalyticsSection from '../components/AnalyticsSection';
import HowItWorksSection from '../components/HowItWorksSection';
import WhyChooseUsSection from '../components/WhyChooseUsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <QRGeneratorSection />
      <FeaturesSection />
      <UseCasesSection />
      <PricingSection />
      <AnalyticsSection />
      <HowItWorksSection />
      <WhyChooseUsSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
