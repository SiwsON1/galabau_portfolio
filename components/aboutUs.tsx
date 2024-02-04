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
    query: "(max-width: 768px)",
  });
  const [ref, inView] = useInView({
    threshold: !isMobile ? 0.5 : undefined,
  });
  return (
    <section id="aboutUs" className="py-12 xl:pt-0 xl:pb-24" ref={ref}>
      <motion.div
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.2 }}
        className="flex flex-col justify-center text-center mb-10 gap-y-8 mt-20"
      >
        <h1 className="text-5xl font-bold mb-3 leading-relaxed">
          - Über Uns -
        </h1>
      </motion.div>
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row">
          <div className="flex-1 relative mt-20">
            <Image
              src={"/aboutus1.jpg"}
              width={659}
              height={921}
              alt="Zaun- und Torinstallation"
            />
          </div>
          <div className="xl:max-w-[470px] mt-20 ">
            <p className="mb-10 ">
              Unser Unternehmen, Garten und Landschaftsbau-Darius, wurde im Jahr
              2020 gegründet und befindet sich in Grafeld. Wir sind
              spezialisiert auf den Verkauf von doppelstabmattenzaun-Zäunen, die
              Montage von Zäunen, Erdarbeiten mit Bagger und Radlader, sowie die
              Verlegung von Dreinage, Kanalisations-und
              Regenwasserabflussrohren. Unser Unternehmen bietet außerdem
              Dienstleistungen wie Baumfällung, Wurzelentfernung und die
              Abdichtung von Außenwänden gegen Feuchtigkeit an.
            </p>
            <p className="mb-10 ">
              Die Zufriedenheit meiner Kunden liegt mir am Herzen. Deshalb lege
              ich großen Wert auf persönliche Beratung und individuelle
              Betreuung. Ich stehe Ihnen von Montag bis Freitag von 8 bis 18 Uhr
              zur Verfügung, um Ihre Fragen zu beantworten oder eine Bestellung
              aufzunehmen. Kontaktieren Sie mich gerne unter +49 1573 6978719
              für eine Beratung oder um mehr über meine Dienstleistungen zu
              erfahren. Ich freue mich darauf, Sie bei Ihrem nächsten Zaun- oder
              Erdarbeitsprojekt unterstützen zu dürfen!
            </p>
            <Link href="https://www.facebook.com/profile.php?id=61553627408575">
              <Button size="oval" variant="blue">
                Weitere Informationen
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
