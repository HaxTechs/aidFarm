"use client"

import * as React from "react"
import { Card, CardTitle, CardDescription } from "@/components/ui/card"

const testimonials = [
  {
    quote: "AidFarm supplies our restaurant reliably every week. Quality is top-notch.",
    name: "Ama Boateng",
    type: "Restaurant",
  },
  {
    quote: "Great value for bulk orders — dependable and friendly service.",
    name: "Kwame Mensah",
    type: "Bulk Buyer",
  },
  {
    quote: "Fresh poultry delivered right to my doorstep. Highly recommend.",
    name: "Esi Johnson",
    type: "Individual",
  },
]

export function Testimonials() {
  return (
    <section className="bg-background py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold text-foreground">What Our Customers Say</h2>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <Card key={t.name}>
              <CardTitle className="text-sm">{t.type}</CardTitle>
              <CardDescription className="mt-2">“{t.quote}”</CardDescription>
              <div className="mt-4 text-sm font-medium text-foreground">{t.name}</div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
