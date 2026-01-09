"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MessageCircle, Check, ShoppingCart, Egg, Truck, Users, Package, Leaf } from "lucide-react"

export function ProductsPage() {
  const products = [
    {
      id: 1,
      name: "Fresh Broiler Chicken",
      category: "Poultry",
      description: "Premium quality broiler chickens raised with care. Perfect for retail and wholesale customers.",
      icon: ShoppingCart,
      badge: "Most Popular",
      badgeColor: "bg-gradient-to-r from-amber-500 to-orange-500",
      features: [
        "Weight range: 1.5kg - 3.5kg",
        "Grain-fed for superior taste",
        "Hormone-free raising",
        "Fresh, never frozen",
        "Cleaned and dressed on request",
        "Bulk discounts available"
      ],
      pricing: [
        { size: "Small (1.5-2kg)", price: "Contact for pricing" },
        { size: "Medium (2-2.5kg)", price: "Contact for pricing" },
        { size: "Large (2.5kg+)", price: "Contact for pricing" }
      ],
      color: "from-amber-500 to-orange-500",
      bgColor: "bg-amber-50"
    },
    {
      id: 2,
      name: "Table & Bulk Eggs",
      category: "Eggs",
      description: "Fresh, high-quality eggs from healthy, well-fed hens. Available in various pack sizes.",
      icon: Egg,
      badge: "Fresh Daily",
      badgeColor: "bg-gradient-to-r from-emerald-500 to-teal-500",
      features: [
        "Large, grade A eggs",
        "Collected daily for freshness",
        "Rich, golden yolks",
        "Strong, intact shells",
        "Available in crates or trays",
        "Special pricing for bulk orders"
      ],
      pricing: [
        { size: "1 Tray (30 eggs)", price: "Contact for pricing" },
        { size: "1 Crate (5 trays)", price: "Contact for pricing" },
        { size: "Bulk Orders", price: "Negotiable rates" }
      ],
      color: "from-emerald-500 to-teal-500",
      bgColor: "bg-emerald-50"
    },
    {
      id: 3,
      name: "Wholesale Supply",
      category: "Bulk",
      description: "Large-scale poultry fulfillment for wholesalers, markets, and distributors across Ghana.",
      icon: Truck,
      badge: "Bulk Pricing",
      badgeColor: "bg-gradient-to-r from-blue-500 to-indigo-500",
      features: [
        "Minimum order: 100 birds",
        "Competitive wholesale rates",
        "Regular weekly deliveries",
        "Flexible payment terms",
        "Dedicated account manager",
        "Priority delivery scheduling"
      ],
      pricing: [
        { size: "100-500 birds", price: "Tier 1 pricing" },
        { size: "500-1000 birds", price: "Tier 2 pricing" },
        { size: "1000+ birds", price: "Custom pricing" }
      ],
      color: "from-blue-500 to-indigo-500",
      bgColor: "bg-blue-50"
    },
    {
      id: 4,
      name: "Restaurant & Event Catering",
      category: "Special Services",
      description: "Specialized service for restaurants and events with dedicated logistics and custom packaging.",
      icon: Users,
      badge: "Custom Solutions",
      badgeColor: "bg-gradient-to-r from-purple-500 to-pink-500",
      features: [
        "Custom portioning available",
        "Special packaging options",
        "Scheduled deliveries",
        "Quality consistency guaranteed",
        "Event-specific requirements",
        "24-hour advance ordering"
      ],
      pricing: [
        { size: "Restaurant orders", price: "Custom quotes" },
        { size: "Small events (50-100)", price: "Contact us" },
        { size: "Large events (100+)", price: "Volume discounts" }
      ],
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50"
    }
  ]

  const additionalServices = [
    {
      icon: Package,
      title: "Custom Processing",
      description: "Cut, portion, and package according to your specifications"
    },
    {
      icon: Truck,
      title: "Reliable Delivery",
      description: "Same-day and scheduled deliveries across Ghana"
    },
    {
      icon: Leaf,
      title: "Organic Options",
      description: "Free-range and organic poultry available on request"
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary/80 to-primary/60 py-20 sm:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
              Our Products
            </h1>
            <p className="text-xl text-primary-foreground/80 leading-relaxed">
              Premium poultry products for every need - from individual families to large-scale operations
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary mb-4">
              What We Offer
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Choose Your Perfect Product
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              All our products are raised with care, processed with precision, and delivered with reliability
            </p>
          </div>

          <div className="space-y-12">
            {products.map((product, index) => {
              const Icon = product.icon
              const isEven = index % 2 === 0

              return (
                <div
                  key={product.id}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                    !isEven ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Product Image/Icon */}
                  <div className={`${!isEven ? 'lg:order-2' : ''}`}>
                    <div className={`aspect-square rounded-2xl ${product.bgColor} flex items-center justify-center relative overflow-hidden group`}>
                      <div className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-10 group-hover:opacity-20 transition-opacity`} />
                      <div className={`w-48 h-48 rounded-full bg-gradient-to-br ${product.color} flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform relative z-10`}>
                        <Icon className="w-24 h-24 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Product Details */}
                  <div className={`${!isEven ? 'lg:order-1' : ''}`}>
                    <div className="mb-4">
                      <Badge className={`${product.badgeColor} text-white border-0 mb-3`}>
                        {product.badge}
                      </Badge>
                      <div className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
                        {product.category}
                      </div>
                      <h3 className="text-3xl font-bold text-foreground mb-3">
                        {product.name}
                      </h3>
                      <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                        {product.description}
                      </p>
                    </div>

                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-3">
                        Features
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {product.features.map((feature, i) => (
                          <div key={i} className="flex items-start gap-2">
                            <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Pricing */}
                    <div className="bg-muted rounded-xl p-4 mb-6">
                      <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-3">
                        Pricing Options
                      </h4>
                      <div className="space-y-2">
                        {product.pricing.map((price, i) => (
                          <div key={i} className="flex justify-between items-center text-sm">
                            <span className="text-muted-foreground">{price.size}</span>
                            <span className="font-semibold text-foreground">{price.price}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* CTA Button */}
                    <Button 
                      asChild
                      className={`bg-gradient-to-r ${product.color} text-white shadow-lg hover:shadow-xl transition-all w-full sm:w-auto`}
                    >
                      <a
                        href={`https://wa.me/?text=I%27m%20interested%20in%20${encodeURIComponent(product.name)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2"
                      >
                        <MessageCircle className="size-5" />
                        Order {product.name}
                      </a>
                    </Button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="bg-gradient-to-b from-slate-50 to-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary mb-4">
              Value-Added Services
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              More Than Just Poultry
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We go the extra mile to ensure your complete satisfaction
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => {
              const Icon = service.icon
              return (
                <div
                  key={index}
                  className="bg-card rounded-2xl p-8 border-2 border-border hover:border-primary hover:shadow-xl transition-all hover:-translate-y-1 text-center"
                >
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-4">
            Need a Custom Solution?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            We can tailor our products and services to meet your specific requirements
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild 
              size="lg"
              className="bg-background text-primary hover:bg-muted shadow-xl hover:shadow-2xl transition-all"
            >
              <a
                href="https://wa.me/?text=I%27d%20like%20to%20discuss%20custom%20requirements"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                <MessageCircle className="size-5" />
                Contact Sales Team
              </a>
            </Button>
            <Button 
              asChild 
              size="lg"
              variant="outline"
              className="bg-primary-foreground border-2 border-primary-foreground/30 text-primary hover:bg-primary-foreground/90 hover:border-primary-foreground/40"
            >
              <a href="tel:+233000000000" className="inline-flex items-center gap-2">
                Call for Quote
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProductsPage
