import { useFormContext } from "react-hook-form";
import { FormField, FormItem, FormLabel, FormMessage, FormControl } from "@/components/ui/form";
import { RadioGroup } from "@/components/ui/radio-group";
import { RadioOption } from "./radioOption";

export function GateForm({ control }: { control: any }) {
  const { watch } = useFormContext();
  const selectedValue = watch("gate");

  const gateOptions = {
    type1: { imageSrc: "/Einflüglige Toranlage System AC-Typ Light 1.webp", label: "Einflüglige Toranlage System AC-Typ Light 1" },
    type2: { imageSrc: "/Einflüglige Toranlage System AC-Typ MRL 1.webp", label: "Einflüglige Toranlage System AC-Typ MRL 1" },
    type3: { imageSrc: "/srl2.webp", label: "Zweiflüglige Toranlage System AC-Typ SRL 2" },
    type4: { imageSrc: "/srl1.webp", label: "Einflüglige Toranlage System AC-Typ SRL 1" },
    // Dodaj więcej opcji, jeśli potrzebujesz
  };

  return (
    <FormField
      control={control}
      name="gate"
      render={({ field }) => (
        <FormItem>
          <FormLabel><h3 className="text-xl text-center text-anthracit1">Toranlage</h3></FormLabel>
          <FormControl>
            <RadioGroup
              {...field}
              className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8 justify-center"
              onValueChange={(value) => {
                console.log("RadioGroup Value Changed:", value);
                field.onChange(value);
              }}
            >
              {Object.entries(gateOptions).map(([value, { imageSrc, label }]) => (
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