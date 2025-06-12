"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MapPin, Search } from "lucide-react"

export default function HeroSection() {
  const [location, setLocation] = useState("")
  const [service, setService] = useState("")
  const [currentText, setCurrentText] = useState(0)

  const heroTexts = [
    "Maslay bhool jao yarFix bulao!",
    "Your trusted home service partner!",
    "Professional fixes at your doorstep!",
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % heroTexts.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const handleSearch = () => {
    console.log("Searching for:", { service, location })
    // Implement search functionality
  }

  return (
    <section className="relative min-h-[600px] bg-gradient-to-r from-slate-50 to-gray-100">
      {/* Orange Banner */}
      <div className="bg-orange-500 text-white text-center py-2 px-4">
        <span className="font-semibold">First 90 Days FREE for Employers!</span>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-slate-800 leading-tight">
                <span className="text-orange-500">{heroTexts[currentText].split(" ")[0]}</span>{" "}
                <span className="text-slate-800">{heroTexts[currentText].split(" ").slice(1, -1).join(" ")}</span>{" "}
                <span className="text-orange-500">{heroTexts[currentText].split(" ").slice(-1)[0]}</span>
              </h1>
              <p className="text-lg text-gray-600 max-w-md">
                Connect with trusted local professionals for all your home service needs. Fast, reliable, and
                hassle-free solutions.
              </p>
            </div>

            {/* Search Form */}
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-md">
              <div className="space-y-4">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="What service do you need?"
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Enter your location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <Button onClick={handleSearch} className="w-full bg-slate-800 hover:bg-slate-700">
                  Find Services
                </Button>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/yarfix-professional.jpeg"
                alt="YarFix professional service provider"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="mt-4 bg-slate-800 text-white p-4 rounded-lg shadow-lg lg:w-3/4 mx-auto">
              <p className="italic text-sm">
                "YarFix connected me with the best professionals in my area. The service was prompt and the quality was
                exceptional!"
              </p>
              <p className="text-right font-semibold mt-2">- Satisfied Customer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
