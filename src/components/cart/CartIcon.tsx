"use client";

import { useCart } from '@/context/CartContext';
import { useI18n } from '@/i18n/i18n-context';
import Link from 'next/link';
import { useState } from 'react';

export default function CartIcon() {
  const { totalItems, items, removeFromCart, updateQuantity, totalPrice } = useCart();
  const { t } = useI18n();
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleCart = () => {
    setIsOpen(!isOpen);
  };
  
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('sv-SE', { 
      style: 'currency', 
      currency: 'SEK',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2 
    }).format(price);
  };
  
  return (
    <div className="relative">
      <button 
        onClick={toggleCart}
        className="flex items-center text-white hover:text-accent transition duration-300"
        aria-label={t('cart.title')}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
        {totalItems > 0 && (
          <span className="absolute -top-2 -right-2 bg-accent text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
            {totalItems}
          </span>
        )}
      </button>
      
      {isOpen && (
        <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-xl z-50">
          <div className="p-4 border-b border-gray-200">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold text-primary">{t('cart.title')}</h3>
              <button 
                onClick={toggleCart}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
          
          <div className="max-h-96 overflow-y-auto">
            {items.length === 0 ? (
              <div className="p-4 text-center text-gray-500">
                {t('cart.empty')}
              </div>
            ) : (
              <ul>
                {items.map(item => (
                  <li key={item.product.id} className="p-4 border-b border-gray-100">
                    <div className="flex justify-between">
                      <div>
                        <h4 className="font-medium text-primary">{item.product.name}</h4>
                        <p className="text-sm text-gray-500">{formatPrice(parseFloat(item.product.price.replace(/[^\d,]/g, '').replace(',', '.')))} per st</p>
                      </div>
                      <button 
                        onClick={() => removeFromCart(item.product.id)}
                        className="text-red-500 hover:text-red-700"
                        aria-label="Ta bort produkt"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                    <div className="flex items-center mt-2">
                      <button 
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        className="bg-gray-200 text-gray-700 rounded-l-md px-2 py-1"
                        aria-label="Minska antal"
                      >
                        -
                      </button>
                      <span className="bg-gray-100 px-4 py-1">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        className="bg-gray-200 text-gray-700 rounded-r-md px-2 py-1"
                        aria-label="Öka antal"
                      >
                        +
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
          
          {items.length > 0 && (
            <div className="p-4 border-t border-gray-200">
              <div className="flex justify-between items-center mb-4">
                <span className="font-semibold">{t('cart.total')}</span>
                <span className="font-bold text-primary">{formatPrice(totalPrice)}</span>
              </div>
              <Link 
                href="/kassa"
                className="block w-full bg-primary hover:bg-primary-hover text-white text-center font-medium py-2 px-4 rounded-md transition duration-300"
                onClick={toggleCart}
              >
                {t('cart.checkout')}
              </Link>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
