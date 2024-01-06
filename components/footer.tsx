import React from 'react';
import Socials from './socials';
import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react';

const Footer = () => {


  return (
    <footer className="pt-12 xl:pt-[100px] bg-lightcharcoal text-white">
      <div className="container mx-auto pb-12 xl:pb-[100px]">
        <div className='flex flex-col xl:flex-row gap-x-5 gap-y-10'>

          <div className='flex-1'>
            <h2 className="font-bold text-xl text-steelblue mb-5">Galabau Darius</h2>
            <div className='flex flex-col gap-y-3'>
              <div className='flex items-center gap-x-3'>
                <MapPin className='text-steelblue'/>
                <div>Miasto, Kod pocztowy</div>
              </div>
              <div className='flex items-center gap-x-3'>
                <Phone className='text-steelblue'/>
                <a href="tel:+48519051781">519051781</a>
              </div>
              <div className='flex items-center gap-x-3'>
                <Mail className='text-steelblue'/>
                <div>kontakt@nazwafirmy.com</div>
              </div>
            </div>
          </div>

          <div className='flex-1 xl:mt-[50px]'>
            <Socials  containerStyles='flex gap-x-3 text-steelblue'/>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;