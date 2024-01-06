import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import fs from 'fs';
import path from 'path';

export async function POST(request: Request) {
    try {
        const formData = await request.json();
        console.log("Otrzymane dane formularza:", formData);
        console.log('Cena to',formData.totalPrice)

        // Wczytanie szablonu HTML
        const templatePath = path.resolve('lib/templates/email-template.html');
        console.log("Ścieżka do szablonu:", templatePath);

        let emailTemplate = fs.readFileSync(templatePath, 'utf8');
        console.log("Wczytany szablon:", emailTemplate);

        // Interpolacja danych
        emailTemplate = emailTemplate.replace('{{name}}', formData.vorname + ' ' + formData.nachname);
        emailTemplate = emailTemplate.replace('{{color}}', formData.color);
        emailTemplate = emailTemplate.replace('{{drahtstaerke}}', formData.drahtstaerke);

        const fenceCoverText = formData.fenceCover === 'standard' ? 'Doppelstabmattenzaun' : 'Sichtschutzzaun';
        emailTemplate = emailTemplate.replace('{{fenceCover}}', fenceCoverText);

        emailTemplate = emailTemplate.replace('{{fenceSize}}', formData.fenceSize);
        emailTemplate = emailTemplate.replace('{{length}}', formData.length);
        emailTemplate = emailTemplate.replace('{{corner}}', formData.corner);
        emailTemplate = emailTemplate.replace('{{mounting}}', formData.mounting);
        emailTemplate = emailTemplate.replace('{{delivery}}', formData.delivery);
        emailTemplate = emailTemplate.replace('{{gate}}', formData.gate );
        emailTemplate = emailTemplate.replace('{{totalPrice}}', formData.price);

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'galabaudarius@gmail.com',
                pass: process.env.GMAIL_PASSWORD
            }
        });

        // Email do klienta
        const mailToClient = {
            from: 'galabaudarius@gmail.com',
            to: formData.email,
            subject: "Danke für Ihre Anfrage",
            html: emailTemplate
        };

        // Email do Ciebie
        const mailToYou = {
            from: 'galabaudarius@gmail.com',
            to: 'galabaudarius@gmail.com',
            subject: "Neue Anfrage erhalten",
            html: emailTemplate // Ewentualnie dostosuj tę część
        };

        console.log("Wysyłanie email do klienta...");
        await transporter.sendMail(mailToClient);
        console.log("Email do klienta wysłany.");

        console.log("Wysyłanie email do Ciebie...");
        await transporter.sendMail(mailToYou);
        console.log("Email do Ciebie wysłany.");

        return NextResponse.json({ message: "E-Mails erfolgreich gesendet" }, { status: 200 });
    } catch (error) {
        console.error("Błąd:", error);
        return NextResponse.json({ message: "Fehler beim Senden der E-Mails" }, { status: 500 });
    }
}
