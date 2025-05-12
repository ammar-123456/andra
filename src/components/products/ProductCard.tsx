"use client";

import { useI18n } from '@/i18n/i18n-context';
import { Product } from '@/types/product';
import Image from 'next/image';
import { useCart } from '@/context/CartContext';
import { useRouter } from 'next/navigation'; // Import useRouter

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { t } = useI18n();
  const { addToCart } = useCart();
  const router = useRouter(); // Initialize useRouter
  
  const handleAddToCart = () => {
    addToCart(product, 1);
    router.push('/kassa'); // Redirect to checkout page (assuming '/kassa' is the path)
  };
  
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
      <div className="relative h-40 sm:h-48 w-full"> {/* Adjusted height for mobile */}
        {product.category === 'bokforing 1 taxibil' && (
          <Image 
            src="/images/images.jpg" 
            alt={product.name} 
            fill
            style={{ objectFit: 'cover' }}
          />
        )}
        {product.category === 'bokforing 1 Taxibil AB' && (
          <Image 
            src="/images/financial_consulting_product_8.webp" 
            alt={product.name} 
            fill
            style={{ objectFit: 'cover' }}
          />
        )}
        {product.category === 'bokforing alla verksamhet 1 tim' && (
          <Image 
            src="/images/accounting_laptop.webp" 
            alt={product.name} 
            fill
            style={{ objectFit: 'cover' }}
          />
        )}
        {product.category === 'bokforing ytligare en Taxibilar' && (
          <Image 
            src="/images/accounting_financial_report.webp" 
            alt={product.name} 
            fill
            style={{ objectFit: 'cover' }}
          />
        )}
        {product.category === 'loneadministration' && (
          <Image 
            src="/images/accounting_professionals.jpeg" 
            alt={product.name} 
            fill
            style={{ objectFit: 'cover' }}
          />
        )}
        {product.category === 'arsredovisning Aktiebolag' && (
          <Image 
            src="/images/JPEG-fil.webp" 
            alt={product.name} 
            fill
            style={{ objectFit: 'cover' }}
          />
        )}
        {product.category === 'arsredovisning' && (
          <Image 
            src="/images/financial_consulting_product_3.jpeg" 
            alt={product.name} 
            fill
            style={{ objectFit: 'cover' }}
          />
        )}
        {product.category === 'deklaration Enskild Firma' && (
          <Image 
            src="/images/produkt_bild.jpg" 
            alt={product.name} 
            fill
            style={{ objectFit: 'cover' }}
          />
        )}
        {product.category === 'deklaration Aktiebolag' && (
          <Image 
            src="/images/accounting_desk.jpeg" 
            alt={product.name} 
            fill
            style={{ objectFit: 'cover' }}
          />
        )}
        {product.category === 'Ekonomisk radgivning' && (
          <Image 
            src="/images/financial_consulting_product_1.jpg" 
            alt={product.name} 
            fill
            style={{ objectFit: 'cover' }}
          />
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-primary">{product.name}</h3>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-accent">{product.price}</span>
          <button 
            onClick={handleAddToCart}
            className="bg-primary hover:bg-primary-hover text-white font-medium py-2 px-4 rounded-md transition duration-300"
          >
            {t('product.addToCart')}
          </button>
        </div>
      </div>
    </div>
  );
}
