
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How often should I replace my air filter?",
    answer: "Most air filters should be changed every 1-3 months depending on various factors including the type of filter, air quality in your area, pets, and allergies. High-quality pleated filters may last up to 6 months. We recommend checking your filter monthly and replacing it when it looks dirty."
  },
  {
    question: "What size HVAC system do I need for my home?",
    answer: "The right size depends on multiple factors including your home's square footage, insulation, window efficiency, ceiling height, and local climate. Our technicians perform a detailed load calculation to determine the optimal system size for your specific needs, ensuring efficiency and comfort."
  },
  {
    question: "How can I lower my heating and cooling costs?",
    answer: "Regular maintenance, programmable thermostats, proper insulation, sealing air leaks, and upgrading to energy-efficient equipment can significantly reduce costs. Our maintenance plans help keep your system operating at peak efficiency, which can lower your monthly utility bills."
  },
  {
    question: "How long should my HVAC system last?",
    answer: "With proper maintenance, furnaces typically last 15-20 years, while air conditioners and heat pumps generally last 10-15 years. Regular professional maintenance can extend the lifespan of your equipment and maintain efficiency throughout its service life."
  },
  {
    question: "Do you offer emergency services?",
    answer: "Yes, we provide 24/7 emergency services throughout the Detroit metro area. Our technicians are always on call to handle urgent heating and cooling issues to restore your comfort as quickly as possible."
  },
];

const FAQSection = () => {
  return (
    <section className="py-16 md:py-24 bg-hvac-lightgray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-blue-50 text-hvac-blue rounded-full text-sm font-semibold mb-4">
            KNOWLEDGE BASE
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get answers to common questions about HVAC systems and our services.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-gray-200 rounded-lg mb-4 bg-white overflow-hidden">
                <AccordionTrigger className="px-6 py-4 hover:bg-blue-50 hover:no-underline">
                  <span className="text-left font-semibold">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-2 text-gray-700">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-700">
            Can't find the answer you're looking for? {' '}
            <a href="#contact" className="text-hvac-blue font-semibold hover:underline">
              Contact our team
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
