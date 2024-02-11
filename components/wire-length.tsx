
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
        <FormItem className="flex  flex-col w-full">
            <h3 className="text-xl text-center text-anthracit1 ">
            Länge des Zauns (in Metern)
            </h3>
          <FormControl className="flex-1">
            <Input
              borderStyle="underline"
              focusColor="blue"
              placeholder="2,5 m"
              className="w-full"
              {...field}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}