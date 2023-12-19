import React from 'react';
import { User, Mail, Phone, MapPin, MessageCircle, CheckSquare } from 'lucide-react';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function UserForm({ control }: { control: any }) {
  const iconPositionClasses = "absolute mt-2 ml-3";

  return (
    <>
      <div className="flex flex-col md:flex-row md:space-x-4 my-8">
        <FormField
          control={control}
          name="vorname"
          render={({ field }) => (
            <FormItem className="flex-1 relative focus-within:text-blue1">
              <User className={iconPositionClasses} />
              <Input borderStyle="underline" focusColor="blue" placeholder="Vorname" {...field} />
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="nachname"
          render={({ field }) => (
            <FormItem className="flex-1 relative focus-within:text-blue1">
              <User className={iconPositionClasses} />
              <Input borderStyle="underline" focusColor="blue" placeholder="Nachname" {...field} />
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      <FormField
        control={control}
        name="email"
        render={({ field }) => (
          <FormItem className="relative focus-within:text-blue1 my-8">
            <Mail className={iconPositionClasses} />
            <Input borderStyle="underline" focusColor="blue" type="email" placeholder="E-Mail" {...field} />
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name="emailConfirm"
        render={({ field }) => (
          <FormItem className="relative focus-within:text-blue1 my-8">
            <Mail className={iconPositionClasses} />
            <Input borderStyle="underline" focusColor="blue" type="email" placeholder="E-Mail bestätigen" {...field} />
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name="telefon"
        render={({ field }) => (
          <FormItem className="relative focus-within:text-blue1 my-8">
            <Phone className={iconPositionClasses} />
            <Input borderStyle="underline" focusColor="blue" type="tel" placeholder="Telefon" {...field} />
            <FormMessage />
          </FormItem>
        )}
      />

      <div className="flex flex-col md:flex-row md:space-x-4 my-8">
        <FormField
          control={control}
          name="postleitzahl"
          render={({ field }) => (
            <FormItem className="flex-1 relative focus-within:text-blue1">
              <MapPin className={iconPositionClasses} />
              <Input borderStyle="underline" focusColor="blue" placeholder="Postleitzahl" {...field} />
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="stadt"
          render={({ field }) => (
            <FormItem className="flex-1 relative focus-within:text-blue1">
              <MapPin className={iconPositionClasses} />
              <Input borderStyle="underline" focusColor="blue" placeholder="Stadt" {...field} />
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      <FormField
        control={control}
        name="anmerkungen"
        render={({ field }) => (
          <FormItem className="relative focus-within:text-blue1 my-8">
            <MessageCircle className={iconPositionClasses} />
            <Textarea rows={4} placeholder="Anmerkungen" {...field} />
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name="datenschutz"
        render={({ field }) => (
          <FormItem className="relative focus-within:text-blue1 my-8">
            <FormControl>
              <label className="flex items-center">
                <Input type="checkbox" {...field} className="form-checkbox h-5 w-5 text-blue-600" />
                <span className="ml-2 text-gray-700">
                  Ich habe die Datenschutzerklärung zur Kenntnis genommen...
                </span>
              </label>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
}