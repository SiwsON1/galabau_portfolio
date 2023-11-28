import { useFormContext } from "react-hook-form";
import { FormField, FormItem, FormLabel } from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

export function ColorSelection({ control }: { control: any }) {
  const { watch } = useFormContext();
  const selectedColor = watch("color");
  console.log("selectedColor:", selectedColor);

  return (
    <FormField
      control={control}
      name="color"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Farbe</FormLabel>
          <RadioGroup {...field} className="grid grid-cols-3 gap-4">
            <div>
              <RadioGroupItem value="feuerverzinkt" id="feuerverzinkt" className="peer sr-only" />
              <Label
                htmlFor="feuerverzinkt"
                className={`flex flex-col items-center justify-center rounded-md border-2 p-4 ${selectedColor === 'feuerverzinkt' ? 'bg-accent text-accent-foreground' : 'hover:bg-accent hover:text-accent-foreground'} peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary`}
              >
                <div className="mb-3 h-12 w-12 rounded-full" style={{ backgroundColor: '#D3D3D3' }}></div>
                Feuerverzinkt
              </Label>
            </div>
            <div>
              <RadioGroupItem value="RAL 6005 grün" id="RAL 6005 grün" className="peer sr-only" />
              <Label
                htmlFor="RAL 6005 grün"
                className={`flex flex-col items-center justify-center rounded-md border-2 p-4 ${selectedColor === 'RAL 6005 grün' ? 'bg-accent text-accent-foreground' : 'hover:bg-accent hover:text-accent-foreground'} peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary`}
              >
                <div className="mb-3 h-12 w-12 rounded-full" style={{ backgroundColor: '#39603D' }}></div>
                RAL 6005 Grün
              </Label>
            </div>
            <div>
              <RadioGroupItem value="RAL 7016 anthrazit" id="RAL 7016 anthrazit" className="peer sr-only" />
              <Label
                htmlFor="RAL 7016 anthrazit"
                className={`flex flex-col items-center justify-center rounded-md border-2 p-4 ${selectedColor === 'RAL 7016 anthrazit' ? 'bg-accent text-accent-foreground' : 'hover:bg-accent hover:text-accent-foreground'} peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary`}
              >
                <div className="mb-3 h-12 w-12 rounded-full" style={{ backgroundColor: '#30393E' }}></div>
                RAL 7016 Anthrazit
              </Label>
            </div>
          </RadioGroup>
        </FormItem>
      )}
    />
  );
}