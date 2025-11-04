// components/ui/section-header.tsx
import * as React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export interface SectionHeaderProps {
  /** Small badge text above the title */
  badge?: string;
  /** Badge variant */
  badgeVariant?: "primary" | "secondary" | "outline";
  /** Main title - can be string or ReactNode for custom styling */
  title?: string | React.ReactNode;
  /** Optional subtitle/description */
  description?: string;
  /** Optional action button (e.g., "Our Impact") */
  action?: {
    label: string;
    href?: string;
    onClick?: () => void;
  };
  /** Center align content */
  align?: "left" | "center";
  /** Add top/bottom padding */
  padding?: "sm" | "md" | "lg" | "xl" | "none";
  /** Title size variant */
  titleSize?: "sm" | "md" | "lg" | "xl";
  /** Background variant */
  background?: "transparent" | "gradient" | "none";
  className?: string;
}

export const SectionHeader = React.forwardRef<
  HTMLDivElement,
  SectionHeaderProps
>(
  (
    {
      badge,
      badgeVariant = "primary",
      title,
      description,
      action,
      align = "center",
      padding = "lg",
      titleSize = "lg",
      background = "none",
      className,
    },
    ref
  ) => {
    const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

    const paddingClass = {
      sm: "py-6",
      md: "py-10",
      lg: "py-16",
      xl: "py-24",
      none: "",
    }[padding];

    const titleSizeClass = {
      sm: "text-2xl sm:text-3xl",
      md: "text-3xl sm:text-4xl",
      lg: "text-3xl sm:text-4xl lg:text-5xl",
      xl: "text-4xl sm:text-5xl lg:text-6xl",
    }[titleSize];

    const badgeVariantClass = {
      primary: "bg-primary-50 text-primary-500 ring-primary-500/10",
      secondary: "bg-gray-100 text-gray-700 ring-gray-700/10",
      outline: "bg-transparent text-blue-600 ring-blue-600/20 ring-1",
    }[badgeVariant];

    const backgroundClass = {
      transparent: "bg-transparent",
      gradient: "bg-gradient-to-b from-transparent to-blue-50/30",
      none: "",
    }[background];

    return (
      <div
        ref={ref}
        className={cn("w-full", backgroundClass, paddingClass, className)}
      >
        <div className={cn("max-w-5xl mx-auto  space-y-4", alignClass)}>
          {badge && (
            <div
              className={cn(align === "center" ? "flex justify-center" : "")}
            >
              <span
                className={cn(
                  "inline-flex items-center rounded-full px-4 py-2 text-md font-medium ring-1 ring-inset",
                  badgeVariantClass
                )}
              >
                {badge}
              </span>
            </div>
          )}

          <h2
            className={cn(
              "font-bold tracking-tight text-gray-900 --font-poppins ",
              titleSizeClass
            )}
          >
            {title}
          </h2>

          {description && (
            <p
              className={cn(
                "text-base sm:text-lg leading-relaxed text-gray-600",
                align === "center"
                  ? "max-w-xl mx-auto px-4 lg:px-0"
                  : "max-w-3xl "
              )}
            >
              {description}
            </p>
          )}

          {action && (
            <div
              className={cn(
                "pt-2",
                align === "center" && "flex justify-center"
              )}
            >
              {action.href ? (
                <Button asChild variant="outline" size="sm">
                  <a href={action.href} className="inline-block">
                    {action.label}
                  </a>
                </Button>
              ) : (
                <Button variant="outline" size="sm" onClick={action.onClick}>
                  {action.label}
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
    );
  }
);

SectionHeader.displayName = "SectionHeader";
