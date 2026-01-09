"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { MessageCircle, Phone, ArrowRight } from "lucide-react"

export function FinalCTA() {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 py-20 sm:py-24 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Animated blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl animate-blob" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl animate-blob animation-delay-2000" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl animate-blob animation-delay-4000" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 relative z-10">
        <div className="mx-auto max-w-4xl">
          {/* Main content */}
          <div className="text-center space-y-6 mb-12">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm px-4 py-1.5 text-sm font-semibold text-emerald-300 border border-emerald-500/20">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              Available 24/7
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Ready to Order Fresh,{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
                Quality Poultry?
              </span>
            </h2>

            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto">
              Get in touch now for quick quotes, bulk orders, or same-day delivery. 
              Our team is ready to serve you.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button 
              asChild 
              size="lg"
              className="w-full sm:w-auto bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white shadow-xl shadow-emerald-500/30 hover:shadow-2xl hover:shadow-emerald-500/40 transition-all duration-300 group border-0 h-14 px-8 text-base font-semibold"
            >
              <a
                href="https://wa.me/?text=I%27m%20interested%20in%20AidFarm%20products"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3"
              >
                <MessageCircle className="size-5 group-hover:scale-110 transition-transform" />
                <span>WhatsApp Us Now</span>
                <ArrowRight className="size-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>

            <Button 
              variant="outline" 
              size="lg"
              asChild
              className="w-full sm:w-auto bg-white/10 backdrop-blur-sm border-2 border-white/30 hover:bg-white/20 hover:border-white/40 text-white shadow-lg hover:shadow-xl transition-all duration-300 group h-14 px-8 text-base font-semibold"
            >
              <a href="tel:+233000000000" className="inline-flex items-center gap-3">
                <Phone className="size-5 group-hover:scale-110 group-hover:rotate-12 transition-transform" />
                <span>Call Direct</span>
              </a>
            </Button>
          </div>

          {/* Contact info cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto mb-12">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 text-center group hover:bg-white/10 transition-all">
              <div className="text-emerald-400 font-semibold mb-1">Response Time</div>
              <div className="text-white/80 text-sm">Under 30 minutes</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 text-center group hover:bg-white/10 transition-all">
              <div className="text-emerald-400 font-semibold mb-1">Delivery</div>
              <div className="text-white/80 text-sm">Same-day available</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 text-center group hover:bg-white/10 transition-all">
              <div className="text-emerald-400 font-semibold mb-1">Support</div>
              <div className="text-white/80 text-sm">7 days a week</div>
            </div>
          </div>

          {/* Features list */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-300">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>No Minimum Order</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Bulk Discounts</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Quality Guaranteed</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Free Consultation</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  )
}

export default FinalCTA
