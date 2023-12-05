import { useFormContext } from "react-hook-form";
import { FormField, FormItem, FormLabel } from "@/components/ui/form";
import { RadioGroup } from "@/components/ui/radio-group";
import { RadioOption } from "./radioOption";

export function DeliveryForm({ control }: { control: any }) {
  const { watch } = useFormContext();
  const selectedValue = watch("delivery");

  const deliveryOptions = {
    delivery: { imageSrc: "/delivery.png", label: "Lieferung" },
    montage: { imageSrc: "/montage.png", label: "Montage" },
    // Add more options if needed
  };

  return (
    <FormField
      control={control}
      name="delivery"
      render={({ field }) => (
        <FormItem>
          <FormLabel>
            <h3 className="text-xl text-center text-anthracit1">
              Lieferung oder Montage?
            </h3>
          </FormLabel>

          <RadioGroup
            {...field}
            defaultValue="delivery"
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
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
        </FormItem>
      )}
    />
  );
}
