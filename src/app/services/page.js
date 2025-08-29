import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Phone, Building2, Users, Target, Handshake, ArrowRight } from 'lucide-react'

const services = [
  {
    title: "Residential Sales",
    description: "Premium apartments, villas, and plots from top developers",
    features: ["DLF Projects", "Shobha Properties", "M3M Residences", "Godrej Homes"]
  },
  {
    title: "Commercial Properties",
    description: "Office spaces, retail outlets, and commercial plots",
    features: ["DLF Cyber City", "M3M Commercial", "Godrej Business", "Shobha Offices"]
  },
  {
    title: "Channel Partnerships",
    description: "Exclusive partnerships with leading developers",
    features: ["DLF Channel Partner", "Shobha Associate", "M3M Partner", "Godrej Alliance"]
  },
  {
    title: "Investment Consulting",
    description: "Expert guidance for real estate investments",
    features: ["Market Analysis", "ROI Projections", "Legal Verification", "Portfolio Management"]
  }
]

export default function Services() {
  return (
    <>
      <Header />
      
      <main className="min-h-screen bg-gray-50 pt-32">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-gold-200 max-w-2xl mx-auto">
              Comprehensive real estate solutions with exclusive developer partnerships
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center mb-6">
                    <Building2 className="w-8 h-8 text-gold-600" />
                  </div>
                  
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">{service.title}</h2>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-gray-600">
                        <div className="w-2 h-2 bg-gold-500 rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button className="bg-gold-600 text-white px-6 py-3 rounded-lg hover:bg-gold-700 transition-colors flex items-center gap-2">
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gold-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Ready to Get Started?</h2>
              <p className="text-lg text-gray-600 mb-8">
                Contact our experts to discuss your real estate needs and discover the best opportunities
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+919891234195"
                  className="bg-gold-600 text-white px-8 py-4 rounded-xl hover:bg-gold-700 transition-colors flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  Call +91 9891234195
                </a>
                
                <a
                  href="/contact"
                  className="border-2 border-gold-600 text-gold-600 px-8 py-4 rounded-xl hover:bg-gold-600 hover:text-white transition-colors"
                >
                  Send Message
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Developer Partnerships */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-12">Our Developer Partners</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
              {['DLF', 'Shobha', 'M3M', 'Godrej'].map((developer, index) => (
                <div key={index} className="p-6 bg-gray-50 rounded-2xl">
                  <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Handshake className="w-8 h-8 text-gold-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">{developer}</h3>
                  <p className="text-sm text-gray-600">Official Partner</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  )
}
