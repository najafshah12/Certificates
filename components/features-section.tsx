import { Link2, Merge, Briefcase } from "lucide-react"

export default function FeaturesSection() {
  const features = [
    {
      icon: Link2,
      title: "Connect",
      description: "Find and connect with verified local service providers who deliver quality work.",
    },
    {
      icon: Merge,
      title: "Merge",
      description: "Seamlessly integrate multiple services for comprehensive home solutions.",
    },
    {
      icon: Briefcase,
      title: "Work",
      description: "Get professional work done efficiently with trusted experts in your area.",
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <div key={index} className="text-center space-y-4">
                <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                  <IconComponent className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-800">{feature.title}</h3>
                <p className="text-gray-600 max-w-xs mx-auto">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
