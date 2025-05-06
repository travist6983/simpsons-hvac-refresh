
import React from 'react';
import { Button } from '@/components/ui/button';
import { Menu, Phone, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <a href="#" className="flex items-center">
              <span className="text-2xl md:text-3xl font-bold text-hvac-blue">
                Simpson's
              </span>
              <span className="hidden sm:inline text-lg md:text-xl ml-2 text-hvac-gray">
                Heating & Cooling
              </span>
            </a>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-6 items-center">
            <a href="#services" className="font-medium text-hvac-gray hover:text-hvac-blue transition">
              Services
            </a>
            <a href="#about" className="font-medium text-hvac-gray hover:text-hvac-blue transition">
              About
            </a>
            <a href="#testimonials" className="font-medium text-hvac-gray hover:text-hvac-blue transition">
              Testimonials
            </a>
            <a href="#contact" className="font-medium text-hvac-gray hover:text-hvac-blue transition">
              Contact
            </a>
            <a href="tel:+15551234567" className="flex items-center font-medium text-hvac-gray hover:text-hvac-blue transition">
              <Phone size={18} className="mr-1" />
              <span className="hidden lg:inline">555-123-4567</span>
            </a>
            <Button className="bg-hvac-orange hover:bg-opacity-90 text-white">
              Request Service
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden space-x-4">
            <a href="tel:+15551234567" className="p-2 text-hvac-gray">
              <Phone size={20} />
            </a>
            <button onClick={toggleMenu} className="p-2 text-hvac-gray">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-3">
            <nav className="flex flex-col space-y-3">
              <a 
                href="#services" 
                className="py-2 font-medium text-hvac-gray hover:text-hvac-blue transition"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </a>
              <a 
                href="#about" 
                className="py-2 font-medium text-hvac-gray hover:text-hvac-blue transition"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a 
                href="#testimonials" 
                className="py-2 font-medium text-hvac-gray hover:text-hvac-blue transition"
                onClick={() => setIsMenuOpen(false)}
              >
                Testimonials
              </a>
              <a 
                href="#contact" 
                className="py-2 font-medium text-hvac-gray hover:text-hvac-blue transition"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
              <Button 
                className="bg-hvac-orange hover:bg-opacity-90 text-white w-full"
                onClick={() => setIsMenuOpen(false)}
              >
                Request Service
              </Button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
