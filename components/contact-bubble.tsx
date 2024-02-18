"use client";
import React, { useState } from 'react';
import { X, PhoneCall, Mail } from 'lucide-react';
import Image from 'next/image';

const ContactBubble = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const facebookMessengerId = '100091680060282';
  const phoneNumber = '+49 1573 6978719';
  const whatsappNumber = '+49 1573 6978719';

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/\+/g, '')}`; 

  return (
    <>
      {isModalOpen && (
        <div className={`fixed inset-x-0 bottom-16 md:bottom-80 md:right-1 md:inset-x-auto bg-white rounded-lg shadow-lg text-left p-4 w-full md:max-w-xs lg:max-w-sm xl:max-w-md 2xl:max-w-lg z-50`}>
          <p>Ihr Spezialist für Zaun- und Torinstallationen. Qualität und Präzision bei jedem Projekt.</p>
          <a href={`tel:${phoneNumber}`} className="block mt-2 group">
            <PhoneCall className="inline-block mr-2 text-blue-600" /><span className="hover:text-blue-600">Rufen Sie an: {phoneNumber}</span>
          </a>
          <a href={whatsappLink} className="flex items-center mt-2">
            <span className="inline-block mr-2"><Image src="/whatsapp-icon.png" alt="WhatsApp Icon" width={24} height={24} /></span>
            <span className="hover:text-green-600">Kontaktieren Sie uns über WhatsApp: {whatsappNumber}</span>
          </a>
          <hr className="my-4 border-gray-200" />
          <div className="my-4">
            <p>Brauchen Sie eine Beratung oder haben ein spezifisches Projekt im Sinn? Wir sind hier, um zu helfen.</p>
          </div>
          <a href={`https://m.me/${facebookMessengerId}`} className="block mt-2">
            <Mail className="inline-block mr-2 text-blue-600" /><span className="hover:text-blue-600">Schreiben Sie uns eine Nachricht</span>
          </a>

        </div>
      )}
      <div className={`fixed inset-x-0 bottom-0 md:right-1 md:bottom-80 md:inset-x-auto flex justify-center md:justify-end items-end z-50`}>
        <button onClick={toggleModal} className="p-4 bg-steelblue rounded-lg hover:scale-110 transition-transform">
          {isModalOpen ? <X className="text-white h-12 w-12" /> : <Image src="/CustomPhoneChatIcon.svg" alt="Chat Icon" width={36} height={36} />}
        </button>
      </div>
    </>
  );
};

export default ContactBubble;