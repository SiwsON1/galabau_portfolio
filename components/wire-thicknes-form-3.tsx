import { useFormContext } from "react-hook-form";
import { FormField, FormItem, FormLabel } from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import Image from "next/image";

export function WireThickness1({ control }: { control: any }) {
  const { watch } = useFormContext();
  const selectedValue = watch("drahtstaerke");
  console.log("Current Value in WireThickness1:", selectedValue);

  return (
    <FormField
      control={control}
      name="drahtstaerke"
      render={({ field }) => (
        <FormItem>
          <FormLabel className="text-center">Drahtstärke</FormLabel>
          <RadioGroup
            {...field}
            defaultValue="6-5-6"
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
            onValueChange={(value) => {
              console.log("RadioGroup Value Changed:", value);
              field.onChange(value);
            }}
          >
            <div>
              <RadioGroupItem
                value="6-5-6"
                id="6-5-6"
                className="peer sr-only"
              />
              <Label
                htmlFor="6-5-6"
                className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-blue1 [&:has([data-state=checked])]:border-blue1"
              >
                <Image
                  src="/Drahtstärke.svg"
                  alt="Drahtstärke"
                  width={90}
                  height={90}
                />
                Stärke 6/5/6
              </Label>
            </div>
            <div>
              <RadioGroupItem
                value="8-6-8"
                id="8-6-8"
                className="peer sr-only"
              />
              <Label
                htmlFor="8-6-8"
                className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-blue1 [&:has([data-state=checked])]:border-blue1"
              >
                <Image
                  src="/Drahtstärke.svg"
                  alt="Drahtstärke"
                  width={90}
                  height={90}
                />
                Stärke 8/6/8
              </Label>
            </div>
          </RadioGroup>
        </FormItem>
      )}
    />
  );
}
