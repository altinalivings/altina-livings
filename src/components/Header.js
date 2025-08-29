'use client'

import { useState } from 'react'
import { Phone, Menu, X } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-gray-200 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-gray-800">Altina Livings</div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-gray-700 hover:text-orange-600 transition-colors">Home</a>
            <a href="/about" className="text-gray-700 hover:text-orange-600 transition-colors">About</a>
            <a href="/services" className="text-gray-700 hover:text-orange-600 transition-colors">Services</a>
            <a href="/projects" className="text-gray-700 hover:text-orange-600 transition-colors">Projects</a>
            <a href="/contact" className="bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-700 transition-colors flex items-center gap-2">
              <Phone size={16} />
              Get Quote
            </a>
          </nav>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="flex flex-col space-y-3 pt-4">
              <a href="/" className="text-gray-700 py-2">Home</a>
              <a href="/about" className="text-gray-700 py-2">About</a>
              <a href="/services" className="text-gray-700 py-2">Services</a>
              <a href="/projects" className="text-gray-700 py-2">Projects</a>
              <a href="/contact" className="bg-orange-600 text-white px-6 py-2 rounded-lg text-center flex items-center justify-center gap-2">
                <Phone size={16} />
                Get Quote
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
