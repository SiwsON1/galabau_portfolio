import { useFormContext } from "react-hook-form";
import { FormField, FormItem, FormLabel, FormMessage, FormControl } from "@/components/ui/form";
import { RadioGroup } from "@/components/ui/radio-group";
import { ButtonRadioOption } from "./button-radio-option";

export function FenceCover({ control }: { control: any }) {
  const { watch } = useFormContext();
  const selectedValue = watch("fenceCover");

  const coverOptions = {
    "yes": { label: "Ja" },
    "no": { label: "Nein" },
    // Dodaj więcej opcji, jeśli potrzebujesz
  };

  return (
    <FormField
      control={control}
      name="fenceCover"
      render={({ field }) => (
        <FormItem>
            <h3 className="text-xl text-center text-anthracit1">
              Benötigen Sie einen Sichtschutzzaun?
            </h3>
          <FormControl>
            <RadioGroup
              {...field}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center"
              onValueChange={(value) => {
                console.log("RadioGroup Value Changed:", value);
                field.onChange(value);
              }}
            >
              {Object.entries(coverOptions).map(([value, { label }]) => (
                <ButtonRadioOption
                  key={value}
                  value={value}
                  label={label}
                  selectedValue={selectedValue}
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