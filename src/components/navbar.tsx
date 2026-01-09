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
import { Menu, Phone, MessageCircle, X } from "lucide-react"

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header 
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled 
          ? "bg-background/95 backdrop-blur-md shadow-sm border-b border-border/60" 
          : "bg-background/80 backdrop-blur-sm border-b border-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-8">
            <Link
              href="/"
              className="group flex items-center gap-2 transition-transform hover:scale-105"
            >
              <div className="relative">
                <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-amber-400 rounded-full border-2 border-white" />
              </div>
              <span className="text-xl font-bold text-primary">
                AidFarm
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:block">
              <NavigationMenu>
                <NavigationMenuList className="gap-1">
                  <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/"
                        className="px-4 py-2 rounded-md text-sm font-medium text-foreground hover:text-primary hover:bg-primary/5 transition-colors"
                      >
                        Home
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/about"
                        className="px-4 py-2 rounded-md text-sm font-medium text-slate-700 hover:text-emerald-600 hover:bg-emerald-50 transition-colors"
                      >
                        About
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/products"
                        className="px-4 py-2 rounded-md text-sm font-medium text-slate-700 hover:text-emerald-600 hover:bg-emerald-50 transition-colors"
                      >
                        Products
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/contact"
                        className="px-4 py-2 rounded-md text-sm font-medium text-slate-700 hover:text-emerald-600 hover:bg-emerald-50 transition-colors"
                      >
                        Contact
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </nav>
          </div>

          {/* Desktop CTA Buttons */}
          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center gap-2">
              <Button 
                asChild
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-sm hover:shadow-md transition-all"
              >
                <a
                  href="https://wa.me/?text=I%27m%20interested%20in%20AidFarm%20products"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  <MessageCircle className="size-4" />
                  <span className="hidden lg:inline">WhatsApp</span>
                </a>
              </Button>

              <Button 
                variant="outline" 
                asChild
                className="border-border hover:border-primary hover:bg-primary/5 text-foreground hover:text-primary transition-all"
              >
                <a
                  href="tel:+233000000000"
                  className="inline-flex items-center gap-2"
                >
                  <Phone className="size-4" />
                  <span className="hidden lg:inline">Call</span>
                </a>
              </Button>
            </div>

            {/* Mobile Menu */}
            <div className="lg:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button 
                    variant="ghost" 
                    size="icon"
                    className="hover:bg-primary/5 hover:text-primary"
                  >
                    <Menu className="size-6" />
                    <span className="sr-only">Open menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent 
                  side="right" 
                  className="w-full sm:w-80 bg-background border-l border-border"
                >
                  <SheetHeader className="border-b border-border pb-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center shadow-sm">
                          <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                          </svg>
                        </div>
                        <span className="text-lg font-bold text-primary">AidFarm</span>
                      </div>
                      <SheetClose asChild>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <X className="h-5 w-5" />
                          <span className="sr-only">Close</span>
                        </Button>
                      </SheetClose>
                    </div>
                  </SheetHeader>
                  
                  <nav className="flex flex-col gap-1 py-6">
                    <SheetClose asChild>
                      <Link 
                        href="/" 
                        className="px-4 py-3 rounded-lg text-base font-medium text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors"
                      >
                        Home
                      </Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <Link 
                        href="/about" 
                        className="px-4 py-3 rounded-lg text-base font-medium text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors"
                      >
                        About
                      </Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <Link 
                        href="/products" 
                        className="px-4 py-3 rounded-lg text-base font-medium text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors"
                      >
                        Products
                      </Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <Link 
                        href="/contact" 
                        className="px-4 py-3 rounded-lg text-base font-medium text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors"
                      >
                        Contact
                      </Link>
                    </SheetClose>
                  </nav>

                  <SheetFooter className="border-t border-slate-100 pt-6">
                    <div className="flex w-full flex-col gap-3">
                      <Button 
                        asChild
                        className="w-full bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-700 hover:to-emerald-600 text-white shadow-sm"
                      >
                        <a
                          href="https://wa.me/?text=I%27m%20interested%20in%20AidFarm%20products"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2"
                        >
                          <MessageCircle className="size-5" />
                          WhatsApp Us
                        </a>
                      </Button>
                      <Button 
                        variant="outline" 
                        asChild
                        className="w-full border-slate-300 hover:border-emerald-500 hover:bg-emerald-50 text-slate-700 hover:text-emerald-700"
                      >
                        <a 
                          href="tel:+233000000000" 
                          className="inline-flex items-center justify-center gap-2"
                        >
                          <Phone className="size-5" />
                          Call Us Now
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
