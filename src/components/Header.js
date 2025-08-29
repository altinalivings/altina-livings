// ... existing imports ...

export default function Header() {
  // ... existing state and effects ...

  return (
    <>
      {/* Top CTA Bar - Updated to gold */}
      <div className="bg-gold-600 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <span>🏆 Premium Channel Partner for DLF, Shobha, M3M & Godrej</span>
            <a href="tel:+919891234195" className="flex items-center gap-2 hover:underline">
              <Phone size={16} />
              +91 9891234195
            </a>
          </div>
        </div>
      </div>

      {/* Main Header - Updated colors */}
      <header className={`fixed top-8 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-4'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Logo with gold */}
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gold-500 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold text-lg">AL</span>
              </div>
              <span className={`text-xl font-bold ${isScrolled ? 'text-gray-800' : 'text-white'}`}>
                Altina Livings
              </span>
            </div>

            {/* Desktop Navigation - Updated hover color */}
            <nav className="hidden md:flex items-center space-x-6">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`flex items-center gap-1 transition-all duration-300 hover:text-gold-500 ${
                    isScrolled ? 'text-gray-700' : 'text-white'
                  }`}
                >
                  {item.icon}
                  {item.name}
                </a>
              ))}
            </nav>

            {/* ... rest of the header code ... */}
          </div>
        </div>
      </header>

      {/* Floating WhatsApp CTA - Keep green as it's standard for WhatsApp */}
      <a
        href="https://wa.me/919891234195"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-2xl z-50 hover:bg-green-600 transition-colors animate-bounce"
      >
        <MessageCircle size={24} />
      </a>
    </>
  )
}
