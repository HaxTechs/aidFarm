"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"
import { MapPin, Phone, Mail, MessageCircle, Clock, Send, CheckCircle2 } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    phone: "",
    orderType: "",
    message: ""
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const whatsappMessage = `Name: ${formData.name}%0AEmail: ${formData.email}%0APhone: ${formData.phone}%0AOrder Type: ${formData.orderType}%0AMessage: ${formData.message}`
    window.open(`https://wa.me/?text=${whatsappMessage}`, '_blank')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const contactMethods = [
    {
      icon: Phone,
      title: "Call Us",
      description: "Speak directly with our team",
      value: "+233 (0) 00 000 0000",
      action: "tel:+233000000000",
      actionLabel: "Call Now",
      color: "from-blue-500 to-indigo-500"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      description: "Quick responses via WhatsApp",
      value: "Chat with us",
      action: "https://wa.me/?text=Hello%20AidFarm",
      actionLabel: "Start Chat",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Mail,
      title: "Email",
      description: "Send us a detailed message",
      value: "info@aidfarm.gh",
      action: "mailto:info@aidfarm.gh",
      actionLabel: "Send Email",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      description: "Our farm location",
      value: "Accra, Greater Accra, Ghana",
      action: "#location",
      actionLabel: "Get Directions",
      color: "from-amber-500 to-orange-500"
    }
  ]

  const businessHours = [
    { day: "Monday - Friday", hours: "8:00 AM - 6:00 PM" },
    { day: "Saturday", hours: "9:00 AM - 4:00 PM" },
    { day: "Sunday", hours: "Closed" }
  ]

  const faqs = [
    {
      question: "What is the minimum order quantity?",
      answer: "We have no minimum order for individual customers. For bulk orders, please contact us for details."
    },
    {
      question: "Do you deliver?",
      answer: "Yes! We offer same-day and scheduled delivery across Ghana. Delivery fees vary by location."
    },
    {
      question: "How fresh are the products?",
      answer: "All our products are fresh daily. Chicken is processed on the day of delivery, and eggs are collected daily."
    },
    {
      question: "Can I visit the farm?",
      answer: "Yes, farm visits can be arranged by appointment. Please contact us to schedule your visit."
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary/90 to-primary/70 py-20 sm:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
              Get In Touch
            </h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              We're here to help with your poultry needs. Reach out through any of our contact channels.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary mb-4">
              Multiple Ways to Reach Us
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Choose Your Preferred Method
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactMethods.map((method, index) => {
              const Icon = method.icon
              return (
                <Card
                  key={index}
                  className="p-6 border-2 border-border hover:border-primary hover:shadow-xl transition-all group relative overflow-hidden"
                >
                  {/* Gradient background on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${method.color} opacity-0 group-hover:opacity-5 transition-opacity`} />
                  
                  <div className="relative">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${method.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-md`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-1">{method.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{method.description}</p>
                    <p className="text-sm font-semibold text-foreground mb-4">{method.value}</p>
                    <a
                      href={method.action}
                      target={method.action.startsWith('http') ? '_blank' : undefined}
                      rel={method.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                    >
                      {method.actionLabel}
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </Card>
              )
            })}
          </div>

          {/* Contact Form & Info */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="p-8 sm:p-10 border-2 border-border shadow-md">
                <div className="mb-8">
                  <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
                    Send Us a Message
                  </h3>
                  <p className="text-muted-foreground">
                    Fill out the form below and we'll get back to you as soon as possible
                  </p>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                        Full Name <span className="text-primary">*</span>
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="h-12 border-border focus:border-primary focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                        Email Address <span className="text-primary">*</span>
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="h-12 border-border focus:border-primary focus:ring-primary"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-2">
                        Phone Number <span className="text-primary">*</span>
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+233 000 000 000"
                        className="h-12 border-border focus:border-primary focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label htmlFor="orderType" className="block text-sm font-semibold text-foreground mb-2">
                        Order Type <span className="text-primary">*</span>
                      </label>
                      <select
                        id="orderType"
                        name="orderType"
                        required
                        value={formData.orderType}
                        onChange={handleChange}
                        className="w-full h-12 rounded-md border border-border bg-background px-4 text-sm text-foreground focus:border-primary focus:ring-primary focus:outline-none transition-colors"
                      >
                        <option value="">Select order type</option>
                        <option value="individual">Individual/Retail</option>
                        <option value="restaurant">Restaurant</option>
                        <option value="bulk">Bulk/Wholesale</option>
                        <option value="event">Event Catering</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                      Your Message <span className="text-primary">*</span>
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your requirements..."
                      className="border-border focus:border-primary focus:ring-primary resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary/80 text-primary-foreground shadow-lg hover:shadow-xl transition-all h-12"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </Button>

                  <p className="text-xs text-muted-foreground text-center pt-2">
                    By submitting this form, you agree to our privacy policy and terms of service.
                  </p>
                </form>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Business Hours */}
              <Card className="p-6 border-2 border-border">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-md">
                    <Clock className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">Business Hours</h3>
                </div>
                <div className="space-y-3">
                  {businessHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center py-3 border-b border-border last:border-0">
                      <span className="text-sm font-medium text-foreground">{schedule.day}</span>
                      <span className="text-sm text-muted-foreground">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/10">
                  <div className="flex gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-foreground">
                      WhatsApp inquiries monitored 24/7 for urgent orders
                    </p>
                  </div>
                </div>
              </Card>

              {/* Quick FAQs */}
              <Card className="p-6 border-2 border-border">
                <h3 className="text-lg font-bold text-foreground mb-6">Quick Answers</h3>
                <div className="space-y-5">
                  {faqs.map((faq, index) => (
                    <div key={index} className="pb-5 border-b border-border last:border-0 last:pb-0">
                      <h4 className="text-sm font-semibold text-foreground mb-2">{faq.question}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section id="location" className="bg-muted py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center mb-8">
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">Visit Our Farm</h3>
            <p className="text-muted-foreground text-lg">Located in Accra, Greater Accra Region</p>
          </div>
          <div className="aspect-video bg-background rounded-2xl flex items-center justify-center border-2 border-border shadow-md">
            <div className="text-center p-8">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <MapPin className="w-10 h-10 text-primary" />
              </div>
              <p className="text-muted-foreground mb-6 text-lg">Map integration placeholder</p>
              <Button variant="outline" size="lg" className="border-2">
                Get Directions
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}