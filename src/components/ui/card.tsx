import * as React from "react"
import { cn } from "@/lib/utils"

function Card({ className, children, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "w-full rounded-lg border border-border bg-card p-6",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

function CardTitle({ className, children, ...props }: React.ComponentProps<"h3">) {
  return (
    <h3 className={cn("text-lg font-semibold text-foreground", className)} {...props}>
      {children}
    </h3>
  )
}

function CardDescription({ className, children, ...props }: React.ComponentProps<"p">) {
  return (
    <p className={cn("mt-2 text-sm text-muted-foreground", className)} {...props}>
      {children}
    </p>
  )
}

export { Card, CardTitle, CardDescription }
