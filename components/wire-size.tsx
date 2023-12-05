import React, { useState } from 'react';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Slider } from "@/components/ui/slider";

export function WireSize({ control }: { control: any }) {
  return (
    <FormField
      control={control}
      name="fenceSize"
      render={({ field }) => {
        const sliderValue = field.value || 0.63;

        return (
          <FormItem>
            <FormLabel>
            <h3 className="text-xl text-center text-anthracit1">
            Größe des Zauns (in Metern)            </h3>
          </FormLabel>
            <div className="mb-5"> {/* Zmiana stylu inline na klasę Tailwind */}
              <Slider
                value={[sliderValue]}
                max={2.03}
                min={0.63}
                step={0.2}
                onValueChange={(value) => {
                  field.onChange(value[0]);
                }}
              />
              <div className="flex justify-between">
                <span>0.63m</span>
                <span>2.03m</span>
              </div>
            </div>
            <div className="text-center">
              <span className="text-lg font-bold"> {/* Zmiana stylu inline na klasy Tailwind */}
                Aktuell:
                <span className="text-blue1"> {/* Dodatkowy span dla koloru liczby */}
                  {sliderValue.toFixed(2)}
                </span>m
              </span>
            </div>
            <FormMessage />
          </FormItem>
        );
      }}
    />
  );
}