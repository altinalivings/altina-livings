'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Mail, MapPin, Send, Clock, Phone } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
    alert('Thank you for your message! We will get back to you soon.')
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
  }

  return (
    <>
      <Header />
      
      <main className="min-h-screen bg-gray-50 pt-40">
        {/* Hero Section */}
        {/* Hero Section with Contained Background */}
{/* Hero Section with Contained Background */}
<section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-28">
  <div className="absolute inset-0 overflow-hidden">
    <div 
      className="absolute inset-0 bg-cover bg-center opacity-40"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')",
        backgroundPosition: 'center 30%'
      }}
    ></div>
    <div className="absolute inset-0 bg-gradient-to-r from-gold-900/30 to-gold-700/20"></div>
  </div>
  
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

        {/* Contact Info & Form */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-8">Contact Information</h2>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center">
                      <Phone className="w-6 h-6 text-gold-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Phone</h3>
                      <a href="tel:+919891234195" className="text-gray-600 hover:text-gold-600">
                        +91 9891234195
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center">
                      <Mail className="w-6 h-6 text-gold-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Email</h3>
                      <a href="mailto:info@altinalivings.com" className="text-gray-600 hover:text-gold-600">
                        info@altinalivings.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-gold-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Office Address</h3>
                      <p className="text-gray-600">123 Business District, Sector 45<br />Gurgaon, Haryana 122001</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center">
                      <Clock className="w-6 h-6 text-gold-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Business Hours</h3>
                      <p className="text-gray-600">Monday - Saturday: 9:00 AM - 7:00 PM<br />Sunday: 10:00 AM - 5:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Send us a Message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <input
                        type="text"
                        placeholder="Your Full Name"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500"
                        required
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        placeholder="Your Email Address"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <input
                        type="tel"
                        placeholder="Your Phone Number"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500"
                        required
                      />
                    </div>
                    <div>
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({...formData, subject: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500"
                        required
                      >
                        <option value="">Select Inquiry Type</option>
                        <option value="residential">Residential Property</option>
                        <option value="commercial">Commercial Property</option>
                        <option value="investment">Investment Consultation</option>
                        <option value="partnership">Business Partnership</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <textarea
                      placeholder="Tell us about your requirements..."
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gold-600 text-white py-3 px-6 rounded-lg hover:bg-gold-700 transition-colors flex items-center justify-center gap-2 font-semibold"
                  >
                    <Send className="w-5 h-5" />
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-20 bg-gold-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Visit Our Office</h2>
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
                <div className="text-center text-gray-600">
                  <MapPin className="w-12 h-12 mx-auto mb-4 text-gold-600" />
                  <p>Google Maps Integration Here</p>
                  <p className="text-sm">123 Business District, Sector 45, Gurgaon</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  )
}
