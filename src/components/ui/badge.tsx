import * as React from "react"
import { cn } from "@/lib/utils"

function Badge({ className, children, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium bg-accent text-accent-foreground",
        className
      )}
      {...props}
    >
      {children}
    </span>
  )
}

export { Badge }
