import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}



const formatDate = (date: Date | string): string => {
  const d = new Date(date);
  const day = d.getDate().toString().padStart(2, '0');
  const month = (d.getMonth() + 1).toString().padStart(2, '0'); // Miesiące są od 0 do 11
  const year = d.getFullYear();
  return `${day}/${month}/${year}`;
};

export default formatDate;