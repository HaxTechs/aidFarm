"use client"

import Link from "next/link"
import * as React from "react"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu"
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetClose,
} from "@/components/ui/sheet"
import { Menu, Phone, MessageCircle } from "lucide-react"

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-[var(--background)]/95 backdrop-blur-sm border-b border-[var(--border)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex h-14 items-center justify-between">
          <div className="flex items-center gap-6">
            <Link
              href="/"
              className="text-lg font-semibold tracking-tight text-[var(--primary)]"
            >
              AidFarm
            </Link>

            <nav className="hidden md:block">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/"
                        className="text-[var(--foreground)] hover:text-[var(--primary)]"
                      >
                        Home
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/about"
                        className="text-[var(--foreground)] hover:text-[var(--primary)]"
                      >
                        About
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/products"
                        className="text-[var(--foreground)] hover:text-[var(--primary)]"
                      >
                        Products
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/contact"
                        className="text-[var(--foreground)] hover:text-[var(--primary)]"
                      >
                        Contact
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </nav>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center gap-2">
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
                <a
                  href="tel:+233000000000"
                  className="inline-flex items-center gap-2 text-[var(--foreground)]"
                >
                  <Phone className="size-4" />
                  Call
                </a>
              </Button>
            </div>

            <div className="md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" className="size-9">
                    <Menu className="size-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right">
                  <SheetHeader>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-semibold text-[var(--primary)]">AidFarm</span>
                      <SheetClose>
                        <span className="sr-only">Close</span>
                      </SheetClose>
                    </div>
                  </SheetHeader>
                  <div className="flex flex-col gap-3 px-4 text-[var(--foreground)]">
                    <Link href="/" className="py-2">Home</Link>
                    <Link href="/about" className="py-2">About</Link>
                    <Link href="/products" className="py-2">Products</Link>
                    <Link href="/contact" className="py-2">Contact</Link>
                  </div>
                  <SheetFooter>
                    <div className="flex w-full flex-col gap-2">
                      <Button asChild>
                        <a
                          href="https://wa.me/?text=I%27m%20interested%20in%20AidFarm%20products"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full inline-flex items-center justify-center gap-2"
                        >
                          <MessageCircle className="size-4" />
                          WhatsApp
                        </a>
                      </Button>
                      <Button variant="outline" asChild>
                        <a href="tel:+233000000000" className="w-full inline-flex items-center justify-center gap-2">
                          <Phone className="size-4" />
                          Call
                        </a>
                      </Button>
                    </div>
                  </SheetFooter>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
