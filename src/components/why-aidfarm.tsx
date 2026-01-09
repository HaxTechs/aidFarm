"use client"

import * as React from "react"
import { CheckCircle, ShieldCheck, Repeat, Globe } from "lucide-react"

export function WhyAidFarm() {
  const points = [
    { icon: ShieldCheck, title: "Hygienic farming practices" },
    { icon: Repeat, title: "Reliable supply" },
    { icon: CheckCircle, title: "Affordable pricing" },
    { icon: Globe, title: "Ghana-wide delivery" },
  ]

  return (
    <section className="bg-background py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-foreground">Why Choose AidFarm</h2>
            <p className="mt-4 text-sm text-muted-foreground">
              We combine humane rearing with modern logistics to deliver
              consistent, high-quality poultry products for homes and businesses.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {points.map((p) => {
              const Icon = p.icon
              return (
                <div key={p.title} className="flex items-start gap-3">
                  <div className="rounded-md bg-accent/10 p-2">
                    <Icon className="size-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-foreground">{p.title}</h3>
                    <p className="text-sm text-muted-foreground">Trusted practices and timely service.</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyAidFarm
