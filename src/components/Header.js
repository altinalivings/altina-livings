'use client'

import { useState, useEffect } from 'react'
import { Phone, Menu, X, Building2, Palette, Home, Hammer } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className={`text-2xl font-bold transition-all duration-300 ${
            isScrolled ? 'text-slate-800' : 'text-white'
          }`}>
            Altina Livings
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/" className={`flex items-center gap-2 transition-all duration-300 hover:text-orange-600 ${
              isScrolled ? 'text-slate-700' : 'text-white'
            }`}>
              <Home size={16} />
              Home
            </a>
            <a href="/about" className={`transition-all duration-300 hover:text-orange-600 ${
              isScrolled ? 'text-slate-700' : 'text-white'
            }`}>
              About
            </a>
            <a href="/services" className={`flex items-center gap-2 transition-all duration-300 hover:text-orange-600 ${
              isScrolled ? 'text-slate-700' : 'text-white'
            }`}>
              <Hammer size={16} />
              Services
            </a>
            <a href="/projects" className={`flex items-center gap-2 transition-all duration-300 hover:text-orange-600 ${
              isScrolled ? 'text-slate-700' : 'text-white'
            }`}>
              <Building2 size={16} />
              Projects
            </a>
            <a href="/contact" className="bg-orange-600 text-white px-6 py-3 rounded-xl hover:bg-orange-700 transition-all duration-300 transform hover:scale-105 flex items-center gap-2 shadow-lg">
              <Phone size={16} />
              Get Quote
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} className={isScrolled ? 'text-slate-800' : 'text-white'} /> : <Menu size={24} className={isScrolled ? 'text-slate-800' : 'text-white'} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4 pt-4">
              <a href="/" className="text-slate-700 py-2 flex items-center gap-2">
                <Home size={16} />
                Home
              </a>
              <a href="/about" className="text-slate-700 py-2">About</a>
              <a href="/services" className="text-slate-700 py-2 flex items-center gap-2">
                <Hammer size={16} />
                Services
              </a>
              <a href="/projects" className="text-slate-700 py-2 flex items-center gap-2">
                <Building2 size={16} />
                Projects
              </a>
              <a href="/contact" className="bg-orange-600 text-white px-6 py-3 rounded-lg text-center flex items-center justify-center gap-2">
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
