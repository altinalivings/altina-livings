export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Altina Livings</h3>
            <p className="text-gray-300 mb-4">
              Crafting timeless spaces for modern living. Premium construction and interior design services.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="flex flex-col space-y-2">
              <a href="/" className="text-gray-300 hover:text-white transition-colors">Home</a>
              <a href="/about" className="text-gray-300 hover:text-white transition-colors">About</a>
              <a href="/services" className="text-gray-300 hover:text-white transition-colors">Services</a>
              <a href="/projects" className="text-gray-300 hover:text-white transition-colors">Projects</a>
              <a href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2">
              <p className="text-gray-300">📞 +91 9891234195</p>
              <p className="text-gray-300">✉️ info@altinalivings.com</p>
              <p className="text-gray-300">📍 Your City, India</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Altina Livings. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
