import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Briefcase, Users, Target, Award } from 'lucide-react'

const positions = [
  {
    title: "Senior Real Estate Consultant",
    department: "Sales",
    location: "Delhi NCR",
    type: "Full-time"
  },
  {
    title: "Business Development Manager",
    department: "Business Development",
    location: "Mumbai",
    type: "Full-time"
  },
  {
    title: "Marketing Executive",
    department: "Marketing",
    location: "Bangalore",
    type: "Full-time"
  }
]

export default function Career() {
  return (
    <>
      <Header />
      
      <main className="min-h-screen bg-gray-50 pt-32">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Careers at Altina</h1>
            <p className="text-xl text-gold-200 max-w-2xl mx-auto">
              Join our team of passionate real estate professionals
            </p>
          </div>
        </section>

        {/* Why Join Us */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Why Join Altina Livings?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-gold-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Growth Opportunities</h3>
                <p className="text-gray-600">Continuous learning and career advancement paths</p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-gold-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Competitive Packages</h3>
                <p className="text-gray-600">Attractive compensation with performance incentives</p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-gold-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Impactful Work</h3>
                <p className="text-gray-600">Help clients find their dream homes and investments</p>
              </div>
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Current Openings</h2>
            
            <div className="max-w-4xl mx-auto space-y-6">
              {positions.map((position, index) => (
                <div key={index} className="bg-white p-6 rounded-2xl shadow-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{position.title}</h3>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                    <span>Department: {position.department}</span>
                    <span>Location: {position.location}</span>
                    <span>Type: {position.type}</span>
                  </div>
                  <button className="bg-gold-600 text-white px-6 py-2 rounded-lg hover:bg-gold-700 transition-colors">
                    Apply Now
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gold-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Join Our Team?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Send us your resume and we'll get in touch when suitable opportunities arise
            </p>
            <a
              href="mailto:career@altinalivings.com"
              className="bg-white text-gold-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors"
            >
              Send Your Resume
            </a>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  )
}
