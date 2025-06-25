
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const HowItWorks = () => {
  const { t } = useLanguage();

  const steps = [
    { number: '1', text: t('howItWorks.step1') },
    { number: '2', text: t('howItWorks.step2') },
    { number: '3', text: t('howItWorks.step3') },
    { number: '4', text: t('howItWorks.step4') },
    { number: '5', text: t('howItWorks.step5') }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-wrap justify-center items-center gap-8">
          {steps.map((step, index) => (
            <React.Fragment key={step.number}>
              <div className="flex flex-col items-center text-center max-w-xs">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg mb-4">
                  {step.number}
                </div>
                <p className="text-gray-300 text-sm">{step.text}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block w-8 h-px bg-gradient-to-r from-blue-500 to-transparent"></div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
