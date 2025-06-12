// Service Provider Data Management System
class ServiceManager {
  constructor() {
    this.services = new Map()
    this.providers = new Map()
    this.bookings = new Map()
    this.init()
  }

  init() {
    console.log("🚀 Initializing YarFix Service Management System...")
    this.loadSampleData()
    this.setupEventListeners()
  }

  loadSampleData() {
    // Sample service providers
    const sampleProviders = [
      {
        id: "provider_1",
        name: "CleanPro Services",
        email: "contact@cleanpro.com",
        phone: "+1-555-0101",
        rating: 4.9,
        totalJobs: 127,
        specialties: ["house-cleaning", "deep-cleaning", "office-cleaning"],
        location: "Downtown Area",
        verified: true,
        joinDate: new Date("2023-01-15"),
      },
      {
        id: "provider_2",
        name: "FixIt Masters",
        email: "info@fixitmasters.com",
        phone: "+1-555-0102",
        rating: 4.8,
        totalJobs: 89,
        specialties: ["handyman", "repairs", "maintenance"],
        location: "City Wide",
        verified: true,
        joinDate: new Date("2023-03-20"),
      },
      {
        id: "provider_3",
        name: "PowerTech Solutions",
        email: "service@powertech.com",
        phone: "+1-555-0103",
        rating: 4.9,
        totalJobs: 156,
        specialties: ["electrical", "wiring", "installation"],
        location: "Metro Area",
        verified: true,
        joinDate: new Date("2022-11-10"),
      },
    ]

    // Sample services
    const sampleServices = [
      {
        id: "service_1",
        providerId: "provider_1",
        title: "Professional House Cleaning",
        description: "Complete house cleaning service including all rooms, bathrooms, and kitchen",
        category: "cleaning",
        priceRange: { min: 50, max: 80 },
        duration: "2-4 hours",
        features: ["Deep Cleaning", "Eco-Friendly Products", "Insured Service"],
        availability: ["monday", "tuesday", "wednesday", "thursday", "friday"],
      },
      {
        id: "service_2",
        providerId: "provider_2",
        title: "Expert Handyman Services",
        description: "General repairs, installations, and maintenance work",
        category: "handyman",
        priceRange: { min: 75, max: 120 },
        duration: "1-3 hours",
        features: ["Same Day Service", "Licensed Professional", "1 Year Warranty"],
        availability: ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday"],
      },
      {
        id: "service_3",
        providerId: "provider_3",
        title: "Electrical Repair & Installation",
        description: "Safe and certified electrical work for homes and offices",
        category: "electrical",
        priceRange: { min: 100, max: 200 },
        duration: "1-2 hours",
        features: ["Certified Electrician", "Emergency Service", "Licensed & Insured"],
        availability: ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"],
      },
    ]

    // Load data into maps
    sampleProviders.forEach((provider) => {
      this.providers.set(provider.id, provider)
    })

    sampleServices.forEach((service) => {
      this.services.set(service.id, service)
    })

    console.log(`✅ Loaded ${this.providers.size} providers and ${this.services.size} services`)
  }

  // Provider Management
  addProvider(providerData) {
    const id = `provider_${Date.now()}`
    const provider = {
      id,
      ...providerData,
      rating: 0,
      totalJobs: 0,
      verified: false,
      joinDate: new Date(),
    }

    this.providers.set(id, provider)
    console.log(`➕ Added new provider: ${provider.name}`)
    return provider
  }

  getProvider(id) {
    return this.providers.get(id)
  }

  getAllProviders() {
    return Array.from(this.providers.values())
  }

  updateProviderRating(providerId, newRating) {
    const provider = this.providers.get(providerId)
    if (provider) {
      provider.rating = newRating
      console.log(`⭐ Updated rating for ${provider.name}: ${newRating}`)
    }
  }

  // Service Management
  addService(serviceData) {
    const id = `service_${Date.now()}`
    const service = {
      id,
      ...serviceData,
      createdAt: new Date(),
    }

    this.services.set(id, service)
    console.log(`🔧 Added new service: ${service.title}`)
    return service
  }

  getService(id) {
    return this.services.get(id)
  }

  getServicesByCategory(category) {
    return Array.from(this.services.values()).filter((service) => service.category === category)
  }

  searchServices(query) {
    const searchTerm = query.toLowerCase()
    return Array.from(this.services.values()).filter(
      (service) =>
        service.title.toLowerCase().includes(searchTerm) ||
        service.description.toLowerCase().includes(searchTerm) ||
        service.category.toLowerCase().includes(searchTerm),
    )
  }

