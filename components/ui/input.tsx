import * as React from "react";
import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";

const inputVariants = cva(
  [
    // Podstawowe klasy stylów
    "flex h-10 w-full rounded-md px-3 py-2 text-sm placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
  ],
  {
    variants: {
      borderStyle: {
        none: "border-none",
        underline: "border-b-2 border-input focus:outline-none pl-10", // Zwiększona grubość linii do 2px
      },
      focusColor: {
        orange: "focus:border-orange-500",
        green: "focus:border-b-2 focus:border-green-500",
        blue:"focus:border-b-2 focus:border-blue1",

        // Możesz dodać więcej wariantów kolorów jeśli potrzebujesz
      },
    },
    defaultVariants: {
      // Ustaw domyślne warianty, jeśli są potrzebne
    },
  }
);

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, borderStyle, focusColor, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(inputVariants({ borderStyle, focusColor }), className)}
        ref={ref}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

export { Input, inputVariants };