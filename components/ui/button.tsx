// components/ui/button.tsx
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-primary-600 text-white hover:bg-primary-600 active:bg-primary-700 disabled:bg-primary-200 disabled:text-primary-50",
        text: "text-primary-600 hover:text-primary-700 active:text-primary-800 disabled:text-primary-300",
        outline:
          "border border-primary-500 text-primary-500 hover:bg-primary-50 active:bg-primary-100 disabled:border-primary-200 disabled:text-primary-200",
        "no-box":
          "text-neutral-700 hover:text-neutral-900 active:text-neutral-900 disabled:text-neutral-400",
        elevated:
          "bg-white text-primary-600 shadow-sm ring-1 ring-neutral-200 hover:shadow-md hover:ring-primary-300 active:shadow active:ring-primary-400 disabled:shadow-none disabled:text-neutral-400 disabled:ring-neutral-200",
        ghost:
          "hover:bg-neutral-100 active:bg-neutral-200 disabled:text-neutral-400",
        "with-box":
          "bg-primary-500 text-white shadow-lg hover:bg-primary-600 hover:shadow-xl active:bg-primary-700 active:shadow-lg disabled:bg-primary-200 disabled:text-primary-50 disabled:shadow-none",
        gradient:
          "bg-linear-to-r from-[#155DFC] to-[#2B7FFF] text-white hover:opacity-90 transition-all",
      },
      size: {
        sm: "h-8 px-3 text-xs rounded-md",
        md: "h-10 px-4 text-sm rounded-lg",
        lg: "h-12 px-5 text-base rounded-lg",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

// Keep `href` out of ButtonProps — it's only for <a> when asChild
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
