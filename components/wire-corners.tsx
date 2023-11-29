import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

export function WireCorners({ control }: { control: any }) {
  return (
    <FormField
      control={control}
      name="corners"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Anzahl der Ecken</FormLabel>
          <FormControl>
            <Input borderStyle="underline" focusColor="blue" placeholder="0" {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}