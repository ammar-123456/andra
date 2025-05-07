"use client";

import { useI18n } from '@/i18n/i18n-context';
import { useState } from 'react';
import { products } from '@/data/products';
import ProductCard from '@/components/products/ProductCard';
import PaymentOptions from '@/components/products/PaymentOptions';
import Image from 'next/image';

export default function ProdukterPage() {
  const { t } = useI18n();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const categories = [
    { id: 'all', name: 'Alla kategorier' },
    { id: 'bokforing 1 taxibil', name: 'Bokföring 1 Taxibilg' },
    { id: 'bokforing 1 Taxibil AB', name: 'Bokföring 1 Taxibil AB' },
    { id: 'bokforing alla verksamhet 1 tim', name: 'Bokföring alla verksamhet 1 tim' },
    { id: 'bokforing ytligare en Taxibilar', name: 'Bokföring ytligare en Taxibilar' },
    { id: 'loneadministration', name: 'Löneadministration' },
    { id: 'arsredovisning Enskild Firma', name: 'Årsredovisning Enskild Firma' },
    { id: 'arsredovisning Aktiebolag', name: 'Årsredovisning Aktiebolag' },
    { id: 'deklaration Enskild Firma', name: 'Deklaration Enskild Firma' },
    { id: 'deklaration Aktiebolag', name: 'Deklaration Aktiebolag' },
    { id: 'Ekonomisk radgivning', name: 'Ekonomisk rådgivning' },
  ];
  
  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });
  
  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-primary">Våra Produkter och Tjänster</h1>
        
        <div className="mb-12">
          <div className="relative h-64 w-full mb-8 rounded-lg overflow-hidden">
            <Image 
              src="/images/meeting.jpeg" // Updated src to new high-quality image
              alt="Redovisningstjänster" // Keep alt text or update if needed
              fill
              style={{ objectFit: 'cover' }}
              // Removed className="brightness-75"
            />
            {/* Removed the overlay div with text */}
          </div>
          
          
          <p className="text-lg text-gray-700 mb-6">
            Våra tjänster vänder sig till mindre och medelstora företag där vi kan erbjuda olika ekonomipaket för olika behov och storlek på företag, allt från löneadministration till leverantörsreskontra eller helhetslösningar för din ekonomiadministration.
          </p>
        </div>
        
        {/* Filter and Search */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="md:w-1/3">
            <select 
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {categories.map(category => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
          
          <div className="md:w-2/3 relative">
            <input 
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Sök efter produkter"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {filteredProducts.length > 0 ? (
            filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <div className="col-span-3 text-center py-12">
              <p className="text-lg text-gray-600">Inga produkter hittades. Försök med en annan sökning eller kategori.</p>
            </div>
          )}
        </div>
        
        {/* Payment Options */}
        <div className="bg-light p-8 rounded-lg shadow-md mb-16">
          <h2 className="text-2xl font-bold mb-6 text-center text-primary">Betalningsalternativ</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="relative h-24 w-full mb-4 flex items-center justify-center">
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

            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
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
        </div>
        
        {/* Return Policy */}
        <div className="bg-blue-50 p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4 text-center text-primary">Retur & Återbetalning</h2>
          <p className="text-gray-700 mb-4 text-center">
            Vi erbjuder full återbetalning om du inte är nöjd med våra tjänster inom 14 dagar från köpet.
          </p>
          <div className="text-center">
            <a 
              href="/retur-policy" 
              className="text-accent hover:text-secondary font-medium"
            >
              Läs mer om vår retur- och återbetalningspolicy
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}











// 'use client';

// import Image from 'next/image';

// export default function Services() {
//   return (
//     <section className="p-6 md:p-12">
//       <h1 className="text-3xl font-bold mb-6 text-center">Våra Redovisningstjänster</h1>

//       {/* Tjänst 1 */}
//       <div className="relative h-64 w-full mb-8 rounded-lg overflow-hidden">
//         <Image
//           src="/images/images.jpg"
//           alt="Bokföring 1 Taxibil"
//           fill
//           style={{ objectFit: 'cover' }}
//         />
//         <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
//           <h2 className="text-xl font-semibold">1. Bokföring 1 Taxibil</h2>
//           <p>Bokföring mm för enskild firma med en Taxibil.</p>
//           <p className="font-bold mt-1">1 437,00 kr</p>
//         </div>
//       </div>

