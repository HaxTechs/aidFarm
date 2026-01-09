"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { MessageCircle, Target, Eye, Heart, Users, Award, TrendingUp } from "lucide-react"

export function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: "Quality First",
      description: "We never compromise on the quality of our poultry products. Every bird is raised with care and attention.",
      color: "from-rose-500 to-red-500"
    },
    {
      icon: Users,
      title: "Customer Focus",
      description: "Your satisfaction drives everything we do. We listen, adapt, and deliver exactly what you need.",
      color: "from-blue-500 to-indigo-500"
    },
    {
      icon: Award,
      title: "Ethical Practices",
      description: "Humane farming and sustainable methods are at the core of our operations.",
      color: "from-amber-500 to-orange-500"
    },
    {
      icon: TrendingUp,
      title: "Continuous Growth",
      description: "We're always improving our processes, expanding our reach, and raising our standards.",
      color: "from-emerald-500 to-teal-500"
    }
  ]

  const milestones = [
    { year: "2016", event: "AidFarm founded with a vision to revolutionize poultry farming in Ghana" },
    { year: "2018", event: "Expanded operations to serve 500+ customers across Greater Accra" },
    { year: "2020", event: "Introduced bulk supply service for restaurants and wholesalers" },
    { year: "2022", event: "Reached 1,000+ satisfied customers milestone" },
    { year: "2024", event: "Launched nationwide delivery service covering all regions of Ghana" },
    { year: "2026", event: "Processing 5,000+ birds monthly with 99% on-time delivery rate" }
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary/80 to-primary/60 py-20 sm:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
              About AidFarm
            </h1>
            <p className="text-xl text-primary-foreground/80 leading-relaxed">
              Committed to delivering premium poultry with integrity, quality, and care since 2016
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary mb-6">
                Our Story
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                From Humble Beginnings to Ghana's Trusted Poultry Supplier
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  AidFarm was founded in 2016 with a simple but powerful vision: to provide Ghanaians with access to fresh, 
                  high-quality poultry raised with ethical farming practices. What started as a small operation has grown 
                  into one of Ghana's most trusted poultry suppliers.
                </p>
                <p>
                  Today, we serve over 1,200 satisfied customers ranging from individual families to large-scale restaurants 
                  and wholesalers. Our commitment to quality, reliability, and customer satisfaction has been the foundation 
                  of our growth and success.
                </p>
                <p>
                  We believe that great food starts with great farming. That's why we've invested heavily in modern facilities, 
                  humane rearing practices, and a team that truly cares about delivering excellence in every order.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-emerald-100 to-teal-100 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center shadow-xl">
                    <svg className="w-16 h-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                  </div>
                  <div className="text-5xl font-bold text-primary mb-2">8+</div>
                  <div className="text-muted-foreground font-medium">Years of Excellence</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-muted py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-background rounded-2xl p-8 sm:p-10 border-2 border-primary/20 hover:border-primary/40 hover:shadow-xl transition-all">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To provide Ghana with the highest quality poultry products through ethical farming practices, 
                exceptional customer service, and unwavering commitment to food safety. We strive to be the 
                preferred choice for individuals, businesses, and institutions seeking reliable poultry supply.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-8 sm:p-10 border-2 border-border hover:border-primary/40 hover:shadow-xl transition-all">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To become West Africa's leading poultry farm, recognized for innovation in sustainable farming, 
                setting the standard for quality and ethical practices in the industry. We envision a future where 
                every Ghanaian has access to nutritious, affordable, and responsibly-raised poultry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary mb-4">
              Our Values
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              What Drives Us Every Day
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our core values guide every decision we make and every interaction we have
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <div
                  key={value.title}
                  className="bg-background rounded-2xl p-6 border-2 border-border hover:border-primary hover:shadow-xl transition-all hover:-translate-y-1 group"
                >
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${value.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-gradient-to-b from-slate-50 to-white py-20 sm:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary mb-4">
              Our Journey
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Key Milestones
            </h2>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-primary/60 hidden sm:block" />

            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="relative pl-0 sm:pl-20">
                  {/* Timeline dot */}
                  <div className="absolute left-6 top-2 w-5 h-5 rounded-full bg-gradient-to-br from-primary to-primary/80 border-4 border-background shadow-lg hidden sm:block" />
                  
                  <div className="bg-card rounded-xl p-6 border-2 border-border hover:border-primary hover:shadow-lg transition-all">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-20 h-20 rounded-lg bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center text-primary-foreground font-bold text-lg shadow-md">
                        {milestone.year}
                      </div>
                      <div className="flex-grow pt-2">
                        <p className="text-foreground leading-relaxed">{milestone.event}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Experience the AidFarm Difference?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Join over 1,200 satisfied customers who trust us for their poultry needs
          </p>
          <Button 
            asChild 
            size="lg"
            className="bg-white text-primary hover:bg-primary/10 shadow-xl hover:shadow-2xl transition-all h-14 px-8 text-base font-semibold"
          >
            <a
              href="https://wa.me/?text=I%27m%20interested%20in%20AidFarm%20products"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3"
            >
              <MessageCircle className="size-5" />
              Get Started Today
            </a>
          </Button>
        </div>
      </section>
    </div>
  )
}

export default AboutPage
