import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

export default function ProfessionalsSection() {
  const professionals = [
    {
      id: 1,
      name: "Ahmed Khan",
      role: "Senior Plumber",
      image: "/images/yarfix-professional.jpeg",
      rating: 4.9,
      reviews: 127,
      specialties: ["Plumbing", "Bathroom Fixtures", "Water Heaters"],
      available: true,
    },
    {
      id: 2,
      name: "Michael Johnson",
      role: "Plumbing Expert",
      image: "/images/plumber-sink-2.png",
      rating: 4.8,
      reviews: 98,
      specialties: ["Pipe Repairs", "Sink Installation", "Leak Detection"],
      available: true,
    },
    {
      id: 3,
      name: "David Williams",
      role: "Master Plumber",
      image: "/images/plumber-bathroom.png",
      rating: 4.9,
      reviews: 156,
      specialties: ["Commercial Plumbing", "Bathroom Remodeling", "Emergency Repairs"],
      available: false,
    },
  ]

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">
            Meet Our <span className="text-orange-500">Professional Team</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our team of verified experts brings years of experience and dedication to every job. Get to know the
            professionals who will be taking care of your home.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {professionals.map((pro) => (
            <Card key={pro.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-64 relative">
                <Image src={pro.image || "/placeholder.svg"} alt={pro.name} fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-slate-800">{pro.name}</h3>
                    <p className="text-gray-600">{pro.role}</p>
                  </div>
                  <div className="flex items-center bg-yellow-100 px-2 py-1 rounded">
                    <Star className="h-4 w-4 text-yellow-500 mr-1" />
                    <span className="font-medium">{pro.rating}</span>
                    <span className="text-xs text-gray-500 ml-1">({pro.reviews})</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <p className="text-sm font-medium text-gray-700">Specialties:</p>
                  <div className="flex flex-wrap gap-2">
                    {pro.specialties.map((specialty, index) => (
                      <span key={index} className="text-xs bg-slate-100 text-slate-700 px-2 py-1 rounded-full">
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-between">
                  <div className="flex items-center">
                    <div
                      className={`w-3 h-3 rounded-full mr-2 ${pro.available ? "bg-green-500" : "bg-gray-400"}`}
                    ></div>
                    <span className="text-sm">{pro.available ? "Available Now" : "Booked Today"}</span>
                  </div>
                  <Button size="sm" className="bg-orange-500 hover:bg-orange-600">
                    Book
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 bg-white p-6 rounded-lg shadow-md">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-6">
              <h3 className="text-2xl font-bold text-slate-800 mb-2">Join Our Professional Team</h3>
              <p className="text-gray-600">
                Are you a skilled professional? Partner with YarFix and grow your business with our platform.
              </p>
            </div>
            <Button size="lg" className="bg-slate-800 hover:bg-slate-700 whitespace-nowrap">
              Apply Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
