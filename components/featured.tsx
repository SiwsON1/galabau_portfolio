"use client";
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import {motion} from 'framer-motion';
import { fadeIn } from '@/variants';

const Featured = () => {
  return (
    <motion.section
    variants={fadeIn('right', 0.2)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount: 0.2}}
    className='bg-lightcharcoal xl:h-[260px] max-w-[1305px] ml-auto xl:-top-[120px] relative md:rounded-tl-[30px] md:rounded-bl-[30px] px-[80px] py-[60px]'>
        <div className='flex flex-col xl:flex-row items-center text-center xl:text-left h-full gap-x-8'>
        <Image src="/featured.png"  width={80} height={88} alt="konfigurator" />
        <h2 className='flex-1 text-xl leading-relaxed text-white'>
          Starten Sie jetzt und finden Sie die perfekte Lösung mit unserem <Link  href="/configurator" passHref><span className="cursor-pointer">Konfigurator</span></Link>
        </h2>
        <p className='flex-1'>te Lösung mit unserem Starten Sie jetzt te Lösung mit unserem Starten Sie jetzund finden Sie die perfekte Lösung mit unserem te Lösung mit unserem Starten Sie </p>
        </div>
    </motion.section>
  );
};

export default Featured;