  // Booking Management
  createBooking(bookingData) {
    const id = `booking_${Date.now()}`
    const booking = {
      id,
      ...bookingData,
      status: "pending",
      createdAt: new Date(),
      updatedAt: new Date(),
    }

    this.bookings.set(id, booking)
    console.log(`📅 Created booking: ${id}`)
    return booking
  }

  updateBookingStatus(bookingId, status) {
    const booking = this.bookings.get(bookingId)
    if (booking) {
      booking.status = status
      booking.updatedAt = new Date()
      console.log(`📋 Updated booking ${bookingId} status: ${status}`)
    }
  }

  getBookingsByProvider(providerId) {
    return Array.from(this.bookings.values()).filter((booking) => booking.providerId === providerId)
  }

  // Analytics and Reporting
  generateReport() {
    const report = {
      totalProviders: this.providers.size,
      totalServices: this.services.size,
      totalBookings: this.bookings.size,
      servicesByCategory: this.getServiceCategoryStats(),
      topRatedProviders: this.getTopRatedProviders(5),
      recentBookings: this.getRecentBookings(10),
    }

    console.log("📊 Service Management Report:")
    console.log(`Total Providers: ${report.totalProviders}`)
    console.log(`Total Services: ${report.totalServices}`)
    console.log(`Total Bookings: ${report.totalBookings}`)
    console.log("Services by Category:", report.servicesByCategory)

    return report
  }

  getServiceCategoryStats() {
    const stats = {}
    Array.from(this.services.values()).forEach((service) => {
      stats[service.category] = (stats[service.category] || 0) + 1
    })
    return stats
  }

  getTopRatedProviders(limit = 5) {
    return Array.from(this.providers.values())
      .sort((a, b) => b.rating - a.rating)
      .slice(0, limit)
  }

  getRecentBookings(limit = 10) {
    return Array.from(this.bookings.values())
      .sort((a, b) => b.createdAt - a.createdAt)
      .slice(0, limit)
  }

  // Event Listeners for real-time updates
  setupEventListeners() {
    // Simulate real-time booking updates
    setInterval(() => {
      if (Math.random() > 0.7) {
        this.simulateNewBooking()
      }
    }, 30000) // Every 30 seconds
  }

  simulateNewBooking() {
    const services = Array.from(this.services.values())
    const randomService = services[Math.floor(Math.random() * services.length)]

    const booking = this.createBooking({
      serviceId: randomService.id,
      providerId: randomService.providerId,
      customerName: `Customer ${Math.floor(Math.random() * 1000)}`,
      customerEmail: `customer${Math.floor(Math.random() * 1000)}@email.com`,
      scheduledDate: new Date(Date.now() + Math.random() * 7 * 24 * 60 * 60 * 1000),
      location: "Sample Location",
      notes: "Simulated booking for testing",
    })

    console.log(`🔔 New booking received: ${booking.id}`)
  }
}

// Initialize the service management system
const serviceManager = new ServiceManager()

// Export for use in other modules
if (typeof module !== "undefined" && module.exports) {
  module.exports = ServiceManager
}

// Demo functions
function runDemo() {
  console.log("\n🎯 Running YarFix Service Management Demo...\n")

  // Generate initial report
  serviceManager.generateReport()

  // Add a new provider
  const newProvider = serviceManager.addProvider({
    name: "QuickFix Solutions",
    email: "contact@quickfix.com",
    phone: "+1-555-0104",
    specialties: ["plumbing", "hvac"],
    location: "Suburban Area",
  })

  // Add a new service
  const newService = serviceManager.addService({
    providerId: newProvider.id,
    title: "Emergency Plumbing Service",
    description: "24/7 emergency plumbing repairs and installations",
    category: "plumbing",
    priceRange: { min: 120, max: 250 },
    duration: "1-2 hours",
    features: ["24/7 Emergency", "Licensed Plumber", "Same Day Service"],
    availability: ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"],
  })

  // Create a sample booking
  const booking = serviceManager.createBooking({
    serviceId: newService.id,
    providerId: newProvider.id,
    customerName: "John Doe",
    customerEmail: "john.doe@email.com",
    scheduledDate: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000),
    location: "123 Main St, City",
    notes: "Kitchen sink is leaking",
  })

  // Search for services
  console.log('\n🔍 Searching for "cleaning" services:')
  const cleaningServices = serviceManager.searchServices("cleaning")
  cleaningServices.forEach((service) => {
    console.log(`- ${service.title} by ${serviceManager.getProvider(service.providerId).name}`)
  })

  // Update booking status
  setTimeout(() => {
    serviceManager.updateBookingStatus(booking.id, "confirmed")
    serviceManager.updateBookingStatus(booking.id, "in-progress")
    serviceManager.updateBookingStatus(booking.id, "completed")
  }, 2000)

  console.log("\n✅ Demo completed successfully!")
}

// Run the demo
runDemo()
