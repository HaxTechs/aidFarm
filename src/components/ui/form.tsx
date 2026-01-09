"use client"

import * as React from "react"

export function Form({ children, ...props }: React.ComponentPropsWithoutRef<"form">) {
  return (
    <form className="space-y-4" noValidate {...props}>
      {children}
    </form>
  )
}

export default Form
