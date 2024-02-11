import { useFormContext } from "react-hook-form";
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { RadioGroup } from "@/components/ui/radio-group";
import { RadioOption } from "./radioOption";

export function DeliveryForm({ control }: { control: any }) {
  const { watch, formState: { errors } } = useFormContext();
  const selectedValue = watch("delivery");

  const deliveryOptions = {
    delivery: { imageSrc: "/delivery.webp", label: "Lieferung" },
    montage: { imageSrc: "/montage.webp", label: "Montage" },
    abholung: { imageSrc: "/abholung.webp", label: "Abholung" },
  };

  return (
    <FormField
      control={control}
      name="delivery"
      render={({ field }) => (
        <FormItem>
            <h3 className="text-xl text-center text-anthracit1">
              Lieferung oder Montage?
            </h3>

          <FormControl>
            <RadioGroup
              {...field}
              defaultValue="delivery"
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              onValueChange={(value) => {
                console.log("RadioGroup Value Changed:", value);
                field.onChange(value);
              }}
            >
              {Object.entries(deliveryOptions).map(
                ([value, { imageSrc, label }]) => (
                  <RadioOption
                    key={value}
                    value={value}
                    label={label}
                    selectedValue={selectedValue}
                    imageSrc={imageSrc}
                  />
                )
              )}
            </RadioGroup>
          </FormControl>

          <FormMessage />
        </FormItem>
      )}
    />
  );
}