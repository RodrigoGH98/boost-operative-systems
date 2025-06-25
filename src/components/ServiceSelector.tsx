
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from '@/contexts/LanguageContext';

interface ServiceSelectorProps {
  selectedServices: string[];
  onToggleService: (serviceId: string) => void;
}

const ServiceSelector = ({ selectedServices, onToggleService }: ServiceSelectorProps) => {
  const { t } = useLanguage();

  const services = [
    {
      id: 'strategy',
      title: t('services.strategy.title'),
      description: t('services.strategy.description'),
      gradient: 'from-blue-500 to-blue-700'
    },
    {
      id: 'tools',
      title: t('services.tools.title'),
      description: t('services.tools.description'),
      gradient: 'from-purple-500 to-purple-700'
    },
    {
      id: 'optimization',
      title: t('services.optimization.title'),
      description: t('services.optimization.description'),
      gradient: 'from-cyan-500 to-cyan-700'
    },
    {
      id: 'integration',
      title: t('services.integration.title'),
      description: t('services.integration.description'),
      gradient: 'from-pink-500 to-pink-700'
    }
  ];

  return (
    <section className="py-20 px-6 bg-gray-900/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">{t('serviceSelector.title')}</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <Card 
              key={service.id}
              className={`cursor-pointer transition-all duration-300 hover:scale-105 ${
                selectedServices.includes(service.id)
                  ? 'ring-2 ring-blue-400 bg-gradient-to-br ' + service.gradient
                  : 'bg-gray-800/50 hover:bg-gray-700/50'
              } border-gray-600`}
              onClick={() => onToggleService(service.id)}
            >
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3 text-white">{service.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSelector;
