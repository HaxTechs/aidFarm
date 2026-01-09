"use client"

import Link from "next/link"
import * as React from "react"

export function Footer() {
  return (
    <footer className="bg-background border-t border-border py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="text-center md:text-left">
            <div className="text-lg font-semibold text-foreground">AidFarm</div>
            <div className="text-sm text-muted-foreground">Ghana (placeholder)</div>
          </div>

          <nav className="flex gap-4">
            <Link href="/" className="text-sm text-muted-foreground">Home</Link>
            <Link href="/about" className="text-sm text-muted-foreground">About</Link>
            <Link href="/products" className="text-sm text-muted-foreground">Products</Link>
            <Link href="/contact" className="text-sm text-muted-foreground">Contact</Link>
          </nav>

          <div className="flex flex-col items-center md:items-end">
            <a href="https://wa.me/" className="text-sm text-muted-foreground">WhatsApp</a>
            <a href="tel:+233000000000" className="mt-1 text-sm text-muted-foreground">Call</a>
          </div>
        </div>

        <div className="mt-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} AidFarm. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer
