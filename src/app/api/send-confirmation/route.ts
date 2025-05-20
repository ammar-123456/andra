// src/app/api/send-confirmation/route.ts
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  const { email, orderNumber, orderItems, totalAmount, customerName } = await request.json();

  // Konfigurera e-posttransport
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: parseInt(process.env.EMAIL_PORT || '587'),
    secure: process.env.EMAIL_SECURE === 'true',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  // Skapa HTML för orderdetaljer
  const itemsHtml = orderItems.map((item: any) => 
    `<tr>
      <td style="padding: 10px; border-bottom: 1px solid #eee;">${item.product.name}</td>
      <td style="padding: 10px; border-bottom: 1px solid #eee;">${item.quantity}</td>
      <td style="padding: 10px; border-bottom: 1px solid #eee;">${item.product.price} kr</td>
      <td style="padding: 10px; border-bottom: 1px solid #eee;">${item.quantity * parseFloat(item.product.price.replace(/[^\d,]/g, '').replace(',', '.'))} kr</td>
    </tr>`
  ).join('');

  // Skapa e-postinnehåll
  const mailOptions = {
    from: `"WAS Redovisningskonsulter" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: `Orderbekräftelse #${orderNumber}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background-color: #006064; padding: 20px; text-align: center;">
          <h1 style="color: white; margin: 0;">Tack för din beställning!</h1>
        </div>
        
        <div style="padding: 20px;">
          <p>Hej ${customerName},</p>
          <p>Tack för din beställning hos WAS Redovisningskonsulter. Vi bekräftar härmed att vi har mottagit din order.</p>
          
          <div style="background-color: #f5f5f5; padding: 15px; margin: 20px 0; border-radius: 5px;">
            <p style="margin: 0;"><strong>Ordernummer:</strong> ${orderNumber}</p>
            <p style="margin: 10px 0 0;"><strong>Datum:</strong> ${new Date().toLocaleDateString('sv-SE')}</p>
          </div>
          
          <h2 style="border-bottom: 2px solid #006064; padding-bottom: 10px;">Orderdetaljer</h2>
          
          <table style="width: 100%; border-collapse: collapse;">
            <thead>
              <tr style="background-color: #f5f5f5;">
                <th style="padding: 10px; text-align: left;">Produkt</th>
                <th style="padding: 10px; text-align: left;">Antal</th>
                <th style="padding: 10px; text-align: left;">Pris</th>
                <th style="padding: 10px; text-align: left;">Summa</th>
              </tr>
            </thead>
            <tbody>
              ${itemsHtml}
            </tbody>
            <tfoot>
              <tr>
                <td colspan="3" style="padding: 10px; text-align: right;"><strong>Totalt:</strong></td>
                <td style="padding: 10px;"><strong>${totalAmount} kr</strong></td>
              </tr>
            </tfoot>
          </table>
          
          <div style="margin-top: 30px;">
            <p>Om du har några frågor angående din beställning, vänligen kontakta oss på <a href="mailto:info@wasredovisningskonsulter.se">info@wasredovisningskonsulter.se</a>.</p>
            <p>Med vänliga hälsningar,<br>WAS Redovisningskonsulter</p>
          </div>
        </div>
        
        <div style="background-color: #f5f5f5; padding: 15px; text-align: center; font-size: 12px; color: #666;">
          <p>WAS Redovisningskonsulter | Dackevägen 33 177 34, JÄRFALLA | 08-277444</p>
          <p>Org.nr: 800809-0774</p>
        </div>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ success: false, error: 'Failed to send email' }, { status: 500 });
  }
}