//       {/* Tjänst 2 */}
//       <div className="relative h-64 w-full mb-8 rounded-lg overflow-hidden">
//         <Image
//           src="/images/images.jpg"
//           alt="Bokföring 1 Taxibil AB"
//           fill
//           style={{ objectFit: 'cover' }}
//         />
//         <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
//           <h2 className="text-xl font-semibold">2. Bokföring 1 Taxibil AB</h2>
//           <p>Bokföring mm för aktiebolag med en Taxibil.</p>
//           <p className="font-bold mt-1">2 131,00 kr</p>
//         </div>
//       </div>

//       {/* Tjänst 3 */}
//       <div className="relative h-64 w-full mb-8 rounded-lg overflow-hidden">
//         <Image
//           src="/images/images.jpg"
//           alt="Bokföring alla verksamhet 1 tim"
//           fill
//           style={{ objectFit: 'cover' }}
//         />
//         <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
//           <h2 className="text-xl font-semibold">3. Bokföring alla verksamhet 1 tim</h2>
//           <p>Bokföringstjänster för alla typer av verksamheter, debiteras per timme.</p>
//           <p className="font-bold mt-1">1 250,00 kr</p>
//         </div>
//       </div>

//       {/* Tjänst 4 */}
//       <div className="relative h-64 w-full mb-8 rounded-lg overflow-hidden">
//         <Image
//           src="/images/images.jpg"
//           alt="Bokföring ytterligare en Taxibilar"
//           fill
//           style={{ objectFit: 'cover' }}
//         />
//         <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
//           <h2 className="text-xl font-semibold">4. Bokföring ytterligare en Taxibilar</h2>
//           <p>Tilläggstjänst för bokföring av ytterligare taxibilar.</p>
//           <p className="font-bold mt-1">687,00 kr</p>
//         </div>
//       </div>

//       {/* Tjänst 5 */}
//       <div className="relative h-64 w-full mb-8 rounded-lg overflow-hidden">
//         <Image
//           src="/images/images.jpg"
//           alt="Lönespecifikation"
//           fill
//           style={{ objectFit: 'cover' }}
//         />
//         <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
//           <h2 className="text-xl font-semibold">5. Lönespecifikation</h2>
//           <p>Framtagning av lönespecifikationer för anställda.</p>
//           <p className="font-bold mt-1">137,50 kr</p>
//         </div>
//       </div>

//       {/* Tjänst 6 */}
//       <div className="relative h-64 w-full mb-8 rounded-lg overflow-hidden">
//         <Image
//           src="/images/images.jpg"
//           alt="Årsredovisning Enskild Firma"
//           fill
//           style={{ objectFit: 'cover' }}
//         />
//         <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
//           <h2 className="text-xl font-semibold">6. Årsredovisning Enskild Firma</h2>
//           <p>Upprättande av årsbokslut för enskild firma.</p>
//           <p className="font-bold mt-1">3 750,00 kr</p>
//         </div>
//       </div>

//       {/* Tjänst 7 */}
//       <div className="relative h-64 w-full mb-8 rounded-lg overflow-hidden">
//         <Image
//           src="/images/images.jpg"
//           alt="Årsredovisning Aktiebolag"
//           fill
//           style={{ objectFit: 'cover' }}
//         />
//         <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
//           <h2 className="text-xl font-semibold">7. Årsredovisning Aktiebolag</h2>
//           <p>Upprättande av årsredovisning för aktiebolag.</p>
//           <p className="font-bold mt-1">6 250,00 kr</p>
//         </div>
//       </div>

//       {/* Tjänst 8 */}
//       <div className="relative h-64 w-full mb-8 rounded-lg overflow-hidden">
//         <Image
//           src="/images/images.jpg"
//           alt="Deklaration Enskild Firma"
//           fill
//           style={{ objectFit: 'cover' }}
//         />
//         <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
//           <h2 className="text-xl font-semibold">8. Deklaration Enskild Firma</h2>
//           <p>Upprättande och inlämning av deklaration för enskild firma.</p>
//           <p className="font-bold mt-1">1 875,00 kr</p>
//         </div>
//       </div>

//       {/* Tjänst 9 */}
//       <div className="relative h-64 w-full mb-8 rounded-lg overflow-hidden">
//         <Image
//           src="/images/images.jpg"
//           alt="Deklaration Aktiebolag"
//           fill
//           style={{ objectFit: 'cover' }}
//         />
//         <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
//           <h2 className="text-xl font-semibold">9. Deklaration Aktiebolag</h2>
//           <p>Upprättande och inlämning av deklaration för aktiebolag.</p>
//           <p className="font-bold mt-1">2 500,00 kr</p>
//         </div>
//       </div>
//     </section>
//   );
// }
