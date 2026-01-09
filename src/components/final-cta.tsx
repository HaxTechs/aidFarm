"use client"

import * as React from "react"
import { motion, easeOut } from "framer-motion"
import { Button } from "@/components/ui/button"
import { MessageCircle, Phone, ArrowRight } from "lucide-react"

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } }
}

export function FinalCTA() {
  return (
    <motion.section 
      className="relative bg-primary dark:bg-primary py-20 sm:py-24 overflow-hidden border-t border-border border-b border-border"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={{
        hidden: { opacity: 0 },
        show: { opacity: 1 }
      }}
    >
      {/* Subtle grid pattern background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 relative z-10">
        <div className="mx-auto max-w-4xl">
          {/* Main content */}
          <motion.div 
            className="text-center space-y-6 mb-12"
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2,
                  delayChildren: 0.1
                }
              }
            }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <motion.div 
              className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm px-4 py-1.5 text-sm font-semibold text-primary-foreground border border-primary-foreground/20"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <motion.div 
                className="w-2 h-2 bg-primary-foreground rounded-full"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              Available 24/7
            </motion.div>

            <motion.h2 
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground leading-tight"
              variants={itemVariants}
            >
              Ready to Order Fresh,{" "}
              <span className="text-primary-foreground/80">
                Quality Poultry?
              </span>
            </motion.h2>

            <motion.p 
              className="text-lg sm:text-xl text-primary-foreground/80 leading-relaxed max-w-2xl mx-auto"
              variants={itemVariants}
            >
              Get in touch now for quick quotes, bulk orders, or same-day delivery. 
              Our team is ready to serve you.
            </motion.p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
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
            <motion.div variants={itemVariants}>
              <Button 
                asChild 
                size="lg"
                className="w-full sm:w-auto bg-primary-foreground hover:bg-primary-foreground/90 text-primary shadow-lg hover:shadow-xl transition-all duration-300 h-14 px-8 text-base font-semibold"
              >
                <a
                  href="https://wa.me/?text=I%27m%20interested%20in%20AidFarm%20products"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3"
                >
                  <MessageCircle className="size-5" />
                  <span>WhatsApp Us Now</span>
                  <ArrowRight className="size-5" />
                </a>
              </Button>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Button 
                variant="outline" 
                size="lg"
                asChild
                className="w-full sm:w-auto border-2 border-primary-foreground hover:border-primary-foreground hover:bg-primary-foreground/10 text-primary-foreground shadow-md hover:shadow-lg transition-all duration-300 h-14 px-8 text-base font-semibold"
              >
                <a 
                  href="tel:+233000000000" 
                  className="inline-flex items-center gap-3"
                >
                  <Phone className="size-5" />
                  <span>Call Direct</span>
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Contact info cards */}
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto mb-12"
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.3
                }
              }
            }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {[
              { title: "Response Time", subtitle: "Under 30 minutes" },
              { title: "Delivery", subtitle: "Same-day available" },
              { title: "Support", subtitle: "7 days a week" }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-primary-foreground/10 rounded-lg p-4 border border-primary-foreground/20 text-center"
                variants={itemVariants}
              >
                <div className="text-primary-foreground font-semibold mb-1">{item.title}</div>
                <div className="text-primary-foreground/80 text-sm">{item.subtitle}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Features list */}
          <motion.div 
            className="flex flex-wrap items-center justify-center gap-6 text-sm text-primary-foreground/80"
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.4
                }
              }
            }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {[
              { icon: 1, text: "No Minimum Order" },
              { icon: 2, text: "Bulk Discounts" },
              { icon: 3, text: "Quality Guaranteed" },
              { icon: 4, text: "Free Consultation" }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-2"
                variants={itemVariants}
              >
                <svg className="w-5 h-5 text-primary-foreground" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>{item.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

export default FinalCTA
