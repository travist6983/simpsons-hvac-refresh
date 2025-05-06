
import React from 'react';
import { Thermometer, Flame, Wind, Drop, Shield, Clock } from 'lucide-react';
import { Button } from './ui/button';

const services = [
  {
    id: 1,
    title: 'Air Conditioning Repair & Installation',
    description: 'Expert AC repair, maintenance, and new system installation to keep you cool all summer.',
    icon: <Thermometer className="service-icon h-10 w-10 text-hvac-blue transition-all duration-300" />,
  },
  {
    id: 2,
    title: 'Furnace Repair & Installation',
    description: 'Reliable heating solutions for Michigan winters, from quick repairs to energy-efficient upgrades.',
    icon: <Flame className="service-icon h-10 w-10 text-hvac-blue transition-all duration-300" />,
  },
  {
    id: 3,
    title: 'HVAC Maintenance Plans',
    description: 'Preventative care to extend equipment life, improve efficiency, and prevent costly breakdowns.',
    icon: <Shield className="service-icon h-10 w-10 text-hvac-blue transition-all duration-300" />,
  },
  {
    id: 4,
    title: 'Indoor Air Quality Solutions',
    description: 'Breathe easier with our air purifiers, humidifiers, and ventilation services for healthier indoor air.',
    icon: <Drop className="service-icon h-10 w-10 text-hvac-blue transition-all duration-300" />,
  },
  {
    id: 5,
    title: 'Emergency HVAC Services',
    description: "24/7 emergency response when you need it most. We'll restore your comfort quickly.",
    icon: <Clock className="service-icon h-10 w-10 text-hvac-blue transition-all duration-300" />,
  },
  {
    id: 6,
    title: 'Ductwork & Ventilation',
    description: 'Professional duct cleaning, sealing, and ventilation solutions for optimal system performance.',
    icon: <Wind className="service-icon h-10 w-10 text-hvac-blue transition-all duration-300" />,
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-blue-50 text-hvac-blue rounded-full text-sm font-semibold mb-4">
            OUR SERVICES
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Comprehensive HVAC Solutions</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From emergency repairs to planned installations, our skilled technicians deliver quality service for all your heating and cooling needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="service-card bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <a href="#contact" className="inline-block text-hvac-blue font-semibold hover:text-hvac-darkblue">
                Learn more →
              </a>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button className="bg-hvac-blue hover:bg-hvac-darkblue text-white px-8 py-6 text-lg">
            Schedule Service Today
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
