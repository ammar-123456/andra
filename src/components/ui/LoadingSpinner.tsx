"use client";

import { useState, useEffect } from 'react';

interface LoadingSpinnerProps {
  message?: string;
}

export default function LoadingSpinner({ 
  message = "Sidan vaknar från viloläge, detta kan ta upp till 2 minuter..." 
}: LoadingSpinnerProps) {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-white bg-opacity-90 z-50">
      <div className="w-16 h-16 mb-4">
        <svg className="animate-spin w-full h-full text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      </div>
      <div className="text-center max-w-md px-4">
        <p className="text-lg font-medium text-gray-800 mb-2">Var god vänta</p>
        <p className="text-gray-600">{message}</p>
        <p className="text-sm text-gray-500 mt-4">
          Vi använder Render's gratisplan för hosting, vilket gör att sidan går i viloläge efter en period av inaktivitet.
        </p>
      </div>
    </div>
  );
}
