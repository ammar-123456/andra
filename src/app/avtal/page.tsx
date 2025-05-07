"use client";

import { useI18n } from '@/i18n/i18n-context';
import Link from 'next/link';

export default function AvtalPage() {
  const { t } = useI18n();
  
  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-primary">Avtal</h1>
        
        <div className="mb-12">
          <p className="text-lg text-gray-700 mb-6">
            Här hittar du våra standardavtal för olika redovisningstjänster. Välj det avtal som passar dina behov och signera digitalt för att komma igång med våra tjänster.
          </p>
        </div>

        {/* Avtal Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300 border border-gray-100 hover:border-accent">
            <div className="p-6 bg-light">
              <h2 className="text-2xl font-semibold mb-2 text-primary">Löpande bokföringsavtal</h2>
              <p className="text-gray-700 mb-4">
                Detta avtal omfattar löpande bokföring, avstämning av konton, momsredovisning och rapportering till kund.
              </p>
              <ul className="list-disc pl-5 mb-4 text-gray-700">
                <li>Månatlig bokföring</li>
                <li>Avstämning av konton</li>
                <li>Momsredovisning</li>
                <li>Rapportering till kund</li>
              </ul>
              <div className="mt-4">
                <Link 
                  href="/avtal/bokforing"
                  className="bg-primary hover:bg-primary-hover text-white font-medium py-2 px-4 rounded-md transition duration-300"
                >
                  Visa avtal
                </Link>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300 border border-gray-100 hover:border-accent">
            <div className="p-6 bg-light">
              <h2 className="text-2xl font-semibold mb-2 text-primary">Årsredovisningsavtal</h2>
              <p className="text-gray-700 mb-4">
                Detta avtal omfattar upprättande av årsbokslut och årsredovisning samt biträde vid deklaration.
              </p>
              <ul className="list-disc pl-5 mb-4 text-gray-700">
                <li>Upprättande av årsbokslut</li>
                <li>Framtagning av årsredovisning</li>
                <li>Biträde vid deklaration</li>
                <li>Rådgivning i samband med bokslutsarbetet</li>
              </ul>
              <div className="mt-4">
                <Link 
                  href="/avtal/arsredovisning"
                  className="bg-primary hover:bg-primary-hover text-white font-medium py-2 px-4 rounded-md transition duration-300"
                >
                  Visa avtal
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300 border border-gray-100 hover:border-accent">
            <div className="p-6 bg-light">
              <h2 className="text-2xl font-semibold mb-2 text-primary">Löneadministrationsavtal</h2>
              <p className="text-gray-700 mb-4">
                Detta avtal omfattar beräkning av löner, framtagning av lönespecifikationer och rapportering till Skatteverket.
              </p>
              <ul className="list-disc pl-5 mb-4 text-gray-700">
                <li>Beräkning av löner</li>
                <li>Framtagning av lönespecifikationer</li>
                <li>Rapportering till Skatteverket</li>
                <li>Arbetsgivardeklarationer</li>
              </ul>
              <div className="mt-4">
                <Link 
                  href="/avtal/loneadministration"
                  className="bg-primary hover:bg-primary-hover text-white font-medium py-2 px-4 rounded-md transition duration-300"
                >
                  Visa avtal
                </Link>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300 border border-gray-100 hover:border-accent">
            <div className="p-6 bg-light">
              <h2 className="text-2xl font-semibold mb-2 text-primary">Rådgivningsavtal</h2>
              <p className="text-gray-700 mb-4">
                Detta avtal omfattar ekonomisk analys och rådgivning, budgetering och prognoser samt likviditetsplanering.
              </p>
              <ul className="list-disc pl-5 mb-4 text-gray-700">
                <li>Ekonomisk analys och rådgivning</li>
                <li>Budgetering och prognoser</li>
                <li>Likviditetsplanering</li>
                <li>Kostnadsanalys och effektivisering</li>
              </ul>
              <div className="mt-4">
                <Link 
                  href="/avtal/radgivning"
                  className="bg-primary hover:bg-primary-hover text-white font-medium py-2 px-4 rounded-md transition duration-300"
                >
                  Visa avtal
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-light p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-primary">Digital signering</h2>
          <p className="text-gray-700 mb-6">
            Alla våra avtal kan signeras digitalt med BankID eller manuell signatur. Efter signering får du en kopia av avtalet via e-post och vi kontaktar dig för att komma igång med tjänsterna.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <div className="flex items-center justify-center bg-white p-4 rounded-md shadow-sm border border-gray-100">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-accent mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span className="text-gray-700 font-medium">BankID</span>
            </div>
            <div className="flex items-center justify-center bg-white p-4 rounded-md shadow-sm border border-gray-100">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-accent mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
              </svg>
              <span className="text-gray-700 font-medium">Manuell signatur</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
