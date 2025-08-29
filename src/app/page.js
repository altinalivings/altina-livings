import Header from '../components/Header'
import Footer from '../components/Footer'
import { CheckCircle, Clock, DollarSign, Shield, Award, Users, ArrowRight, Building2, Handshake } from 'lucide-react'

export default function Home() {
  // Featured Developer Partners
  const developers = [
    { name: "DLF", logo: "/images/dlf-logo.png", projects: "25+ Projects" },
    { name: "Shobha", logo: "/images/shobha-logo.png", projects: "18+ Projects" },
    { name: "M3M", logo: "/images/m3m-logo.png", projects: "22+ Projects" },
    { name: "Godrej", logo: "/images/godrej-logo.png", projects: "30+ Projects" },
  ]

  // Services for Channel Partners
  const services = [
    {
      icon: <Handshake className="w-8 h-8" />,
      title: "Sales & Marketing",
      description: "End-to-end sales management and strategic marketing for premium residential projects"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Client Acquisition",
      description: "Targeted lead generation and conversion for luxury property buyers"
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "Project Consultation",
      description: "Expert advisory services for project positioning and market analysis"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Channel Management",
      description: "Comprehensive channel partner network development and management"
    }
  ]

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <main>
        <section className="min-h-screen relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 pt-20 overflow-hidden">
          {/* Golden gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-amber-900/20 to-yellow-700/10"></div>
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-30"></div>
          
          <div className="relative container mx-auto px-4 py-32 text-center">
            <div className="bg-gradient-to-r from-amber-500 to-yellow-400 bg-clip-text">
              <h1 className="text-5xl md:text-7xl font-bold text-transparent mb-6 animate-fade-in-up">
                Premium Channel Partners
              </h1>
            </div>
            <p className="text-xl text-amber-100 mb-8 max-w-3xl mx-auto animate-fade-in-up">
              Exclusive partnerships with India's leading developers. Transforming real estate visions into extraordinary realities.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up">
              <button className="bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2">
                View Our Projects
                <ArrowRight size={20} />
              </button>
              <button className="border-2 border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300">
                Partner With Us
              </button>
            </div>
          </div>
        </section>

        {/* Developer Partnerships Section */}
        <section className="py-20 bg-amber-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                Our <span className="text-amber-600">Developer Partners</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Proudly associated with India's most prestigious real estate developers
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
              {developers.map((developer, index) => (
                <div key={index} className="text-center p-6 bg-white rounded-2xl shadow-lg card-hover">
                  <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Building2 className="w-10 h-10 text-amber-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{developer.name}</h3>
                  <p className="text-amber-600 font-medium">{developer.projects}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                Channel Partner <span className="text-amber-600">Services</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Comprehensive solutions for premium real estate development partnerships
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-amber-50 p-8 rounded-2xl shadow-lg card-hover border-l-4 border-amber-500">
                  <div className="text-amber-600 mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-gradient-to-r from-amber-600 to-yellow-500">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { number: '95+', label: 'Projects Delivered' },
                { number: '15+', label: 'Years Experience' },
                { number: '5000+', label: 'Happy Customers' },
                { number: '₹2000Cr+', label: 'Value Delivered' }
              ].map((stat, index) => (
                <div key={index} className="text-white">
                  <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                  <div className="text-amber-100">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section with Contact Form */}
        <section className="py-20 bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Let's <span className="text-amber-400">Partner</span> Together
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  Connect with us to explore partnership opportunities with India's leading developers.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-400">Call us</p>
                      <p className="text-white font-semibold">+91 9891234195</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-400">Email us</p>
                      <p className="text-white font-semibold">info@altinalivings.com</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-2xl">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Get In Touch</h3>
                <form className="space-y-4">
                  <div>
                    <input type="text" placeholder="Your Name" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500" required />
                  </div>
                  <div>
                    <input type="email" placeholder="Your Email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500" required />
                  </div>
                  <div>
                    <input type="tel" placeholder="Your Phone" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500" required />
                  </div>
                  <div>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500" required>
                      <option value="">Interested In</option>
                      <option value="dlf">DLF Projects</option>
                      <option value="shobha">Shobha Projects</option>
                      <option value="m3m">M3M Projects</option>
                      <option value="godrej">Godrej Projects</option>
                      <option value="partnership">Business Partnership</option>
                    </select>
                  </div>
                  <div>
                    <textarea placeholder="Your Message" rows={4} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500" required></textarea>
                  </div>
                  <button type="submit" className="w-full bg-amber-600 text-white py-4 px-6 rounded-lg hover:bg-amber-700 transition-colors font-semibold">
                    Submit Inquiry
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  )
}
