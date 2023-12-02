import React from 'react';
import Link from 'next/link';
import { Instagram, Facebook } from 'lucide-react';

export default function Socials() {
  return (
    <ul className="flex space-x-4 text-black">
      <li>
        <Link href="https://www.instagram.com/yourusername">
          <Instagram className="h-6 w-6" />
          <span className="ml-2">Instagram</span>
        </Link>
      </li>
      <li>
        <Link href="https://www.facebook.com/yourusername">
          <Facebook className="h-6 w-6" />
          <span className="ml-2">Facebook</span>
        </Link>
      </li>
    </ul>
  );
}