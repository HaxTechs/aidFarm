"use client"

import * as React from "react"

const stats = [
  { label: "Birds Raised", value: "5,000+" },
  { label: "Satisfied Clients", value: "1,200+" },
  { label: "Years of Experience", value: "8+" },
  { label: "Weekly Supply Capacity", value: "2,000+ birds" },
]

export function Stats() {
  return (
    <section className="bg-muted py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto grid max-w-3xl grid-cols-2 gap-6 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col items-start gap-1">
              <div className="text-2xl font-bold text-foreground">{s.value}</div>
              <div className="text-sm text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats
