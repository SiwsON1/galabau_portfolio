import { useFormContext } from "react-hook-form";
import { FormField, FormItem, FormLabel } from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import ImageWithBorder from "./img-border";
import { useState } from "react";

export function WireMounting({ control }: { control: any }) {
  const { watch } = useFormContext();
  const selectedValue = watch("mounting");
  console.log("Current Value in mounting:", selectedValue);

  return (
    <FormField
      control={control}
      name="mounting"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Pfostentyp</FormLabel>
          <RadioGroup
            {...field}
            className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-4 justify-center"
            onValueChange={(value) => {
              console.log("RadioGroup Value Changed:", value);
              field.onChange(value);
            }}
          >
            <div className={`relative h-36 w-36 lg:w-48 border-2 border-gray-300 cursor-pointer ${selectedValue === "type1" ? "border-blue-500" : ""}`}>
              <RadioGroupItem
                value="type1"
                id="type1"
                className="peer sr-only"
              />
              <label
                htmlFor="type1"
                className={`w-full h-full flex justify-center items-center ${
                  selectedValue === "type1" ? "border-blue-500" : ""
                }`}
                style={{ position: "relative", overflow: "hidden" }}
              >
                <Image
                  src="/mocowanie_typ_1.webp"
                  alt="Pfostentyp 1"
                  layout="fill"
                  objectFit="cover"
                />
                Pfostentyp 1
              </label>
            </div>

            {/* Skopiuj ten div poniżej dla pozostałych opcji */}
            <div className={`relative h-36 w-36 lg:w-48 border-2 border-gray-300 cursor-pointer ${selectedValue === "type2" ? "border-blue-500" : ""}`}>
              <RadioGroupItem
                value="type2"
                id="type2"
                className="peer sr-only"
              />
              <label
                htmlFor="type2"
                className={`w-full h-full flex justify-center items-center ${
                  selectedValue === "type2" ? "border-blue-500" : ""
                }`}
                style={{ position: "relative", overflow: "hidden" }}
              >
                <Image
                  src="/mocowanie_typ_2.webp"
                  alt="Pfostentyp 2"
                  layout="fill"
                  objectFit="cover"
                />
                Pfostentyp 2
              </label>
            </div>

            {/* Skopiuj ten div poniżej dla pozostałych opcji */}
            <div className={`relative h-36 w-36 lg:w-48 border-2 border-gray-300 cursor-pointer ${selectedValue === "type3" ? "border-blue-500" : ""}`}>
              <RadioGroupItem
                value="type3"
                id="type3"
                className="peer sr-only"
              />
              <label
                htmlFor="type3"
                className={`w-full h-full flex justify-center items-center ${
                  selectedValue === "type3" ? "border-blue-500" : ""
                }`}
                style={{ position: "relative", overflow: "hidden" }}
              >
                <Image
                  src="/mocowanie_typ_3.webp"
                  alt="Pfostentyp 3"
                  layout="fill"
                  objectFit="cover"
                />
                Pfostentyp 3
              </label>
            </div>

            {/* Skopiuj ten div poniżej dla pozostałych opcji */}
            <div className={`relative h-36 w-36 lg:w-48 border-2 border-gray-300 cursor-pointer ${selectedValue === "type4" ? "border-blue-500" : ""}`}>
              <RadioGroupItem
                value="type4"
                id="type4"
                className="peer sr-only"
              />
              <label
                htmlFor="type4"
                className={`w-full h-full flex justify-center items-center ${
                  selectedValue === "type4" ? "border-blue-500" : ""
                }`}
                style={{ position: "relative", overflow: "hidden" }}
              >
                <Image
                  src="/mocowanie_typ_4.webp"
                  alt="Pfostentyp 4"
                  layout="fill"
                  objectFit="cover"
                />
                Pfostentyp 4
              </label>
            </div>
          </RadioGroup>
        </FormItem>
      )}
    />
  );
}