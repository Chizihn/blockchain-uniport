// components/ui/textarea.tsx
import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const textareaVariants = cva(
  "flex w-full rounded-md border px-4 py-3 font-medium transition-all duration-150 placeholder:text-neutral-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-none",
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
      size: {
        sm: "text-xs min-h-20",
        md: "text-sm min-h-24",
        lg: "text-base min-h-32",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    VariantProps<typeof textareaVariants> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <textarea
        className={cn(textareaVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Textarea.displayName = "Textarea";

export { Textarea, textareaVariants };
