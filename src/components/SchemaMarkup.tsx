
import React from 'react';

const SchemaMarkup = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Simpson's Heating & Cooling",
    "description": "Professional HVAC services including air conditioning repair & installation, furnace repair & installation, HVAC maintenance plans, indoor air quality solutions, and emergency HVAC services.",
    "url": "https://www.simpsonsheatingandcooling.com/",
    "telephone": "+1-555-123-4567", 
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1234 HVAC Avenue", 
      "addressLocality": "Detroit", 
      "addressRegion": "MI",
      "postalCode": "48201", 
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 42.3314, 
      "longitude": -83.0458 
    },
    "sameAs": [
      "https://www.facebook.com/simpsonsheatingcooling", 
      "https://twitter.com/simpsonshvac"
    ],
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "17:00"
      }
    ],
    "priceRange": "$$"
  };

  return (
    <script 
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default SchemaMarkup;
