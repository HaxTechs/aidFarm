"use client"

import * as React from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Form from "@/components/ui/form"
import { Button } from "@/components/ui/button"

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background font-sans py-12">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <h1 className="text-2xl font-bold text-foreground">Contact Us</h1>
        <p className="mt-2 text-sm text-muted-foreground">Get in touch via WhatsApp or phone, or send a message below.</p>

        <div className="mt-6 grid grid-cols-1 gap-8 md:grid-cols-2">
          <div>
            <div className="text-sm text-foreground font-medium">WhatsApp</div>
            <div className="mt-1 text-sm text-muted-foreground">Use WhatsApp for quick quotes.</div>
            <div className="mt-4 text-sm text-foreground font-medium">Phone</div>
            <div className="mt-1 text-sm text-muted-foreground">Call us for urgent orders.</div>
          </div>

          <div>
            <Form onSubmit={(e) => e.preventDefault()}>
              <label className="text-sm text-muted-foreground">Name</label>
              <Input name="name" placeholder="Your name" />

              <label className="text-sm text-muted-foreground">Message</label>
              <Textarea name="message" placeholder="How can we help?" rows={4} />

              <div className="mt-2 flex justify-end">
                <Button type="submit">Send</Button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </main>
  )
}
