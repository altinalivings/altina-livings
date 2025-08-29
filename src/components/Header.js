'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Home, User, Building2, FileText, Briefcase } from 'lucide-react'

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

  const menuItems = [
    { name: 'Home', href: '/', icon: <Home size={16} /> },
    { name: 'About', href: '/about', icon: <User size={16} /> },
    { name: 'Projects', href: '/projects', icon: <Building2 size={16} /> },
    { name: 'Services', href: '/services', icon: <FileText size={16} /> },
    { name: 'Career', href: '/career', icon: <Briefcase size={16} /> }
  ]

  return (
    <>
      {/* Top CTA Bar - Updated to gold */}
      <div className="bg-gold-600 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <span>🏆 Premium Channel Partner for DLF, Shobha, M3M & Godrej</span>
            <a href="tel:+919891234195" className="flex items-center gap-2 hover:underline">
              <span className="text-sm">📞</span>
              +91 9891234195
            </a>
          </div>
        </div>
      </div>

      {/* Main Header - ALWAYS SOLID WHITE BACKGROUND */}
      <header className="fixed top-8 w-full z-50 bg-white/95 backdrop-blur-md shadow-lg py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Logo with gold */}
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gold-500 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold text-lg">AL</span>
              </div>
              <span className="text-xl font-bold text-gray-800">
                Altina Livings
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center gap-1 transition-all duration-300 hover:text-gold-500 text-gray-700"
                >
                  {item.icon}
                  {item.name}
                </a>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} className="text-gray-800" /> : <Menu size={24} className="text-gray-800" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 bg-white rounded-lg shadow-lg">
              <div className="flex flex-col space-y-3 pt-4">
                {menuItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-700 py-2 px-4 hover:bg-gold-50 hover:text-gold-600 rounded-lg flex items-center gap-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.icon}
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Floating WhatsApp CTA */}
      <a
        href="https://wa.me/919891234195"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-2xl z-50 hover:bg-green-600 transition-colors animate-bounce"
      >
        <span className="text-lg">💬</span>
      </a>
    </>
  )
}
