"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";
import swagPhotos from "@/lib/photos";
import Link from "next/link";

const Gallery = () => {
  const photos = swagPhotos;

  return (
    <section id="gallery">
      <div className="p-5 md:p-10">
        <motion.div
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="flex flex-col justify-center text-center mb-10 gap-y-8 mt-20"
        >
          <h1 className="text-5xl font-bold mb-3 leading-relaxed">
            - Unsere Galerie -
          </h1>
          <p className="mx-auto mb-5 w-3/4 md:w-1/2 text-center">
            Ein Bild sagt mehr als tausend Worte. Jedes Projekt zeigt unsere
            Hingabe an Qualität und Design. Sehen Sie sich unsere Arbeit an und
            lassen Sie sich für Ihr nächstes Projekt inspirieren.
          </p>
        </motion.div>
        <div className="columns-1 gap-5 lg:gap-8 sm:columns-2 lg:columns-3 xl:columns-4 [&>div:not(:first-child)]:mt-5 lg:[&>div:not(:first-child)]:mt-8">
          {photos.map(({ id, imageSrc }) => (
            <div key={id}>
              <Link key={id} scroll={false} href={`/photo/${id}`}>
                <Image
                  alt={`Gallery image ${id}}`}
                  src={imageSrc}
                  height={500}
                  width={300}
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
