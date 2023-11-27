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
        // Ustawienie wartości suwaka bezpośrednio z wartości pola
        const sliderValue = field.value || 0.63;

        return (
          <FormItem>
            <FormLabel>Größe des Zauns (in Metern)</FormLabel>
            <div style={{ marginBottom: '20px' }}>
              <Slider
                value={[sliderValue]}
                max={2.03}
                min={0.63}
                step={0.2}
                onValueChange={(value) => {
                  field.onChange(value[0]);
                }}
              />
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>0.63m</span>
                <span>2.03m</span>
              </div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <span style={{ fontSize: '16px', fontWeight: 'bold' }}>
                Aktuell: {sliderValue.toFixed(2)}m
              </span>
            </div>
            <FormMessage />
          </FormItem>
        );
      }}
    />
  );
}