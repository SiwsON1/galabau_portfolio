import { useFormContext } from "react-hook-form";
import { FormField, FormItem, FormLabel, FormMessage, FormControl } from "@/components/ui/form";
import { RadioGroup } from "@/components/ui/radio-group";
import { RadioOption } from "./radioOption";

export function WireThickness1({ control }: { control: any }) {
  const { watch } = useFormContext();
  const selectedValue = watch("drahtstaerke");

  const thicknessOptions = {
    "6-5-6": { imageSrc: "/Drahtstärke.svg", label: "Stärke 6/5/6" },
    "8-6-8": { imageSrc: "/Drahtstärke.svg", label: "Stärke 8/6/8" },
    // Dodaj więcej opcji, jeśli potrzebujesz
  };

  return (
    <FormField
      control={control}
      name="drahtstaerke"
      render={({ field }) => (
        <FormItem>
            <h3 className="text-xl text-center text-anthracit1">
              Drahtstärke
            </h3>
          <FormControl>
            <RadioGroup
              {...field}
              defaultValue="6-5-6"
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
              onValueChange={(value) => {
                console.log("RadioGroup Value Changed:", value);
                field.onChange(value);
              }}
            >
              {Object.entries(thicknessOptions).map(([value, { imageSrc, label }]) => (
                <RadioOption
                  key={value}
                  value={value}
                  label={label}
                  selectedValue={selectedValue}
                  imageSrc={imageSrc}
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