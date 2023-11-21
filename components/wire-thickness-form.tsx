"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "@/components/ui/use-toast";

const FormSchema = z.object({
  drahtstaerke: z.enum(['6/5/6', '8/6/8'], {
    required_error: "Bitte wählen Sie eine Drahtstärke aus.",
  }),
});

export function WireThickness() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "Sie haben folgende Werte eingereicht:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <div className="mt-6 border bg-slate-100 rounded-md p-4">
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        <FormField
          control={form.control}
          name="drahtstaerke"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Drahtstärke</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Wählen Sie eine Drahtstärke" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="6/5/6">6/5/6</SelectItem>
                  <SelectItem value="8/6/8">8/6/8</SelectItem>
                </SelectContent>
              </Select>
              <FormDescription>
                Die Drahtstärke gibt an, welchen Durchmesser die einzelnen Drahtstäbe der Doppelstabmatte aufweisen. Eine Doppelstabmatte besteht immer aus einem senkrecht verlaufenden Stab, der von zwei waagerecht verlaufenden Stäben umgeben ist.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Absenden</Button>
      </form>
    </Form>
    </div>
  );
}