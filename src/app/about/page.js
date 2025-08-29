import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Award, Building2, Users, Target, Shield, Star } from 'lucide-react'

export default function About() {
  const values = [
    { icon: <Shield className="w-8 h-8" />, title: "Trust & Transparency", description: "Honest dealings with complete transparency" },
    { icon: <Target className="w-8 h-8" />, title: "Excellence", description: "Commitment to delivering exceptional quality" },
    { icon: <Users className="w-8 h-8" />, title: "Client First", description: "Your goals and satisfaction are our priority" }
  ]

  const stats = [
    { number: "15+", label: "Years Experience" },
    { number: "95+", label: "Projects Completed" },
    { number: "5000+", label: "Happy Clients" },
    { number: "₹2000Cr+", label: "Value Delivered" }
  ]

  return (
    <>
      <Header />
      
      <main className="min-h-screen bg-gray-50 pt-24">
        {/* Hero Section with Unique Image */}
        <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-40"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-r from-gold-900/30 to-gold-700/20"></div>
          
          <div className="relative container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">About Altina Livings</h1>
            <p className="text-xl text-gold-200 max-w-2xl mx-auto">
              Premier channel partners for India's leading real estate developers
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Story</h2>
              <div className="prose prose-lg text-gray-600 text-left">
                <p className="text-lg mb-6">
                  Founded in 2009, Altina Livings has established itself as a trusted name in the real estate industry. 
                  We specialize as exclusive channel partners for premier developers including DLF, Shobha, M3M, and Godrej.
                </p>
                <p className="text-lg mb-6">
                  Our journey began with a simple vision: to make premium real estate accessible while maintaining 
                  the highest standards of service and transparency. Today, we're proud to have helped thousands of 
                  clients find their dream properties and make sound investment decisions.
                </p>
                <p className="text-lg">
                  What sets us apart is our deep understanding of the market, strong developer relationships, 
                  and unwavering commitment to client satisfaction.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-gold-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-gold-600 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div key={index} className="text-center p-6">
                  <div className="text-gold-500 mb-4">{value.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-12">Why Choose Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-gold-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
                <p className="text-gray-600">15+ years of collective experience</p>
              </div>
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building2 className="w-8 h-8 text-gold-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Premium Projects</h3>
                <p className="text-gray-600">Access to exclusive developments</p>
              </div>
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-gold-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Best Deals</h3>
                <p className="text-gray-600">Competitive pricing & offers</p>
              </div>
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-gold-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">End-to-End Support</h3>
                <p className="text-gray-600">From search to possession</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gold-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Start Your Journey?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let's discuss your real estate goals and find the perfect solution together
            </p>
            <a href="/contact" className="bg-white text-gold-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
              Get In Touch
            </a>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  )
}
