import { Product } from '@/types/product';

export const products: Product[] = [
  {
    id: 1,
    name: 'Bokföring 1 Taxibil',
    price: '1 437,00 kr',
    description: 'Bokföring mm för enskild firma med en Taxibil.',
    category: 'bokforing 1 taxibil',
    image: '/images/images.jpg' // Updated image
  },
  {
    id: 2,
    name: 'Bokföring 1 Taxibil AB',
    price: '2 131,00 kr',
    description: 'Bokföring mm för aktiebolag med en Taxibil.',
    category: 'bokforing 1 Taxibil AB',
    image: '/images/financial_consulting_product_2.jpeg'
  },
  {
    id: 3,
    name: 'Bokföring alla verksamhet 1 tim',
    price: '1 250,00 kr',
    description: 'Bokföringstjänster för alla typer av verksamheter, debiteras per timme.',
    category: 'bokforing alla verksamhet 1 tim',
    image: '/images/financial_consulting_product_3.jpeg' // Updated image
  },
  {
    id: 4,
    name: 'Bokföring ytligare en Taxibilar',
    price: '687,00 kr',
    description: 'Tilläggstjänst för bokföring av ytterligare taxibilar.',
    category: 'bokforing ytligare en Taxibilar',
    image: '/images/financial_consulting_product_4.jpeg' // Updated image
  },
  {
    id: 5,
    name: 'Lönespecifikation',
    price: '137,50 kr',
    description: 'Framtagning av lönespecifikationer för anställda.',
    category: 'loneadministration',
    image: '/images/financial_consulting_product_5.jpeg' // Updated image
  },
  {
    id: 6,
    name: 'Årsredovisning Enskild Firma',
    price: '3 750,00 kr',
    description: 'Upprättande av årsbokslut för enskild firma.',
    category: 'arsredovisning',
    image: '/images/financial_consulting_product_6.jpeg' // Updated image
  },
  {
    id: 7,
    name: 'Årsredovisning Aktiebolag',
    price: '6 250,00 kr',
    description: 'Upprättande av årsredovisning för aktiebolag.',
    category: 'arsredovisning Aktiebolag',
    image: '/images/financial_consulting_product_7.jpeg' // Updated image
  },
  {
    id: 8,
    name: 'Deklaration Enskild Firma',
    price: '1 875,00 kr',
    description: 'Upprättande och inlämning av deklaration för enskild firma.',
    category: 'deklaration Enskild Firma',
    image: '/images/financial_consulting_product_8.webp' // Updated image
  },
  {
    id: 9,
    name: 'Deklaration Aktiebolag',
    price: '2 500,00 kr',
    description: 'Upprättande och inlämning av deklaration för aktiebolag.',
    category: 'deklaration Aktiebolag',
    image: '/images/financial_consulting_product_9.png' // Updated image
  },
  {
    id: 10,
    name: 'Ekonomisk rådgivning',
    price: '1 250,00 kr',
    description: 'Ekonomisk rådgivning för företag, debiteras per timme.',
    category: 'Ekonomisk radgivning',
    image: '/images/business_meeting_high_quality.jpeg' // Updated image (reused from product page update)
  }
];

export const getProductById = (id: number): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  if (!category || category === 'all') {
    return products;
  }
  return products.filter(product => product.category === category);
};

export const getRelatedProducts = (productId: number, limit: number = 3): Product[] => {
  const product = getProductById(productId);
  if (!product) return [];
  
  return products
    .filter(p => p.id !== productId && p.category === product.category)
    .slice(0, limit);
};







// // data/products.ts
// import { Product } from '@/types/product';

// export const products: Product[] = [
//   {
//     id: 1,
//     name: 'Bokföring 1 Taxibil',
//     price: '1 437,00 kr',
//     description: 'Bokföring mm för enskild firma med en Taxibil.',
//     category: 'bokforing',
//     image: '/images/images.jpg'
//   },
//   {
//     id: 2,
//     name: 'Bokföring 1 Taxibil AB',
//     price: '2 131,00 kr',
//     description: 'Bokföring mm för aktiebolag med en Taxibil.',
//     category: 'bokforing',
//     image: '/images/financial_consulting_product_2.jpeg'
//   },
//   {
//     id: 3,
//     name: 'Bokföring alla verksamhet 1 tim',
//     price: '1 250,00 kr',
//     description: 'Bokföringstjänster för alla typer av verksamheter, debiteras per timme.',
//     category: 'bokforing',
//     image: '/images/financial_consulting_product_3.jpeg'
//   },
//   {
//     id: 4,
//     name: 'Bokföring ytterligare en Taxibil',
//     price: '687,00 kr',
//     description: 'Tilläggstjänst för bokföring av ytterligare taxibilar.',
//     category: 'bokforing',
//     image: '/images/financial_consulting_product_4.jpeg'
//   },
//   {
//     id: 5,
//     name: 'Lönespecifikation',
//     price: '137,50 kr',
//     description: 'Framtagning av lönespecifikationer för anställda.',
//     category: 'loneadministration',
//     image: '/images/financial_consulting_product_5.jpeg'
//   },
//   {
//     id: 6,
//     name: 'Årsredovisning Enskild Firma',
//     price: '3 750,00 kr',
//     description: 'Upprättande av årsbokslut för enskild firma.',
//     category: 'arsredovisning',
//     image: '/images/financial_consulting_product_6.jpeg'
//   },
//   {
//     id: 7,
//     name: 'Årsredovisning Aktiebolag',
//     price: '6 250,00 kr',
//     description: 'Upprättande av årsredovisning för aktiebolag.',
//     category: 'arsredovisning',
//     image: '/images/financial_consulting_product_7.jpeg'
//   },
//   {
//     id: 8,
//     name: 'Deklaration Enskild Firma',
//     price: '1 875,00 kr',
//     description: 'Upprättande och inlämning av deklaration för enskild firma.',
//     category: 'deklaration',
//     image: '/images/financial_consulting_product_8.webp'
//   },
//   {
//     id: 9,
//     name: 'Deklaration Aktiebolag',
//     price: '2 500,00 kr',
//     description: 'Upprättande och inlämning av deklaration för aktiebolag.',
//     category: 'deklaration',
//     image: '/images/financial_consulting_product_9.png'
//   },
//   {
//     id: 10,
//     name: 'Ekonomisk rådgivning',
//     price: '1 250,00 kr',
//     description: 'Ekonomisk rådgivning för företag, debiteras per timme.',
//     category: 'radgivning',
//     image: '/images/images.jpg'
//   }
// ];

// // Hämta en produkt baserat på ID
// export const getProductById = (id: number): Product | undefined => {
//   return products.find(product => product.id === id);
// };

// // Hämta produkter efter kategori (eller alla om 'all' eller tomt)
// export const getProductsByCategory = (category: string): Product[] => {
//   if (!category || category === 'all') {
//     return products;
//   }
//   return products.filter(product => product.category === category);
// };

// // Hämta relaterade produkter (baserat på kategori, men uteslut nuvarande produkt)
// export const getRelatedProducts = (productId: number, limit: number = 3): Product[] => {
//   const product = getProductById(productId);
//   if (!product) return [];

//   return products
//     .filter(p => p.id !== productId && p.category === product.category)
//     .slice(0, limit);
// };
