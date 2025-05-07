import { Metadata } from 'next';
import { metadata as seoMetadata } from '@/lib/seo-metadata';

export const metadata: Metadata = {
  title: seoMetadata.pages.returPolicy.title,
  description: seoMetadata.pages.returPolicy.description,
  keywords: seoMetadata.pages.returPolicy.keywords,
  openGraph: {
    title: seoMetadata.pages.returPolicy.title,
    description: seoMetadata.pages.returPolicy.description,
    images: [seoMetadata.default.ogImage],
    type: 'website',
    locale: 'sv_SE',
  },
  alternates: {
    canonical: 'https://www.wasredovisningskonsulter.se/retur-policy',
    languages: {
      'sv-SE': 'https://www.wasredovisningskonsulter.se/retur-policy',
      'en-US': 'https://www.wasredovisningskonsulter.se/en/return-policy',
    },
  },
};

export default function ReturPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-primary mb-8">Retur- och Återbetalningspolicy</h1>
      <div className="prose max-w-none">
        <p>
          Information om vår retur- och återbetalningspolicy kommer snart att finnas tillgänglig här.
        </p>
        <p>
          Kontakta oss om du har några frågor under tiden.
        </p>
        {/* Lägg till den faktiska policyn här när den är tillgänglig */}
      </div>
    </div>
  );
}

