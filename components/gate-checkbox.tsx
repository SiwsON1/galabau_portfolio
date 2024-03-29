import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form"
import { Input } from "./ui/input"


export function GateCheck({ control }: { control: any }) {
  return (
    <FormField
        control={control}
        name="gateNeeded"
        render={({ field }) => (
          <FormItem className="relative focus-within:text-blue1 my-8">
                  <h3 className="text-xl text-center text-anthracit1">Toranlage </h3>
            <FormControl>
              <label className="flex items-center">
                <Input type="checkbox" {...field} className="form-checkbox h-5 w-5 text-blue-600" />
                <h3 className="text-xl text-center text-anthracit1">Benötigen Sie ein Schiebe- und/oder Gartentor?</h3>
              </label>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
  )
}