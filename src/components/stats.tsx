"use client"

import * as React from "react"
import { motion, easeInOut, easeOut } from "framer-motion"

const stats = [
  { 
    label: "Birds Raised Monthly", 
    value: "5,000+",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
      </svg>
    ),
    color: "from-emerald-500 to-teal-500"
  },
  { 
    label: "Satisfied Clients", 
    value: "1,200+",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    color: "from-blue-500 to-indigo-500"
  },
  { 
    label: "Years of Experience", 
    value: "8+",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    color: "from-amber-500 to-orange-500"
  },
  { 
    label: "Weekly Capacity", 
    value: "2,000+",
    subtitle: "birds",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    color: "from-purple-500 to-pink-500"
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

export function Stats() {
  return (
    <motion.section 
      className="relative bg-gradient-to-b from-primary to-primary/80 py-16 sm:py-20 overflow-hidden"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={{
        hidden: { opacity: 0 },
        show: { opacity: 1 }
      }}
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Decorative blobs */}
      <motion.div 
        className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
        animate={{
          y: [0, 30, 0],
          x: [0, -20, 0]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: easeInOut
        }}
      />
      <motion.div 
        className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
        animate={{
          y: [0, -30, 0],
          x: [0, 20, 0]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: easeInOut,
          delay: 1
        }}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-12"
          variants={itemVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.div 
            className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm px-4 py-1.5 text-sm font-semibold text-white mb-4"
            whileHover={{ scale: 1.05 }}
          >
            Our Track Record
          </motion.div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            Trusted by Thousands
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            Numbers that speak to our commitment to excellence and customer satisfaction
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div 
          className="grid grid-cols-2 gap-6 sm:gap-8 lg:grid-cols-4 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              className="group relative bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/20 hover:bg-white/15 hover:border-white/30 transition-all duration-300 hover:shadow-2xl"
              variants={itemVariants}
              whileHover={{ y: -4 }}
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
              
              <div className="relative flex flex-col items-center text-center space-y-3">
                {/* Icon */}
                <motion.div 
                  className={`flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${stat.color} text-white shadow-lg`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  {stat.icon}
                </motion.div>

                {/* Value */}
                <div>
                  <motion.div 
                    className="text-3xl sm:text-4xl font-bold text-white mb-1"
                    whileInView={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                  >
                    {stat.value}
                  </motion.div>
                  {stat.subtitle && (
                    <div className="text-sm text-white/80 -mt-1">
                      {stat.subtitle}
                    </div>
                  )}
                </div>

                {/* Label */}
                <div className="text-sm sm:text-base font-medium text-white leading-tight">
                  {stat.label}
                </div>
              </div>

              {/* Corner decoration */}
              <motion.div 
                className="absolute top-3 right-3 w-2 h-2 rounded-full bg-white/40 group-hover:scale-150 transition-transform"
                whileHover={{ scale: 1.5 }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom text */}
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-white/80 text-sm sm:text-base">
            Join our growing family of satisfied customers across Ghana
          </p>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Stats
