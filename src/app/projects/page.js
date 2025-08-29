'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Filter, Grid, MapPin, Building2, Home, IndianRupee, ArrowRight } from 'lucide-react'

const allProjects = [
  {
    id: 1,
    name: "DLF Camellias",
    developer: "DLF",
    location: "Gurgaon, Sector 42",
    type: "Luxury Apartments",
    price: "4.5 Cr",
    bhk: "3 & 4 BHK",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    status: "Ready to Move",
    featured: true
  },
  {
    id: 2,
    name: "Shobha Amber",
    developer: "Shobha",
    location: "Bangalore, Whitefield",
    type: "Premium Apartments",
    price: "2.8 Cr",
    bhk: "2 & 3 BHK",
    image: "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    status: "Under Construction",
    featured: false
  },
  {
    id: 3,
    name: "M3M Golf Estate",
    developer: "M3M",
    location: "Gurgaon, Golf Course Road",
    type: "Luxury Villas",
    price: "7.2 Cr",
    bhk: "4 & 5 BHK",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    status: "Ready to Move",
    featured: true
  },
  {
    id: 4,
    name: "Godrej Origins",
    developer: "Godrej",
    location: "Mumbai, Andheri East",
    type: "Commercial Spaces",
    price: "5.9 Cr",
    bhk: "Office Spaces",
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    status: "New Launch",
    featured: false
  }
]

export default function ProjectsPage() {
  const [activeFilters, setActiveFilters] = useState({
    city: '',
    developer: '',
    type: '',
    status: ''
  })

  const filters = {
    city: ['Gurgaon', 'Bangalore', 'Mumbai', 'Delhi', 'Hyderabad'],
    developer: ['DLF', 'Shobha', 'M3M', 'Godrej', 'Brigade'],
    type: ['Luxury Apartments', 'Premium Apartments', 'Luxury Villas', 'Commercial Spaces', 'Plots'],
    status: ['Ready to Move', 'Under Construction', 'New Launch']
  }

  const handleFilterChange = (filterType, value) => {
    setActiveFilters(prev => ({
      ...prev,
      [filterType]: value === prev[filterType] ? '' : value
    }))
  }

  const clearFilters = () => {
    setActiveFilters({ city: '', developer: '', type: '', status: '' })
  }

  const filteredProjects = allProjects.filter(project => {
    if (activeFilters.city && !project.location.includes(activeFilters.city)) return false
    if (activeFilters.developer && project.developer !== activeFilters.developer) return false
    if (activeFilters.type && project.type !== activeFilters.type) return false
    if (activeFilters.status && project.status !== activeFilters.status) return false
    return true
  })

  const activeFiltersCount = Object.values(activeFilters).filter(Boolean).length

  return (
    <>
      <Header />
      
      <main className="min-h-screen bg-gray-50 pt-24">
        {/* Hero Section with Unique Image */}
        <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-40"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-r from-gold-900/30 to-gold-700/20"></div>
          
          <div className="relative container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Premium Projects</h1>
            <p className="text-xl text-gold-200 max-w-2xl mx-auto">
              Discover exclusive properties from India's leading developers
            </p>
          </div>
        </section>

        {/* Filters Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-8">
              <div className="flex items-center gap-4">
                <Filter className="w-6 h-6 text-gold-600" />
                <h2 className="text-2xl font-bold text-gray-800">Filter Projects</h2>
                {activeFiltersCount > 0 && (
                  <span className="bg-gold-100 text-gold-800 px-3 py-1 rounded-full text-sm">
                    {activeFiltersCount} active
                  </span>
                )}
              </div>

              {activeFiltersCount > 0 && (
                <button
                  onClick={clearFilters}
                  className="text-gold-600 hover:text-gold-700 text-sm font-medium"
                >
                  Clear all filters
                </button>
              )}
            </div>

            {/* Filter Options */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {Object.entries(filters).map(([filterType, options]) => (
                <div key={filterType}>
                  <label className="block text-sm font-medium text-gray-700 mb-3 capitalize">
                    {filterType}
                  </label>
                  <select
                    value={activeFilters[filterType]}
                    onChange={(e) => handleFilterChange(filterType, e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500"
                  >
                    <option value="">All {filterType}</option>
                    {options.map(option => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold text-gray-800">
                {filteredProjects.length} Projects Found
              </h2>
              <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500">
                <option value="latest">Sort by: Latest</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>

            {filteredProjects.length === 0 ? (
              <div className="text-center py-16">
                <div className="text-gold-500 mb-4">
                  <Building2 className="w-16 h-16 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">No projects found</h3>
                <p className="text-gray-600">Try adjusting your filters to see more results</p>
                <button
                  onClick={clearFilters}
                  className="mt-4 bg-gold-600 text-white px-6 py-2 rounded-lg hover:bg-gold-700 transition-colors"
                >
                  Clear All Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map(project => (
                  <div key={project.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                    {/* Project Image */}
                    <div className="relative h-48">
                      <img
                        src={project.image}
                        alt={project.name}
                        className="w-full h-full object-cover"
                      />
                      {project.featured && (
                        <div className="absolute top-4 left-4">
                          <span className="bg-gold-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                            Featured
                          </span>
                        </div>
                      )}
                      <div className="absolute top-4 right-4">
                        <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                          project.status === "Ready to Move" 
                            ? "bg-green-100 text-green-800"
                            : project.status === "Under Construction"
                            ? "bg-blue-100 text-blue-800"
                            : "bg-gold-100 text-gold-800"
                        }`}>
                          {project.status}
                        </span>
                      </div>
                    </div>

                    {/* Project Details */}
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-sm font-semibold text-gold-600 bg-gold-100 px-3 py-1 rounded-full">
                          {project.developer}
                        </span>
                        <span className="text-sm text-gray-500">{project.bhk}</span>
                      </div>

                      <h3 className="text-xl font-bold text-gray-800 mb-2">{project.name}</h3>

                      <div className="flex items-center gap-2 mb-3">
                        <MapPin className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-gray-600">{project.location}</span>
                      </div>

                      <div className="flex items-center gap-2 mb-4">
                        <Home className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-gray-600">{project.type}</span>
                      </div>

                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-1">
                          <IndianRupee className="w-5 h-5 text-gold-600" />
                          <span className="text-lg font-bold text-gray-800">{project.price}</span>
                        </div>
                        <span className="text-sm text-gray-500">Onwards</span>
                      </div>

                      <a
                        href={`/projects/${project.id}`}
                        className="w-full bg-gold-600 text-white py-3 px-6 rounded-lg hover:bg-gold-700 transition-colors flex items-center justify-center gap-2 font-semibold"
                      >
                        View Details
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gold-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Need Personalized Assistance?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Our real estate experts will help you find the perfect property
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+919891234195"
                className="bg-white text-gold-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors"
              >
                📞 Call +91 9891234195
              </a>
              <a
                href="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-gold-600 transition-colors"
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
