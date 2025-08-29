'use client'

import Header from '../components/Header'
import Footer from '../components/Footer'
import FeaturedProjects from '../components/FeaturedProjects'
import { Award, Shield, Users, Target, ArrowRight, Building2 } from 'lucide-react'

export default function Home() {
  const channelPartners = [
    { name: "DLF", logo: "🏢", projects: "25+ Projects", href: "/developers/dlf" },
    { name: "Shobha", logo: "🏛️", projects: "18+ Projects", href: "/developers/shobha" },
    { name: "M3M", logo: "🏬", projects: "22+ Projects", href: "/developers/m3m" },
    { name: "Godrej", logo: "🏣", projects: "30+ Projects", href: "/developers/godrej" }
  ]

  const valueProps = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "Premium Quality",
      description: "Exceptional craftsmanship using the finest materials and latest technology"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "10-Year Warranty",
      description: "Complete peace of mind with our comprehensive warranty coverage"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Expert Team",
      description: "Certified architects, engineers, and designers with 15+ years experience"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Transparent Pricing",
      description: "No hidden costs, detailed quotes with complete breakdown from day one"
    }
  ]

  return (
    <>
      <Header />
      
      <main className="min-h-screen bg-gray-50 pt-28">
        {/* Hero Section with Taller Image */}
        <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-28">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-40"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')",
              height: '100%'
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-r from-gold-900/30 to-gold-700/20"></div>
          
          <div className="relative container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Premium Real Estate <span className="text-gold-400">Partners</span>
            </h1>
            <p className="text-xl text-gold-200 max-w-3xl mx-auto mb-8">
              Exclusive partnerships with India's leading developers. Transforming real estate visions into extraordinary realities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/projects" className="bg-gold-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-gold-700 transition-colors">
                Explore Projects
              </a>
              <a href="/contact" className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-gray-900 transition-colors">
                Get Consultation
              </a>
            </div>
          </div>
        </section>

        {/* Channel Partners Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                Our <span className="text-gold-600">Channel Partners</span>
              </h2>
              <p className="text-lg text-gray-600">
                Proudly associated with India's most prestigious real estate developers
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
              {channelPartners.map((partner, index) => (
                <a
                  key={index}
                  href={partner.href}
                  className="text-center p-6 bg-gold-50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="text-4xl mb-4">{partner.logo}</div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{partner.name}</h3>
                  <p className="text-gold-600 font-medium">{partner.projects}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Value Proposition Section */}
        <section className="py-20 bg-gold-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                Why Choose <span className="text-gold-600">Altina Livings</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Excellence is not just a standard, it's our promise. Discover the difference of working with industry leaders.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {valueProps.map((value, index) => (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-lg text-center">
                  <div className="text-gold-600 mb-4 mx-auto">{value.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Projects Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-12">
              <div>
                <h2 className="text-4xl font-bold text-gray-800 mb-4">
                  Featured <span className="text-gold-600">Projects</span>
                </h2>
                <p className="text-lg text-gray-600">
                  Handpicked selection of our premium properties
                </p>
              </div>
              <a href="/projects" className="flex items-center gap-2 text-gold-600 hover:text-gold-700 font-semibold">
                View All Projects
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>

            <FeaturedProjects showOnlyFeatured={true} />
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-gradient-to-r from-gold-600 to-gold-500 text-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { number: '95+', label: 'Projects Delivered' },
                { number: '15+', label: 'Years Experience' },
                { number: '5000+', label: 'Happy Customers' },
                { number: '₹2000Cr+', label: 'Value Delivered' }
              ].map((stat, index) => (
                <div key={index}>
                  <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                  <div className="text-gold-100">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Find Your Dream Property?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let our experts guide you to the perfect investment opportunity
            </p>
            <a href="/contact" className="bg-gold-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-gold-700 transition-colors">
              Schedule Consultation
            </a>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  )
}
