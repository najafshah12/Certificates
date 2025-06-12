import Header from "@/components/header"
import Footer from "@/components/footer"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Users, Award, Clock, Target } from "lucide-react"

export default function AboutPage() {
  const stats = [
    { value: "5+", label: "Years Experience" },
    { value: "10K+", label: "Happy Customers" },
    { value: "500+", label: "Verified Experts" },
    { value: "20+", label: "Service Categories" },
  ]

  const values = [
    {
      icon: CheckCircle,
      title: "Quality Service",
      description: "We never compromise on quality. Our professionals are trained to deliver exceptional results.",
    },
    {
      icon: Users,
      title: "Customer First",
      description: "Your satisfaction is our priority. We listen to your needs and exceed your expectations.",
    },
    {
      icon: Award,
      title: "Verified Professionals",
      description: "All our service providers undergo thorough background checks and skill verification.",
    },
    {
      icon: Clock,
      title: "Timely Delivery",
      description: "We value your time and ensure that all services are completed within the promised timeframe.",
    },
    {
      icon: Target,
      title: "Transparent Pricing",
      description: "No hidden charges. We provide clear pricing before the work begins.",
    },
  ]

  const team = [
    {
      name: "Ahmed Khan",
      role: "Founder & CEO",
      image: "/images/yarfix-professional.jpeg",
      bio: "With over 15 years of experience in home services, Ahmed founded YarFix to connect quality professionals with homeowners.",
    },
    {
      name: "Najaf Ali Shah",
      role: "Operations Director",
      image: "/images/yarfix-team-member.png",
      bio: "Najaf oversees all service operations, ensuring quality standards are maintained across all service categories.",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-slate-800 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">About YarFix</h1>
              <p className="text-xl text-gray-300 mb-8">
                Connecting quality service professionals with homeowners since 2019
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <p className="text-4xl font-bold text-orange-400">{stat.value}</p>
                    <p className="text-gray-300">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-slate-800 mb-6">Our Story</h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    YarFix was founded in 2019 with a simple mission: to make home services accessible, reliable, and
                    hassle-free for everyone. What started as a small team operating from Iqra University, Airport
                    Karachi, has now grown into a trusted platform connecting thousands of homeowners with verified
                    service professionals.
                  </p>
                  <p>
                    Our founder, Ahmed Khan, experienced firsthand the challenges of finding reliable home service
                    providers. After a series of disappointing experiences, he decided to create a solution that would
                    benefit both homeowners and skilled professionals.
                  </p>
                  <p>
                    Today, YarFix is the go-to platform for all home service needs in Karachi and surrounding areas. We
                    continue to grow our network of verified professionals while maintaining our commitment to quality,
                    reliability, and customer satisfaction.
                  </p>
                </div>
                <div className="mt-8">
                  <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
                    Join Our Team
                  </Button>
                </div>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                <Image src="/images/yarfix-team-member.png" alt="YarFix founder" fill className="object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-800 mb-4">Our Values</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                These core principles guide everything we do at YarFix, from how we select our professionals to how we
                serve our customers.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, index) => {
                const IconComponent = value.icon
                return (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                        <IconComponent className="h-6 w-6 text-orange-600" />
                      </div>
                      <h3 className="text-xl font-semibold text-slate-800 mb-2">{value.title}</h3>
                      <p className="text-gray-600">{value.description}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-800 mb-4">Our Leadership</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Meet the team behind YarFix who are passionate about transforming the home services industry.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {team.map((member, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="grid md:grid-cols-2">
                    <div className="h-full">
                      <div className="relative h-full min-h-[200px]">
                        <Image
                          src={member.image || "/placeholder.svg"}
                          alt={member.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-slate-800 mb-1">{member.name}</h3>
                      <p className="text-orange-500 font-medium mb-4">{member.role}</p>
                      <p className="text-gray-600 text-sm">{member.bio}</p>
                    </CardContent>
                  </div>
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
