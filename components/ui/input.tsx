// ──────────────────────────────────────────────────────────────
// components/ui/input.tsx
// ──────────────────────────────────────────────────────────────
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const inputVariants = cva(
  "flex w-full rounded-md border font-medium transition-all duration-150 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "border-neutral-300 bg-white text-neutral-900 hover:border-neutral-400",
        error:
          "border-red-500 bg-white text-neutral-900 placeholder:text-red-400 focus-visible:ring-red-500",
        success:
          "border-green-500 bg-white text-neutral-900 placeholder:text-green-400 focus-visible:ring-green-500",
      },
      /** renamed from `size` → `inputSize` */
      inputSize: {
        sm: "h-8 px-3 text-xs",
        md: "h-10 px-4 text-sm",
        lg: "h-12 px-5 text-base",
      },
      state: {
        default: "",
        disabled: "bg-neutral-100 text-neutral-500 border-neutral-200",
        completed: "bg-neutral-50 text-neutral-600 border-neutral-300",
      },
    },
    compoundVariants: [
      { state: "disabled", class: "hover:border-neutral-200" },
    ],
    defaultVariants: {
      variant: "default",
      inputSize: "md",
      state: "default",
    },
  }
);

/** Pull the new name into the props */
type InputVariantProps = VariantProps<typeof inputVariants>;

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    Omit<InputVariantProps, "size"> {
  // <-- exclude the colliding `size`
  asChild?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
}

/* ------------------------------------------------------------------ */
const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      variant,
      inputSize, // <-- now the renamed prop
      state,
      asChild = false,
      icon,
      iconPosition = "left",
      type = "text",
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "input";

    const iconWrapper = icon ? (
      <div
        className={cn(
          "pointer-events-none absolute inset-y-0 flex items-center",
          iconPosition === "left" ? "left-3" : "right-3"
        )}
      >
        {icon}
      </div>
    ) : null;

    const paddingClass = cn(
      icon && iconPosition === "left" && "pl-10",
      icon && iconPosition === "right" && "pr-10"
    );

    return (
      <div className="relative">
        {iconWrapper}
        <Comp
          type={type}
          className={cn(
            inputVariants({ variant, inputSize, state, className }),
            paddingClass
          )}
          ref={ref}
          {...props}
        />
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input, inputVariants };
