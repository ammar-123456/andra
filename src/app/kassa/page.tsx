"use client";

import { useCart } from '@/context/CartContext';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function CheckoutPage() {
  const { items, removeFromCart, updateQuantity, totalPrice, clearCart } = useCart();
  const [step, setStep] = useState(1); // 1: Cart review, 2: Shipping & Billing, 3: Payment, 4: Confirmation
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    postalCode: '',
    city: '',
    country: 'Sverige',
    paymentMethod: 'card',
    cardNumber: '',
    cardExpiry: '',
    cardCvc: '',
    swishNumber: '',
    acceptTerms: false
  });
  
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('sv-SE', { 
      style: 'currency', 
      currency: 'SEK',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2 
    }).format(price);
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (step < 4) {
      setStep(step + 1);
    } else {
      // Process order
      alert('Tack för din beställning! Din order har mottagits.');
      clearCart();
      // Redirect to confirmation page or home
      window.location.href = '/';
    }
  };
  
  const goBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };
  
  if (items.length === 0 && step === 1) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-3xl font-bold mb-6 text-primary">Din varukorg är tom</h1>
          <p className="text-lg text-gray-600 mb-8">
            Du har inga produkter i din varukorg. Utforska våra tjänster för att hitta något som passar ditt företag.
          </p>
          <Link 
            href="/produkter"
            className="bg-primary hover:bg-primary-hover text-white font-medium py-3 px-6 rounded-md transition duration-300"
          >
            Utforska våra tjänster
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-8 text-primary text-center">Kassa</h1>
      
      {/* Checkout Steps */}
      <div className="max-w-4xl mx-auto mb-12">
        <div className="flex justify-between">
          <div className={`flex flex-col items-center ${step >= 1 ? 'text-primary' : 'text-gray-400'}`}>
            <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${step >= 1 ? 'bg-primary text-white' : 'bg-gray-200 text-gray-500'}`}>
              1
            </div>
            <span className="text-sm">Varukorg</span>
          </div>
          <div className="flex-1 flex items-center">
            <div className={`h-1 w-full ${step >= 2 ? 'bg-primary' : 'bg-gray-200'}`}></div>
          </div>
          <div className={`flex flex-col items-center ${step >= 2 ? 'text-primary' : 'text-gray-400'}`}>
            <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${step >= 2 ? 'bg-primary text-white' : 'bg-gray-200 text-gray-500'}`}>
              2
            </div>
            <span className="text-sm">Leverans & Fakturering</span>
          </div>
          <div className="flex-1 flex items-center">
            <div className={`h-1 w-full ${step >= 3 ? 'bg-primary' : 'bg-gray-200'}`}></div>
          </div>
          <div className={`flex flex-col items-center ${step >= 3 ? 'text-primary' : 'text-gray-400'}`}>
            <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${step >= 3 ? 'bg-primary text-white' : 'bg-gray-200 text-gray-500'}`}>
              3
            </div>
            <span className="text-sm">Betalning</span>
          </div>
          <div className="flex-1 flex items-center">
            <div className={`h-1 w-full ${step >= 4 ? 'bg-primary' : 'bg-gray-200'}`}></div>
          </div>
          <div className={`flex flex-col items-center ${step >= 4 ? 'text-primary' : 'text-gray-400'}`}>
            <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${step >= 4 ? 'bg-primary text-white' : 'bg-gray-200 text-gray-500'}`}>
              4
            </div>
            <span className="text-sm">Bekräftelse</span>
          </div>
        </div>
      </div>
      
      <div className="max-w-4xl mx-auto">
        <form onSubmit={handleSubmit}>
          {/* Step 1: Cart Review */}
          {step === 1 && (
            <div>
              <h2 className="text-2xl font-semibold mb-6 text-primary">Granska din varukorg</h2>
              
              <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Produkt</th>
                      <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Antal</th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Pris</th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Summa</th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {items.map(item => {
                      const price = parseFloat(item.product.price.replace(/[^\d,]/g, '').replace(',', '.'));
                      return (
                        <tr key={item.product.id}>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="flex-shrink-0 h-10 w-10 bg-gray-200 rounded-md flex items-center justify-center">
                                {item.product.category === 'bokforing 1 taxibil' && (
                                  <Image 
                                    src="/images/images.jpg" 
                                    alt={item.product.name} 
                                    width={40}
                                    height={40}
                                    className="rounded-md"
                                  />
                                )}
                                {item.product.category === 'bokforing 1 Taxibil AB' && (
                                  <Image 
                                    src="/images/financial_consulting_product_8.webp" 
                                    alt={item.product.name} 
                                    width={40}
                                    height={40}
                                    className="rounded-md"
                                  />
                                )}
                                {item.product.category === 'bokforing alla verksamhet 1 tim' && (
                                  <Image 
                                    src="/images/accounting_laptop.webp" 
                                    alt={item.product.name} 
                                    width={40}
                                    height={40}
                                    className="rounded-md"
                                  />
                                )}
                                {item.product.category === 'bokforing ytligare en Taxibilar' && (
                                  <Image 
                                    src="/images/accounting_financial_report.webp" 
                                    alt={item.product.name} 
                                    width={40}
                                    height={40}
                                    className="rounded-md"
                                  />
                                )}
                                {item.product.category === 'loneadministration' && (
                                  <Image 
                                    src="/images/accounting_professionals.jpeg" 
                                    alt={item.product.name} 
                                    width={40}
                                    height={40}
                                    className="rounded-md"
                                  />
                                )}
                                {item.product.category === 'arsredovisning Aktiebolag' && (
                                  <Image 
                                    src="/images/JPEG-fil.webp" 
                                    alt={item.product.name} 
                                    width={40}
                                    height={40}
                                    className="rounded-md"
                                  />
                                )}
                                {item.product.category === 'arsredovisning' && (
                                  <Image 
                                    src="/images/financial_consulting_product_3.jpeg" 
                                    alt={item.product.name} 
                                    width={40}
                                    height={40}
                                    className="rounded-md"
                                  />
                                )}
                                {item.product.category === 'deklaration Enskild Firma' && (
                                  <Image 
                                    src="/images/produkt_bild.jpg" 
                                    alt={item.product.name} 
                                    width={40}
                                    height={40}
                                    className="rounded-md"
                                  />
                                )}
                                {item.product.category === 'deklaration Aktiebolag' && (
                                  <Image 
                                    src="/images/accounting_desk.jpeg" 
                                    alt={item.product.name} 
                                    width={40}
                                    height={40}
                                    className="rounded-md"
                                  />
                                )}
                                {item.product.category === 'Ekonomisk radgivning' && (
                                  <Image 
                                    src="/images/financial_consulting_product_1.jpg" 
                                    alt={item.product.name} 
                                    width={40}
                                    height={40}
                                    className="rounded-md"
                                  />
                                )}
                              </div>
                              <div className="ml-4">
                                <div className="text-sm font-medium text-gray-900">{item.product.name}</div>
                                <div className="text-sm text-gray-500">{item.product.category}</div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center justify-center">
                              <button 
                                type="button"
                                onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                                className="bg-gray-200 text-gray-700 rounded-l-md px-2 py-1"
                                aria-label="Minska antal"
                              >
                                -
                              </button>
                              <span className="bg-gray-100 px-4 py-1">{item.quantity}</span>
                              <button 
                                type="button"
                                onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                                className="bg-gray-200 text-gray-700 rounded-r-md px-2 py-1"
                                aria-label="Öka antal"
                              >
                                +
                              </button>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm text-gray-500">
                            {formatPrice(price)}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium text-gray-900">
                            {formatPrice(price * item.quantity)}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <button 
                              type="button"
                              onClick={() => removeFromCart(item.product.id)}
                              className="text-red-500 hover:text-red-700"
                              aria-label="Ta bort produkt"
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                              </svg>
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                  <tfoot className="bg-gray-50">
                    <tr>
                      <td colSpan={3} className="px-6 py-4 text-right font-semibold">Totalt:</td>
                      <td className="px-6 py-4 text-right font-bold text-primary">{formatPrice(totalPrice)}</td>
                      <td></td>
                    </tr>
                  </tfoot>
                </table>
              </div>
              
              <div className="flex justify-between">
                <Link 
                  href="/produkter"
                  className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium py-2 px-4 rounded-md transition duration-300"
                >
                  Fortsätt handla
                </Link>
                <button 
                  type="button"
                  onClick={() => setStep(2)}
                  className="bg-primary hover:bg-primary-hover text-white font-medium py-2 px-4 rounded-md transition duration-300"
                >
                  Fortsätt till leverans & fakturering
                </button>
              </div>
            </div>
          )}
          
          {/* Step 2: Shipping & Billing */}
          {step === 2 && (
            <div>
              <h2 className="text-2xl font-semibold mb-6 text-primary">Leverans & Fakturering</h2>
              
              <div className="bg-white rounded-lg shadow-md overflow-hidden p-6 mb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">Förnamn *</label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Efternamn *</label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">E-post *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Telefon *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  
                  <div className="md:col-span-2">
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">Adress *</label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="postalCode" className="block text-sm font-medium text-gray-700 mb-1">Postnummer *</label>
                    <input
                      type="text"
                      id="postalCode"
                      name="postalCode"
                      value={formData.postalCode}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">Ort *</label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">Land *</label>
                    <select
                      id="country"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="Sverige">Sverige</option>
                      <option value="Norge">Norge</option>
                      <option value="Danmark">Danmark</option>
                      <option value="Finland">Finland</option>
                    </select>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-between">
                <button 
                  type="button"
                  onClick={goBack}
                  className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium py-2 px-4 rounded-md transition duration-300"
                >
                  Tillbaka
                </button>
                <button 
                  type="button"
                  onClick={() => setStep(3)}
                  className="bg-primary hover:bg-primary-hover text-white font-medium py-2 px-4 rounded-md transition duration-300"
                >
                  Fortsätt till betalning
                </button>
              </div>
            </div>
          )}
          
          {/* Step 3: Payment */}
          {step === 3 && (
            <div>
              <h2 className="text-2xl font-semibold mb-6 text-primary">Betalning</h2>
              
              <div className="bg-white rounded-lg shadow-md overflow-hidden p-6 mb-8">
                <div className="mb-6">
                  <h3 className="text-lg font-medium mb-4 text-primary">Välj betalningsmetod</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="card"
                        name="paymentMethod"
                        value="card"
                        checked={formData.paymentMethod === 'card'}
                        onChange={handleChange}
                        className="h-4 w-4 text-primary focus:ring-primary border-gray-300"
                      />
                      <label htmlFor="card" className="ml-3 block text-sm font-medium text-gray-700">
                        Betalkort (Visa/Mastercard)
                      </label>
                    </div>
                    
                    {/* <div className="flex items-center">
                      <input
                        type="radio"
                        id="swish"
                        name="paymentMethod"
                        value="swish"
                        checked={formData.paymentMethod === 'swish'}
                        onChange={handleChange}
                        className="h-4 w-4 text-primary focus:ring-primary border-gray-300"
                      />
                      <label htmlFor="swish" className="ml-3 block text-sm font-medium text-gray-700">
                        Swish
                      </label>
                    </div> */}
                    
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="klarna"
                        name="paymentMethod"
                        value="klarna"
                        checked={formData.paymentMethod === 'klarna'}
                        onChange={handleChange}
                        className="h-4 w-4 text-primary focus:ring-primary border-gray-300"
                      />
                      <label htmlFor="klarna" className="ml-3 block text-sm font-medium text-gray-700">
                        Klarna
                      </label>
                    </div>
                  </div>
                </div>
                
                {formData.paymentMethod === 'card' && (
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700 mb-1">Kortnummer *</label>
                      <input
                        type="text"
                        id="cardNumber"
                        name="cardNumber"
                        value={formData.cardNumber}
                        onChange={handleChange}
                        required
                        placeholder="1234 5678 9012 3456"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="cardExpiry" className="block text-sm font-medium text-gray-700 mb-1">Utgångsdatum *</label>
                        <input
                          type="text"
                          id="cardExpiry"
                          name="cardExpiry"
                          value={formData.cardExpiry}
                          onChange={handleChange}
                          required
                          placeholder="MM/ÅÅ"
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="cardCvc" className="block text-sm font-medium text-gray-700 mb-1">CVC *</label>
                        <input
                          type="text"
                          id="cardCvc"
                          name="cardCvc"
                          value={formData.cardCvc}
                          onChange={handleChange}
                          required
                          placeholder="123"
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      </div>
                    </div>
                  </div>
                )}
                
                {/* {formData.paymentMethod === 'swish' && (
                  <div>
                    <label htmlFor="swishNumber" className="block text-sm font-medium text-gray-700 mb-1">Swish-nummer *</label>
                    <input
                      type="tel"
                      id="swishNumber"
                      name="swishNumber"
                      value={formData.swishNumber}
                      onChange={handleChange}
                      required
                      placeholder="07X-XXX XX XX"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                )} */}
                
                {formData.paymentMethod === 'klarna' && (
                  <div className="bg-gray-50 p-4 rounded-md">
                    <p className="text-sm text-gray-600">
                      Du kommer att omdirigeras till Klarna för att slutföra din betalning efter att du klickat på "Slutför beställning".
                    </p>
                  </div>
                )}
                
                <div className="mt-6">
                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      id="acceptTerms"
                      name="acceptTerms"
                      checked={formData.acceptTerms}
                      onChange={handleChange}
                      required
                      className="h-4 w-4 mt-1 text-primary focus:ring-primary border-gray-300 rounded"
                    />
                    <label htmlFor="acceptTerms" className="ml-3 block text-sm text-gray-700">
                      Jag godkänner <Link href="/retur-policy" className="text-accent hover:underline">villkoren</Link> och bekräftar att jag har läst <Link href="/retur-policy" className="text-accent hover:underline">integritetspolicyn</Link>.
                    </label>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg shadow-md mb-8">
                <h3 className="text-lg font-medium mb-4 text-primary">Ordersammanfattning</h3>
                
                <div className="space-y-2 mb-4">
                  {items.map(item => {
                    const price = parseFloat(item.product.price.replace(/[^\d,]/g, '').replace(',', '.'));
                    return (
                      <div key={item.product.id} className="flex justify-between">
                        <span className="text-gray-600">{item.product.name} x {item.quantity}</span>
                        <span className="font-medium">{formatPrice(price * item.quantity)}</span>
                      </div>
                    );
                  })}
                </div>
                
                <div className="border-t border-gray-200 pt-4">
                  <div className="flex justify-between font-bold">
                    <span>Totalt:</span>
                    <span className="text-primary">{formatPrice(totalPrice)}</span>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-between">
                <button 
                  type="button"
                  onClick={goBack}
                  className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium py-2 px-4 rounded-md transition duration-300"
                >
                  Tillbaka
                </button>
                <button 
                  type="button"
                  onClick={() => setStep(4)}
                  className="bg-primary hover:bg-primary-hover text-white font-medium py-2 px-4 rounded-md transition duration-300"
                >
                  Granska beställning
                </button>
              </div>
            </div>
          )}
          
          {/* Step 4: Confirmation */}
          {step === 4 && (
            <div>
              <h2 className="text-2xl font-semibold mb-6 text-primary">Bekräfta din beställning</h2>
              
              <div className="bg-white rounded-lg shadow-md overflow-hidden p-6 mb-8">
                <h3 className="text-lg font-medium mb-4 text-primary">Leveransinformation</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div>
                    <p className="text-sm text-gray-500">Namn</p>
                    <p className="font-medium">{formData.firstName} {formData.lastName}</p>
                  </div>
                  
                  <div>
                    <p className="text-sm text-gray-500">E-post</p>
                    <p className="font-medium">{formData.email}</p>
                  </div>
                  
                  <div>
                    <p className="text-sm text-gray-500">Telefon</p>
                    <p className="font-medium">{formData.phone}</p>
                  </div>
                  
                  <div>
                    <p className="text-sm text-gray-500">Adress</p>
                    <p className="font-medium">{formData.address}, {formData.postalCode} {formData.city}, {formData.country}</p>
                  </div>
                </div>
                
                <h3 className="text-lg font-medium mb-4 text-primary">Betalningsinformation</h3>
                
                <div className="mb-6">
                  <p className="text-sm text-gray-500">Betalningsmetod</p>
                  <p className="font-medium">
                    {formData.paymentMethod === 'card' && 'Betalkort (Visa/Mastercard)'}
                    {/* {formData.paymentMethod === 'swish' && 'Swish'} */}
                    {formData.paymentMethod === 'klarna' && 'Klarna'}
                  </p>
                </div>
                
                <h3 className="text-lg font-medium mb-4 text-primary">Beställda produkter</h3>
                
                <div className="space-y-4 mb-6">
                  {items.map(item => {
                    const price = parseFloat(item.product.price.replace(/[^\d,]/g, '').replace(',', '.'));
                    return (
                      <div key={item.product.id} className="flex justify-between items-center">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10 bg-gray-200 rounded-md flex items-center justify-center">
                            {item.product.category === 'bokforing 1 taxibil' && (
                              <Image 
                                src="/images/images.jpg" 
                                alt={item.product.name} 
                                width={40}
                                height={40}
                                className="rounded-md"
                              />
                            )}
                            {item.product.category === 'bokforing 1 Taxibil AB' && (
                              <Image 
                                src="/images/financial_consulting_product_8.webp" 
                                alt={item.product.name} 
                                width={40}
                                height={40}
                                className="rounded-md"
                              />
                            )}
                            {item.product.category === 'bokforing alla verksamhet 1 tim' && (
                              <Image 
                                src="/images/accounting_laptop.webp" 
                                alt={item.product.name} 
                                width={40}
                                height={40}
                                className="rounded-md"
                              />
                            )}
                            {item.product.category === 'bokforing ytligare en Taxibilar' && (
                              <Image 
                                src="/images/accounting_financial_report.webp" 
                                alt={item.product.name} 
                                width={40}
                                height={40}
                                className="rounded-md"
                              />
                            )}
                            {item.product.category === 'loneadministration' && (
                              <Image 
                                src="/images/accounting_professionals.jpeg" 
                                alt={item.product.name} 
                                width={40}
                                height={40}
                                className="rounded-md"
                              />
                            )}
                            {item.product.category === 'arsredovisning Aktiebolag' && (
                              <Image 
                                src="/images/JPEG-fil.webp" 
                                alt={item.product.name} 
                                width={40}
                                height={40}
                                className="rounded-md"
                              />
                            )}
                            {item.product.category === 'arsredovisning' && (
                              <Image 
                                src="/images/financial_consulting_product_3.jpeg" 
                                alt={item.product.name} 
                                width={40}
                                height={40}
                                className="rounded-md"
                              />
                            )}
                            {item.product.category === 'deklaration Enskild Firma' && (
                              <Image 
                                src="/images/produkt_bild.jpg" 
                                alt={item.product.name} 
                                width={40}
                                height={40}
                                className="rounded-md"
                              />
                            )}
                            {item.product.category === 'deklaration Aktiebolag' && (
                              <Image 
                                src="/images/accounting_desk.jpeg" 
                                alt={item.product.name} 
                                width={40}
                                height={40}
                                className="rounded-md"
                              />
                            )}
                            {item.product.category === 'Ekonomisk radgivning' && (
                              <Image 
                                src="/images/financial_consulting_product_1.jpg" 
                                alt={item.product.name} 
                                width={40}
                                height={40}
                                className="rounded-md"
                              />
                            )}
                          </div>
                          <div className="ml-4">
                            <p className="font-medium">{item.product.name}</p>
                            <p className="text-sm text-gray-500">Antal: {item.quantity}</p>
                          </div>
                        </div>
                        <span className="font-medium">{formatPrice(price * item.quantity)}</span>
                      </div>
                    );
                  })}
                </div>


                <div className="mt-4 bg-gray-50 p-4 rounded-md border border-gray-200">
  <div className="flex items-center mb-2">
    <Image 
      src="/images/visa_logo.png" 
      alt="WAS Redovisningskonsulter" 
      width={24} 
      height={24}
      className="mr-2"
    />
    <h3 className="font-semibold">Betalning till WAS Redovisningskonsulter</h3>
  </div>
  <p className="text-sm text-gray-600">
    Din betalning hanteras säkert och går direkt till WAS Redovisningskonsulter.
    Org.nr: 800809-0774.
  </p>
</div>

                
                <div className="border-t border-gray-200 pt-4">
                  <div className="flex justify-between font-bold text-lg">
                    <span>Totalt:</span>
                    <span className="text-primary">{formatPrice(totalPrice)}</span>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-between">
                <button 
                  type="button"
                  onClick={goBack}
                  className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium py-2 px-4 rounded-md transition duration-300"
                >
                  Tillbaka
                </button>
                <button 
                  type="submit"
                  className="bg-accent hover:bg-accent-hover text-white font-medium py-2 px-6 rounded-md transition duration-300"
                >
                  Slutför beställning
                </button>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
