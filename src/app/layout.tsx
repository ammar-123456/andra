// "use client";

// import './globals.css';
// import Header from '@/components/layout/Header';
// import Footer from '@/components/layout/Footer';
// import { I18nProvider } from '@/i18n/i18n-context';
// import { CartProvider } from '@/context/CartContext';

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <html lang="sv">
//       <body>
//         <I18nProvider>
//           <CartProvider>
//             <div className="flex flex-col min-h-screen">
//               <Header />
//               <main className="flex-grow">
//                 {children}
//               </main>
//               <Footer />
//             </div>
//           </CartProvider>
//         </I18nProvider>
//       </body>
//     </html>
//   );
// }





"use client";

import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { I18nProvider } from '@/i18n/i18n-context';
import { CartProvider } from '@/context/CartContext';
import  RenderLoadingWrapper  from '@/components/layout/RenderLoadingWrapper';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="sv">
      <body>
        <I18nProvider>
          <CartProvider>
            <RenderLoadingWrapper>
              <div className="flex flex-col min-h-screen">
                <Header />
                <main className="flex-grow">
                  {children}
                </main>
                <Footer />
              </div>
            </RenderLoadingWrapper>
          </CartProvider>
        </I18nProvider>
      </body>
    </html>
  );
}
