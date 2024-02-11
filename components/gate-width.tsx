import React from 'react';
import { useFormContext } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Select, SelectItem, SelectTrigger, SelectValue, SelectContent } from "@/components/ui/select";

export function GateWidth({ control }: { control: any }) {
  const { watch } = useFormContext();
  const selectedType = watch("gate");
  const selectedWidth = watch("gateWidth");

  // Definiowanie dostępnych szerokości w zależności od typu bramy
  const widthOptions = {
    type1: ["0.8", "1.0", "1.2", "1.4", "1.6", "1.8", "2.0"], // jednoskrzydłowa
    type2: ["2.0", "2.5", "3.0", "3.5", "4.0"], // dwuskrzydłowa
  };

  const currentWidthOptions = selectedType === 'type1' ? widthOptions.type1 : widthOptions.type2;

  return (
    <FormField
      control={control}
      name="gateWidth"
      render={({ field }) => (
        <FormItem>
          <h3 className="text-xl text-center text-anthracit1">
            Lichte Weite des Tores (in Metern)
          </h3>
          <FormControl>
            <Select
              {...field}
              onValueChange={field.onChange}
              value={selectedWidth}
            >
              <SelectTrigger>
                <SelectValue placeholder="Wählen Sie die Breite" />
              </SelectTrigger>
              <SelectContent>
                {currentWidthOptions.map((width) => (
                  <SelectItem key={width} value={width}>{width}m</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}