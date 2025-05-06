
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative bg-hvac-blue text-white py-16 md:py-24">
      <div className="absolute inset-0 bg-gradient-to-r from-hvac-darkblue to-hvac-blue opacity-90"></div>
      
      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-10" 
           style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' viewBox=\'0 0 20 20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\' fill-rule=\'evenodd\'%3E%3Ccircle cx=\'3\' cy=\'3\' r=\'3\'/%3E%3Ccircle cx=\'13\' cy=\'13\' r=\'3\'/%3E%3C/g%3E%3C/svg%3E")'}}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row md:items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              Comfort for Every Season
            </h1>
            <p className="text-lg md:text-xl mb-8 opacity-90 max-w-lg">
              Detroit's trusted HVAC experts providing reliable heating, cooling, and air quality solutions for your home or business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-hvac-orange hover:bg-opacity-90 text-white font-semibold">
                Request Service
              </Button>
              <Button size="lg" variant="secondary" className="bg-white text-hvac-blue hover:bg-opacity-90 flex items-center">
                Browse Services
                <ArrowRight size={16} className="ml-2" />
              </Button>
            </div>
            <div className="mt-8 flex items-center">
              <span className="text-sm uppercase tracking-wider font-semibold mr-4">Emergency Service Available</span>
              <span className="bg-white text-hvac-blue px-3 py-1 rounded text-sm font-bold">24/7</span>
            </div>
          </div>
          
          <div className="md:w-1/2 flex justify-center">
            <div className="relative rounded-xl overflow-hidden shadow-2xl w-full md:max-w-xl">
              <div className="w-full h-80 md:h-96 bg-hvac-gray">
                {/* This would be replaced with an actual image */}
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-hvac-darkblue to-hvac-blue">
                  <span className="text-white text-opacity-50 text-sm">
                    Professional HVAC Technician Image
                  </span>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                <div className="flex items-center">
                  <div className="bg-white rounded-full p-2 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-hvac-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-white font-bold">Licensed & Insured Professionals</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
