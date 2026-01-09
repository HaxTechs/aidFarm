"use client"

import * as React from "react"
import { motion, easeOut } from "framer-motion"
import { CheckCircle, ShieldCheck, Repeat, Globe, Award, Heart } from "lucide-react"

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } }
}

export function WhyAidFarm() {
  const points = [
    { 
      icon: ShieldCheck, 
      title: "Premium Quality Standards",
      description: "Rigorous hygiene practices and quality checks ensure only the best poultry reaches your table.",
      color: "from-emerald-500 to-teal-500"
    },
    { 
      icon: Repeat, 
      title: "Consistent Supply",
      description: "Reliable weekly deliveries with never a shortage. Your trusted partner for steady supply.",
      color: "from-blue-500 to-indigo-500"
    },
    { 
      icon: Award, 
      title: "Competitive Pricing",
      description: "Fair, transparent pricing with special rates for bulk orders and regular customers.",
      color: "from-amber-500 to-orange-500"
    },
    { 
      icon: Globe, 
      title: "Nationwide Coverage",
      description: "From Accra to Kumasi and beyond - we deliver fresh poultry across all regions of Ghana.",
      color: "from-purple-500 to-pink-500"
    },
    { 
      icon: Heart, 
      title: "Ethical Farming",
      description: "Humane rearing practices that prioritize animal welfare and sustainable farming methods.",
      color: "from-rose-500 to-red-500"
    },
    { 
      icon: CheckCircle, 
      title: "Customer Satisfaction",
      description: "Join 1,200+ satisfied customers who trust us for their poultry needs every week.",
      color: "from-green-500 to-emerald-500"
    },
  ]

  const images = [
    { src: "/assets/chicks/chick.jpg", alt: "Healthy chicks" },
    { src: "/assets/feeding/eat1.jpg", alt: "Farm feeding" },
    { src: "/assets/adult-chickens/chicken3.jpg", alt: "Quality chickens" },
    { src: "/assets/coop/coop1.jpg", alt: "Modern facilities" },
  ]

  return (
    <section className="bg-gradient-to-b from-muted/50 to-background py-20 sm:py-24 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left Column - Header & Images */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
              Why Choose Us
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              Why Choose{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                AidFarm
              </span>
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              We combine humane rearing practices with modern logistics to deliver 
              consistent, high-quality poultry products for homes and businesses across Ghana.
            </p>

            {/* Image Grid */}
            <div className="grid grid-cols-2 gap-4 pt-6">
              {images.map((img, index) => (
                <motion.div
                  key={index}
                  className="relative aspect-square rounded-2xl overflow-hidden group"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-3 left-3 right-3 text-sm font-medium text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {img.alt}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 pt-6 border-t border-border">
              <div className="space-y-1">
                <div className="text-3xl font-bold text-primary">8+</div>
                <div className="text-sm text-muted-foreground">Years of Excellence</div>
              </div>
              <div className="space-y-1">
                <div className="text-3xl font-bold text-primary">5,000+</div>
                <div className="text-sm text-muted-foreground">Birds Raised Monthly</div>
              </div>
              <div className="space-y-1">
                <div className="text-3xl font-bold text-primary">1,200+</div>
                <div className="text-sm text-muted-foreground">Satisfied Clients</div>
              </div>
              <div className="space-y-1">
                <div className="text-3xl font-bold text-primary">99%</div>
                <div className="text-sm text-muted-foreground">On-Time Delivery</div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Features */}
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.2
                }
              }
            }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {points.map((point) => {
              const Icon = point.icon
              return (
                <motion.div
                  key={point.title}
                  className="group relative bg-card rounded-2xl p-6 border-2 border-border hover:border-primary hover:shadow-xl transition-all duration-300"
                  variants={itemVariants}
                  whileHover={{ y: -4 }}
                >
                  {/* Gradient background on hover */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${point.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                  
                  <div className="relative space-y-3">
                    {/* Icon */}
                    <motion.div 
                      className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${point.color} shadow-lg`}
                      whileHover={{ rotate: 12, scale: 1.1 }}
                    >
                      <Icon className="size-6 text-white" />
                    </motion.div>

                    {/* Content */}
                    <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                      {point.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>

        {/* Bottom Banner */}
        <motion.div 
          className="mt-16 bg-gradient-to-r from-primary to-accent rounded-2xl p-8 sm:p-10 text-center text-white shadow-xl relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }} />
          </div>

          <div className="relative z-10">
            <h3 className="text-2xl sm:text-3xl font-bold mb-3">
              Ready to Experience the Difference?
            </h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Join hundreds of satisfied customers who trust AidFarm for their poultry needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <motion.a
                href="https://wa.me/?text=I%27m%20interested%20in%20AidFarm%20products"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-primary rounded-lg font-semibold hover:bg-white/90 transition-all shadow-md hover:shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Start Your Order
              </motion.a>
              <motion.a
                href="tel:+233000000000"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white rounded-lg font-semibold hover:bg-white/20 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Us Now
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default WhyAidFarm