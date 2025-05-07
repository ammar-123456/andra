"use client";

import { createContext, useContext, useState, ReactNode, useEffect } from 'react';

interface I18nContextType {
  locale: string;
  setLocale: (locale: string) => void;
  t: (key: string) => string;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

// Translations
const translations: Record<string, Record<string, string>> = {
  sv: {
    'nav.home': 'Hem',
    'nav.products': 'Produkter',
    'nav.economicFacts': 'Ekonomifakta',
    'nav.agreements': 'Avtal',
    'nav.aboutUs': 'Om oss',
    'nav.contact': 'Kontakt',
    'cart.title': 'Din varukorg',
    'cart.empty': 'Din varukorg är tom',
    'cart.total': 'Totalt:',
    'cart.checkout': 'Gå till kassan',
    'product.addToCart': 'Lägg i varukorg',
    'checkout.title': 'Kassa',
    'checkout.cart': 'Varukorg',
    'checkout.shipping': 'Leverans & Fakturering',
    'checkout.payment': 'Betalning',
    'checkout.confirmation': 'Bekräftelse'
  },
  en: {
    'nav.home': 'Home',
    'nav.products': 'Products',
    'nav.economicFacts': 'Economic Facts',
    'nav.agreements': 'Agreements',
    'nav.aboutUs': 'About Us',
    'nav.contact': 'Contact',
    'cart.title': 'Your Cart',
    'cart.empty': 'Your cart is empty',
    'cart.total': 'Total:',
    'cart.checkout': 'Checkout',
    'product.addToCart': 'Add to Cart',
    'checkout.title': 'Checkout',
    'checkout.cart': 'Cart',
    'checkout.shipping': 'Shipping & Billing',
    'checkout.payment': 'Payment',
    'checkout.confirmation': 'Confirmation'
  },
  ar: {
    'nav.home': 'الرئيسية',
    'nav.products': 'المنتجات',
    'nav.economicFacts': 'حقائق اقتصادية',
    'nav.agreements': 'اتفاقيات',
    'nav.aboutUs': 'من نحن',
    'nav.contact': 'اتصل بنا',
    'cart.title': 'سلة التسوق',
    'cart.empty': 'سلة التسوق فارغة',
    'cart.total': 'المجموع:',
    'cart.checkout': 'الدفع',
    'product.addToCart': 'أضف إلى السلة',
    'checkout.title': 'الدفع',
    'checkout.cart': 'سلة التسوق',
    'checkout.shipping': 'الشحن والفواتير',
    'checkout.payment': 'الدفع',
    'checkout.confirmation': 'التأكيد'
  },
  zh: {
    'nav.home': '首页',
    'nav.products': '产品',
    'nav.economicFacts': '经济事实',
    'nav.agreements': '协议',
    'nav.aboutUs': '关于我们',
    'nav.contact': '联系我们',
    'cart.title': '您的购物车',
    'cart.empty': '您的购物车是空的',
    'cart.total': '总计:',
    'cart.checkout': '结账',
    'product.addToCart': '添加到购物车',
    'checkout.title': '结账',
    'checkout.cart': '购物车',
    'checkout.shipping': '配送和账单',
    'checkout.payment': '支付',
    'checkout.confirmation': '确认'
  },
  es: {
    'nav.home': 'Inicio',
    'nav.products': 'Productos',
    'nav.economicFacts': 'Datos Económicos',
    'nav.agreements': 'Acuerdos',
    'nav.aboutUs': 'Sobre Nosotros',
    'nav.contact': 'Contacto',
    'cart.title': 'Tu Carrito',
    'cart.empty': 'Tu carrito está vacío',
    'cart.total': 'Total:',
    'cart.checkout': 'Finalizar Compra',
    'product.addToCart': 'Añadir al Carrito',
    'checkout.title': 'Finalizar Compra',
    'checkout.cart': 'Carrito',
    'checkout.shipping': 'Envío y Facturación',
    'checkout.payment': 'Pago',
    'checkout.confirmation': 'Confirmación'
  },
  ru: {
    'nav.home': 'Главная',
    'nav.products': 'Продукты',
    'nav.economicFacts': 'Экономические факты',
    'nav.agreements': 'Соглашения',
    'nav.aboutUs': 'О нас',
    'nav.contact': 'Контакты',
    'cart.title': 'Ваша корзина',
    'cart.empty': 'Ваша корзина пуста',
    'cart.total': 'Итого:',
    'cart.checkout': 'Оформить заказ',
    'product.addToCart': 'Добавить в корзину',
    'checkout.title': 'Оформление заказа',
    'checkout.cart': 'Корзина',
    'checkout.shipping': 'Доставка и оплата',
    'checkout.payment': 'Оплата',
    'checkout.confirmation': 'Подтверждение'
  }
};

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState('sv');
  
  // Load locale from localStorage on initial render
  useEffect(() => {
    const savedLocale = localStorage.getItem('locale');
    if (savedLocale) {
      setLocale(savedLocale);
    }
  }, []);
  
  // Save locale to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('locale', locale);
    // Also update the html lang attribute
    document.documentElement.lang = locale;
  }, [locale]);
  
  const t = (key: string): string => {
    if (!translations[locale]) {
      return key;
    }
    
    return translations[locale][key] || key;
  };
  
  return (
    <I18nContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (context === undefined) {
    throw new Error('useI18n must be used within an I18nProvider');
  }
  return context;
}
