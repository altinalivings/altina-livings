export default function Footer() {
  const socialMedia = [
    { name: 'LinkedIn', icon: '💼', url: 'https://linkedin.com/company/altinalivings' },
    { name: 'X (Twitter)', icon: '🐦', url: 'https://twitter.com/altinalivings' },
    { name: 'Facebook', icon: '📘', url: 'https://facebook.com/altinalivings' },
    { name: 'Instagram', icon: '📷', url: 'https://instagram.com/altinalivings' },
    { name: 'YouTube', icon: '📺', url: 'https://youtube.com/altinalivings' }
  ]

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
    { name: 'Career', href: '/career' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms & Conditions', href: '/terms' }
  ]

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Company Info & Social Media */}
          <div className="text-center lg:text-left">
            <h3 className="text-2xl font-bold mb-6">Altina Livings</h3>
            <p className="text-gray-300 mb-6">
              Premier channel partners for India's leading real estate developers. 
              Crafting timeless spaces for modern living.
            </p>
            
            {/* Social Media */}
            <div className="flex justify-center lg:justify-start gap-4 mb-6">
              {socialMedia.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gold-400 transition-colors"
                  title={social.name}
                >
                  <span className="text-xl">{social.icon}</span>
                </a>
              ))}
            </div>

            {/* Contact Info */}
            <div className="space-y-2">
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <span>📞</span>
                <a href="tel:+919891234195" className="text-gray-300 hover:text-gold-400">
                  +91 9891234195
                </a>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <span>✉️</span>
                <a href="mailto:info@altinalivings.com" className="text-gray-300 hover:text-gold-400">
                  info@altinalivings.com
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="text-lg font-semibold mb-6">Useful Links</h4>
            <div className="grid grid-cols-2 gap-3">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-300 hover:text-gold-400 transition-colors text-sm"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Newsletter Subscription */}
          <div className="text-center lg:text-left">
            <h4 className="text-lg font-semibold mb-6">Stay Updated</h4>
            <p className="text-gray-300 mb-4">
              Subscribe to our newsletter for the latest project updates and market insights
            </p>
            <form className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-3 rounded-lg border border-gray-600 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gold-500"
                required
              />
              <button
                type="submit"
                className="bg-gold-600 text-white py-3 px-6 rounded-lg hover:bg-gold-700 transition-colors font-semibold"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Altina Livings. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
