
import React from 'react';
import { Button } from '@/components/ui/button';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = React.useState({
    name: '',
    phone: '',
    email: '',
    service: 'AC Repair',
    message: '',
  });
  const [loading, setLoading] = React.useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Service Request Received",
        description: "We'll contact you shortly to schedule your service.",
        duration: 5000,
      });
      setLoading(false);
      setFormData({
        name: '',
        phone: '',
        email: '',
        service: 'AC Repair',
        message: '',
      });
    }, 1500);
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-white relative">
      {/* Background pattern */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-50 z-0 hidden lg:block"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 relative z-10">
          <span className="inline-block px-4 py-1 bg-blue-50 text-hvac-blue rounded-full text-sm font-semibold mb-4">
            GET IN TOUCH
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Request Service Today</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Fill out the form below, and our team will respond promptly to schedule your service.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 relative z-10">
          {/* Contact Form */}
          <div className="lg:w-7/12">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name*
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-hvac-blue focus:border-hvac-blue"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number*
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-hvac-blue focus:border-hvac-blue"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address*
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-hvac-blue focus:border-hvac-blue"
                    placeholder="your@email.com"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                    Service Needed*
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-hvac-blue focus:border-hvac-blue"
                  >
                    <option value="AC Repair">AC Repair</option>
                    <option value="AC Installation">AC Installation</option>
                    <option value="Furnace Repair">Furnace Repair</option>
                    <option value="Furnace Installation">Furnace Installation</option>
                    <option value="Maintenance">HVAC Maintenance</option>
                    <option value="Air Quality">Indoor Air Quality</option>
                    <option value="Emergency Service">Emergency Service</option>
                    <option value="Other">Other (Please specify)</option>
                  </select>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-hvac-blue focus:border-hvac-blue"
                    placeholder="Please share any additional details about your service needs..."
                  ></textarea>
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-hvac-orange hover:bg-opacity-90 text-white py-3 px-4"
                  disabled={loading}
                >
                  {loading ? 'Submitting...' : 'Submit Service Request'}
                </Button>
                
                <p className="text-sm text-gray-500 mt-3">
                  By submitting this form, you agree to our privacy policy. We'll never share your information.
                </p>
              </form>
            </div>
          </div>
          
          {/* Contact Information */}
          <div className="lg:w-5/12">
            <div className="bg-hvac-blue text-white rounded-xl shadow-lg p-8 h-full">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <div className="h-12 w-12 bg-white/20 rounded-full flex items-center justify-center">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Phone</h4>
                    <p className="opacity-90">
                      <a href="tel:+15551234567" className="hover:underline">(555) 123-4567</a>
                    </p>
                    <p className="text-sm opacity-75 mt-1">24/7 for emergencies</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <div className="h-12 w-12 bg-white/20 rounded-full flex items-center justify-center">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <p className="opacity-90">
                      <a href="mailto:info@simpsonsheatingandcooling.com" className="hover:underline">
                        info@simpsonsheatingandcooling.com
                      </a>
                    </p>
                    <p className="text-sm opacity-75 mt-1">We respond within 24 hours</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <div className="h-12 w-12 bg-white/20 rounded-full flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Location</h4>
                    <p className="opacity-90">1234 HVAC Avenue</p>
                    <p className="opacity-90">Detroit, MI 48201</p>
                    <p className="text-sm opacity-75 mt-1">Serving the entire metro area</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <div className="h-12 w-12 bg-white/20 rounded-full flex items-center justify-center">
                      <Clock className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Hours</h4>
                    <p className="opacity-90">Monday-Friday: 8am - 5pm</p>
                    <p className="opacity-90">Saturday: 9am - 2pm</p>
                    <p className="opacity-90">Sunday: Closed</p>
                    <p className="text-sm opacity-75 mt-1">24/7 emergency service available</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-white/20">
                <h4 className="font-semibold mb-3">Service Areas</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-white/10 rounded-full text-sm">Detroit</span>
                  <span className="px-3 py-1 bg-white/10 rounded-full text-sm">Troy</span>
                  <span className="px-3 py-1 bg-white/10 rounded-full text-sm">Royal Oak</span>
                  <span className="px-3 py-1 bg-white/10 rounded-full text-sm">Sterling Heights</span>
                  <span className="px-3 py-1 bg-white/10 rounded-full text-sm">Warren</span>
                  <span className="px-3 py-1 bg-white/10 rounded-full text-sm">+ More</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
