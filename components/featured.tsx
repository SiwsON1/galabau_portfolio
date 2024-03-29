"use client";
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeIn } from '@/variants';

const Featured = () => {
  const phoneNumber = '+49 1573 6978719';

  return (
    <motion.section
      variants={fadeIn('right', 0.2)}
      initial='hidden'
      whileInView={'show'}
      viewport={{ once: false, amount: 0.2 }}
      className='bg-lightcharcoal xl:h-[260px] max-w-[1305px] ml-auto xl:-top-[120px] relative md:rounded-tl-[30px] md:rounded-bl-[30px] px-[80px] py-[60px]'
    >
      <div className='flex flex-col xl:flex-row items-center text-center xl:text-left h-full  gap-y-4 gap-x-8'>
        <Image src="/featured.png" width={80} height={88} alt="konfigurator" />
        <h2 className='flex-1 text-lg leading-relaxed text-white'>
          Starten Sie jetzt und finden Sie die perfekte Lösung mit unserem <Link href="/configurator" passHref><span className="cursor-pointer">Konfigurator</span></Link>
        </h2>
        <div>
        <p className='flex-1 text-white'>
          Bevorzugen Sie ein persönliches Gespräch? Rufen Sie uns an unter
        </p>
        <p>
        <a href={`tel:${phoneNumber}`} className="text-white text-xl font-bold ">{phoneNumber}</a>
        </p>
        </div>

      </div>
    </motion.section>
  );
};

export default Featured;