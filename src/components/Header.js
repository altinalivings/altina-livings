'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Home, User, Building2, FileText, Briefcase, Phone } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const marqueeText = '🏆 Premium Channel Partner for DLF | Shobha | M3M | Godrej | Exclusive Projects | Luxury Apartments | Commercial Spaces | Villas | Ready to Move | Under Construction | New Launch 🏆'

  const menuItems = [
    { name: 'Home', href: '/', icon: <Home size={16} /> },
    { name: 'About', href: '/about', icon: <User size={16} /> },
    { name: 'Projects', href: '/projects', icon: <Building2 size={16} /> },
    { name: 'Services', href: '/services', icon: <FileText size={16} /> },
    { name: 'Blogs', href: '/blog', icon: <FileText size={16} /> },
    { name: 'Career', href: '/career', icon: <Briefcase size={16} /> },
    { name: 'Contact', href: '/contact', icon: <Phone size={16} /> }
  ]

  return (
    <>
      {/* Fixed Top Marquee Bar - Smooth Infinite Scroll */}
      <div className="fixed top-0 w-full bg-gold-600 text-white py-2 z-50 overflow-hidden">
        <div className="flex whitespace-nowrap">
          <div className="animate-infinite-scroll flex">
            {[...Array(4)].map((_, i) => (
              <span key={i} className="mx-4 flex items-center">
                {marqueeText}
              </span>
            ))}
          </div>
          <div className="animate-infinite-scroll flex" aria-hidden="true">
            {[...Array(4)].map((_, i) => (
              <span key={i} className="mx-4 flex items-center">
                {marqueeText}
              </span>
            ))}
          </div>
        </div>
        
        {/* Contact Info - Fixed at top right */}
        <div className="absolute top-1/2 right-4 transform -translate-y-1/2 flex items-center gap-4 text-sm bg-gold-700 px-3 py-1 rounded-lg">
          <a href="tel:+919891234195" className="hover:underline flex items-center gap-1">
            <span>📞</span>
            +91 9891234195
          </a>
          <span className="text-gold-300">|</span>
          <a href="mailto:info@altinalivings.com" className="hover:underline flex items-center gap-1">
            <span>✉️</span>
            info@altinalivings.com
          </a>
        </div>
      </div>

      {/* Main Header - Fixed below marquee */}
      <header className="fixed top-10 w-full z-50 bg-white shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-3">
            {/* Logo */}
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
            <div className="md:hidden pb-4 bg-white">
              <div className="flex flex-col space-y-3">
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

      {/* Add custom CSS for infinite scroll animation */}
      <style jsx>{`
        @keyframes infinite-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
        .animate-infinite-scroll {
          animation: infinite-scroll 40s linear infinite;
        }
        .animate-infinite-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </>
  )
}
