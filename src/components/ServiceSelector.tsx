
import React from 'react';
import { servicesData } from "@/data/servicesData";
import ServiceCard from '@/components/ServiceCard';
import ServiceDetails from '@/components/ServiceDetails';

interface ServiceSelectorProps {
  selectedServices: string[];
  onToggleService: (serviceId: string) => void;
}

const ServiceSelector = ({ selectedServices, onToggleService }: ServiceSelectorProps) => {
  const [activeService, setActiveService] = React.useState<string | null>(null);

  const handleServiceClick = (serviceId: string) => {
    // Clear all other selections and only select the clicked service
    onToggleService(serviceId);
    setActiveService(serviceId);
  };

  const activeServiceData = servicesData.find(service => service.id === activeService);
  const selectedService = selectedServices.length > 0 ? selectedServices[0] : null;

  // Calculate which row the active service is in (assuming 5 columns on xl screens)
  const getServiceRowEnd = (serviceIndex: number) => {
    const cols = {
      xl: 5,
      lg: 3,
      md: 2,
      default: 1
    };
    
    // For xl screens (5 columns)
    const xlRowEnd = Math.floor(serviceIndex / cols.xl) * cols.xl + cols.xl - 1;
    // For lg screens (3 columns)  
    const lgRowEnd = Math.floor(serviceIndex / cols.lg) * cols.lg + cols.lg - 1;
    // For md screens (2 columns)
    const mdRowEnd = Math.floor(serviceIndex / cols.md) * cols.md + cols.md - 1;
    
    return { xlRowEnd, lgRowEnd, mdRowEnd };
  };

  const activeServiceIndex = servicesData.findIndex(service => service.id === activeService);
  const rowEndPositions = activeServiceIndex >= 0 ? getServiceRowEnd(activeServiceIndex) : null;

  return (
    <section className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">What type of project do you need?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {servicesData.map((service, index) => (
            <React.Fragment key={service.id}>
              <ServiceCard
                service={service}
                isSelected={selectedService === service.id}
                isActive={activeService === service.id}
                onClick={handleServiceClick}
              />
              
              {/* Show ServiceDetails after the last card in the current row */}
              {activeServiceData && rowEndPositions && (
                <>
                  {/* For xl screens (5 columns) */}
                  {index === rowEndPositions.xlRowEnd && (
                    <div className="hidden xl:block xl:col-span-5">
                      <ServiceDetails service={activeServiceData} />
                    </div>
                  )}
                  
                  {/* For lg screens (3 columns) */}
                  {index === rowEndPositions.lgRowEnd && (
                    <div className="hidden lg:block xl:hidden lg:col-span-3">
                      <ServiceDetails service={activeServiceData} />
                    </div>
                  )}
                  
                  {/* For md screens (2 columns) */}
                  {index === rowEndPositions.mdRowEnd && (
                    <div className="hidden md:block lg:hidden md:col-span-2">
                      <ServiceDetails service={activeServiceData} />
                    </div>
                  )}
                  
                  {/* For small screens (1 column) */}
                  {index === activeServiceIndex && (
                    <div className="block md:hidden col-span-1">
                      <ServiceDetails service={activeServiceData} />
                    </div>
                  )}
                </>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSelector;
