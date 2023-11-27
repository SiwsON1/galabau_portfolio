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



export function WireThickness({ control }: { control: any }) {
  return (
    <FormField
      control={control}
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
  );
}