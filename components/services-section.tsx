"use client"

import { useState } from "react"
import { Home, Wrench, Zap, Truck, Settings, Paintbrush } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function ServicesSection() {
  const [selectedService, setSelectedService] = useState<string | null>(null)

  const services = [
    {
      id: "cleaning",
      icon: Home,
      title: "House cleaning",
      description: "Professional cleaning services for your home",
      price: "Starting from $50",
    },
    {
      id: "handyman",
      icon: Wrench,
      title: "Handyman",
      description: "General repairs and maintenance",
      price: "Starting from $75",
    },
    {
      id: "electrical",
      icon: Zap,
      title: "Electrical and wiring repair",
      description: "Safe and certified electrical work",
      price: "Starting from $100",
    },
    {
      id: "moving",
      icon: Truck,
      title: "Local moving",
      description: "Reliable moving and transportation",
      price: "Starting from $120",
    },
    {
      id: "appliance",
      icon: Settings,
      title: "Appliance repair or maintenance",
      description: "Fix and maintain your appliances",
      price: "Starting from $80",
    },
    {
      id: "painting",
      icon: Paintbrush,
      title: "Interior painting",
      description: "Professional painting services",
      price: "Starting from $200",
    },
  ]

  const handleServiceClick = (serviceId: string) => {
    setSelectedService(serviceId === selectedService ? null : serviceId)
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">
            Popular services near <span className="text-orange-500">Your Area.</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover the most requested services in your neighborhood. Our verified professionals are ready to help with
            all your home needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service) => {
            const IconComponent = service.icon
            const isSelected = selectedService === service.id

            return (
              <Card
                key={service.id}
                className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
                  isSelected ? "ring-2 ring-orange-500 shadow-lg" : ""
                }`}
                onClick={() => handleServiceClick(service.id)}
              >
                <CardContent className="p-6 text-center space-y-4">
                  <div className="mx-auto w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center">
                    <IconComponent className="h-8 w-8 text-slate-700" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-800">{service.title}</h3>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                  {isSelected && (
                    <div className="space-y-3 pt-4 border-t">
                      <p className="text-orange-600 font-semibold">{service.price}</p>
                      <Button size="sm" className="w-full bg-orange-500 hover:bg-orange-600">
                        Book Now
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="text-center">
          <Button
            variant="outline"
            size="lg"
            className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white"
          >
            View All Services
          </Button>
        </div>
      </div>
    </section>
  )
}
