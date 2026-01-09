"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { MessageCircle, Phone } from "lucide-react"

export function FinalCTA() {
  return (
    <section className="bg-muted py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold text-foreground">Ready to order?</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Reach out on WhatsApp for quick quotes or call us directly for urgent
            orders.
          </p>

          <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Button asChild>
              <a
                href="https://wa.me/?text=I%27m%20interested%20in%20AidFarm%20products"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                <MessageCircle className="size-4" />
                WhatsApp
              </a>
            </Button>

            <Button variant="outline" asChild>
              <a href="tel:+233000000000" className="inline-flex items-center gap-2 text-[var(--foreground)]">
                <Phone className="size-4" />
                Call
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FinalCTA
