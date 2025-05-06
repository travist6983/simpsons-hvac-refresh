
import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Karen Mitchell',
    location: 'Detroit, MI',
    rating: 5,
    text: "Simpson's technicians saved us during last winter's cold snap. Our furnace went out, and they had a new one installed within 24 hours. Professional, courteous, and very knowledgeable."
  },
  {
    id: 2,
    name: 'Michael Kramer',
    location: 'Troy, MI',
    rating: 5,
    text: "We've been using Simpson's for regular HVAC maintenance for years. They're always on time, thorough, and keep our system running efficiently. Their maintenance plan has saved us money on our energy bills."
  },
  {
    id: 3,
    name: 'Jennifer Wilson',
    location: 'Sterling Heights, MI',
    rating: 4,
    text: "Great service installing our new air conditioning system. The team was professional and cleaned up thoroughly after the job. The only reason for 4 stars instead of 5 is that scheduling took a bit longer than expected."
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-blue-50 text-hvac-blue rounded-full text-sm font-semibold mb-4">
            TESTIMONIALS
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We take pride in our reputation for excellence and customer satisfaction throughout the Detroit metro area.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-white border border-gray-100 rounded-xl p-8 shadow hover:shadow-md transition-shadow"
            >
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                  />
                ))}
              </div>
              <p className="text-gray-700 mb-6">"{testimonial.text}"</p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center mr-3">
                  <span className="text-gray-500 font-semibold">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a 
            href="#" 
            className="inline-flex items-center font-semibold text-hvac-blue hover:text-hvac-darkblue"
          >
            Read more reviews on Google
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
