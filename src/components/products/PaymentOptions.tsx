"use client";

import { useState } from 'react';
import { Product } from '@/types/product';
import { useI18n } from '@/i18n/i18n-context';

interface PaymentOptionsProps {
  product: Product;
}

export default function PaymentOptions({ product }: PaymentOptionsProps) {
  const [selectedPayment, setSelectedPayment] = useState<string>('visa');
  const { t } = useI18n();

  return (
    <div className="mt-8">
      <h3 className="text-xl font-semibold mb-4">{t('product.payment.options')}</h3>
      
      <div className="space-y-4">
        <div className="flex items-center">
          <input 
            type="radio" 
            id="visa" 
            name="payment" 
            value="visa" 
            checked={selectedPayment === 'visa'} 
            onChange={() => setSelectedPayment('visa')}
            className="h-4 w-4 text-blue-500 focus:ring-blue-400"
          />
          <label htmlFor="visa" className="ml-3 flex items-center">
            <span className="text-gray-700 mr-2">{t('product.payment.visa')}</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
            </svg>
          </label>
        </div>
        
        <div className="flex items-center">
          <input 
            type="radio" 
            id="swish" 
            name="payment" 
            value="swish" 
            checked={selectedPayment === 'swish'} 
            onChange={() => setSelectedPayment('swish')}
            className="h-4 w-4 text-blue-500 focus:ring-blue-400"
          />
          <label htmlFor="swish" className="ml-3 flex items-center">
            <span className="text-gray-700 mr-2">{t('product.payment.swish')}</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
          </label>
        </div>
        
        <div className="flex items-center">
          <input 
            type="radio" 
            id="klarna" 
            name="payment" 
            value="klarna" 
            checked={selectedPayment === 'klarna'} 
            onChange={() => setSelectedPayment('klarna')}
            className="h-4 w-4 text-blue-500 focus:ring-blue-400"
          />
          <label htmlFor="klarna" className="ml-3 flex items-center">
            <span className="text-gray-700 mr-2">{t('product.payment.klarna')}</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2z" />
            </svg>
          </label>
        </div>
      </div>
      
      <div className="mt-6">
        <button 
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-md transition duration-300"
        >
          {t('product.payment.button')} {product.price} {t('product.payment.with')} {selectedPayment === 'visa' ? t('product.payment.visa') : selectedPayment === 'swish' ? t('product.payment.swish') : t('product.payment.klarna')}
        </button>
      </div>
      
      <div className="mt-4 text-sm text-gray-600">
        <p>{t('product.payment.terms')}</p>
      </div>
    </div>
  );
}
