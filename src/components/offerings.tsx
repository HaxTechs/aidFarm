"use client"

import * as React from "react"
import { Card, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ShoppingCart, Egg, Truck, Users } from "lucide-react"

const offerings = [
  {
    title: "Fresh Broiler Chicken",
    description: "Locally raised, healthy broilers ready for retail and bulk orders.",
    icon: ShoppingCart,
    badge: "Popular",
  },
  {
    title: "Table & Bulk Eggs",
    description: "Fresh eggs packed and graded for retail or bulk distribution.",
    icon: Egg,
    badge: "Bulk",
  },
  {
    title: "Bulk Poultry Supply",
    description: "Reliable big-quantity fulfillment for wholesalers and markets.",
    icon: Truck,
  },
  {
    title: "Restaurant & Event Supply",
    description: "Dedicated logistics and packaging for restaurant and event needs.",
    icon: Users,
  },
]

export function Offerings() {
  return (
    <section className="bg-muted py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold text-foreground">What We Offer</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Quality poultry products tailored for individuals, restaurants and
            bulk buyers across Ghana.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {offerings.map((o) => {
            const Icon = o.icon
            return (
              <Card key={o.title}>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="rounded-md bg-accent/10 p-2">
                      <Icon className="size-5 text-accent" />
                    </div>
                    <div>
                      <CardTitle>{o.title}</CardTitle>
                      <CardDescription>{o.description}</CardDescription>
                    </div>
                  </div>
                  {o.badge ? (
                    <div className="ml-4">
                      <Badge>{o.badge}</Badge>
                    </div>
                  ) : null}
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Offerings
