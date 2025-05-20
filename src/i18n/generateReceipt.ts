// src/lib/generateReceipt.ts
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

interface ReceiptItem {
  name: string;
  quantity: number;
  price: string;
}

export function generateReceipt(
  orderNumber: string, 
  orderDate: string, 
  customerName: string,
  customerEmail: string,
  items: ReceiptItem[],
  totalAmount: number
) {
  const doc = new jsPDF();
  
  // Lägg till företagslogotyp och information
  doc.setFontSize(20);
  doc.text('WAS Redovisningskonsulter', 105, 20, { align: 'center' });
  
  doc.setFontSize(12);
  doc.text('Dackevägen 33 177 34, JÄRFALLA', 105, 30, { align: 'center' });
  doc.text('Tel: 08-277444 | Org.nr: 800809-0774', 105, 35, { align: 'center' });
  doc.text('info@wasredovisningskonsulter.se', 105, 40, { align: 'center' });
  
  // Lägg till kvittorubrik
  doc.setFontSize(16);
  doc.text('KVITTO', 105, 55, { align: 'center' });
  
  // Lägg till orderinformation
  doc.setFontSize(10);
  doc.text(`Ordernummer: ${orderNumber}`, 14, 65);
  doc.text(`Datum: ${orderDate}`, 14, 70);
  doc.text(`Kund: ${customerName}`, 14, 75);
  doc.text(`E-post: ${customerEmail}`, 14, 80);
  
  // Skapa tabelldata
  const tableData = items.map(item => {
    const price = parseFloat(item.price.replace(/[^\d,]/g, '').replace(',', '.'));
    const itemTotal = price * item.quantity;
    return [
      item.name,
      item.quantity.toString(),
      `${price.toFixed(2)} kr`,
      `${itemTotal.toFixed(2)} kr`
    ];
  });
  
  // Lägg till produkttabell
  autoTable(doc, {
    startY: 90,
    head: [['Produkt', 'Antal', 'Pris', 'Summa']],
    body: tableData,
    foot: [['', '', 'Totalt:', `${totalAmount.toFixed(2)} kr`]],
    theme: 'striped',
    headStyles: { fillColor: [0, 96, 100] },
    footStyles: { fillColor: [245, 245, 245], textColor: [0, 0, 0], fontStyle: 'bold' }
  });
  
  // Lägg till betalningsinformation
  const finalY = (doc as any).lastAutoTable.finalY + 10;
  doc.text('Betalningsinformation', 14, finalY);
  doc.text('Betalningsmottagare: WAS Redovisningskonsulter', 14, finalY + 5);
  doc.text('Betalningsmetod: Kortbetalning', 14, finalY + 10);
  doc.text('Betalningsstatus: Genomförd', 14, finalY + 15);
  
  // Lägg till sidfot
  doc.setFontSize(8);
  doc.text('Tack för att du handlar hos WAS Redovisningskonsulter!', 105, 280, { align: 'center' });
  
  return doc;
}
