"use client"

import Link from "next/link"
import * as React from "react"
import { motion, easeOut, easeInOut } from "framer-motion"
import { Button } from "@/components/ui/button"
import { MessageCircle, Phone, ChevronDown } from "lucide-react"

const fadeInVariant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6, ease: easeOut } }
}

const fadeInUpVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } }
}

const containerVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
}

const backgroundImages = [
  '/assets/hero/chicks.jpg',
  '/assets/hero/hen1.jpg',
  '/assets/hero/hen2.jpg',
  '/assets/hero/hen3.jpg',
]

export function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0)

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <motion.section 
      className="relative w-full overflow-hidden bg-background min-h-[90vh] flex items-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {/* Rotating background images with elegant fade */}
      <div className="absolute inset-0 overflow-hidden">
        {backgroundImages.map((image, index) => (
          <motion.div
            key={index}
            className="absolute inset-0"
            style={{
              backgroundImage: `url('${image}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: index === currentImageIndex ? 1 : 0,
              scale: index === currentImageIndex ? 1.05 : 1
            }}
            transition={{ 
              opacity: { duration: 1.5, ease: easeInOut },
              scale: { duration: 5, ease: easeInOut }
            }}
          />
        ))}
        
        {/* Elegant gradient overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-background/45 via-background/85 to-background/50 dark:from-background/98 dark:via-background/65 dark:to-background/35" />
        
        {/* Radial gradient for focus */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,var(--background)_100%)]" />
      </div>

      {/* Subtle grain texture overlay */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')]" />

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24 relative z-10">
        <div className="mx-auto max-w-4xl">
          {/* Badge */}
          <motion.div 
            className="flex justify-center mb-6"
            variants={fadeInVariant}
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 backdrop-blur-sm px-4 py-1.5 text-sm font-medium text-primary border border-primary/20 shadow-lg">
              <motion.div 
                className="w-2 h-2 bg-primary rounded-full"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              Farm-Fresh Quality Since 2025
            </div>
          </motion.div>

          {/* Main heading */}
          <motion.h1 
            className="text-center text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl text-foreground"
            variants={fadeInUpVariant}
          >
            Premium Poultry,{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary to-accent">
                Delivered Fresh
              </span>
              <span className="absolute bottom-1 left-0 w-full h-3 bg-gradient-to-r from-primary/30 to-accent/30 -z-0 blur-sm" />
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p 
            className="mt-6 text-center text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto"
            variants={fadeInUpVariant}
            transition={{ duration: 0.6, delay: 0.2, ease: easeOut }}
          >
            From our farm to your table. Ethically raised, premium quality poultry and eggs delivered across Ghana. 
            Trusted by restaurants, markets, and families nationwide.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
            variants={containerVariant}
          >
            <motion.div variants={fadeInUpVariant}>
              <Button 
                asChild 
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all duration-300 w-full sm:w-auto group"
              >
                <motion.a
                  href="https://wa.me/?text=I%27m%20interested%20in%20AidFarm%20products"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <MessageCircle className="size-5" />
                  Order on WhatsApp
                </motion.a>
              </Button>
            </motion.div>

            <motion.div variants={fadeInUpVariant}>
              <Button 
                variant="outline" 
                size="lg"
                asChild
                className="border-2 border-border hover:border-primary hover:bg-primary/5 text-foreground hover:text-primary shadow-sm w-full sm:w-auto group transition-all duration-300"
              >
                <motion.a 
                  href="tel:+233000000000" 
                  className="inline-flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Phone className="size-5 group-hover:scale-110 transition-transform" />
                  Call Us Now
                </motion.a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Trust indicators */}
          <motion.div 
            className="mt-12 flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-sm text-muted-foreground"
            variants={containerVariant}
          >
            {[
              { title: "Certified Quality" },
              { title: "Same-Day Delivery" },
              { title: "1,200+ Happy Customers" }
            ].map((item, index) => (
              <motion.div key={index} className="flex items-center gap-2" variants={fadeInUpVariant}>
                <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-medium">{item.title}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:block"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="w-6 h-6 text-muted-foreground" />
      </motion.div>
    </motion.section>
  )
}

export default Hero