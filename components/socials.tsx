import { FacebookIcon, InstagramIcon, TwitterIcon } from 'lucide-react';
import Link from 'next/link';

// Define a type for the props
interface SocialsProps {
  containerStyles?: string;
}

const Socials = ({ containerStyles }: SocialsProps) => {
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
        <Link href='/'>
          <TwitterIcon />
        </Link>
      </li>
    </ul>
  );
};

export default Socials;