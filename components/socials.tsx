import { FacebookIcon, InstagramIcon, MessageCircle, PhoneCall } from 'lucide-react';
import Link from 'next/link';

// Define a type for the props
interface SocialsProps {
  containerStyles?: string;
}

const Socials = ({ containerStyles }: SocialsProps) => {
  const facebookMessengerId = '5535629916550981'; // Zmień na właściwy identyfikator
  const phoneNumber = '519051781'; // Zmień na właściwy numer telefonu

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