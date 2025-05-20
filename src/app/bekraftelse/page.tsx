"use client";
import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useCart } from '@/context/CartContext';
import Image from 'next/image';
import { formatPrice } from '@/lib/utils';

export default function OrderConfirmation() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { items, totalPrice, clearCart } = useCart();
  const [orderNumber, setOrderNumber] = useState<string>("");
  const [orderDate, setOrderDate] = useState<string>("");
  
  useEffect(() => {
    // Generera ett unikt ordernummer
    const generateOrderNumber = () => {
      const timestamp = Date.now().toString();
      const random = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
      return `WAS-${timestamp.slice(-6)}-${random}`;
    };
    
    setOrderNumber(generateOrderNumber());
    setOrderDate(new Date().toLocaleDateString('sv-SE'));
    
    // Rensa varukorgen efter bekräftelse
    clearCart();
  }, [clearCart]);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-6">
        <div className="text-center mb-8">
          <div className="inline-block p-3 rounded-full bg-green-100 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-gray-800">Tack för din beställning!</h1>
          <p className="text-gray-600 mt-2">Din beställning har mottagits och behandlas nu.</p>
        </div>
        
        <div className="border-t border-b border-gray-200 py-4 mb-6">
          <div className="flex justify-between mb-2">
            <span className="font-medium">Ordernummer:</span>
            <span>{orderNumber}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Datum:</span>
            <span>{orderDate}</span>
          </div>
        </div>
        
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-4">Orderdetaljer</h2>
          {/* Visa beställda produkter här */}
        </div>
        
        <div className="bg-gray-50 p-4 rounded-md mb-6">
          <div className="flex justify-between font-bold text-lg">
            <span>Totalt:</span>
            <span className="text-primary">{formatPrice(totalPrice )}</span>
          </div>
        </div>
        
        <div className="text-center">
          <p className="text-gray-600 mb-4">En bekräftelse har skickats till din e-post.</p>
          <button 
            onClick={() => router.push('/')}
            className="bg-primary hover:bg-primary-dark text-white font-medium py-2 px-6 rounded-md transition duration-300"
          >
            Tillbaka till startsidan
          </button>
        </div>
      </div>
    </div>
  );
}
