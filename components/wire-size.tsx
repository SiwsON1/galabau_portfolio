import React from 'react';
import { useFormContext } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Select, SelectItem, SelectTrigger, SelectValue, SelectContent } from "@/components/ui/select";

export function WireSize({ control }: { control: any }) {
  const { watch } = useFormContext();
  const selectedSize = watch("fenceSize");

  return (
    <FormField
      control={control}
      name="fenceSize"
      render={({ field }) => (
        <FormItem>
          <FormLabel>
            <h3 className="text-xl text-center text-anthracit1">
              Größe des Zauns (in Metern)
            </h3>
          </FormLabel>
          <FormControl>
            <Select
              onValueChange={field.onChange}
              value={selectedSize}
            >
              <SelectTrigger>
                <SelectValue placeholder="Wählen Sie die Größe" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1.03">1.03m</SelectItem>
                <SelectItem value="1.23">1.23m</SelectItem>
                <SelectItem value="1.43">1.43m</SelectItem>
                <SelectItem value="1.63">1.63m</SelectItem>
                <SelectItem value="1.83">1.83m</SelectItem>
                <SelectItem value="2.03">2.03m</SelectItem>
              </SelectContent>
            </Select>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}