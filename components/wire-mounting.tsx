import { useFormContext } from "react-hook-form";
import { FormField, FormItem, FormLabel } from "@/components/ui/form";
import { RadioGroup } from "@/components/ui/radio-group";
import { RadioOption } from "./radioOption";

export function WireMounting({ control }: { control: any }) {
  const { watch } = useFormContext();
  const selectedValue = watch("mounting");

  const mountingOptions = {
    type1: { imageSrc: "/mocowanie_typ_1.webp", label: "Pfostentyp 1" },
    type2: { imageSrc: "/mocowanie_typ_2.webp", label: "Pfostentyp 2" },
    type3: { imageSrc: "/mocowanie_typ_3.webp", label: "Pfostentyp 3" },
    type4: { imageSrc: "/mocowanie_typ_4.webp", label: "Pfostentyp 4" },
    // Dodaj więcej opcji, jeśli potrzebujesz
  };

  return (
    <FormField
      control={control}
      name="mounting"
      render={({ field }) => (
        <FormItem>
          <FormLabel><h3 className="text-xl text-center text-anthracit1">Pfostentyp</h3></FormLabel>
          <RadioGroup
            {...field}
            className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8 justify-center"
            onValueChange={(value) => {
              console.log("RadioGroup Value Changed:", value);
              field.onChange(value);
            }}
          >
            {Object.entries(mountingOptions).map(([value, { imageSrc, label }]) => (
              <RadioOption
                key={value}
                value={value}
                label={label}
                selectedValue={selectedValue}
                imageSrc={imageSrc}
              />
            ))}
          </RadioGroup>
        </FormItem>
      )}
    />
  );
}