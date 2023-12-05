import { useFormContext } from "react-hook-form";
import { FormField, FormItem, FormLabel } from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import Image from "next/image";

export function WireThickness5({ control }: { control: any }) {
  const { watch } = useFormContext();
  const selectedValue = watch("color");
  console.log("Current Value in WireThickness1:", selectedValue);

  return (
    <FormField
      control={control}
      name="color"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Farba</FormLabel>
          <RadioGroup
            {...field}
            defaultValue="feuerverzinkt"
            className="grid grid-cols-3 gap-4"
            onValueChange={(value) => {
              console.log("RadioGroup Value Changed:", value);
              field.onChange(value);
            }}
          >
            <div>
              <RadioGroupItem
                value="feuerverzinkt"
                id="feuerverzinkt"
                className="peer sr-only"
              />
              <Label
                htmlFor="feuerverzinkt"
                className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:steelblue [&:has([data-state=checked])]:steelblue"
              >
                <div
                  className="mb-3 h-12 w-12 rounded-full"
                  style={{ backgroundColor: "#D3D3D3" }}
                ></div>
                Feuerverzinkt
              </Label>
            </div>
            <div>
              <RadioGroupItem
                value="RAL 6005 grün"
                id="RAL 6005 grün"
                className="peer sr-only"
              />
              <Label
                htmlFor="RAL 6005 grün"
                className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:steelblue [&:has([data-state=checked])]:steelblue"
              >
                <div
                  className="mb-3 h-12 w-12 rounded-full"
                  style={{ backgroundColor: "#39603D" }}
                ></div>
                RAL 6005 grün
              </Label>
            </div>
            <div>
              <RadioGroupItem
                value="RAL 7016 anthrazit"
                id="RAL 7016 anthrazit"
                className="peer sr-only"
              />
              <Label
                htmlFor="RAL 7016 anthrazit"
                className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:steelblue [&:has([data-state=checked])]:steelblue"
              >
                <div
                  className="mb-3 h-12 w-12 rounded-full"
                  style={{ backgroundColor: "#30393E" }}
                ></div>
                RAL 7016 anthrazit
              </Label>
            </div>
          </RadioGroup>
        </FormItem>
      )}
    />
  );
}
