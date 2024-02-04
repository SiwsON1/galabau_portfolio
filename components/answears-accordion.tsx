"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import React from "react";

import { motion } from "framer-motion";
import { fadeIn } from "@/variants";
export function AnswearsAccordion() {
  return (
    <div className="flex flex-col items-center mt-10 py-10">
      <motion.div
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.2 }}
        className="flex flex-col justify-center text-center mb-10 gap-y-8 mt-20"
      >
        <h1 className="text-5xl font-bold mb-3 leading-relaxed">
          - Antworten auf Ihre Fragen -
        </h1>

      </motion.div>
      <Accordion type="single" collapsible className="w-3/4 mb-10">
        <AccordionItem value="item-1">
          <AccordionTrigger>Bieten Sie auch eine Garantie an?</AccordionTrigger>
          <AccordionContent>
            Sicher, bei uns erhalten Sie eine umfassende Zwei-Jahres-Garantie auf alle installierten Zäune, weil Ihre Zufriedenheit an erster Stelle steht.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Stellen Sie kostenlose Beratungstermine vor Ort zur Verfügung?</AccordionTrigger>
          <AccordionContent>
            Absolut, wir besuchen Sie gerne, um Ihre Bedürfnisse direkt vor Ort zu besprechen und die optimale Lösung für Sie zu finden.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Wie schnell wird mein Zaun geliefert und installiert?</AccordionTrigger>
          <AccordionContent>
            Wir bemühen uns, Ihren Zaun innerhalb von 1 bis 6 Wochen nach Bestellung zu liefern und zu montieren. Die genaue Zeit hängt von der aktuellen Nachfrage ab.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>Welche Zahlungsmöglichkeiten bieten Sie an?</AccordionTrigger>
          <AccordionContent>
            Die Bezahlung erfolgt bequem und sicher per Überweisung nach Erhalt der Rechnung.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger>Wie weit reicht Ihr Service?</AccordionTrigger>
          <AccordionContent>
          Wir sind in einem Radius von 60 Kilometern um 49626 Grafeld für Sie da.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}
