
import React from 'react';
import { Check, MapPin } from 'lucide-react';

const aboutPoints = [
  "Over 20 years of HVAC expertise in the Detroit metro area",
  "Licensed, bonded, and fully insured technicians",
  "Transparent pricing with no hidden fees",
  "Guaranteed satisfaction on every job",
  "Energy-efficient solutions to reduce utility bills",
];

const serviceAreas = [
  "Detroit Metro Area",
  "Macomb County",
  "Oakland County",
  "Wayne County",
  "St. Clair Shores",
  "Sterling Heights",
  "Troy",
  "Royal Oak"
];

const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-hvac-lightgray">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* About Content */}
          <div className="lg:w-1/2">
            <span className="inline-block px-4 py-1 bg-blue-50 text-hvac-blue rounded-full text-sm font-semibold mb-4">
              ABOUT US
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Your Trusted Local HVAC Partner</h2>
            <p className="text-lg mb-8 text-gray-700">
              Simpson's Heating & Cooling has been servicing the Detroit metropolitan area with reliable, professional HVAC solutions for over two decades. We're not just contractors – we're your neighbors committed to keeping your home comfortable year-round.
            </p>
            
            <div className="space-y-3 mb-8">
              {aboutPoints.map((point, index) => (
                <div key={index} className="flex items-start">
                  <div className="mr-2 mt-1 flex-shrink-0">
                    <Check className="h-5 w-5 text-hvac-blue" />
                  </div>
                  <p className="text-gray-700">{point}</p>
                </div>
              ))}
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="bg-blue-50 p-2 rounded-full mr-3">
                  <MapPin className="h-6 w-6 text-hvac-blue" />
                </div>
                <h3 className="text-xl font-bold">Service Area</h3>
              </div>
              
              <div className="grid grid-cols-2 gap-2">
                {serviceAreas.map((area, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-hvac-blue rounded-full mr-2"></div>
                    <span className="text-gray-700">{area}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Credentials Display */}
          <div className="lg:w-1/2 flex flex-col justify-center">
            <div className="bg-white rounded-xl shadow-lg p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-blue-50 rounded-full -mr-20 -mt-20"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-6">Why Choose Simpson's</h3>
                
                <div className="space-y-6">
                  <div className="flex">
                    <div className="flex-shrink-0 mr-4">
                      <div className="h-12 w-12 bg-blue-50 rounded-full flex items-center justify-center">
                        <span className="text-hvac-blue font-bold text-xl">01</span>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-1">Expert Technicians</h4>
                      <p className="text-gray-600">Our team undergoes continuous education to stay ahead of industry advancements.</p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0 mr-4">
                      <div className="h-12 w-12 bg-blue-50 rounded-full flex items-center justify-center">
                        <span className="text-hvac-blue font-bold text-xl">02</span>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-1">Prompt Service</h4>
                      <p className="text-gray-600">We respond quickly to service calls and stick to our appointment times.</p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0 mr-4">
                      <div className="h-12 w-12 bg-blue-50 rounded-full flex items-center justify-center">
                        <span className="text-hvac-blue font-bold text-xl">03</span>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-1">Quality Guaranteed</h4>
                      <p className="text-gray-600">We stand behind our work with industry-leading warranties and guarantees.</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {/* These would be actual certification logos */}
                  <div className="bg-gray-100 h-16 rounded flex items-center justify-center text-xs text-gray-500">NATE Certified</div>
                  <div className="bg-gray-100 h-16 rounded flex items-center justify-center text-xs text-gray-500">EPA Certified</div>
                  <div className="bg-gray-100 h-16 rounded flex items-center justify-center text-xs text-gray-500">Energy Star</div>
                  <div className="bg-gray-100 h-16 rounded flex items-center justify-center text-xs text-gray-500">BBB A+ Rated</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
