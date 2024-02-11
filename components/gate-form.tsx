import { useFormContext } from "react-hook-form";
import { FormField, FormItem, FormLabel, FormMessage, FormControl } from "@/components/ui/form";
import { RadioGroup } from "@/components/ui/radio-group";
import { RadioOption } from "./radioOption";

export function GateForm({ control }: { control: any }) {
  const { watch } = useFormContext();
  const selectedValue = watch("gate");

  const gateOptions = {
    type1: { imageSrc: "/Einflüglige Toranlage.png", label: "Einflüglige Toranlage" },
    type2: { imageSrc: "/Zweiflüglige Toranlage.png", label: "Zweiflüglige Toranlage" },
    // Dodaj więcej opcji, jeśli potrzebujesz
  };

  return (
    <FormField
      control={control}
      name="gate"
      render={({ field }) => (
        <FormItem>
          <h3 className="text-xl text-center text-anthracit1">Toranlage</h3>
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