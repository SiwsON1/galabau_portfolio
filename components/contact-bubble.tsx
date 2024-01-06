import React from 'react';
import { MessageCircle, PhoneCall } from 'lucide-react';

const ContactBubble = () => {
  const facebookMessengerId = '5535629916550981';
  const phoneNumber = '519051781';

  return (
    <div className="fixed bottom-5 right-5 flex space-x-4 items-center justify-center">
      <a href={`https://m.me/${facebookMessengerId}`} className="p-4 bg-steelblue rounded-full hover:scale-110 transition-transform">
        <MessageCircle className="text-white h-8 w-8" />
      </a>
      <a href={`tel:${phoneNumber}`} className="p-4 bg-steelblue rounded-full hover:scale-110 transition-transform">
        <PhoneCall className="text-white h-8 w-8" />
      </a>
    </div>
  );
};

export default ContactBubble;