import { z } from 'zod';

export const FormDataSchema = z.object({
  drahtstaerke: z.string().min(1, 'Bitte wählen Sie eine Drahtstärke aus'),
  fenceSize: z.number().min(0.63, 'Minimum size is 0.63m').max(2.03, 'Maximum size is 2.03m'),
  length: z.string().min(1, 'Bitte geben Sie eine Höhe an'),
  color: z.string().min(1, 'Bitte wählen Sie eine Farbe aus'),
  corners: z.string().min(1, 'Bitte geben Sie die Anzahl der Pfosten an'),
  mounting: z.string().min(1, 'Bitte wählen Sie einen Montagetyp aus'),
  vorname: z.string().min(1, 'Bitte geben Sie einen Vornamen ein'),
  nachname: z.string().min(1, 'Bitte geben Sie einen Nachnamen ein'),
  email: z.string().email('Bitte geben Sie eine gültige E-Mail-Adresse ein').min(1, 'Bitte geben Sie eine E-Mail-Adresse ein'),
  emailConfirm: z.string().email('Bitte bestätigen Sie die E-Mail-Adresse').min(1, 'Bitte bestätigen Sie die E-Mail-Adresse'),
  telefon: z.string().min(1, 'Bitte geben Sie eine Telefonnummer ein'),
  postleitzahl: z.string().min(1, 'Bitte geben Sie eine Postleitzahl ein'),
  stadt: z.string().min(1, 'Bitte geben Sie eine Stadt ein'),
  anmerkungen: z.string().optional(), // Anmerkungen können optional sein
  datenschutz: z.boolean().refine(val => val, 'Sie müssen der Datenschutzerklärung zustimmen')
}).refine((data) => data.email === data.emailConfirm, {
  path: ["emailConfirm"],
  message: "Die E-Mail-Adressen stimmen nicht überein",
});