import Header from '../components/Header'
import Footer from '../components/Footer'
import ProjectFilters from '../components/ProjectFilters'
import FeaturedProjects from '../components/FeaturedProjects'

export default function Home() {
  return (
    <>
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="min-h-screen relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 pt-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-900/20 to-yellow-700/10"></div>
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-30"></div>
          
          <div className="relative container mx-auto px-4 py-20 text-center">
            <div className="bg-gradient-to-r from-amber-500 to-yellow-400 bg-clip-text">
              <h1 className="text-5xl md:text-7xl font-bold text-transparent mb-6">
                Premium Real Estate Partners
              </h1>
            </div>
            <p className="text-xl text-amber-100 mb-8 max-w-3xl mx-auto">
              Exclusive partnerships with India's leading developers. Find your dream property.
            </p>
          </div>
        </section>

        {/* Featured Projects Section with Filters */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                Featured <span className="text-amber-600">Projects</span>
              </h2>
              <p className="text-lg text-gray-600">
                Discover premium properties from our partner developers
              </p>
            </div>

            {/* Filters */}
            <ProjectFilters />
            
            {/* Projects Grid */}
            <FeaturedProjects />
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-amber-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Can't Find What You're Looking For?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Our experts will help you find the perfect property
            </p>
            <a href="/contact" className="bg-amber-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-amber-700 transition-colors">
              Contact Our Experts
            </a>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  )
}
