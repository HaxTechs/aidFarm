"use client"

import * as React from "react"
import { Card, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ShoppingCart, Egg, Truck, Users } from "lucide-react"

const offerings = [
  {
    title: "Fresh Broiler Chicken",
    description: "Premium, locally raised broilers with superior taste. Perfect for retail customers and bulk orders.",
    icon: ShoppingCart,
    badge: "Most Popular",
    color: "from-amber-500 to-orange-500",
    bgColor: "bg-amber-50",
  },
  {
    title: "Table & Bulk Eggs",
    description: "Fresh, graded eggs from healthy hens. Available in various pack sizes for all your needs.",
    icon: Egg,
    badge: "Bulk Available",
    color: "from-emerald-500 to-teal-500",
    bgColor: "bg-emerald-50",
  },
  {
    title: "Wholesale Supply",
    description: "Large-scale poultry fulfillment for wholesalers, markets, and distributors across Ghana.",
    icon: Truck,
    color: "from-blue-500 to-indigo-500",
    bgColor: "bg-blue-50",
  },
  {
    title: "Restaurant & Events",
    description: "Specialized service for restaurants and events with dedicated logistics and custom packaging.",
    icon: Users,
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-50",
  },
]

export function Offerings() {
  return (
    <section className="bg-white py-20 sm:py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-1.5 text-sm font-semibold text-emerald-700 mb-4">
            Our Services
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            What We Offer
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Quality poultry products tailored for individuals, restaurants, and bulk buyers across Ghana.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {offerings.map((offering, index) => {
            const Icon = offering.icon
            return (
              <div
                key={offering.title}
                className="group relative animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Card className="h-full border-2 border-slate-100 hover:border-emerald-200 hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1 overflow-hidden">
                  {/* Gradient background on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${offering.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                  
                  <div className="relative p-6 flex flex-col h-full">
                    {/* Icon */}
                    <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl ${offering.bgColor} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`size-7 bg-gradient-to-br ${offering.color} bg-clip-text text-transparent`} />
                    </div>

                    {/* Badge */}
                    {offering.badge && (
                      <div className="mb-3">
                        <Badge className={`bg-gradient-to-r ${offering.color} text-white border-0 shadow-sm`}>
                          {offering.badge}
                        </Badge>
                      </div>
                    )}

                    {/* Content */}
                    <CardTitle className="text-xl mb-2 text-slate-900 group-hover:text-emerald-700 transition-colors">
                      {offering.title}
                    </CardTitle>
                    <CardDescription className="text-sm leading-relaxed text-slate-600 flex-grow">
                      {offering.description}
                    </CardDescription>

                    {/* Decorative element */}
                    <div className="mt-4 pt-4 border-t border-slate-100 group-hover:border-emerald-200 transition-colors">
                      <div className="flex items-center text-sm font-medium text-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity">
                        <span>Learn more</span>
                        <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-slate-600 mb-6">
            Need a custom solution? We're here to help.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-slate-100 hover:bg-emerald-50 text-slate-700 hover:text-emerald-700 font-medium transition-all"
          >
            Contact Our Team
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  )
}

export default Offerings
