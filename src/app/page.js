'use client'

import { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ProjectFilters from '../components/ProjectFilters'
import FeaturedProjects from '../components/FeaturedProjects'

export default function Home() {
  const [activeFilters, setActiveFilters] = useState({})

  const handleFilterChange = (filters) => {
    setActiveFilters(filters)
  }

  return (
    <>
      <Header />
      
      <main className="min-h-screen bg-gray-50 pt-24">
        {/* Hero Section with Unique Image */}
        <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-40"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
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

        {/* Featured Projects Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                Featured <span className="text-gold-600">Projects</span>
              </h2>
              <p className="text-lg text-gray-600">
                Discover premium properties from our partner developers
              </p>
            </div>

            <ProjectFilters onFilterChange={handleFilterChange} />
            <FeaturedProjects filters={activeFilters} />
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gold-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Can't Find What You're Looking For?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Our experts will help you find the perfect property
            </p>
            <a href="/contact" className="bg-gold-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-gold-700 transition-colors">
              Contact Our Experts
            </a>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  )
}
