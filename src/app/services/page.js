import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Building2, Users, Target, Home, Briefcase, ArrowRight } from 'lucide-react'

export default function Services() {
  const services = [
    {
      icon: <Home className="w-8 h-8" />,
      title: "Residential Sales",
      description: "Premium apartments, villas, and plots from top developers",
      features: ["DLF Projects", "Shobha Properties", "M3M Residences", "Godrej Homes", "Ready to Move", "Under Construction", "New Launch"]
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Commercial Properties",
      description: "Office spaces, retail outlets, and commercial plots",
      features: ["DLF Cyber City", "M3M Commercial", "Godrej Business", "Shobha Offices", "Tech Parks", "Retail Spaces", "Showrooms"]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Channel Partnerships",
      description: "Exclusive partnerships with leading developers",
      features: ["DLF Channel Partner", "Shobha Associate", "M3M Partner", "Godrej Alliance", "Direct Developer Prices", "Early Bird Offers", "Special Discounts"]
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Investment Consulting",
      description: "Expert guidance for real estate investments",
      features: ["Market Analysis", "ROI Projections", "Legal Verification", "Portfolio Management", "Tax Benefits", "Future Growth Areas", "Exit Strategies"]
    }
  ]

  return (
    <>
      <Header />
      
      <main className="min-h-screen bg-gray-50 pt-40">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-40"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1560472355-536de3962603?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-r from-gold-900/30 to-gold-700/20"></div>
          
          <div className="relative container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Our Services</h1>
            <p className="text-xl text-gold-200 max-w-2xl mx-auto">
              Comprehensive real estate solutions with exclusive developer partnerships
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                What We <span className="text-gold-600">Offer</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                End-to-end real estate services backed by 15+ years of expertise and strong developer relationships
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-gold-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border-l-4 border-gold-500">
                  <div className="text-gold-600 mb-6">{service.icon}</div>
                  
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

        {/* Developer Partnerships */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-12">Our Developer Partners</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center mb-16">
              {['DLF', 'Shobha', 'M3M', 'Godrej'].map((developer, index) => (
                <div key={index} className="p-6 bg-white rounded-2xl shadow-lg">
                  <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Building2 className="w-8 h-8 text-gold-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">{developer}</h3>
                  <p className="text-sm text-gray-600">Premium Projects</p>
                </div>
              ))}
            </div>

            <div className="bg-gold-600 text-white p-8 rounded-2xl max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Why Choose Our Services?</h3>
              <p className="mb-6">
                With exclusive partnerships and 15+ years of experience, we provide unmatched access to premium properties 
                and expert guidance throughout your real estate journey.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                <div>
                  <h4 className="font-semibold mb-2">✓ Direct Developer Prices</h4>
                  <p className="text-gold-100 text-sm">No middlemen, best prices</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">✓ Legal Verification</h4>
                  <p className="text-gold-100 text-sm">100% paperwork verification</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">✓ End-to-End Support</h4>
                  <p className="text-gold-100 text-sm">From search to possession</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Ready to Get Started?</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Contact our experts to discuss your real estate needs and discover the best opportunities
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+919891234195"
                className="bg-gold-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-gold-700 transition-colors"
              >
                📞 Call +91 9891234195
              </a>
              <a
                href="/contact"
                className="border-2 border-gold-600 text-gold-600 px-8 py-4 rounded-xl font-semibold hover:bg-gold-600 hover:text-white transition-colors"
              >
                📧 Send Enquiry
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  )
}
