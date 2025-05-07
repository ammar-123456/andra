"use client";

import { useI18n } from '@/i18n/i18n-context';
import Link from 'next/link';

export default function EkonomifaktaPage() {
  const { t } = useI18n();
  
  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-primary">Ekonomifakta 2025</h1>
        
        <div className="prose max-w-none">
          {/* Arbetsgivaravgifter */}
          <h2 className="text-2xl font-semibold mt-8 mb-4 text-primary">Arbetsgivaravgifter</h2>
          <ul className="list-disc pl-5 mb-4">
            <li>Sjukförsäkringsavgift: 3,55 %</li>
            <li>Arbetsskadeavgift: 0,20 %</li>
            <li>Arbetsmarknadsavgift: 2,64 %</li>
            <li>Allmän löneavgift: 11,62 %</li>
            <li>Ålderspensionsavgift: 10,21 %</li>
            <li>Efterlevandepensionsavgift: 0,60 %</li>
            <li>Föräldraförsäkring: 2,60 %</li>
          </ul>
          <p className="font-semibold">Arbetsgivaravgifter totalt: 31,42 %</p>
          <p>För anställda som är födda 1937 eller tidigare betalas ingen arbetsgivaravgift.</p>
          <p>För anställda som är födda 1938 - 1958 ska ålderspensionsavgift på 10,21 procent betalas.</p>

          {/* Egenavgifter */}
          <h2 className="text-2xl font-semibold mt-8 mb-4 text-primary">Egenavgifter</h2>
          <ul className="list-disc pl-5 mb-4">
            <li>Sjukförsäkringsavgift (7 karensdagar): 3,64 %</li>
            <li>Arbetsskadeavgift: 0,20 %</li>
            <li>Arbetsmarknadsavgift: 0,10 %</li>
            <li>Allmän löneavgift: 11,62 %</li>
            <li>Ålderspensionsavgift: 10,21 %</li>
            <li>Efterlevandepensionsavgift: 0,60 %</li>
            <li>Föräldraförsäkringsavgift: 2,60 %</li>
          </ul>
          <p className="font-semibold">Egenavgifter summa: 28,97 %</p>
          <h3 className="text-xl font-semibold mt-4 mb-2">Född 1958 eller tidigare</h3>
          <p>Löneskatt betalas inte under år 2025 för aktivt bedriven näringsverksamhet om du är född 1938 eller tidigare. Därmed blir schablonavdraget 0 procent.</p>
          <p>Ålderspensionsavgift för födda 1939-1958: På inkomst aktiv näringsverksamhet betalas ålderspensionsavgift med 10,21 procent. Du gör ett schablonavdrag på 10 procent.</p>
          <h3 className="text-xl font-semibold mt-4 mb-2">Född 1959 eller senare</h3>
          <p>Du betalar full egenavgift som vanligt, det vill säga 28,97 procent. En nedsättning av avgifterna beräknas dock normalt på max 15 000 kr. Då får du göra ett schablonavdrag på dina inkomster för egenavgifter med 25 procent.</p>
          <p>Ett undantag gäller om du är född 1959 eller senare och har haft ålderspension hela året. Då gäller samma regler som för personer födda 1939-1958.</p>

          {/* Basbelopp */}
          <h2 className="text-2xl font-semibold mt-8 mb-4 text-primary">Basbelopp</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-4">
            <div>
              <h3 className="text-xl font-semibold mb-2">2024</h3>
              <ul className="list-disc pl-5">
                <li>Inkomstbasbelopp: 76 200 kr</li>
                <li>Prisbasbelopp: 57 300 kr</li>
                <li>Förhöjt prisbasbelopp: 58 500 kr</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">2025</h3>
              <ul className="list-disc pl-5">
                <li>Inkomstbasbelopp: 80 600 kr</li>
                <li>Prisbasbelopp: 58 800 kr</li>
                <li>Förhöjt prisbasbelopp: 60 000 kr</li>
              </ul>
            </div>
          </div>

          {/* Gåvor till anställda */}
          <h2 className="text-2xl font-semibold mt-8 mb-4 text-primary">Gåvor till anställda</h2>
          <p>(belopp inklusive moms, 2024 i parentes)</p>
          <ul className="list-disc pl-5 mb-4">
            <li>Julgåva 2025: 550 kr (550 kr)</li>
            <li>Jubileumsgåva 2025: 1650 kr (1650 kr)</li> {/* Corrected typo from 16500 */} 
            <li>Minnesgåva 2025: 15 000 kr (15 000 kr)</li>
          </ul>

          {/* Inkassoavgifter */}
          <h2 className="text-2xl font-semibold mt-8 mb-4 text-primary">Inkassoavgifter</h2>
          <ul className="list-disc pl-5 mb-4">
            <li>Förseningsavgift: 450 kr</li>
            <li>Påminnelseavgift: 60 kr</li>
            <li>Inkassoarvode: 180 kr</li>
            <li>Amorteringsplan: 170 kr</li>
            <li>Amorteringsavisering: 60 kr/avi</li>
            <li>Arvode bet.föreläggande: 380 kr</li>
            <li>Anst. bet.föreläggande: 300 kr</li>
            <li>Arvode handräckning: 420 kr</li>
            <li>Ans. handräckning: 300 kr</li>
            <li>Kostnad verkställighet: 600 kr/år</li>
          </ul>

          {/* Inkomst av näringsverksamhet 2025 */}
          <h2 className="text-2xl font-semibold mt-8 mb-4 text-primary">Inkomst av näringsverksamhet 2025</h2>
          <ul className="list-disc pl-5 mb-4">
            <li>Periodiseringsfond, enskild firma & handelsbolag: 30 % (30 %)</li>
            <li>Periodiseringsfond, aktiebolag & stiftelse: 25 % (25 %)</li>
            <li>Expansionsfondsskatt: 20,60 % (20,60 %)</li>
            <li>Positiv räntefördelning: 7,96 % (8,62 %)</li>
            <li>Negativ räntefördelning: 1,96 % (3,62 %)</li>
            <li>Schablonavdrag egenavgifter: 25 % (25 %)</li>
            <li>Schablonavdrag löneskatt: 20 % (20 %)</li>
            <li>Bolagsskatt (aktiebolag, stiftelser, ekonomiska föreningar, ideella föreningar och livförsäkringsföretag): 20,60 % (20,60 %)</li>
          </ul>

          {/* Kostförmåner */}
          <h2 className="text-2xl font-semibold mt-8 mb-4 text-primary">Kostförmåner</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-4">
            <div>
              <h3 className="text-xl font-semibold mb-2">2024</h3>
              <ul className="list-disc pl-5">
                <li>Frukost: 60 kr</li>
                <li>Lunch/Middag: 120 kr</li>
                <li>Helt fri kost: 300 kr</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">2025</h3>
              <ul className="list-disc pl-5">
                <li>Frukost: 61 kr</li>
                <li>Lunch/middag: 122 kr</li>
                <li>Helt fri kost: 305 kr</li>
              </ul>
            </div>
          </div>

          {/* Milersättning */}
          <h2 className="text-2xl font-semibold mt-8 mb-4 text-primary">Milersättning</h2>
          <ul className="list-disc pl-5 mb-4">
            <li>Egen bil: 25,00 kr/mil</li>
            <li>Tjänstebil bensin och diesel: 12,00 kr/mil</li>
            <li>Tjänstebil El: 9,50 kr/mil</li>
          </ul>

          {/* Momsatser */}
          <h2 className="text-2xl font-semibold mt-8 mb-4 text-primary">Momsatser</h2>
          <ul className="list-disc pl-5 mb-4">
            <li>25% (20% av priset) den generella skattesatsen</li>
            <li>12% (10,71% av priset) t ex livsmedel, restaurangtjänster</li>
            <li>6% (5,66% av priset) t ex persontransporter, böcker</li>
          </ul>
          <h3 className="text-xl font-semibold mt-4 mb-2">Redovisning av moms</h3>
          <p>Mervärdesskatt, oftast förkortat moms, är en skatt som alla konsumenter i Sverige betalar till staten. Nästan alla företag lägger till moms vid försäljning av sina varor och tjänster.</p>
          <p>Från 1 januari 2025 höjs omsättningsgränsen för befrielse från moms från 80 000kr till 120 000kr.</p>

          {/* Representation (momsavdrag) */}
          <h2 className="text-2xl font-semibold mt-8 mb-4 text-primary">Representation (momsavdrag)</h2>
          <ul className="list-disc pl-5 mb-4">
            <li>Intern representation: (lunch, middag, supé) 300 kr exkl. moms</li>
            <li>Extern representation: (lunch, middag, supé) 300 kr exkl. moms</li>
          </ul>

          {/* Sjukförsäkring och pension */}
          <h2 className="text-2xl font-semibold mt-8 mb-4 text-primary">Sjukförsäkring och pension</h2>
          <p>(2024 i parentes)</p>
          <ul className="list-disc pl-5 mb-4">
            <li>Högsta sjukpenninggrundande inkomst 2025: 588 000 kr (573 000 kr)</li>
            <li>Högsta föräldrapenninggrundande inkomst 2025: 588 000 kr (573 000 kr)</li>
            <li>Lägsta sjukpenninggrundande inkomst 2025: 14 112 kr (13 700 kr)</li>
            <li>Högsta pensionsgrundande inkomst 2025: 604 500 kr (571 500 kr)</li>
          </ul>

          {/* Sjuklön */}
          <h2 className="text-2xl font-semibold mt-8 mb-4 text-primary">Sjuklön</h2>
          <h3 className="text-xl font-semibold mt-4 mb-2">Dag 1 - 14 Karensavdrag</h3>
          <p>Karensavdraget är 20 % av sjuklönen och är ett engångsavdrag baserat på en genomsnittlig arbetsvecka.</p>
          <h3 className="text-xl font-semibold mt-4 mb-2">Dag 15 -</h3>
          <p>Sjukpenning från Försäkringskassan.</p>

          {/* Brytpunkt för statlig inkomstskatt */}
          <h2 className="text-2xl font-semibold mt-8 mb-4 text-primary">Brytpunkt för statlig inkomstskatt</h2>
          <table className="w-full text-left mb-4">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-2">Beskattningsbar förvärvsinkomst</th>
                <th className="px-4 py-2">Statlig skatt</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="px-4 py-2">0 - 625 800 kr</td>
                <td className="px-4 py-2">0 kr</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2">625 800 kr -</td>
                <td className="px-4 py-2">20 %</td>
              </tr>
            </tbody>
          </table>

          {/* Traktamente inom Sverige */}
          <h2 className="text-2xl font-semibold mt-8 mb-4 text-primary">Traktamente inom Sverige</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-4">
            <div>
              <h3 className="text-xl font-semibold mb-2">2025</h3>
              <ul className="list-disc pl-5">
                <li>Hel dag: 290 kr</li>
                <li>Halv dag: 145 kr</li>
                <li>Natt om arbetsgivaren ej betalat övernattning: 145 kr</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">2024</h3>
              <ul className="list-disc pl-5">
                <li>Hel dag: 290 kr</li>
                <li>Halv dag: 145 kr</li>
                <li>Natt om arbetsgivaren ej betalat övernattning: 145 kr</li>
              </ul>
            </div>
          </div>

        </div>
        
        {/* Contact CTA */}
        <div className="bg-light p-6 rounded-lg shadow-md border border-gray-100 mt-12">
          <h2 className="text-2xl font-semibold mb-4 text-primary">Behöver du hjälp?</h2>
          <p className="text-gray-700 mb-6">
            WAS Redovisningskonsulter hjälper dig med alla aspekter av din företagsekonomi. Kontakta oss för professionell rådgivning och stöd.
          </p>
          <div className="flex justify-center">
            <Link 
              href="/kontakt" 
              className="bg-accent hover:bg-accent-hover text-white font-medium py-3 px-6 rounded-md transition duration-300"
            >
              Kontakta oss
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

