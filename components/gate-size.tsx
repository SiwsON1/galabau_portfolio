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

export function GateSize({ control }: { control: any }) {
    const { watch } = useFormContext();
    const selectedSize = watch("gateSize");

    return (
      <FormField
        control={control}
        name="gateSize"
        render={({ field }) => (
          <FormItem>
            <h3 className="text-xl text-center text-anthracit1">
              Größe des Tores (in Metern)
            </h3>
            <FormControl>
            <Select
              onValueChange={field.onChange}
              value={selectedSize}
            >
                <SelectTrigger>
                  <SelectValue placeholder="Wählen Sie die Höhe" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0.8">0.8m</SelectItem>
                  <SelectItem value="1.0">1.0m</SelectItem>
                  <SelectItem value="1.2">1.2m</SelectItem>
                  <SelectItem value="1.4">1.4m</SelectItem>
                  <SelectItem value="1.6">1.6m</SelectItem>
                  <SelectItem value="1.8">1.8m</SelectItem>
                  <SelectItem value="2.0">2.0m</SelectItem>
                </SelectContent>
              </Select>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    );
  }