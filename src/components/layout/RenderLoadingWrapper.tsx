"use client";

import { useState, useEffect } from 'react';
import LoadingSpinner from '@/components/ui/LoadingSpinner';

export default function RenderLoadingWrapper({ 
  children 
}: { 
  children: React.ReactNode 
}) {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Simulera en kontroll om sidan har laddat klart
    // I verkligheten kan du använda mer sofistikerade metoder för att avgöra när sidan är redo
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Kort timeout för att visa spinner under initial rendering
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <>
      {isLoading && <LoadingSpinner />}
      <div className={isLoading ? 'invisible' : 'visible'}>
        {children}
      </div>
    </>
  );
}
