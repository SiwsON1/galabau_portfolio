import React from 'react';
import { User, Mail, Phone, MapPin, MessageCircle, CheckSquare } from 'lucide-react';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function UserForm({ control }: { control: any }) {
  const inputClasses = "appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-green-500";
  const iconPositionClasses = "absolute mt-2 ml-3";

  return (
    <>
      <div className="flex flex-col md:flex-row md:space-x-4">
        <FormItem className="flex-1 relative focus-within:text-green-500">
          <User className={`${iconPositionClasses}`} />
          <Input borderStyle="underline" focusColor="green" placeholder=" " {...control.register("vorname")}  />
          <FormLabel className="absolute left-10 top-1 text-gray-500">Vorname</FormLabel>
          <FormMessage />
        </FormItem>

        <FormItem className="flex-1 relative focus-within:text-green-500">
          <User className={`${iconPositionClasses}`} />
          <Input borderStyle="underline" focusColor="green" placeholder=" " {...control.register("nachname")}  />
          <FormLabel className="absolute left-10 top-1 text-gray-500">Nachname</FormLabel>
          <FormMessage />
        </FormItem>
      </div>

      <FormItem className="relative focus-within:text-green-500">
        <Mail className={`${iconPositionClasses}`} />
        <Input borderStyle="underline" focusColor="green" type="email" placeholder=" " {...control.register("email")} />
        <FormLabel className="absolute left-10 top-1 text-gray-500">E-Mail</FormLabel>
        <FormMessage />
      </FormItem>

      <FormItem className="relative focus-within:text-green-500">
        <Mail className={`${iconPositionClasses}`} />
        <Input borderStyle="underline" focusColor="green" type="email" placeholder=" " {...control.register("emailConfirm")} />
        <FormLabel className="absolute left-10 top-1 text-gray-500">E-Mail bestätigen</FormLabel>
        <FormMessage />
      </FormItem>

      <FormItem className="relative focus-within:text-green-500">
        <Phone className={`${iconPositionClasses}`} />
        <Input borderStyle="underline" focusColor="green" type="tel" placeholder=" " {...control.register("telefon")}  />
        <FormLabel className="absolute left-10 top-1 text-gray-500">Telefon</FormLabel>
        <FormMessage />
      </FormItem>

      <div className="flex flex-col md:flex-row md:space-x-4">
        <FormItem className="flex-1 relative focus-within:text-green-500">
          <MapPin className={`${iconPositionClasses}`} />
          <Input borderStyle="underline" focusColor="green" placeholder=" " {...control.register("postleitzahl")} />
          <FormLabel className="absolute left-10 top-1 text-gray-500">Postleitzahl</FormLabel>
          <FormMessage />
        </FormItem>

        <FormItem className="flex-1 relative focus-within:text-green-500">
          <MapPin className={`${iconPositionClasses}`} />
          <Input borderStyle="underline" focusColor="green" placeholder=" " {...control.register("stadt")} />
          <FormLabel className="absolute left-10 top-1 text-gray-500">Stadt</FormLabel>
          <FormMessage />
        </FormItem>
      </div>

      <FormItem className="relative focus-within:text-green-500">
        <MessageCircle className={`${iconPositionClasses}`} />
        <Textarea rows={4} placeholder=" " {...control.register("anmerkungen")}  />
        <FormLabel className="absolute left-10 top-1 text-gray-500">Anmerkungen</FormLabel>
        <FormMessage />
      </FormItem>

      <FormItem className="relative focus-within:text-green-500">
        <FormControl>
          <label className="flex items-center">
            <Input type="checkbox" {...control.register("datenschutz")} className="form-checkbox h-5 w-5 text-green-600" />
            <span className="ml-2 text-gray-700">
              Ich habe die Datenschutzerklärung zur Kenntnis genommen...
            </span>
          </label>
        </FormControl>
        <FormMessage />
      </FormItem>
    </>
  );
}