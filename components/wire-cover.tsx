import { useFormContext } from "react-hook-form";
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { RadioGroup } from "@/components/ui/radio-group";
import { RadioOption } from "./radioOption";

export function FenceCover({ control }: { control: any }) {
  const { watch, formState: { errors } } = useFormContext();
  const selectedValue = watch("fenceCover");

  const fenceOptions = {
    standard: { imageSrc: "/doppelstabmattenzaun.jpg", label: "Doppelstabmattenzaun" },
    withCover: { imageSrc: "/sichtschutzzaun.jpg", label: "Sichtschutzzaun" },
  };

  return (
    <FormField
      control={control}
      name="fenceCover"
      render={({ field }) => (
        <FormItem>
          <FormLabel>
            <h3 className="text-xl text-center text-anthracit1">Zauntyp</h3>
          </FormLabel>
          <FormControl>
            <RadioGroup
              {...field}
              className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8 justify-center"
              onValueChange={(value) => {
                console.log("RadioGroup Value Changed:", value);
                field.onChange(value);
              }}
            >
              {Object.entries(fenceOptions).map(([value, { imageSrc, label }]) => (
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