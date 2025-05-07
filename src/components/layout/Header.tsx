"use client";

import Link from 'next/link';
import { useI18n } from '@/i18n/i18n-context';
import { useState } from 'react';
import CartIcon from '../cart/CartIcon';
import LanguageSwitcher from '../ui/LanguageSwitcher';

export default function Header() {
  const { t } = useI18n();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  return (
    <header className="bg-primary text-white shadow-md"> {/* Updated background class and added shadow */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">
            <img src="/images/logo.jpg" alt="WAS Redovisning Logo" className="h-10" /> {/* Updated to use image logo */}
          </Link>
          
          <div className="hidden md:flex flex-grow justify-center items-center space-x-8"> {/* Centered nav */}
            <nav className="flex space-x-8"> {/* Increased spacing */}
              <Link href="/" className="hover:text-accent transition duration-300 border-b-2 border-transparent hover:border-accent">
                {t('nav.home')}
              </Link>
              <Link href="/produkter" className="hover:text-accent transition duration-300 border-b-2 border-transparent hover:border-accent">
                {t('nav.products')}
              </Link>
              <Link href="/ekonomifakta" className="hover:text-accent transition duration-300 border-b-2 border-transparent hover:border-accent">
                {t('nav.economicFacts')}
              </Link>
              <Link href="/avtal" className="hover:text-accent transition duration-300 border-b-2 border-transparent hover:border-accent">
                {t('nav.agreements')}
              </Link>
              {/* Removed /avtal link based on reference site */}
              <Link href="/om-oss" className="hover:text-accent transition duration-300 border-b-2 border-transparent hover:border-accent">
                {t('nav.aboutUs')}
              </Link>
              <Link href="/kontakt" className="hover:text-accent transition duration-300 border-b-2 border-transparent hover:border-accent">
                {t('nav.contact')}
              </Link>
            </nav>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <CartIcon /> {/* Re-added CartIcon */}
            <LanguageSwitcher />
            {/* Add Förfrågan button? Needs clarification if it's needed */}
          </div>
          
          <div className="md:hidden flex items-center space-x-4">
            <CartIcon /> {/* Re-added CartIcon */}
            <LanguageSwitcher />
            <button 
              onClick={toggleMenu}
              className="text-white focus:outline-none"
              aria-label={isMenuOpen ? 'Stäng meny' : 'Öppna meny'}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <nav className="flex flex-col space-y-4">
              <Link 
                href="/" 
                className="hover:text-accent transition duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.home')}
              </Link>
              <Link 
                href="/produkter" 
                className="hover:text-accent transition duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.products')}
              </Link>
              <Link 
                href="/ekonomifakta" 
                className="hover:text-accent transition duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.economicFacts')}
              </Link>
              <Link 
                href="/avtal" 
                className="hover:text-accent transition duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.agreements')}
              </Link>
              <Link 
                href="/om-oss" 
                className="hover:text-accent transition duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.aboutUs')}
              </Link>
              <Link 
                href="/kontakt" 
                className="hover:text-accent transition duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.contact')}
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
