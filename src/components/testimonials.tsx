"use client"

import * as React from "react"
import { motion, easeOut } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    quote: "AidFarm has been supplying our restaurant for over two years. The quality is consistently excellent, and their delivery is always on time. Our customers love the taste!",
    name: "Ama Boateng",
    role: "Restaurant Owner",
    location: "Accra",
    rating: 5,
  },
  {
    quote: "As a bulk buyer, I need reliability and quality. AidFarm delivers on both fronts every single week. Their pricing is fair and the birds are always healthy and well-raised.",
    name: "Kwame Mensah",
    role: "Wholesale Distributor",
    location: "Kumasi",
    rating: 5,
  },
  {
    quote: "I've been buying from AidFarm for my family for months now. The chicken is fresh, the eggs are perfect, and the home delivery service is incredibly convenient. Highly recommend!",
    name: "Esi Johnson",
    role: "Regular Customer",
    location: "Tema",
    rating: 5,
  },
  {
    quote: "For our catering business, we need a supplier we can trust. AidFarm never disappoints - whether it's a small order or a large event. Professional and reliable every time.",
    name: "Kofi Asante",
    role: "Catering Manager",
    location: "Accra",
    rating: 5,
  },
  {
    quote: "The difference in quality is noticeable. Since switching to AidFarm, our customers have been giving us better reviews on our chicken dishes. Worth every pesewa!",
    name: "Akosua Owusu",
    role: "Chef & Owner",
    location: "Cape Coast",
    rating: 5,
  },
  {
    quote: "Great service and even better products. The team is always responsive on WhatsApp, and they accommodate our specific requirements. A true business partner.",
    name: "Yaw Osei",
    role: "Store Manager",
    location: "Takoradi",
    rating: 5,
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

export function Testimonials() {
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
      <div className="mx-auto max-w-7xl px-4 sm:px-6 relative z-10">
        {/* Header */}
        <motion.div 
          className="mx-auto max-w-2xl text-center mb-16"
          variants={itemVariants}
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary mb-4">
            Customer Reviews
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-muted-foreground">
            Trusted by restaurants, wholesalers, and families across Ghana
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div 
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.name}
              variants={itemVariants}
            >
              <Card className="h-full p-8 border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300 bg-card">
                <div className="flex flex-col h-full">
                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-muted-foreground leading-relaxed flex-grow mb-6 text-[15px]">
                    "{testimonial.quote}"
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center gap-4 pt-4 border-t border-border">
                    {/* Avatar with initials */}
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-sm font-bold text-primary">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    
                    {/* Info */}
                    <div className="flex-grow min-w-0">
                      <div className="font-semibold text-foreground">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </div>
                      <div className="text-xs text-muted-foreground/70 mt-0.5">
                        {testimonial.location}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Stats - Clean and Simple */}
        <motion.div 
          className="mt-16 pt-12 border-t border-border"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">1,200+</div>
              <div className="text-sm text-muted-foreground">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">4.9/5</div>
              <div className="text-sm text-muted-foreground">Average Rating</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">99%</div>
              <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Testimonials