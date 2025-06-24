
import React from 'react';
import { ScrollProvider } from '@/contexts/ScrollContext';
import { LanguageProvider } from '@/contexts/LanguageContext';
import DynamicBackground from '@/components/DynamicBackground';
import AnimatedSection from '@/components/AnimatedSection';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import HowWeWork from '@/components/HowWeWork';
import SolutionHighlights from '@/components/SolutionHighlights';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <LanguageProvider>
      <ScrollProvider>
        <div className="bg-black text-white min-h-screen font-sans relative overflow-x-hidden">
          <DynamicBackground />
          <div className="relative z-10">
            <Header />
            <div className="pt-24 sm:pt-28 lg:pt-36">
              <AnimatedSection animationType="fade">
                <Hero />
              </AnimatedSection>
              <AnimatedSection 
                animationType="gradient" 
                gradientFrom="from-blue-900/30" 
                gradientTo="to-cyan-900/20"
              >
                <Services />
              </AnimatedSection>
              <AnimatedSection 
                animationType="slide"
                gradientFrom="from-purple-900/25" 
                gradientTo="to-pink-900/15"
              >
                <HowWeWork />
              </AnimatedSection>
              <AnimatedSection 
                animationType="scale"
                gradientFrom="from-indigo-900/30" 
                gradientTo="to-blue-900/20"
              >
                <SolutionHighlights />
              </AnimatedSection>
              <AnimatedSection 
                animationType="gradient"
                gradientFrom="from-teal-900/25" 
                gradientTo="to-blue-900/15"
              >
                <About />
              </AnimatedSection>
              <AnimatedSection 
                animationType="fade"
                gradientFrom="from-purple-900/30" 
                gradientTo="to-indigo-900/20"
              >
                <Contact />
              </AnimatedSection>
              <Footer />
            </div>
          </div>
        </div>
      </ScrollProvider>
    </LanguageProvider>
  );
};

export default Index;
