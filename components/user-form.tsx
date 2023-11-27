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
  const inputClasses = "appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-orange-500";
  const iconClasses = "mr-2 text-gray-500";

  return (
    <>
      <FormField control={control} name="vorname" render={({ field }) => (
        <FormItem>
          <FormLabel>
            <User className={iconClasses} />
            Ihr Vorname
          </FormLabel>
          <FormControl>
            <Input placeholder="Vorname" {...field} className={inputClasses} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )} />

      <FormField control={control} name="nachname" render={({ field }) => (
        <FormItem>
          <FormLabel>
            <User className={iconClasses} />
            Ihr Nachname
          </FormLabel>
          <FormControl>
            <Input placeholder="Nachname" {...field} className={inputClasses} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )} />

      <FormField control={control} name="email" render={({ field }) => (
        <FormItem>
          <FormLabel>
            <Mail className={iconClasses} />
            Ihre E-Mail
          </FormLabel>
          <FormControl>
            <Input type="email" placeholder="E-Mail" {...field} className={inputClasses} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )} />

      <FormField control={control} name="emailConfirm" render={({ field }) => (
        <FormItem>
          <FormLabel>
            <Mail className={iconClasses} />
            E-Mail Adresse bestätigen
          </FormLabel>
          <FormControl>
            <Input type="email" placeholder="E-Mail bestätigen" {...field} className={inputClasses} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )} />

      <FormField control={control} name="telefon" render={({ field }) => (
        <FormItem>
          <FormLabel>
            <Phone className={iconClasses} />
            Telefon
          </FormLabel>
          <FormControl>
            <Input type="tel" placeholder="Telefon" {...field} className={inputClasses} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )} />

      <FormField control={control} name="postleitzahl" render={({ field }) => (
        <FormItem>
          <FormLabel>
            <MapPin className={iconClasses} />
            Postleitzahl
          </FormLabel>
          <FormControl>
            <Input placeholder="Postleitzahl" {...field} className={inputClasses} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )} />

      <FormField control={control} name="stadt" render={({ field }) => (
        <FormItem>
          <FormLabel>
            <MapPin className={iconClasses} />
            Stadt
          </FormLabel>
          <FormControl>
            <Input placeholder="Stadt" {...field} className={inputClasses} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )} />

      <FormField control={control} name="anmerkungen" render={({ field }) => (
        <FormItem>
          <FormLabel>
            <MessageCircle className={iconClasses} />
            Sonstige Anmerkungen
          </FormLabel>
          <FormControl>
            <Textarea rows={4} placeholder="Anmerkungen" {...field} className="shadow-sm focus:ring-orange-500 focus:border-orange-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md" />
          </FormControl>
          <FormMessage />
        </FormItem>
      )} />

      <FormField control={control} name="datenschutz" render={({ field }) => (
        <FormItem>
          <FormControl>
            <label className="flex items-center">
              <CheckSquare className="text-gray-500 mr-2" />
              <Input type="checkbox" {...field} className="form-checkbox h-5 w-5 text-orange-600" />
              <span className="ml-2 text-gray-700">
                Ich habe die Datenschutzerklärung zur Kenntnis genommen. Ich stimme zu, dass meine Angaben zur Kontaktaufnahme und für Rückfragen dauerhaft gespeichert werden.
              </span>
            </label>
          </FormControl>
          <FormMessage />
        </FormItem>
      )} />
    </>
  );
}