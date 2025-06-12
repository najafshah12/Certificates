"use client"

import type React from "react"

import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      console.log("Form submitted:", formData)
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      })
    }, 1500)
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: "Our Location",
      details: ["Iqra University", "Airport Road, Karachi", "Pakistan"],
    },
    {
      icon: Phone,
      title: "Phone Number",
      details: ["+92 123 456 7890", "+92 321 987 6543"],
    },
    {
      icon: Mail,
      title: "Email Address",
      details: ["info@yarfix.com", "support@yarfix.com"],
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: ["Monday - Friday: 9AM - 6PM", "Saturday: 10AM - 4PM", "Sunday: Closed"],
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-slate-800 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Have questions or need assistance? We're here to help. Reach out to our team and we'll get back to you as
              soon as possible.
            </p>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon
                return (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6 text-center">
                      <div className="mx-auto w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                        <IconComponent className="h-6 w-6 text-orange-600" />
                      </div>
                      <h3 className="text-lg font-semibold text-slate-800 mb-3">{info.title}</h3>
                      <div className="space-y-1">
                        {info.details.map((detail, i) => (
                          <p key={i} className="text-gray-600">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="text-2xl font-bold text-slate-800 mb-6">Send Us a Message</h2>
                <Card>
                  <CardContent className="p-6">
                    {isSubmitted ? (
                      <div className="text-center py-8">
                        <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                          <Send className="h-8 w-8 text-green-600" />
                        </div>
                        <h3 className="text-xl font-semibold text-slate-800 mb-2">Message Sent!</h3>
                        <p className="text-gray-600 mb-6">
                          Thank you for contacting us. We'll get back to you as soon as possible.
                        </p>
                        <Button onClick={() => setIsSubmitted(false)} className="bg-slate-800 hover:bg-slate-700">
                          Send Another Message
                        </Button>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                              Your Name
                            </label>
                            <Input id="name" name="name" value={formData.name} onChange={handleChange} required />
                          </div>
                          <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                              Email Address
                            </label>
                            <Input
                              id="email"
                              name="email"
                              type="email"
                              value={formData.email}
                              onChange={handleChange}
                              required
                            />
                          </div>
                        </div>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                              Phone Number
                            </label>
                            <Input id="phone" name="phone" value={formData.phone} onChange={handleChange} />
                          </div>
                          <div>
                            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                              Subject
                            </label>
                            <Input
                              id="subject"
                              name="subject"
                              value={formData.subject}
                              onChange={handleChange}
                              required
                            />
                          </div>
                        </div>
                        <div>
                          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                            Your Message
                          </label>
                          <Textarea
                            id="message"
                            name="message"
                            rows={5}
                            value={formData.message}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <Button
                          type="submit"
                          className="w-full bg-orange-500 hover:bg-orange-600"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? "Sending..." : "Send Message"}
                        </Button>
                      </form>
                    )}
                  </CardContent>
                </Card>
              </div>

              {/* Map */}
              <div>
                <h2 className="text-2xl font-bold text-slate-800 mb-6">Our Location</h2>
                <Card className="overflow-hidden">
                  <div className="h-[400px] relative">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.4554803127224!2d67.16211407536!3d24.882842344953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f8f77b94e7f%3A0xe6b55e05d462beb1!2sIqra%20University%20Main%20Campus!5e0!3m2!1sen!2s!4v1686675421123!5m2!1sen!2s"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                  <CardContent className="p-4 bg-slate-800 text-white">
                    <p className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2" />
                      Iqra University, Airport Road, Karachi, Pakistan
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-800 mb-4">Frequently Asked Questions</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Find quick answers to common questions about our services and how we work.
              </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-4">
              {[
                {
                  question: "How do I book a service?",
                  answer:
                    "You can book a service through our website by selecting the service you need, providing your location details, and choosing a convenient time slot. Alternatively, you can call our customer service number for assistance.",
                },
                {
                  question: "Are your professionals verified?",
                  answer:
                    "Yes, all our professionals undergo thorough background checks and skill verification before joining our platform. We ensure they have the necessary qualifications and experience to deliver quality service.",
                },
                {
                  question: "What is your cancellation policy?",
                  answer:
                    "You can cancel or reschedule a booking up to 4 hours before the scheduled service time without any charges. Cancellations made less than 4 hours before the service may incur a cancellation fee.",
                },
                {
                  question: "Do you offer any guarantees?",
                  answer:
                    "Yes, we offer a satisfaction guarantee on all our services. If you're not satisfied with the service, we'll either fix the issue or provide a refund as per our service guarantee policy.",
                },
              ].map((faq, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg">{faq.question}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
