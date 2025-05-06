
import React from 'react';
import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-16 bg-hvac-blue relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10" 
           style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' viewBox=\'0 0 20 20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\' fill-rule=\'evenodd\'%3E%3Ccircle cx=\'3\' cy=\'3\' r=\'3\'/%3E%3Ccircle cx=\'13\' cy=\'13\' r=\'3\'/%3E%3C/g%3E%3C/svg%3E")'}}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready for Reliable HVAC Service?
          </h2>
          <p className="text-lg md:text-xl text-white opacity-90 mb-10">
            Whether you need routine maintenance, a quick repair, or a complete system installation, our expert team is ready to help.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="bg-hvac-orange hover:bg-opacity-90 text-white font-semibold px-8 py-6 text-lg w-full sm:w-auto">
              Request Service
            </Button>
            <a href="tel:+15551234567" className="flex items-center justify-center gap-2 bg-white text-hvac-blue hover:bg-gray-100 px-8 py-6 rounded-md font-semibold text-lg w-full sm:w-auto">
              <Phone size={20} />
              (555) 123-4567
            </a>
          </div>
          <p className="text-white mt-6 opacity-90">
            Free consultations • 24/7 emergency service • Price guarantee
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
