import { z } from "zod";

export const FormDataSchema = z
  .object({
    drahtstaerke: z.string().min(1, "Bitte wählen Sie eine Drahtstärke aus"),
    fenceSize: z.string().min(1, "Die minimale Größe beträgt 0.63m"),
    fenceCover: z.string().min(1, "Bitte wählen Sie eine Fencetype aus"),
    length: z
      .string()
      .min(1, "Bitte geben Sie eine Höhe an")
      .regex(/^\d+(\.\d{1,2})?$/, "Bitte geben Sie eine gültige Zahl ein"),
    color: z.string().min(1, "Bitte wählen Sie eine Farbe aus"),
    corner: z
      .string()
      .min(1, "Bitte geben Sie die Anzahl der Pfosten an")
      .regex(/^\d+$/, "Bitte geben Sie eine ganze Zahl ein"),
    mounting: z.string().min(1, "Bitte wählen Sie einen Montagetyp aus"),
    delivery: z.string().min(1, "Bitte wählen Sie eine Lieferoption aus"),
    gate: z.string().optional(),
    gateNeeded: z.boolean().optional(),
    vorname: z.string().min(1, "Bitte geben Sie einen Vornamen ein"),
    nachname: z.string().min(1, "Bitte geben Sie einen Nachnamen ein"),
    email: z
      .string()
      .email("Bitte geben Sie eine gültige E-Mail-Adresse ein")
      .min(1, "Bitte geben Sie eine E-Mail-Adresse ein"),
    emailConfirm: z
      .string()
      .email("Bitte bestätigen Sie die E-Mail-Adresse")
      .min(1, "Bitte bestätigen Sie die E-Mail-Adresse"),
    telefon: z.string().min(1, "Bitte geben Sie eine Telefonnummer ein"),
    postleitzahl: z.string().min(1, "Bitte geben Sie eine Postleitzahl ein"),
    stadt: z.string().min(1, "Bitte geben Sie eine Stadt ein"),
    anmerkungen: z.string().optional(), // Anmerkungen können optional sein
    datenschutz: z
      .boolean()
      .refine((val) => val, "Sie müssen der Datenschutzerklärung zustimmen"),
  })
  .refine((data) => data.email === data.emailConfirm, {
    path: ["emailConfirm"],
    message: "Die E-Mail-Adressen stimmen nicht überein",
  })
  .refine((data) => {
    if (data.gateNeeded) {
      return data.gate && data.gate.trim().length > 0;
    }
    return true;
  }, {
    message: "Bitte wählen Sie einen Tor-Typ aus",
    path: ["gate"],
  });