"use client"

import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, HelpCircle } from "lucide-react"

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly")

  const pricingPlans = {
    monthly: [
      {
        name: "Basic",
        price: "Free",
        description: "For homeowners with occasional service needs",
        features: [
          "Access to all service categories",
          "Browse professional profiles",
          "Read customer reviews",
          "Basic customer support",
        ],
        limitations: ["No priority booking", "Standard response times", "No service guarantee"],
        cta: "Get Started",
        popular: false,
      },
      {
        name: "Premium",
        price: "$9.99",
        description: "For homeowners with regular service needs",
        features: [
          "All Basic features",
          "Priority booking",
          "Faster response times",
          "Discounted service fees",
          "24/7 customer support",
          "Service guarantee",
        ],
        limitations: ["Limited to 5 bookings per month"],
        cta: "Start Free Trial",
        popular: true,
      },
      {
        name: "Business",
        price: "$29.99",
        description: "For property managers and businesses",
        features: [
          "All Premium features",
          "Unlimited bookings",
          "Dedicated account manager",
          "Bulk booking discounts",
          "Custom reporting",
          "API access",
          "Multiple user accounts",
        ],
        limitations: [],
        cta: "Contact Sales",
        popular: false,
      },
    ],
    yearly: [
      {
        name: "Basic",
        price: "Free",
        description: "For homeowners with occasional service needs",
        features: [
          "Access to all service categories",
          "Browse professional profiles",
          "Read customer reviews",
          "Basic customer support",
        ],
        limitations: ["No priority booking", "Standard response times", "No service guarantee"],
        cta: "Get Started",
        popular: false,
      },
      {
        name: "Premium",
        price: "$99.99",
        description: "For homeowners with regular service needs",
        features: [
          "All Basic features",
          "Priority booking",
          "Faster response times",
          "Discounted service fees",
          "24/7 customer support",
          "Service guarantee",
          "2 months free",
        ],
        limitations: ["Limited to 5 bookings per month"],
        cta: "Start Free Trial",
        popular: true,
      },
      {
        name: "Business",
        price: "$299.99",
        description: "For property managers and businesses",
        features: [
          "All Premium features",
          "Unlimited bookings",
          "Dedicated account manager",
          "Bulk booking discounts",
          "Custom reporting",
          "API access",
          "Multiple user accounts",
          "2 months free",
        ],
        limitations: [],
        cta: "Contact Sales",
        popular: false,
      },
    ],
  }

  const serviceRates = [
    {
      category: "Cleaning Services",
      services: [
        { name: "Regular House Cleaning", rate: "$20-30 per hour" },
        { name: "Deep Cleaning", rate: "$150-300 per service" },
        { name: "Move-in/Move-out Cleaning", rate: "$200-400 per service" },
        { name: "Office Cleaning", rate: "$0.10-0.25 per sq ft" },
      ],
    },
    {
      category: "Plumbing Services",
      services: [
        { name: "Faucet Repair/Replacement", rate: "$80-150 per fixture" },
        { name: "Drain Cleaning", rate: "$100-250 per drain" },
        { name: "Toilet Installation", rate: "$150-300 per toilet" },
        { name: "Pipe Repair", rate: "$150-350 per repair" },
      ],
    },
    {
      category: "Electrical Services",
      services: [
        { name: "Light Fixture Installation", rate: "$50-150 per fixture" },
        { name: "Outlet/Switch Replacement", rate: "$75-150 per unit" },
        { name: "Ceiling Fan Installation", rate: "$100-200 per fan" },
        { name: "Electrical Panel Upgrade", rate: "$1,000-4,000 per panel" },
      ],
    },
    {
      category: "Handyman Services",
      services: [
        { name: "Furniture Assembly", rate: "$50-100 per item" },
        { name: "TV Mounting", rate: "$100-200 per TV" },
        { name: "Drywall Repair", rate: "$75-350 per repair" },
        { name: "Door Installation/Repair", rate: "$150-400 per door" },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-slate-800 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Choose the plan that works for you. No hidden fees, no surprises.
            </p>
          </div>
        </section>

        {/* Membership Plans */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-800 mb-4">Membership Plans</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Enhance your experience with premium features and benefits. Choose the plan that best suits your needs.
              </p>

              <div className="mt-8 inline-flex items-center p-1 bg-slate-100 rounded-lg">
                <Button
                  variant={billingCycle === "monthly" ? "default" : "ghost"}
                  onClick={() => setBillingCycle("monthly")}
                  className={billingCycle === "monthly" ? "bg-orange-500 hover:bg-orange-600" : ""}
                >
                  Monthly
                </Button>
                <Button
                  variant={billingCycle === "yearly" ? "default" : "ghost"}
                  onClick={() => setBillingCycle("yearly")}
                  className={billingCycle === "yearly" ? "bg-orange-500 hover:bg-orange-600" : ""}
                >
                  Yearly (Save 16%)
                </Button>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {pricingPlans[billingCycle].map((plan, index) => (
                <Card
                  key={index}
                  className={`relative ${
                    plan.popular ? "border-orange-500 shadow-lg shadow-orange-100" : "border-gray-200 shadow-sm"
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute top-0 right-0 bg-orange-500 text-white px-3 py-1 text-sm font-medium rounded-bl-lg rounded-tr-lg">
                      Most Popular
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle className="text-2xl">{plan.name}</CardTitle>
                    <div className="mt-4">
                      <span className="text-4xl font-bold">{plan.price}</span>
                      {plan.price !== "Free" && (
                        <span className="text-gray-500 ml-2">/{billingCycle === "monthly" ? "month" : "year"}</span>
                      )}
                    </div>
                    <p className="text-gray-600 mt-2">{plan.description}</p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <p className="font-medium mb-2">What's included:</p>
                      <ul className="space-y-2">
                        {plan.features.map((feature, i) => (
                          <li key={i} className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    {plan.limitations.length > 0 && (
                      <div>
                        <p className="font-medium mb-2 text-gray-600">Limitations:</p>
                        <ul className="space-y-2">
                          {plan.limitations.map((limitation, i) => (
                            <li key={i} className="flex items-start text-gray-500">
                              <HelpCircle className="h-5 w-5 text-gray-400 mr-2 flex-shrink-0 mt-0.5" />
                              <span>{limitation}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </CardContent>
                  <CardFooter>
                    <Button
                      className={`w-full ${
                        plan.popular ? "bg-orange-500 hover:bg-orange-600" : "bg-slate-800 hover:bg-slate-700"
                      }`}
                    >
                      {plan.cta}
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Service Rates */}
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-800 mb-4">Service Rates</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Browse our competitive service rates. Actual prices may vary based on job complexity and location.
              </p>
            </div>

            <Tabs defaultValue={serviceRates[0].category} className="max-w-4xl mx-auto">
              <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8">
                {serviceRates.map((category) => (
                  <TabsTrigger key={category.category} value={category.category}>
                    {category.category}
                  </TabsTrigger>
                ))}
              </TabsList>
              {serviceRates.map((category) => (
                <TabsContent key={category.category} value={category.category}>
                  <Card>
                    <CardHeader>
                      <CardTitle>{category.category}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {category.services.map((service, index) => (
                          <div key={index} className="flex justify-between items-center py-3 border-b last:border-0">
                            <span className="font-medium">{service.name}</span>
                            <span className="text-orange-600 font-semibold">{service.rate}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              ))}
            </Tabs>

            <div className="mt-12 bg-white p-6 rounded-lg shadow-md max-w-4xl mx-auto">
              <h3 className="text-xl font-semibold text-slate-800 mb-4">Important Notes</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-orange-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>
                    Rates are estimates and may vary based on job complexity, materials required, and location.
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-orange-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>
                    Premium members receive discounted rates on all services. Sign up for a Premium membership to save!
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-orange-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>
                    All services come with a satisfaction guarantee. If you're not satisfied, we'll make it right.
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-orange-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>
                    For custom projects or services not listed here, please contact us for a personalized quote.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-slate-800 to-slate-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to get started?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied customers who trust YarFix for their home service needs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
                Book a Service
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-white border-white hover:bg-white hover:text-slate-800"
              >
                Contact Sales
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
