import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const inputVariants = cva(
  [
    "file:text-foreground placeholder:text-muted-foreground",
    "selection:bg-primary selection:text-primary-foreground text",
    "dark:bg-input/30 border-input w-full min-w-0 rounded-none border-b",
    "bg-transparent shadow-none outline-none",
    "transition-[color,box-shadow]",
    "file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium",
    "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
    "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
    "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
    // "md:text-sm",
  ],
  {
    variants: {
      variant: {
        default: "",
        filled: "bg-muted border-transparent",
        ghost: "border-transparent shadow-none",
        outline: "border-2 bg-transparent",
        destructive: "border-destructive focus-visible:ring-destructive/50",
      },

      inputSize: {
        default: "h-9 px-3 py-1 text-base",
        sm: "h-8 px-2 text-sm",
        lg: "h-12 px-4 text-xl",
      },
    },

    defaultVariants: {
      variant: "default",
      inputSize: "default",
    },
  },
);

export interface InputProps
  extends
    React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant, inputSize, type, ...props }, ref) => {
    return (
      <input
        type={type}
        data-slot="input"
        className={cn(inputVariants({ variant, inputSize }), className)}
        ref={ref}
        {...props}
      />
    );
  },
);

Input.displayName = "Input";

export { Input, inputVariants };
