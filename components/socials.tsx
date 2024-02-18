import { FacebookIcon, InstagramIcon, MessageCircle, PhoneCall } from 'lucide-react';
import Link from 'next/link';

// Define a type for the props
interface SocialsProps {
  containerStyles?: string;
}

const Socials = ({ containerStyles }: SocialsProps) => {
  const facebookMessengerId = '100091680060282'; // Zmień na właściwy identyfikator
  const phoneNumber = '+49 1573 6978719'; // Zmień na właściwy numer telefonu

  return (
    <ul className={`${containerStyles}`}>
      <li>
        <Link href='/'>
          <InstagramIcon />
        </Link>
      </li>
      <li>
        <Link href='/'>
          <FacebookIcon />
        </Link>
      </li>
      <li>
        <a href={`https://m.me/${facebookMessengerId}`}>
          <MessageCircle />
        </a>
      </li>
      <li>
        <a href={`tel:${phoneNumber}`}>
          <PhoneCall />
        </a>
      </li>
    </ul>
  );
};

export default Socials;