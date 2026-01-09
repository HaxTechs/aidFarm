"use client"

import * as React from "react"
import { motion, easeOut } from "framer-motion"
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

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } }
}

export function Offerings() {
  return (
    <motion.section 
      className="bg-background py-20 sm:py-24 relative overflow-hidden"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={{
        hidden: { opacity: 0 },
        show: { opacity: 1 }
      }}
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div 
          className="mx-auto max-w-2xl text-center mb-16"
          variants={itemVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.div 
            className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary mb-4"
            whileHover={{ scale: 1.05 }}
          >
            Our Services
          </motion.div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            What We Offer
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Quality poultry products tailored for individuals, restaurants, and bulk buyers across Ghana.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {offerings.map((offering) => {
            const Icon = offering.icon
            return (
              <motion.div
                key={offering.title}
                className="group relative"
                variants={itemVariants}
              >
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="h-full border-2 border-border hover:border-primary hover:shadow-xl transition-all duration-300 overflow-hidden">
                    {/* Gradient background on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${offering.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                    
                    <div className="relative p-6 flex flex-col h-full">
                      {/* Icon */}
                      <motion.div 
                        className={`inline-flex items-center justify-center w-14 h-14 rounded-xl ${offering.bgColor} mb-4`}
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Icon className={`size-7 bg-gradient-to-br ${offering.color} bg-clip-text text-transparent`} />
                      </motion.div>

                      {/* Badge */}
                      {offering.badge && (
                        <div className="mb-3">
                          <Badge className={`bg-gradient-to-r ${offering.color} text-white border-0 shadow-sm`}>
                            {offering.badge}
                          </Badge>
                        </div>
                      )}

                      {/* Content */}
                      <CardTitle className="text-xl mb-2 text-foreground group-hover:text-primary transition-colors">
                        {offering.title}
                      </CardTitle>
                      <CardDescription className="text-sm leading-relaxed text-muted-foreground flex-grow">
                        {offering.description}
                      </CardDescription>

                      {/* Decorative element */}
                      <div className="mt-4 pt-4 border-t border-border group-hover:border-primary transition-colors">
                        <motion.div 
                          className="flex items-center text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity"
                          whileHover={{ x: 4 }}
                        >
                          <span>Learn more</span>
                          <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </motion.div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-muted-foreground mb-6">
            Need a custom solution? We're here to help.
          </p>
          <motion.a
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-muted hover:bg-primary/5 text-foreground hover:text-primary font-medium transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Our Team
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Offerings
