import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Building2, Users, Target, Award } from 'lucide-react'

export default function About() {
  const stats = [
    { number: '15+', label: 'Years Experience', icon: <Award className="w-8 h-8" /> },
    { number: '95+', label: 'Projects Completed', icon: <Building2 className="w-8 h-8" /> },
    { number: '5000+', label: 'Happy Customers', icon: <Users className="w-8 h-8" /> },
    { number: '₹2000Cr+', label: 'Value Delivered', icon: <Target className="w-8 h-8" /> }
  ]

  return (
    <>
      <Header />
      
      <main className="min-h-screen bg-gray-50 pt-32">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Altina Livings</h1>
            <p className="text-xl text-gold-200 max-w-2xl mx-auto">
              Premier channel partners for India's leading real estate developers
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-gold-500 mb-4 mx-auto">{stat.icon}</div>
                  <div className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Our Story</h2>
              
              <div className="prose prose-lg text-gray-600">
                <p className="text-lg mb-6">
                  Altina Livings has been a trusted name in the real estate industry for over 15 years. 
                  We specialize as channel partners for premier developers like DLF, Shobha, M3M, and Godrej.
                </p>
                
                <p className="text-lg mb-6">
                  Our mission is to simplify the property buying journey while ensuring our clients 
                  get access to the best projects with transparent pricing and expert guidance.
                </p>

                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Why Choose Us?</h3>
                <ul className="list-disc list-inside space-y-2 mb-6">
                  <li>Exclusive access to premium projects</li>
                  <li>15+ years of industry expertise</li>
                  <li>Transparent pricing with no hidden costs</li>
                  <li>Strong relationships with top developers</li>
                  <li>End-to-end support throughout your journey</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-12">Our Leadership</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Team members would go here */}
              <div className="text-center">
                <div className="w-32 h-32 bg-gold-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-12 h-12 text-gold-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
                <p className="text-gray-600">Certified real estate professionals</p>
              </div>
              <div className="text-center">
                <div className="w-32 h-32 bg-gold-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Target className="w-12 h-12 text-gold-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Focused Approach</h3>
                <p className="text-gray-600">Client-centric solutions</p>
              </div>
              <div className="text-center">
                <div className="w-32 h-32 bg-gold-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Award className="w-12 h-12 text-gold-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Award Winning</h3>
                <p className="text-gray-600">Recognized excellence</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  )
}
