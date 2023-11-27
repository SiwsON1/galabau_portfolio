
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"


export function WireLength({ control }: { control: any }) {
  return (
    <FormField
      control={control}
      name="length"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Länge des Zauns (in Metern)</FormLabel>
          <FormControl>
            <Input placeholder="2,5 m" {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}