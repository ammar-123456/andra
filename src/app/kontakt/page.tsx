"use client";

import { useI18n } from '@/i18n/i18n-context';
import { useState } from 'react';

export default function KontaktPage() {
  const { t } = useI18n();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    consent: false
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send the form data to a server here
    console.log('Form submitted:', formData);
    setFormSubmitted(true);
  };
  
  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-primary">Kontakta oss</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-semibold mb-6 text-primary">Skicka ett meddelande</h2>
            
            {formSubmitted ? (
              <div className="bg-green-50 border border-green-200 text-green-700 p-4 rounded-md mb-6">
                <p className="font-medium">Tack för ditt meddelande!</p>
                <p>Vi återkommer till dig så snart som möjligt.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-1">Namn *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-1">E-post *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-gray-700 mb-1">Telefon</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-gray-700 mb-1">Meddelande *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  ></textarea>
                </div>
                
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="consent"
                    name="consent"
                    checked={formData.consent}
                    onChange={handleChange}
                    required
                    className="mt-1 mr-2"
                  />
                  <label htmlFor="consent" className="text-gray-700 text-sm">
                    Jag godkänner att WAS Redovisningskonsulter lagrar mina personuppgifter enligt GDPR för att kunna besvara min förfrågan.
                  </label>
                </div>
                
                <button
                  type="submit"
                  className="bg-primary hover:bg-primary-hover text-white font-medium py-2 px-6 rounded-md transition duration-300"
                >
                  Skicka meddelande
                </button>
              </form>
            )}
          </div>
          
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-semibold mb-6 text-primary">Kontaktuppgifter</h2>
            
            <div className="bg-light p-6 rounded-lg shadow-md mb-8 border border-gray-100">
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0 bg-accent/20 rounded-md p-2 mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1 text-primary">Adress</h3>
                  <p className="text-gray-700">Dackevägen 33 177 34, JÄRFÄLLA</p>
                </div>
              </div>
              
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0 bg-accent/20 rounded-md p-2 mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1 text-primary">Telefon</h3>
                  <p className="text-gray-700">08-277444</p>
                  {/* <p className="text-gray-700">0707-603139</p> Removed old numbers */}
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-accent/20 rounded-md p-2 mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1 text-primary">E-post</h3>
                  <p className="text-gray-700">
                    <a href="mailto:info@wasredovisningskonsulter.se" className="text-accent hover:underline">
                      info@wasredovisningskonsulter.se
                    </a>
                  </p>
                </div>
              </div>
            </div>
            
            <h2 className="text-2xl font-semibold mb-4 text-primary">Vanliga frågor</h2>
            
            <div className="space-y-4">
              <div className="border-b border-gray-200 pb-4">
                <h3 className="text-lg font-medium mb-2 text-primary">Vilka tjänster erbjuder ni?</h3>
                <p className="text-gray-700">
                  Vi erbjuder ett brett utbud av redovisningstjänster, inklusive löpande bokföring, bokslut, årsredovisning, deklarationer, löneadministration och ekonomisk rådgivning.
                </p>
              </div>
              
              <div className="border-b border-gray-200 pb-4">
                <h3 className="text-lg font-medium mb-2 text-primary">Hur mycket kostar era tjänster?</h3>
                <p className="text-gray-700">
                  Våra priser varierar beroende på tjänst och omfattning. Kontakta oss för en kostnadsfri offert anpassad efter ditt företags behov.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-2 text-primary">Hur kommer jag igång med era tjänster?</h3>
                <p className="text-gray-700">
                  Kontakta oss via formuläret eller ring oss för att boka ett första möte. Vi diskuterar dina behov och tar fram en skräddarsydd lösning för ditt företag.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
