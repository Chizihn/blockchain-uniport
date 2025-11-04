// components/ui/radio-group.tsx
import * as React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const radioVariants = cva(
  "aspect-square rounded-full border-2 transition-all",
  {
    variants: {
      variant: {
        primary:
          "border-neutral-300 data-[state=checked]:border-primary-500 data-[state=checked]:bg-primary-500",
        whiteDot:
          "border-neutral-300 data-[state=checked]:border-primary-500 data-[state=checked]:bg-primary-500",
      },
    },
    defaultVariants: { variant: "primary" },
  }
);

const dotVariants = cva("h-2 w-2 rounded-full transition-all", {
  variants: {
    variant: {
      primary: "data-[state=checked]:bg-white",
      whiteDot: "data-[state=checked]:bg-white",
    },
  },
  defaultVariants: { variant: "primary" },
});

/* ------------------------------------------------------------------ */
/*  Props – keep the public name `variant` (no `$`)                     */
/* ------------------------------------------------------------------ */
export interface RadioGroupProps
  extends React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>,
    VariantProps<typeof radioVariants> {}

const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  RadioGroupProps
>(({ className, variant = "primary", ...props }, ref) => {
  // `variant` is used here → ESLint sees it
  return (
    <RadioGroupPrimitive.Root
      className={cn("grid gap-2", className)}
      data-variant={variant} // optional: expose for CSS
      {...props}
      ref={ref}
    />
  );
});
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;

/* ------------------------------------------------------------------ */
const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item> & {
    variant?: "primary" | "whiteDot";
  }
>(({ className, variant = "primary", ...props }, ref) => {
  /* ---- 1. Extract to a local variable that the linter can see ---- */
  const usedVariant = variant; // <-- ESLint now knows it’s used

  return (
    <RadioGroupPrimitive.Item
      ref={ref}
      className={cn(
        "flex items-center space-x-2",
        "data-disabled:opacity-50 data-disabled:cursor-not-allowed",
        className
      )}
      {...props}
    >
      <div className="relative flex items-center justify-center">
        {/* ---- 2. Pass the local variable to cva ---- */}
        <div className={cn(radioVariants({ variant: usedVariant }))}>
          <RadioGroupPrimitive.Indicator
            className={cn(
              "flex items-center justify-center",
              dotVariants({ variant: usedVariant })
            )}
          >
            <div className="h-2 w-2 rounded-full bg-current" />
          </RadioGroupPrimitive.Indicator>
        </div>
      </div>

      {props.children && (
        <span className="text-sm font-medium">{props.children}</span>
      )}
    </RadioGroupPrimitive.Item>
  );
});
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;

/* ------------------------------------------------------------------ */
export { RadioGroup, RadioGroupItem };
