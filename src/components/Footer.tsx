
import React from 'react';
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-hvac-gray text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="mb-5">
              <a href="#" className="flex flex-col">
                <span className="text-2xl font-bold text-white">Simpson's</span>
                <span className="text-lg text-gray-300">Heating & Cooling</span>
              </a>
            </div>
            <p className="text-gray-300 mb-6">
              Your trusted HVAC partner in the Detroit metropolitan area for over 20 years.
            </p>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook" className="bg-white/10 hover:bg-hvac-blue h-10 w-10 rounded-full flex items-center justify-center transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a href="#" aria-label="Twitter" className="bg-white/10 hover:bg-hvac-blue h-10 w-10 rounded-full flex items-center justify-center transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </a>
              <a href="#" aria-label="Instagram" className="bg-white/10 hover:bg-hvac-blue h-10 w-10 rounded-full flex items-center justify-center transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-gray-300 hover:text-white flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  Services
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-white flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  About Us
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-300 hover:text-white flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-white flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  Financing Options
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  Service Areas
                </a>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4">Our Services</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-white flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  AC Repair & Installation
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  Furnace Repair & Installation
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  HVAC Maintenance Plans
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  Indoor Air Quality
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  Emergency Services
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  Commercial HVAC
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex">
                <Phone className="h-5 w-5 mr-3 text-hvac-blue" />
                <span className="text-gray-300">
                  <a href="tel:+15551234567" className="hover:text-white">(555) 123-4567</a>
                </span>
              </li>
              <li className="flex">
                <Mail className="h-5 w-5 mr-3 text-hvac-blue" />
                <span className="text-gray-300">
                  <a href="mailto:info@simpsonsheatingandcooling.com" className="hover:text-white">
                    info@simpsonsheatingandcooling.com
                  </a>
                </span>
              </li>
              <li className="flex">
                <MapPin className="h-5 w-5 mr-3 text-hvac-blue" />
                <span className="text-gray-300">
                  1234 HVAC Avenue<br />
                  Detroit, MI 48201
                </span>
              </li>
            </ul>
            <div className="mt-6">
              <h4 className="font-semibold text-white mb-2">Business Hours:</h4>
              <p className="text-gray-300">
                Monday-Friday: 8am - 5pm<br />
                Saturday: 9am - 2pm<br />
                Sunday: Closed
              </p>
              <p className="text-gray-300 mt-2">24/7 Emergency Service Available</p>
            </div>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Simpson's Heating & Cooling. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 text-sm hover:text-white">Privacy Policy</a>
              <a href="#" className="text-gray-400 text-sm hover:text-white">Terms of Service</a>
              <a href="#" className="text-gray-400 text-sm hover:text-white">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
