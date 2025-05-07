"use client";

import { useI18n } from '@/i18n/i18n-context';
import { useState, useRef, useEffect } from 'react';

export default function LanguageSwitcher() {
  const { locale, setLocale } = useI18n();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  
  const changeLanguage = (newLocale: string) => {
    setLocale(newLocale);
    setIsOpen(false);
  };
  
  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  
  const getLanguageFlag = (lang: string) => {
    switch (lang) {
      case 'sv': return '🇸🇪';
      case 'en': return '🇬🇧';
      case 'ar': return '🇦🇪';
      case 'zh': return '🇨🇳';
      case 'es': return '🇪🇸';
      case 'ru': return '🇷🇺';
      default: return '🇸🇪';
    }
  };
  
  const getLanguageName = (lang: string) => {
    switch (lang) {
      case 'sv': return 'Svenska';
      case 'en': return 'English';
      case 'ar': return 'العربية';
      case 'zh': return '中文';
      case 'es': return 'Español';
      case 'ru': return 'Русский';
      default: return 'Svenska';
    }
  };
  
  return (
    <div className="relative" ref={dropdownRef}>
      <button 
        onClick={toggleDropdown}
        className="flex items-center space-x-1 px-3 py-2 rounded-md hover:bg-primary-hover transition duration-300"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <span>{getLanguageFlag(locale)}</span>
        <span>{getLanguageName(locale)}</span>
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className={`h-4 w-4 transition-transform duration-300 ${isOpen ? 'transform rotate-180' : ''}`} 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50 overflow-hidden">
          <div className="py-1">
            <button 
              onClick={() => changeLanguage('sv')}
              className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 flex items-center ${locale === 'sv' ? 'bg-gray-100 font-medium' : ''}`}
            >
              <span className="mr-2">🇸🇪</span> Svenska
            </button>
            <button 
              onClick={() => changeLanguage('en')}
              className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 flex items-center ${locale === 'en' ? 'bg-gray-100 font-medium' : ''}`}
            >
              <span className="mr-2">🇬🇧</span> English
            </button>
            <button 
              onClick={() => changeLanguage('ar')}
              className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 flex items-center ${locale === 'ar' ? 'bg-gray-100 font-medium' : ''}`}
            >
              <span className="mr-2">🇦🇪</span> العربية
            </button>
            <button 
              onClick={() => changeLanguage('zh')}
              className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 flex items-center ${locale === 'zh' ? 'bg-gray-100 font-medium' : ''}`}
            >
              <span className="mr-2">🇨🇳</span> 中文
            </button>
            <button 
              onClick={() => changeLanguage('es')}
              className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 flex items-center ${locale === 'es' ? 'bg-gray-100 font-medium' : ''}`}
            >
              <span className="mr-2">🇪🇸</span> Español
            </button>
            <button 
              onClick={() => changeLanguage('ru')}
              className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 flex items-center ${locale === 'ru' ? 'bg-gray-100 font-medium' : ''}`}
            >
              <span className="mr-2">🇷🇺</span> Русский
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
