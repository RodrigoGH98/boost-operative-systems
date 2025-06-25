
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { LanguageProvider, useLanguage } from '@/contexts/LanguageContext';
import LanguageToggle from '@/components/LanguageToggle';
import ProjectHero from '@/components/ProjectHero';
import ServiceSelector from '@/components/ServiceSelector';
import HowItWorks from '@/components/HowItWorks';
import ProjectForm from '@/components/ProjectForm';

const StartProjectContent = () => {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [selectedChallenges, setSelectedChallenges] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const { t } = useLanguage();

  const toggleService = (serviceId: string) => {
    // Only allow one service to be selected at a time
    setSelectedServices([serviceId]);
  };

  const toggleChallenge = (challenge: string) => {
    setSelectedChallenges(prev => 
      prev.includes(challenge) 
        ? prev.filter(c => c !== challenge)
        : [...prev, challenge]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const scrollToForm = () => {
    document.getElementById('project-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  if (submitted) {
    return (
      <div className="bg-black text-white min-h-screen">
        <header className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-gray-800 flex justify-between items-center px-6 py-3 max-w-7xl mx-auto">
          <Link to="/">
            <img 
              src="/lovable-uploads/cd760326-6692-49e4-adc8-9d587d70cf76.png" 
              alt="BOOST - Potencializa tus ideas" 
              className="h-16 sm:h-20 lg:h-28 w-auto"
            />
          </Link>
          <LanguageToggle />
        </header>
        <div className="flex items-center justify-center min-h-[80vh] pt-32">
          <div className="text-center max-w-2xl mx-auto px-6">
            <div className="text-6xl mb-8">✅</div>
            <h1 className="text-4xl font-bold mb-4">{t('startProject.thankYou.title')}</h1>
            <p className="text-xl text-gray-300 mb-8">{t('startProject.thankYou.description')}</p>
            <Link to="/">
              <Button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-4 text-lg">
                <ArrowLeft className="w-5 h-5 mr-2" />
                {t('startProject.thankYou.backHome')}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-black text-white min-h-screen">
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-gray-800 flex justify-between items-center px-6 py-3 max-w-7xl mx-auto">
        <Link to="/">
          <img 
            src="/lovable-uploads/cd760326-6692-49e4-adc8-9d587d70cf76.png" 
            alt="BOOST - Potencializa tus ideas" 
            className="h-16 sm:h-20 lg:h-28 w-auto"
          />
        </Link>
        <div className="flex items-center gap-4">
          <LanguageToggle />
          <Link to="/">
            <Button variant="ghost" className="text-white hover:text-blue-400">
              <ArrowLeft className="w-4 h-4 mr-2" />
              {t('startProject.back')}
            </Button>
          </Link>
        </div>
      </header>

      <div className="pt-24 sm:pt-28 lg:pt-36">
        <ProjectHero onScrollToForm={scrollToForm} />
        <ServiceSelector 
          selectedServices={selectedServices} 
          onToggleService={toggleService} 
        />
        <HowItWorks />
        <ProjectForm 
          selectedChallenges={selectedChallenges}
          onToggleChallenge={toggleChallenge}
          onSubmit={handleSubmit}
        />
      </div>
    </div>
  );
};

const StartProject = () => {
  return (
    <LanguageProvider>
      <StartProjectContent />
    </LanguageProvider>
  );
};

export default StartProject;
