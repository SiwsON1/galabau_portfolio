"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";
import { useInView } from "react-intersection-observer";
import { Button } from "./ui/button";
import { useMediaQuery } from "react-responsive";
import Link from "next/link";

const AboutUs = () => {
  const isMobile = useMediaQuery({
    query: '(max-width: 768px)',
  });
  const [ref, inView] = useInView({
    threshold: !isMobile ? 0.5 : undefined,
  });
  return (
    <section id="aboutUs" className="py-12 xl:pt-0 xl:pb-24" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row">
          <motion.div
          variants={fadeIn('right', 0.4)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount: 0.5}}
           className="flex-1 relative mt-20">
            <Image
              src={"/aboutus1.jpg"}
              width={659}
              height={921}
              alt="Zaun- und Torinstallation"
            />
          </motion.div>
          <div
          className="xl:max-w-[470px]">
            <h2 className="h2 mb-[40px]">Über Uns – Expertise trifft auf Präzision</h2>
            <p className="mb-10 ">
              Herzlich willkommen bei Galabu Darius, Ihrem Spezialisten für
              Zaun- und Torinstallation sowie einfache Baggerarbeiten. Mit
              umfassender Erfahrung und einem Auge für Qualität bin ich Ihr
              Ansprechpartner für hochwertige Einfriedungen und Torlösungen.
              Mein Angebot umfasst eine Vielzahl an Zaunsystemen, darunter der
              beliebte Doppelstabmattenzaun in verschiedenen Höhen und Farben,
              gefertigt aus erstklassigen Materialien. Neben Zäunen biete ich
              passende Gartentore und Türen an, die perfekt auf Ihre Bedürfnisse
              zugeschnitten sind. Ich verstehe, dass jedes Projekt einzigartig
              ist, und biete daher maßgeschneiderte Lösungen an. Egal ob es um
              die Montage eines neuen Zauns geht oder um kleinere Erdarbeiten
              mit einem Mini-Bagger – ich garantiere eine professionelle und
              effiziente Umsetzung Ihrer Projekte.
            </p>
            <p className="mb-10 ">Die Zufriedenheit meiner Kunden liegt mir am Herzen. Deshalb lege ich großen Wert auf persönliche Beratung und individuelle Betreuung. Ich stehe Ihnen von Montag bis Freitag von 8 bis 18 Uhr zur Verfügung, um Ihre Fragen zu beantworten oder eine Bestellung aufzunehmen.

Kontaktieren Sie mich gerne unter +49 1573 6978719 für eine Beratung oder um mehr über meine Dienstleistungen zu erfahren. Ich freue mich darauf, Sie bei Ihrem nächsten Zaun- oder Erdarbeitsprojekt unterstützen zu dürfen!</p>
            <Link href="https://www.facebook.com/profile.php?id=61553627408575">
      <Button size="oval" variant="blue">Weitere Informationen</Button>
      </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
