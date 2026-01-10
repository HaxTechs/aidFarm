"use client"

import * as React from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MessageCircle, Check, ShoppingCart, Egg, Truck, Users, Package, Leaf, Phone } from "lucide-react"

export default function ProductsPage() {
  const products = [
    {
      id: 1,
      name: "Fresh Broiler Chicken",
      category: "Poultry",
      description: "Premium quality broiler chickens raised with care. Perfect for retail and wholesale customers.",
      icon: ShoppingCart,
      badge: "Most Popular",
      badgeColor: "bg-gradient-to-r from-amber-500 to-orange-500",
      image: "/assets/adult-chickens/chicken1.jpg",
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
    },
    {
      id: 2,
      name: "Table & Bulk Eggs",
      category: "Eggs",
      description: "Fresh, high-quality eggs from healthy, well-fed hens. Available in various pack sizes.",
      icon: Egg,
      badge: "Fresh Daily",
      badgeColor: "bg-gradient-to-r from-emerald-500 to-teal-500",
      image: "/assets/other/egg.jpg",
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
    },
    {
      id: 3,
      name: "Wholesale Supply",
      category: "Bulk",
      description: "Large-scale poultry fulfillment for wholesalers, markets, and distributors across Ghana.",
      icon: Truck,
      badge: "Bulk Pricing",
      badgeColor: "bg-gradient-to-r from-blue-500 to-indigo-500",
      image: "/assets/feeding/feed1.jpg",
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
    },
    {
      id: 4,
      name: "Restaurant & Event Catering",
      category: "Special Services",
      description: "Specialized service for restaurants and events with dedicated logistics and custom packaging.",
      icon: Users,
      badge: "Custom Solutions",
      badgeColor: "bg-gradient-to-r from-purple-500 to-pink-500",
      image: "/assets/adult-chickens/chicken2.jpg",
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
    }
  ]

  const additionalServices = [
    {
      icon: Package,
      title: "Custom Processing",
      description: "Cut, portion, and package according to your specifications",
      color: "from-emerald-500 to-teal-500"
    },
    {
      icon: Truck,
      title: "Reliable Delivery",
      description: "Same-day and scheduled deliveries across Ghana",
      color: "from-blue-500 to-indigo-500"
    },
    {
      icon: Leaf,
      title: "Organic Options",
      description: "Free-range and organic poultry available on request",
      color: "from-amber-500 to-orange-500"
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary/90 to-primary/70 py-20 sm:py-24 overflow-hidden">
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
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
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

          <div className="space-y-20">
            {products.map((product, index) => {
              const Icon = product.icon
              const isEven = index % 2 === 0

              return (
                <div
                  key={product.id}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
                >
                  {/* Product Image */}
                  <div className={`${!isEven ? 'lg:order-2' : ''}`}>
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden group shadow-xl">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                      
                      {/* Icon badge */}
                      <div className="absolute top-6 left-6">
                        <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${product.color} flex items-center justify-center shadow-lg`}>
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                      </div>

                      {/* Badge */}
                      <div className="absolute top-6 right-6">
                        <Badge className={`${product.badgeColor} text-white border-0 shadow-lg text-sm px-3 py-1`}>
                          {product.badge}
                        </Badge>
                      </div>
                    </div>
                  </div>

                  {/* Product Details */}
                  <div className={`${!isEven ? 'lg:order-1' : ''}`}>
                    <div className="mb-6">
                      <div className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
                        {product.category}
                      </div>
                      <h3 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                        {product.name}
                      </h3>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        {product.description}
                      </p>
                    </div>

                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
                        Features
                      </h4>
                      <div className="grid grid-cols-1 gap-3">
                        {product.features.map((feature, i) => (
                          <div key={i} className="flex items-start gap-3">
                            <div className={`w-5 h-5 rounded-full bg-gradient-to-br ${product.color} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                              <Check className="w-3 h-3 text-white" />
                            </div>
                            <span className="text-sm text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Pricing */}
                    <div className="bg-muted/50 rounded-xl p-6 mb-6 border border-border">
                      <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
                        Pricing Options
                      </h4>
                      <div className="space-y-3">
                        {product.pricing.map((price, i) => (
                          <div key={i} className="flex justify-between items-center">
                            <span className="text-sm text-muted-foreground">{price.size}</span>
                            <span className="text-sm font-semibold text-foreground">{price.price}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* CTA Button */}
                    <Button 
                      asChild
                      size="lg"
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
      <section className="bg-muted py-20 sm:py-24">
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
                <Card
                  key={index}
                  className="p-8 border-2 border-border hover:border-primary hover:shadow-xl transition-all text-center group"
                >
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-md`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary to-primary/90 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-4">
            Need a Custom Solution?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            We can tailor our products and services to meet your specific requirements
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild 
              size="lg"
              className="bg-background text-primary hover:bg-background/90 shadow-xl hover:shadow-2xl transition-all"
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
              className="bg-primary-foreground/10 backdrop-blur-sm border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20 hover:border-primary-foreground/40"
            >
              <a href="tel:+233000000000" className="inline-flex items-center gap-2">
                <Phone className="size-5" />
                Call for Quote
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}