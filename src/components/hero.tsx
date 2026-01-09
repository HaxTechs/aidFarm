"use client"

import Link from "next/link"
import * as React from "react"
import { Button } from "@/components/ui/button"
import { MessageCircle, Phone } from "lucide-react"

export function Hero() {
  return (
    <section className="relative w-full bg-[var(--background)]">
      <div className="absolute -left-8 -top-8 hidden sm:block">
        <div className="w-36 h-36 rounded-full bg-[var(--primary)]/10 blur-xl animate-pulse" />
      </div>
      <div className="absolute right-8 top-16 hidden md:block">
        <div className="w-6 h-6 rounded-full bg-[var(--chart-1)] animate-bounce opacity-90" />
      </div>

      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:py-28">
        <div className="mx-auto max-w-2xl text-center relative z-10">
          <h1 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl text-[var(--foreground)]">
            Fresh, Healthy <span className="text-[var(--primary)]">Poultry</span> — Farm-to-Table in Ghana
          </h1>
          <p className="mt-4 text-lg text-[var(--muted-foreground)]">
            Reliable supply for individuals, restaurants, and bulk buyers across
            Ghana. Trusted quality, humane rearing, and timely delivery.
          </p>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
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

export default Hero
