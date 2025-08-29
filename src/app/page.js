import Header from '../components/Header'
import Footer from '../components/Footer'
import { CheckCircle, Clock, DollarSign, Shield, Award, Users, ArrowRight } from 'lucide-react'

export default function Home() {
  const features = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "Premium Quality",
      description: "Exceptional craftsmanship using the finest materials and latest technology"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "On-Time Delivery",
      description: "We respect your time and complete projects with precision scheduling"
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Transparent Pricing",
      description: "No hidden costs, detailed quotes with complete breakdown from day one"
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
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Turnkey Solutions",
      description: "From design to execution, we handle everything with single-point responsibility"
    }
  ]

  return (
    <>
      <Header />
      
      {/* Hero Section with Premium Background */}
      <main>
        <section className="min-h-screen relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-20 overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-20"></div>
          <div className="absolute inset-0 bg-black/40"></div>
          
          <div className="relative container mx-auto px-4 py-32 text-center">
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 animate-fade-in-up">
              Crafting Your <span className="text-orange-500">Legacy</span>
            </h1>
            <p className="text-xl text-slate-200 mb-8 max-w-3xl mx-auto animate-fade-in-up">
              Where visionary design meets impeccable execution. Premium construction and interior design services that transform spaces and elevate lifestyles.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up">
              <button className="btn-primary flex items-center gap-2 mx-auto">
                Explore Our Portfolio
                <ArrowRight size={20} />
              </button>
              <button className="btn-secondary text-white border-white hover:bg-white hover:text-slate-900">
                Get Free Consultation
              </button>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: '250+', label: 'Projects Completed' },
                { number: '15+', label: 'Years Experience' },
                { number: '98%', label: 'Client Satisfaction' },
                { number: '50+', label: 'Expert Team' }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-slate-800 mb-2">{stat.number}</div>
                  <div className="text-slate-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
                Why Choose <span className="text-orange-600">Altina Livings</span>
              </h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                Excellence is not just a standard, it's our promise. Discover the difference of working with industry leaders.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-lg card-hover">
                  <div className="text-orange-600 mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-3">{feature.title}</h3>
                  <p className="text-slate-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-orange-600 to-orange-700">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Space?
            </h2>
            <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
              Let's discuss your vision and create something extraordinary together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-orange-600 px-8 py-4 rounded-xl font-semibold hover:bg-slate-100 transition-colors">
                Schedule Site Visit
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-orange-600 transition-colors">
                Download Brochure
              </button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  )
}
