import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ContextSection from './components/ContextSection';
import TestimonialsSection from './components/TestimonialsSection';
import ProgressSection from './components/ProgressSection';
import FashionCarousel from './components/FashionCarousel';
import SignUpSection from './components/SignUpSection';
import CommunitySection from './components/CommunitySection';
import Footer from './components/Footer';
import AnimatedSection from './components/AnimatedSection';

const App: React.FC = () => {
  return (
    <div className="bg-[#D4C6B0] text-[#000000] min-h-screen font-body overflow-x-hidden">
      <Header />
      <main>
        <AnimatedSection>
          <HeroSection />
        </AnimatedSection>

        <div className="max-w-4xl mx-auto px-6">
          <div className="w-full h-px bg-[#C7A76B] my-16 md:my-24"></div>
        </div>

        <AnimatedSection>
          <ContextSection />
        </AnimatedSection>
        
        <div className="max-w-4xl mx-auto px-6">
          <div className="w-full h-px bg-[#C7A76B] my-16 md:my-24"></div>
        </div>

        <AnimatedSection>
          <TestimonialsSection />
        </AnimatedSection>
        
        <div className="max-w-4xl mx-auto px-6">
          <div className="w-full h-px bg-[#C7A76B] my-16 md:my-24"></div>
        </div>

        <AnimatedSection>
          <ProgressSection />
        </AnimatedSection>

        <AnimatedSection>
          <FashionCarousel />
        </AnimatedSection>

        <AnimatedSection>
          <SignUpSection />
        </AnimatedSection>

        <AnimatedSection>
          <CommunitySection />
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  );
};

export default App;