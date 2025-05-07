"use client";

import { useState } from 'react';
import { Product } from '@/types/product';
import PaymentOptions from '@/components/products/PaymentOptions';
import Link from 'next/link';

interface ProductDetailPageProps {
  params: {
    id: string;
  };
}

export default function ProductDetailPage({ params }: ProductDetailPageProps) {
  const productId = parseInt(params.id);
  
  // In a real application, this would fetch from an API
  // For now, we'll import from our data file
  const products = require('@/data/products').products;
  const product = products.find((p: Product) => p.id === productId);
  
  const [quantity, setQuantity] = useState(1);
  
  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold mb-4">Produkt hittades inte</h1>
        <p className="mb-8">Produkten du söker finns inte eller har tagits bort.</p>
        <Link 
          href="/produkter" 
          className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-md transition duration-300"
        >
          Tillbaka till produkter
        </Link>
      </div>
    );
  }
  
  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row gap-12">
          {/* Product Image */}
          <div className="md:w-1/2">
            <div className="bg-gray-100 rounded-lg p-8 h-96 flex items-center justify-center">
              <div className="text-8xl text-blue-500 font-bold">WAS</div>
            </div>
          </div>
          
          {/* Product Details */}
          <div className="md:w-1/2">
            <nav className="flex mb-4 text-sm">
              <Link href="/" className="text-gray-500 hover:text-blue-500">Hem</Link>
              <span className="mx-2 text-gray-500">/</span>
              <Link href="/produkter" className="text-gray-500 hover:text-blue-500">Produkter</Link>
              <span className="mx-2 text-gray-500">/</span>
              <span className="text-gray-700">{product.name}</span>
            </nav>
            
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
            <p className="text-4xl font-bold text-blue-500 mb-6">{product.price}</p>
            
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-2">Beskrivning</h2>
              <p className="text-gray-700">{product.description}</p>
            </div>
            
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-2">Kategori</h2>
              <p className="text-gray-700">{product.category}</p>
            </div>
            
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-2">Antal</h2>
              <div className="flex items-center">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded-l"
                >
                  -
                </button>
                <input 
                  type="number" 
                  value={quantity} 
                  onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                  className="w-16 text-center py-2 border-t border-b border-gray-300"
                />
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded-r"
                >
                  +
                </button>
              </div>
            </div>
            
            <PaymentOptions product={product} />
          </div>
        </div>
        
        {/* Related Products */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-8">Relaterade produkter</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products
              .filter((p: Product) => p.category === product.category && p.id !== product.id)
              .slice(0, 3)
              .map((p: Product) => (
                <div key={p.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
                  <div className="p-4 bg-gray-100 h-40 flex items-center justify-center">
                    <div className="text-4xl text-blue-500 font-bold">WAS</div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold mb-2">{p.name}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">{p.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-xl font-bold text-blue-500">{p.price}</span>
                      <Link 
                        href={`/produkter/${p.id}`}
                        className="text-blue-500 hover:text-blue-600 font-medium"
                      >
                        Visa detaljer
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
