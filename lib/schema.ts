import { z } from "zod";

export const FormDataSchema = z
  .object({
    drahtstaerke: z.string().min(1, "Bitte wählen Sie eine Drahtstärke aus"),
    fenceSize: z.string().min(1, "Die minimale Größe beträgt 0.63m"),
    length: z
      .string()
      .min(1, "Bitte geben Sie eine Höhe an")
      .regex(/^\d+(\.\d{1,2})?$/, "Bitte geben Sie eine gültige Zahl ein"),
    color: z.string().min(1, "Bitte wählen Sie eine Farbe aus"),
    fenceCover: z.string().min(1, "Bitte wählen Sie eine Option für den Sichtschutzzaun aus"),
    corner: z
      .string()
      .min(1, "Bitte geben Sie die Anzahl der Pfosten an")
      .regex(/^\d+$/, "Bitte geben Sie eine ganze Zahl ein"),
    mounting: z.string().min(1, "Bitte wählen Sie einen Montagetyp aus"),
    delivery: z.string().min(1, "Bitte wählen Sie eine Lieferoption aus"),
    gate: z.string().optional(),
    gateNeeded: z.boolean().optional(),
    gateWidth: z.string().optional(),
    gateSize: z.string().optional(),
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
  .refine((data) => {
    // Jeśli brama jest potrzebna, sprawdź czy wszystkie wymagane pola są wypełnione
    if (!data.gateNeeded) return true; // Jeśli brama nie jest potrzebna, zawsze zwróć true

    const issues = [];
    if (!data.gate || data.gate.trim().length === 0) {
      issues.push({ message: "Bitte wählen Sie einen Tor-Typ aus", path: ["gate"] });
    }
    if (!data.gateWidth || data.gateWidth.trim().length === 0) {
      issues.push({ message: "Bitte wählen Sie die Breite des Tores aus", path: ["gateWidth"] });
    }
    if (!data.gateSize || data.gateSize.trim().length === 0) {
      issues.push({ message: "Bitte wählen Sie die Größe des Tores aus", path: ["gateSize"] });
    }

    if (issues.length > 0) {
      return false; // Zwraca false, jeśli jakiekolwiek wymagane pola są puste
    }

    return true; // W przeciwnym razie zwraca true
  }, {
    message: "Wenn ein Tor benötigt wird, wählen Sie bitte einen Tor-Typ, die Breite und die Größe des Tores aus.",
    // Tu można dostosować ścieżkę błędu w zależności od potrzeb
    path: ["gateNeeded"],
  });