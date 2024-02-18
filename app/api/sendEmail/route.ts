import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import fs from 'fs';
import path from 'path';

export async function POST(request: Request) {
    try {
        const formData = await request.json();
        console.log("Otrzymane dane formularza:", formData);

        // Wczytanie szablonów HTML
        const clientTemplatePath = path.resolve('lib/templates/email-template.html');
        let clientEmailTemplate = fs.readFileSync(clientTemplatePath, 'utf8');

        const adminTemplatePath = path.resolve('lib/templates/email-admin-template.html');
        let adminEmailTemplate = fs.readFileSync(adminTemplatePath, 'utf8');

        // Wypełnienie szablonu danymi dla klienta
        clientEmailTemplate = fillTemplateWithData(clientEmailTemplate, formData);

        // Wypełnienie szablonu danymi dla administratora
        adminEmailTemplate = fillTemplateWithData(adminEmailTemplate, formData);

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
            html: clientEmailTemplate
        };

        // Email do administratora
        const mailToAdmin = {
            from: 'galabaudarius@gmail.com',
            to: 'kontakt@galabau-darius.de',
            subject: "Neue Anfrage erhalten",
            html: adminEmailTemplate
        };

        await transporter.sendMail(mailToClient);
        await transporter.sendMail(mailToAdmin);

        return NextResponse.json({ message: "E-Mails erfolgreich gesendet" }, { status: 200 });
    } catch (error) {
        console.error("Błąd:", error);
        return NextResponse.json({ message: "Fehler beim Senden der E-Mails" }, { status: 500 });
    }
}

interface FormData {
    vorname: string;
    nachname: string;
    color: string;
    drahtstaerke: string;
    fenceSize: string;
    fenceCover: string;
    length: string;
    corner: string;
    mounting: string;
    delivery: string;
    gate: string;
    price: number;
    email: string;
    telefon: string;
    postleitzahl: string;
    stadt: string;
    anmerkungen: string;
  }

function fillTemplateWithData(template: string, data: FormData) {
    template = template.replace('{{name}}', data.vorname + ' ' + data.nachname);
    template = template.replace('{{color}}', data.color);
    template = template.replace('{{drahtstaerke}}', data.drahtstaerke);
    template = template.replace('{{fenceSize}}', data.fenceSize);
    template = template.replace('{{fenceCover}}', data.fenceCover === 'standard' ? 'Doppelstabmattenzaun' : 'Sichtschutzzaun');
    template = template.replace('{{length}}', data.length + ' Meter');
    template = template.replace('{{corner}}', data.corner);
    template = template.replace('{{mounting}}', data.mounting);
    template = template.replace('{{delivery}}', data.delivery);
    template = template.replace('{{gate}}', data.gate ? data.gate : 'Kein Tor ausgewählt');
    template = template.replace('{{totalPrice}}', data.price + '€');
    template = template.replace('{{email}}', data.email);
    template = template.replace('{{telefon}}', data.telefon);
    template = template.replace('{{postleitzahl}}', data.postleitzahl);
    template = template.replace('{{stadt}}', data.stadt);
    template = template.replace('{{anmerkungen}}', data.anmerkungen ? data.anmerkungen : 'Keine Anmerkungen');
    return template;
}