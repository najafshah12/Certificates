"use client"

import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, MapPin, Clock, DollarSign, Search } from "lucide-react"

export default function ServicesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  const services = [
    {
      id: 1,
      title: "Professional House Cleaning",
      provider: "CleanPro Services",
      rating: 4.9,
      reviews: 127,
      price: "$50-80",
      duration: "2-4 hours",
      location: "Downtown Area",
      category: "cleaning",
      image: "/placeholder.svg?height=200&width=300",
      features: ["Deep Cleaning", "Eco-Friendly", "Insured"],
    },
    {
      id: 2,
      title: "Expert Handyman Services",
      provider: "FixIt Masters",
      rating: 4.8,
      reviews: 89,
      price: "$75-120",
      duration: "1-3 hours",
      location: "City Wide",
      category: "handyman",
      image: "/placeholder.svg?height=200&width=300",
      features: ["Same Day", "Licensed", "Warranty"],
    },
    {
      id: 3,
      title: "Electrical Repair & Installation",
      provider: "PowerTech Solutions",
      rating: 4.9,
      reviews: 156,
      price: "$100-200",
      duration: "1-2 hours",
      location: "Metro Area",
      category: "electrical",
      image: "/placeholder.svg?height=200&width=300",
      features: ["Certified", "Emergency", "Licensed"],
    },
  ]

  const categories = [
    { id: "all", name: "All Services" },
    { id: "cleaning", name: "Cleaning" },
    { id: "handyman", name: "Handyman" },
    { id: "electrical", name: "Electrical" },
    { id: "plumbing", name: "Plumbing" },
    { id: "painting", name: "Painting" },
  ]

  const filteredServices = services.filter((service) => {
    const matchesSearch =
      service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.provider.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "all" || service.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-slate-800 mb-4">Find Professional Services</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Browse our verified service providers and book the perfect professional for your needs.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search services or providers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category.id)}
                  className={selectedCategory === category.id ? "bg-orange-500 hover:bg-orange-600" : ""}
                >
                  {category.name}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <Card key={service.id} className="hover:shadow-lg transition-shadow">
              <CardHeader className="p-0">
                <div className="h-48 bg-gray-200 rounded-t-lg"></div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-slate-800 mb-1">{service.title}</h3>
                    <p className="text-gray-600">{service.provider}</p>
                  </div>

                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 mr-1" />
                      <span className="font-medium">{service.rating}</span>
                      <span className="ml-1">({service.reviews})</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span>{service.location}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center text-gray-600">
                      <DollarSign className="h-4 w-4 mr-1" />
                      <span>{service.price}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{service.duration}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>

                  <Button className="w-full bg-orange-500 hover:bg-orange-600">Book Now</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredServices.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No services found matching your criteria.</p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  )
}
