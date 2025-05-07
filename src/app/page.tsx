"use client";

import { useI18n } from '@/i18n/i18n-context';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  const { t } = useI18n();
  
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-primary opacity-90"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8 flex flex-col items-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-6">
            Professionell redovisning för ditt företag
          </h1>
          <p className="text-xl text-white text-center mb-8 max-w-3xl">
            WAS Redovisningskonsulter erbjuder skräddarsydda redovisningstjänster för små och medelstora företag, med särskild expertis inom taxibranschen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              href="/produkter" 
              className="bg-white text-primary hover:bg-accent hover:text-white font-medium py-3 px-6 rounded-md transition duration-300"
            >
              Våra tjänster
            </Link>
            <Link 
              href="/kontakt" 
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary font-medium py-3 px-6 rounded-md transition duration-300"
            >
              Kontakta oss
            </Link>
          </div>
        </div>
      </div>
      
      {/* Services Overview */}
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">Våra tjänster</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Redovisningstjänster omfattar allt från praktisk löpande redovisning, upprättande av bokslut, årsredovisning och deklarationer, men naturligtvis även rådgivning, analys, ekonomi- och verksamhetsstyrning.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="card hover:border-primary hover:border">
            <div className="relative h-40 sm:h-48 w-full"> {/* Adjusted height for mobile */}
              <Image 
                src="/images/new_accounting_papers.jpeg" /* Updated image */ 
                alt="Bokföring och redovisning" 
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-primary">Bokföring & Redovisning</h3>
              <p className="text-gray-600 mb-4">
                Löpande bokföring, avstämning av konton, momsredovisning och rapportering till kund.
              </p>
              <Link 
                href="/produkter" 
                className="text-accent hover:text-secondary font-medium"
              >
                Läs mer →
              </Link>
            </div>
          </div>
          
          <div className="card hover:border-primary hover:border">
            <div className="relative h-40 sm:h-48 w-full"> {/* Adjusted height for mobile */}
              <Image 
                src="/images/new_accounting_calculator.jpeg" /* Updated image */ 
                alt="Bokslut och årsredovisning" 
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-primary">Bokslut & Årsredovisning</h3>
              <p className="text-gray-600 mb-4">
                Upprättande av årsbokslut och årsredovisning samt biträde vid deklaration.
              </p>
              <Link 
                href="/produkter" 
                className="text-accent hover:text-secondary font-medium"
              >
                Läs mer →
              </Link>
            </div>
          </div>
          
          <div className="card hover:border-primary hover:border">
            <div className="relative h-40 sm:h-48 w-full"> {/* Adjusted height for mobile */}
              <Image 
                src="/images/new_accounting_advice.jpeg" /* Updated image */ 
                alt="Rådgivning och ekonomistyrning" 
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-primary">Rådgivning & Ekonomistyrning</h3>
              <p className="text-gray-600 mb-4">
                Ekonomisk analys och rådgivning, budgetering och prognoser samt likviditetsplanering.
              </p>
              <Link 
                href="/produkter" 
                className="text-accent hover:text-secondary font-medium"
              >
                Läs mer →
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Customer Value */}
      <div className="bg-light py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Kundnytta</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Vi satsar på kvalitet och arbetsmiljö, att vara effektiva för våra kunder, och att våra kunder sparar tid och känner sig tryggare.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0 bg-accent/20 rounded-md p-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold mb-2 text-primary">Spara tid</h3>
                  <p className="text-gray-600">
                    Genom att överlåta redovisningen till oss kan du fokusera på din kärnverksamhet och det du är bäst på.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-accent/20 rounded-md p-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold mb-2 text-primary">Känn dig trygg</h3>
                  <p className="text-gray-600">
                    Med vår expertis kan du känna dig trygg med att din redovisning sköts korrekt och enligt gällande regler.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0 bg-accent/20 rounded-md p-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold mb-2 text-primary">Effektiv ekonomistyrning</h3>
                  <p className="text-gray-600">
                    Vi hjälper dig att få bättre kontroll över din ekonomi och fatta välgrundade affärsbeslut.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-accent/20 rounded-md p-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold mb-2 text-primary">Personlig service</h3>
                  <p className="text-gray-600">
                    Vi erbjuder personlig service och anpassar våra tjänster efter ditt företags specifika behov.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Payment Options */}
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">Betalningsalternativ</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Vi erbjuder flera olika betalningsalternativ för att göra det enkelt för dig att betala för våra tjänster.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-lg transition duration-300 border border-gray-100 hover:border-accent">
            <div className="relative h-24 w-full mb-4 flex items-center justify-center gap-4"> {/* Added gap-4 */}
              <Image
                src="/images/visa_logo.png" // Updated src
                alt="Visa" // Updated alt
                width={80} // Adjusted width
                height={40} // Adjusted height
                style={{ objectFit: 'contain' }}
              />
              <Image
                src="/images/mastercard_logo.png" // Added Mastercard image
                alt="Mastercard" // Added alt
                width={80} // Adjusted width
                height={50} // Adjusted height
                style={{ objectFit: 'contain' }}
              />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-primary">Visa/Mastercard</h3>
            <p className="text-gray-600">
              Betala enkelt och säkert med ditt Visa eller Mastercard.
            </p>
          </div>
          
          {/* Removed Swish option */}
          
          <div className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-lg transition duration-300 border border-gray-100 hover:border-accent">
            <div className="relative h-24 w-full mb-4 flex items-center justify-center"> {/* Centered Klarna logo */}
              <Image
                src="/images/klarna_logo.png" // Updated src
                alt="Klarna" // Updated alt
                width={100} // Adjusted width
                height={40} // Adjusted height
                style={{ objectFit: 'contain' }}
              />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-primary">Klarna</h3>
            <p className="text-gray-600">
              Betala nu, senare eller dela upp betalningen.
            </p>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <Link 
            href="/retur-policy" 
            className="text-accent hover:text-secondary font-medium"
          >
            Läs mer om vår retur- och återbetalningspolicy
          </Link>
        </div>
      </div>
      
      {/* Call to Action */}
      <div className="bg-gradient-primary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Redo att ta nästa steg?</h2>
          <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
            Kontakta oss idag för att diskutera hur vi kan hjälpa ditt företag med redovisning och ekonomistyrning.
          </p>
          <Link 
            href="/kontakt" 
            className="bg-accent text-white hover:bg-accent-hover font-medium py-3 px-8 rounded-md transition duration-300 inline-block"
          >
            Kontakta oss
          </Link>
        </div>
      </div>
    </div>
  );
}
