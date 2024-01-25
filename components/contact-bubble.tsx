"use client";
import React, { useState } from 'react';
import { X, MessageCircle, PhoneCall, Mail } from 'lucide-react';

const ContactBubble = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const facebookMessengerId = '100003120825478';
  const phoneNumber = '519051781';

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  // Kontener dla modala i przycisku jest teraz podzielony na dwa oddzielne elementy
  return (
    <>
      {isModalOpen && (
        <div className={`fixed inset-x-0 bottom-16 md:bottom-5 md:right-5 md:inset-x-auto bg-white rounded-lg shadow-lg text-left p-4 w-full md:max-w-xs lg:max-w-sm xl:max-w-md 2xl:max-w-lg z-50`}>
          <p>Ihr Spezialist für Zaun- und Torinstallationen. Qualität und Präzision bei jedem Projekt.</p>
          <a href={`tel:${phoneNumber}`} className="block mt-2 group">
            <PhoneCall className="inline-block mr-2 text-blue-600" /><span className="hover:text-blue-600">Rufen Sie an: {phoneNumber}</span>
          </a>
          <div className="my-4">
            <p>Brauchen Sie eine Beratung oder haben ein spezifisches Projekt im Sinn? Wir sind hier, um zu helfen.</p>
          </div>
          <a href={`https://m.me/${facebookMessengerId}`} className="block mt-2 hover:underline">
            <Mail className="inline-block mr-2 text-blue-600" /><span className="hover:text-blue-600">Schreiben Sie uns eine Nachricht</span>
          </a>
        </div>
      )}
      <div className={`fixed inset-x-0 bottom-0 md:right-5 md:bottom-5 md:inset-x-auto flex justify-center md:justify-end items-end z-50`}>
        <button onClick={toggleModal} className="p-4 bg-steelblue rounded-lg hover:scale-110 transition-transform">
          {isModalOpen ? <X className="text-white h-8 w-8" /> : <div className="flex items-center justify-center"><PhoneCall className="text-white h-8 w-8" /><MessageCircle className="text-white h-8 w-8" /></div>}
        </button>
      </div>
    </>
  );
};

export default ContactBubble;