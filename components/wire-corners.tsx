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
      name="corner"
      render={({ field }) => (
        <FormItem className="flex flex-col w-full mt-10">
            <h3 className="text-xl text-center text-anthracit1 ">
            Anzahl der Ecken
            </h3>
          <FormControl className="flex-1">
            <Input
              borderStyle="underline"
              focusColor="blue"
              placeholder="0"
              className="w-full" {...field}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}