"use client";

import { useState } from 'react';
import { useI18n } from '@/i18n/i18n-context';

export default function DigitalSignature() {
  const { t } = useI18n();
  const [signature, setSignature] = useState('');
  const [name, setName] = useState('');
  const [personalId, setPersonalId] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [signatureMethod, setSignatureMethod] = useState('bankid');

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-4">Digital signering</h3>
      
      <div className="mb-6">
        <label className="block text-gray-700 font-medium mb-2">Signeringsmetod</label>
        <div className="space-y-2">
          <div className="flex items-center">
            <input 
              type="radio" 
              id="bankid" 
              name="signatureMethod" 
              value="bankid" 
              checked={signatureMethod === 'bankid'} 
              onChange={() => setSignatureMethod('bankid')}
              className="h-4 w-4 text-blue-500 focus:ring-blue-400"
            />
            <label htmlFor="bankid" className="ml-3 flex items-center">
              <span className="text-gray-700 mr-2">BankID</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </label>
          </div>
          
          <div className="flex items-center">
            <input 
              type="radio" 
              id="manual" 
              name="signatureMethod" 
              value="manual" 
              checked={signatureMethod === 'manual'} 
              onChange={() => setSignatureMethod('manual')}
              className="h-4 w-4 text-blue-500 focus:ring-blue-400"
            />
            <label htmlFor="manual" className="ml-3 flex items-center">
              <span className="text-gray-700 mr-2">Manuell signatur</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
              </svg>
            </label>
          </div>
        </div>
      </div>
      
      {signatureMethod === 'manual' ? (
        <>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Fullständigt namn</label>
            <input 
              type="text" 
              id="name" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Ange ditt fullständiga namn"
            />
          </div>
          
          <div className="mb-4">
            <label htmlFor="personalId" className="block text-gray-700 font-medium mb-2">Personnummer</label>
            <input 
              type="text" 
              id="personalId" 
              value={personalId}
              onChange={(e) => setPersonalId(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="ÅÅÅÅMMDD-XXXX"
            />
          </div>
          
          <div className="mb-6">
            <label htmlFor="signature" className="block text-gray-700 font-medium mb-2">Din signatur</label>
            <div className="border border-gray-300 rounded-md p-2 bg-gray-50 h-32 flex items-center justify-center">
              {signature ? (
                <div className="text-center">
                  <p className="font-signature text-2xl">{signature}</p>
                  <button 
                    onClick={() => setSignature('')}
                    className="text-sm text-blue-500 hover:underline mt-2"
                  >
                    Rensa signatur
                  </button>
                </div>
              ) : (
                <input 
                  type="text" 
                  id="signature" 
                  value={signature}
                  onChange={(e) => setSignature(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Skriv ditt namn som signatur"
                />
              )}
            </div>
          </div>
        </>
      ) : (
        <div className="mb-6">
          <p className="text-gray-700 mb-4">
            För att signera med BankID, klicka på knappen nedan. Du kommer att omdirigeras till BankID-appen för att slutföra signeringen.
          </p>
          <div className="bg-gray-100 p-4 rounded-md mb-4">
            <p className="text-sm text-gray-600">
              Notera: I en verklig implementation skulle detta ansluta till BankID:s API för att generera en signeringsförfrågan.
            </p>
          </div>
        </div>
      )}
      
      <div className="mb-6">
        <div className="flex items-start">
          <input 
            type="checkbox" 
            id="terms" 
            checked={isChecked}
            onChange={() => setIsChecked(!isChecked)}
            className="h-4 w-4 mt-1 text-blue-500 focus:ring-blue-400"
          />
          <label htmlFor="terms" className="ml-3 text-gray-700">
            Jag har läst och godkänner <a href="/villkor" className="text-blue-500 hover:underline">villkoren</a> för detta avtal.
          </label>
        </div>
      </div>
      
      <div className="flex justify-end">
        <button 
          className={`bg-blue-500 text-white font-medium py-2 px-6 rounded-md transition duration-300 ${
            (signatureMethod === 'manual' && (!signature || !name || !personalId || !isChecked)) || 
            (signatureMethod === 'bankid' && !isChecked)
              ? 'opacity-50 cursor-not-allowed'
              : 'hover:bg-blue-600'
          }`}
          disabled={
            (signatureMethod === 'manual' && (!signature || !name || !personalId || !isChecked)) || 
            (signatureMethod === 'bankid' && !isChecked)
          }
        >
          {signatureMethod === 'bankid' ? 'Signera med BankID' : 'Signera avtalet'}
        </button>
      </div>
    </div>
  );
}
