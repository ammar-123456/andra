"use client";

import Link from 'next/link';
import Image from 'next/image'; // Added Image import here
import { useI18n } from '@/i18n/i18n-context';

export default function Footer() {
  const { t } = useI18n(); // Moved useI18n hook call here
  
  return (
    <footer className="bg-primary text-white pt-12 pb-8"> {/* Updated background class and padding */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-accent">WAS Redovisningskonsulter</h3>
            <p className="mb-2">Dackevägen 33 177 34, JÄRFÄLLA</p>
            <p className="mb-2">Telefon: 08-277444</p>
            <p className="mb-2">Corporate registratio number: 800809-0774</p>
            <p className="mb-2">
              E-post: <a href="mailto:info@wasredovisningskonsulter.se" className="text-accent hover:underline">info@wasredovisningskonsulter.se</a>
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-accent">Snabblänkar</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-accent transition duration-300">
                  {t('nav.home')}
                </Link>
              </li>
              <li>
                <Link href="/produkter" className="hover:text-accent transition duration-300">
                  {t('nav.products')}
                </Link>
              </li>
              <li>
                <Link href="/ekonomifakta" className="hover:text-accent transition duration-300">
                  {t('nav.economicFacts')}
                </Link>
              </li>
              <li>
                <Link href="/avtal" className="hover:text-accent transition duration-300">
                  {t('nav.agreements')}
                </Link>
              </li>
              <li>
                <Link href="/om-oss" className="hover:text-accent transition duration-300">
                  {t('nav.aboutUs')}
                </Link>
              </li>
              <li>
                <Link href="/kontakt" className="hover:text-accent transition duration-300">
                  {t('nav.contact')}
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Payment Options */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-accent">Betalningsalternativ</h3>
            {/* Updated payment options to use Image components */}
            <div className="flex items-center space-x-4 mb-6">
              <Image src="/images/visa_logo.png" alt="Visa" width={50} height={30} style={{ objectFit: 'contain' }} />
              <Image src="/images/mastercard_logo.png" alt="Mastercard" width={50} height={30} style={{ objectFit: 'contain' }} />
              <Image src="/images/klarna_logo.png" alt="Klarna" width={50} height={30} style={{ objectFit: 'contain' }} />
            </div>
            
            <h4 className="text-lg font-semibold mb-2 text-accent">Retur & Återbetalning</h4>
            <p className="mb-2">
              För information om vår policy för retur och återbetalning, 
              <Link href="/retur-policy" className="text-accent hover:underline ml-1">
                klicka här
              </Link>.
            </p>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p>© {new Date().getFullYear()} WAS Redovisningskonsulter. Alla rättigheter förbehållna.</p>
        </div>
      </div>
    </footer>
  );
}

