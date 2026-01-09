"use client"

import * as React from "react"
import { Card } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    quote: "AidFarm has been supplying our restaurant for over two years. The quality is consistently excellent, and their delivery is always on time. Our customers love the taste!",
    name: "Ama Boateng",
    role: "Restaurant Owner",
    type: "Restaurant Partner",
    rating: 5,
    image: "AB",
    color: "from-emerald-500 to-teal-500"
  },
  {
    quote: "As a bulk buyer, I need reliability and quality. AidFarm delivers on both fronts every single week. Their pricing is fair and the birds are always healthy and well-raised.",
    name: "Kwame Mensah",
    role: "Wholesale Distributor",
    type: "Bulk Buyer",
    rating: 5,
    image: "KM",
    color: "from-blue-500 to-indigo-500"
  },
  {
    quote: "I've been buying from AidFarm for my family for months now. The chicken is fresh, the eggs are perfect, and the home delivery service is incredibly convenient. Highly recommend!",
    name: "Esi Johnson",
    role: "Regular Customer",
    type: "Individual Customer",
    rating: 5,
    image: "EJ",
    color: "from-purple-500 to-pink-500"
  },
  {
    quote: "For our catering business, we need a supplier we can trust. AidFarm never disappoints - whether it's a small order or a large event. Professional and reliable every time.",
    name: "Kofi Asante",
    role: "Catering Manager",
    type: "Event Partner",
    rating: 5,
    image: "KA",
    color: "from-amber-500 to-orange-500"
  },
  {
    quote: "The difference in quality is noticeable. Since switching to AidFarm, our customers have been giving us better reviews on our chicken dishes. Worth every pesewa!",
    name: "Akosua Owusu",
    role: "Chef & Owner",
    type: "Restaurant",
    rating: 5,
    image: "AO",
    color: "from-rose-500 to-red-500"
  },
  {
    quote: "Great service and even better products. The team is always responsive on WhatsApp, and they accommodate our specific requirements. A true business partner.",
    name: "Yaw Osei",
    role: "Store Manager",
    type: "Retail Partner",
    rating: 5,
    image: "YO",
    color: "from-green-500 to-emerald-500"
  },
]

export function Testimonials() {
  return (
    <section className="bg-gradient-to-b from-background to-muted py-20 sm:py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary mb-4">
            Customer Reviews
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-muted-foreground">
            Don't just take our word for it - hear from the people who trust us with their poultry needs
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Card className="h-full p-6 sm:p-8 border-2 border-border hover:border-primary hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group relative overflow-hidden">
                {/* Gradient overlay */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${testimonial.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-bl-full`} />
                
                <div className="relative flex flex-col h-full">
                  {/* Quote Icon */}
                  <div className="mb-4">
                    <svg className="w-10 h-10 text-primary/20 group-hover:text-primary/30 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>

                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-foreground leading-relaxed flex-grow mb-6">
                    "{testimonial.quote}"
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center gap-4 pt-6 border-t border-border">
                    {/* Avatar */}
                    <div className={`flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br ${testimonial.color} flex items-center justify-center text-white font-bold shadow-md`}>
                      {testimonial.image}
                    </div>
                    
                    {/* Info */}
                    <div className="flex-grow min-w-0">
                      <div className="font-semibold text-foreground truncate">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-muted-foreground truncate">
                        {testimonial.role}
                      </div>
                    </div>

                    {/* Badge */}
                    <div className="flex-shrink-0">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gradient-to-r ${testimonial.color} text-white shadow-sm`}>
                        {testimonial.type}
                      </span>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>

        {/* Trust badges */}
        <div className="mt-16 pt-12 border-t border-slate-200">
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12">
            <div className="flex items-center gap-3 text-slate-600">
              <div className="flex -space-x-2">
                {['AB', 'KM', 'EJ', 'KA'].map((initial, i) => (
                  <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center text-white text-xs font-bold border-2 border-white shadow-md">
                    {initial}
                  </div>
                ))}
              </div>
              <div>
                <div className="font-semibold text-foreground">1,200+</div>
                <div className="text-sm">Happy Customers</div>
              </div>
            </div>

            <div className="flex items-center gap-3 text-muted-foreground">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <div>
                <div className="font-semibold text-foreground">4.9/5</div>
                <div className="text-sm">Average Rating</div>
              </div>
            </div>

            <div className="flex items-center gap-3 text-muted-foreground">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <div className="font-semibold text-foreground">99%</div>
                <div className="text-sm">Satisfaction Rate</div>
              </div>
            </div>
          </div>
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

export default Testimonials
