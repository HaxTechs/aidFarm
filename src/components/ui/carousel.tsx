"use client"

import * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

interface CarouselProps {
  items: React.ReactNode[]
  itemsPerView?: number
  autoplay?: boolean
  autoplayInterval?: number
}

export function Carousel({
  items,
  itemsPerView = 1,
  autoplay = false,
  autoplayInterval = 5000,
}: CarouselProps) {
  const [current, setCurrent] = React.useState(0)
  const [direction, setDirection] = React.useState(0)

  const itemCount = items.length
  const maxIndex = Math.ceil(itemCount / itemsPerView) - 1

  const paginate = (newDirection: number) => {
    setDirection(newDirection)
    setCurrent((prev) => {
      const next = prev + newDirection
      if (next > maxIndex) return 0
      if (next < 0) return maxIndex
      return next
    })
  }

  React.useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      paginate(1)
    }, autoplayInterval)

    return () => clearInterval(interval)
  }, [autoplay, autoplayInterval])

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      zIndex: 0,
      x: dir < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  }

  return (
    <div className="relative w-full">
      <div className="overflow-hidden rounded-lg">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={current}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.5 },
            }}
            className="grid gap-6"
            style={{
              gridTemplateColumns: `repeat(${itemsPerView}, minmax(0, 1fr))`,
            }}
          >
            {items.slice(current * itemsPerView, (current + 1) * itemsPerView)}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Buttons */}
      {itemCount > itemsPerView && (
        <>
          <button
            onClick={() => paginate(-1)}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 z-10 p-2 rounded-full bg-primary hover:bg-primary/80 text-primary-foreground transition-all hover:scale-110"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={() => paginate(1)}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 z-10 p-2 rounded-full bg-primary hover:bg-primary/80 text-primary-foreground transition-all hover:scale-110"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </>
      )}

      {/* Dot Indicators */}
      {itemCount > itemsPerView && (
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: Math.ceil(itemCount / itemsPerView) }).map((_, i) => (
            <motion.button
              key={i}
              onClick={() => {
                setDirection(i > current ? 1 : -1)
                setCurrent(i)
              }}
              className={`w-2 h-2 rounded-full transition-all ${
                i === current
                  ? "bg-primary w-8"
                  : "bg-primary/40 hover:bg-primary/60"
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default Carousel
