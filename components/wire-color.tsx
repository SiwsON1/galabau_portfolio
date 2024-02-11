import { useFormContext } from "react-hook-form";
import { FormField, FormItem, FormLabel, FormMessage, FormControl } from "@/components/ui/form";
import { RadioGroup } from "@/components/ui/radio-group";
import { RadioOption } from "./radioOption";

export function WireMountingColor({ control }: { control: any }) {
  const { watch } = useFormContext();
  const selectedValue = watch("color");

  const colorOptions = {
    "Feuerverzinkt": "#D3D3D3",
    "RAL 6005 grün": "#39603D",
    "RAL 7016 anthrazit": "#30393E",
    // Dodaj więcej opcji kolorów, jeśli potrzebujesz
  };

  return (
    <FormField
      control={control}
      name="color"
      render={({ field }) => (
        <FormItem>
            <h3 className="text-xl text-center text-anthracit1">
              Die passende Farbe
            </h3>
          <FormControl>
            <RadioGroup
              {...field}
              className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-4 justify-center"
              onValueChange={(value) => {
                console.log("RadioGroup Value Changed:", value);
                field.onChange(value);
              }}
            >
              {Object.entries(colorOptions).map(([colorName, colorCode]) => (
                <RadioOption
                  key={colorName}
                  value={colorName}
                  label={colorName}
                  selectedValue={selectedValue}
                  colorCode={colorCode}
                />
              ))}
            </RadioGroup>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}