"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Play, Star, Users, Award } from "lucide-react"

export default function SmartHomesSection() {
  const [showVideo, setShowVideo] = useState(false)

  const stats = [
    { icon: Users, value: "10K+", label: "Happy Customers" },
    { icon: Award, value: "500+", label: "Verified Experts" },
    { icon: Star, value: "4.9", label: "Average Rating" },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 leading-tight">
                Smart homes start with <span className="text-orange-500">smart fixes.</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-md">Modern tools. Local experts. Trusted results.</p>
              <p className="text-gray-600">
                Transform your home with professional services from verified experts who use the latest tools and
                techniques to deliver exceptional results.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon
                return (
                  <div key={index} className="text-center">
                    <div className="flex items-center justify-center mb-2">
                      <IconComponent className="h-5 w-5 text-orange-500 mr-1" />
                      <span className="text-2xl font-bold text-slate-800">{stat.value}</span>
                    </div>
                    <p className="text-sm text-gray-600">{stat.label}</p>
                  </div>
                )
              })}
            </div>

            <Button size="lg" className="bg-slate-800 hover:bg-slate-700 text-white px-8">
              GET STARTED
            </Button>
          </div>

          {/* Right Image Grid */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="h-32 bg-blue-200 rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=128&width=200"
                    alt="Service professional 1"
                    width={200}
                    height={128}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="h-40 bg-green-200 rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=160&width=200"
                    alt="Service professional 2"
                    width={200}
                    height={160}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="h-40 bg-orange-200 rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=160&width=200"
                    alt="Service professional 3"
                    width={200}
                    height={160}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="h-32 bg-purple-200 rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=128&width=200"
                    alt="Service professional 4"
                    width={200}
                    height={128}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <Button
                size="lg"
                variant="secondary"
                className="rounded-full w-16 h-16 bg-white/90 hover:bg-white shadow-lg"
                onClick={() => setShowVideo(true)}
              >
                <Play className="h-6 w-6 text-slate-800 ml-1" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
