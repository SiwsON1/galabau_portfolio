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
  const inputClasses = "appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue1 my-8";
  const iconPositionClasses = "absolute mt-2 ml-3";

  return (
    <>
      <div className="flex flex-col md:flex-row md:space-x-4 my-8">
        <FormItem className="flex-1 relative focus-within:text-blue1 ">
          <User className={`${iconPositionClasses}`} />
          <Input borderStyle="underline" focusColor="blue" placeholder="Vorname" {...control.register("vorname")}  />
          <FormMessage />
        </FormItem>

        <FormItem className="flex-1 relative focus-within:text-blue1 ">
          <User className={`${iconPositionClasses}`} />
          <Input borderStyle="underline" focusColor="blue" placeholder="Nachname " {...control.register("nachname")}  />
          <FormMessage />
        </FormItem>
      </div>

      <FormItem className="relative focus-within:text-blue1 my-8">
        <Mail className={`${iconPositionClasses}`} />
        <Input borderStyle="underline" focusColor="blue" type="email" placeholder="E-Mail" {...control.register("email")} />
        <FormMessage />
      </FormItem>

      <FormItem className="relative focus-within:text-blue1 my-8">
        <Mail className={`${iconPositionClasses}`} />
        <Input borderStyle="underline" focusColor="blue" type="email" placeholder="E-Mail bestätigen " {...control.register("emailConfirm")} />
        <FormMessage />
      </FormItem>

      <FormItem className="relative focus-within:text-blue1 my-8">
        <Phone className={`${iconPositionClasses}`} />
        <Input borderStyle="underline" focusColor="blue" type="tel" placeholder="Telefon " {...control.register("telefon")}  />
        <FormMessage />
      </FormItem>

      <div className="flex flex-col md:flex-row md:space-x-4 my-8">
        <FormItem className="flex-1 relative focus-within:text-blue1 ">
          <MapPin className={`${iconPositionClasses}`} />
          <Input borderStyle="underline" focusColor="blue" placeholder="Postleitzahl" {...control.register("postleitzahl")} />
          <FormMessage />
        </FormItem>

        <FormItem className="flex-1 relative focus-within:text-blue1">
          <MapPin className={`${iconPositionClasses}`} />
          <Input borderStyle="underline" focusColor="blue" placeholder="Stadt" {...control.register("stadt")} />
          <FormMessage />
        </FormItem>
      </div>

      <FormItem className="relative focus-within:text-blue1 my-8">
        <MessageCircle className={`${iconPositionClasses}`} />
        <Textarea rows={4} placeholder="Anmerkungen" {...control.register("anmerkungen")}  />
        <FormMessage />
      </FormItem>

      <FormItem className="relative focus-within:text-blue1 my-8">
        <FormControl>
          <label className="flex items-center">
            <Input type="checkbox" {...control.register("datenschutz")} className="form-checkbox h-5 w-5 text-blue-600" />
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