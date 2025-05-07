"use client";

import { useState } from 'react';
import { useI18n } from '@/i18n/i18n-context';
import DigitalSignature from '@/components/contracts/DigitalSignature';

export default function ContractTemplate({ contractType = 'bokforing' }) {
  const { t } = useI18n();
  const [showSignature, setShowSignature] = useState(false);
  
  // Contract details based on type
  const contractDetails = {
    bokforing: {
      title: 'Avtal för löpande bokföring',
      description: 'Detta avtal avser löpande bokföringstjänster mellan WAS Redovisningskonsulter (leverantören) och undertecknad kund.',
      sections: [
        {
          title: '1. Tjänstens omfattning',
          content: 'Leverantören åtar sig att utföra löpande bokföring för kunden enligt följande:\n- Löpande bokföring av verifikationer\n- Avstämning av konton\n- Momsredovisning\n- Rapportering till kund\n- Rådgivning inom avtalets ramar'
        },
        {
          title: '2. Kundens åtaganden',
          content: 'Kunden åtar sig att:\n- Tillhandahålla korrekta underlag i rätt tid\n- Meddela leverantören om förändringar i verksamheten\n- Betala fakturor enligt överenskomna villkor\n- Utse en kontaktperson för kommunikation med leverantören'
        },
        {
          title: '3. Tidsramar',
          content: 'Bokföring utförs löpande enligt följande tidsplan:\n- Månatlig bokföring slutförs senast den 15:e i efterföljande månad\n- Kvartalsrapporter levereras senast 30 dagar efter kvartalets slut\n- Momsdeklaration förbereds i god tid före deklarationsdatum'
        },
        {
          title: '4. Priser och betalningsvillkor',
          content: 'Priset för tjänsterna är enligt aktuell prislista. För närvarande gäller följande priser:\n- Bokföring 1 Taxibil: 1 437,00 kr per månad\n- Bokföring 1 Taxibil AB: 2 131,00 kr per månad\n- Bokföring ytterligare en Taxibil: 687,00 kr per månad\n\nBetalningsvillkor: 30 dagar netto. Dröjsmålsränta enligt räntelagen.'
        },
        {
          title: '5. Avtalstid och uppsägning',
          content: 'Avtalet gäller i 12 månader från undertecknandet och förlängs därefter automatiskt med 12 månader i taget om det inte sägs upp. Uppsägningstiden är 3 månader före avtalstidens utgång.'
        },
        {
          title: '6. Sekretess',
          content: 'Leverantören förbinder sig att behandla all information om kundens verksamhet konfidentiellt och att inte dela denna information med tredje part utan kundens godkännande.'
        }
      ]
    },
    arsredovisning: {
      title: 'Avtal för årsredovisning',
      description: 'Detta avtal avser upprättande av årsbokslut och årsredovisning mellan WAS Redovisningskonsulter (leverantören) och undertecknad kund.',
      sections: [
        {
          title: '1. Tjänstens omfattning',
          content: 'Leverantören åtar sig att utföra följande tjänster för kunden:\n- Upprättande av årsbokslut\n- Framtagning av årsredovisning enligt gällande lagar och regler\n- Biträde vid deklaration\n- Rådgivning i samband med bokslutsarbetet'
        },
        {
          title: '2. Kundens åtaganden',
          content: 'Kunden åtar sig att:\n- Tillhandahålla korrekta underlag i rätt tid\n- Säkerställa att den löpande bokföringen är korrekt och uppdaterad\n- Besvara frågor från leverantören inom rimlig tid\n- Betala fakturor enligt överenskomna villkor'
        },
        {
          title: '3. Tidsramar',
          content: 'Årsredovisningen ska vara färdigställd senast 5 månader efter räkenskapsårets slut, förutsatt att kunden levererat nödvändiga underlag senast 3 månader efter räkenskapsårets slut.'
        },
        {
          title: '4. Priser och betalningsvillkor',
          content: 'Priset för tjänsterna är enligt aktuell prislista. För närvarande gäller följande priser:\n- Årsredovisning Enskild Firma: 3 750,00 kr\n- Årsredovisning Aktiebolag: 5 625,00 kr\n\nBetalningsvillkor: 30 dagar netto. Dröjsmålsränta enligt räntelagen.'
        },
        {
          title: '5. Avtalstid och uppsägning',
          content: 'Avtalet gäller för det aktuella räkenskapsåret och förnyas automatiskt för nästkommande räkenskapsår om det inte sägs upp senast 3 månader före räkenskapsårets slut.'
        },
        {
          title: '6. Sekretess',
          content: 'Leverantören förbinder sig att behandla all information om kundens verksamhet konfidentiellt och att inte dela denna information med tredje part utan kundens godkännande.'
        }
      ]
    },
    loneadministration: {
      title: 'Avtal för löneadministration',
      description: 'Detta avtal avser löneadministrationstjänster mellan WAS Redovisningskonsulter (leverantören) och undertecknad kund.',
      sections: [
        {
          title: '1. Tjänstens omfattning',
          content: 'Leverantören åtar sig att utföra följande tjänster för kunden:\n- Beräkning av löner\n- Framtagning av lönespecifikationer\n- Rapportering till Skatteverket\n- Arbetsgivardeklarationer\n- Årlig sammanställning och kontrolluppgifter'
        },
        {
          title: '2. Kundens åtaganden',
          content: 'Kunden åtar sig att:\n- Tillhandahålla korrekta uppgifter om anställda och löner\n- Meddela förändringar i god tid\n- Godkänna löneutbetalningar\n- Betala fakturor enligt överenskomna villkor'
        },
        {
          title: '3. Tidsramar',
          content: 'Löneadministration utförs enligt följande tidsplan:\n- Löneberäkningar slutförs senast 3 arbetsdagar efter att fullständiga underlag mottagits\n- Lönespecifikationer levereras senast 2 arbetsdagar före utbetalningsdatum\n- Arbetsgivardeklarationer lämnas in enligt Skatteverkets tidsfrister'
        },
        {
          title: '4. Priser och betalningsvillkor',
          content: 'Priset för tjänsterna är enligt aktuell prislista. För närvarande gäller följande priser:\n- Lönespecifikation: 137,50 kr per specifikation\n\nBetalningsvillkor: 30 dagar netto. Dröjsmålsränta enligt räntelagen.'
        },
        {
          title: '5. Avtalstid och uppsägning',
          content: 'Avtalet gäller i 12 månader från undertecknandet och förlängs därefter automatiskt med 12 månader i taget om det inte sägs upp. Uppsägningstiden är 3 månader före avtalstidens utgång.'
        },
        {
          title: '6. Sekretess',
          content: 'Leverantören förbinder sig att behandla all information om kundens verksamhet och anställda konfidentiellt och att inte dela denna information med tredje part utan kundens godkännande.'
        }
      ]
    },
    radgivning: {
      title: 'Avtal för ekonomisk rådgivning',
      description: 'Detta avtal avser ekonomisk rådgivning mellan WAS Redovisningskonsulter (leverantören) och undertecknad kund.',
      sections: [
        {
          title: '1. Tjänstens omfattning',
          content: 'Leverantören åtar sig att utföra följande tjänster för kunden:\n- Ekonomisk analys och rådgivning\n- Budgetering och prognoser\n- Likviditetsplanering\n- Kostnadsanalys och effektivisering\n- Rådgivning kring företagsstruktur och skatteplanering'
        },
        {
          title: '2. Kundens åtaganden',
          content: 'Kunden åtar sig att:\n- Tillhandahålla nödvändig information för uppdraget\n- Delta i överenskomna möten\n- Implementera överenskomna åtgärder\n- Betala fakturor enligt överenskomna villkor'
        },
        {
          title: '3. Tidsramar',
          content: 'Rådgivningstjänster utförs enligt överenskommelse med kunden. Leverantören åtar sig att hålla överenskomna tider för möten och leverans av analyser och rapporter.'
        },
        {
          title: '4. Priser och betalningsvillkor',
          content: 'Priset för tjänsterna är enligt aktuell prislista. För närvarande gäller följande priser:\n- Ekonomisk rådgivning: 1 500,00 kr per timme\n\nBetalningsvillkor: 30 dagar netto. Dröjsmålsränta enligt räntelagen.'
        },
        {
          title: '5. Avtalstid och uppsägning',
          content: 'Avtalet gäller i 12 månader från undertecknandet och förlängs därefter automatiskt med 12 månader i taget om det inte sägs upp. Uppsägningstiden är 1 månad.'
        },
        {
          title: '6. Sekretess',
          content: 'Leverantören förbinder sig att behandla all information om kundens verksamhet konfidentiellt och att inte dela denna information med tredje part utan kundens godkännande.'
        }
      ]
    }
  };
  
  const contract = contractDetails[contractType] || contractDetails.bokforing;
  
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-6 border-b border-gray-200">
        <h2 className="text-2xl font-bold mb-2">{contract.title}</h2>
        <p className="text-gray-700">{contract.description}</p>
      </div>
      
      <div className="p-6">
        {contract.sections.map((section, index) => (
          <div key={index} className="mb-6">
            <h3 className="text-lg font-semibold mb-2">{section.title}</h3>
            <p className="text-gray-700 whitespace-pre-line">{section.content}</p>
          </div>
        ))}
        
        <div className="mt-8">
          <button 
            onClick={() => setShowSignature(!showSignature)}
            className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-md transition duration-300"
          >
            {showSignature ? 'Dölj signeringsformulär' : 'Signera avtalet'}
          </button>
        </div>
        
        {showSignature && (
          <div className="mt-6">
            <DigitalSignature />
          </div>
        )}
      </div>
    </div>
  );
}
