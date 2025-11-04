// components/ui/search.tsx
import * as React from "react";
import { Search } from "lucide-react";
import { Input, InputProps } from "./input";
import { cn } from "@/lib/utils";

export interface SearchProps extends Omit<InputProps, "icon"> {
  placeholder?: string;
}

/** `inputSize` is the new prop name */
const SearchInput = React.forwardRef<HTMLInputElement, SearchProps>(
  (
    { className, placeholder = "Search...", inputSize = "md", ...props },
    ref
  ) => {
    return (
      <Input
        type="search"
        placeholder={placeholder}
        icon={<Search className={inputSize === "sm" ? "w-4 h-4" : "w-5 h-5"} />}
        iconPosition="left"
        inputSize={inputSize} // <-- renamed
        className={cn("pr-4", className)}
        ref={ref}
        {...props}
      />
    );
  }
);
SearchInput.displayName = "Search";

export { SearchInput };
