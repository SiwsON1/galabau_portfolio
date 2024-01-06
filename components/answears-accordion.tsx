import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";

  export function AnswearsAccordion() {
    return (
      <div className="flex flex-col items-center mt-10 py-10">
        <h2 className="text-2xl font-semibold mt-10 mb-10">Häufig gestellte Fragen - Ihr Zaunkonfigurator</h2>
        <Accordion type="single" collapsible className="w-3/4 mb-10">
          <AccordionItem value="item-1">
            <AccordionTrigger>Wird auch ein kostenloses Vor Ort Termin angeboten?</AccordionTrigger>
            <AccordionContent>
              Gerne kommen wir bei Ihnen vorbei, und besprechen alle Punkte ab. So können wir uns auch ein Bild von den Örtlichkeiten machen.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Bis wohin fahren wir ?</AccordionTrigger>
            <AccordionContent>
              Wir montieren in Hamburg, Schleswig Holstein und im nördlichen Niedersachsen.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Gibts auch eine Garantie?</AccordionTrigger>
            <AccordionContent>
              Du bekommst 5 Jahre Garantie für alle gelieferten Zäune.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>Wie lange muss ich auf den Zaun warten?</AccordionTrigger>
            <AccordionContent>
              Nach deiner Bestellung kann es 1-6 Wochen dauern, bis der Zaun geliefert und aufgebaut wird. Dies hängt von der saisonalen Auslastung ab.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>Wie bezahle ich?</AccordionTrigger>
            <AccordionContent>
              Sie können gerne nach Erhalt der Rechnung den Betrag einfach per Bankkonto überweisen.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    )
  }