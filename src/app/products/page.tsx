"use client"

import * as React from "react"
import { Card, CardTitle, CardDescription } from "@/components/ui/card"

const products = [
  { title: "Fresh Broiler Chicken", desc: "Ready for retail and bulk." },
  { title: "Table & Bulk Eggs", desc: "Graded and packed eggs." },
  { title: "Bulk Poultry Supply", desc: "Reliable wholesale supply." },
  { title: "Restaurant & Event Supply", desc: "Packaged for foodservice." },
]

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-background font-sans py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <h1 className="text-2xl font-bold text-foreground">Products</h1>
        <p className="mt-2 text-sm text-muted-foreground">Our product offering.</p>

        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p) => (
            <Card key={p.title}>
              <CardTitle>{p.title}</CardTitle>
              <CardDescription>{p.desc}</CardDescription>
            </Card>
          ))}
        </div>
      </div>
    </main>
  )
}
