"use client";

import { useI18n } from '@/i18n/i18n-context';
import Link from 'next/link';

export default function OmOssPage() {
  const { t } = useI18n();
  
  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-primary">Om oss</h1>
        
        <div className="mb-12">
          <p className="text-lg text-gray-700 mb-6">
            WAS Redovisningskonsulter är en redovisningsbyrå som specialiserar sig på redovisningstjänster för små och medelstora företag, med särskild expertis inom taxibranschen.
          </p>
        </div>

        {/* Om oss Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-light p-6 rounded-lg shadow-md border border-gray-100 hover:border-accent transition duration-300">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Vår historia</h2>
            <p className="text-gray-700 mb-4">
              WAS Redovisningskonsulter grundades med visionen att erbjuda skräddarsydda redovisningstjänster för taxiföretag och andra små till medelstora företag. Med vår specialiserade kunskap inom taxibranschen har vi byggt upp ett starkt rykte för kvalitet och pålitlighet.
            </p>
            <p className="text-gray-700">
              Genom åren har vi expanderat våra tjänster för att möta våra kunders växande behov, samtidigt som vi har behållit vårt fokus på personlig service och hög kvalitet.
            </p>
          </div>
          
          <div className="bg-light p-6 rounded-lg shadow-md border border-gray-100 hover:border-accent transition duration-300">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Våra värderingar</h2>
            <p className="text-gray-700 mb-4">
              På WAS Redovisningskonsulter tror vi på att bygga långsiktiga relationer med våra kunder baserade på förtroende, integritet och professionalism.
            </p>
            <ul className="list-disc pl-5 text-gray-700">
              <li className="mb-2">Kvalitet i allt vi gör</li>
              <li className="mb-2">Personlig service anpassad efter kundens behov</li>
              <li className="mb-2">Transparens i prissättning och arbetsprocesser</li>
              <li className="mb-2">Kontinuerlig kompetensutveckling</li>
              <li>Etiskt förhållningssätt i alla affärsrelationer</li>
            </ul>
          </div>
        </div>
        
        {/* Vårt team section removed as requested */}
        
        <div className="bg-light p-6 rounded-lg shadow-md border border-gray-100">
          <h2 className="text-2xl font-semibold mb-4 text-primary">Kontakta oss</h2>
          <p className="text-gray-700 mb-6">
            Vill du veta mer om hur vi kan hjälpa ditt företag? Kontakta oss för en kostnadsfri konsultation.
          </p>
          <div className="flex justify-center">
            <Link 
              href="/kontakt" 
              className="bg-accent hover:bg-accent-hover text-white font-medium py-3 px-6 rounded-md transition duration-300"
            >
              Kontakta oss
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
