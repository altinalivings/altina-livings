import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Calendar, User, ArrowRight } from 'lucide-react'

const blogPosts = [
  {
    id: 1,
    title: "Market Trends in Luxury Real Estate 2024",
    excerpt: "Understanding the current market dynamics and investment opportunities.",
    date: "2024-01-15",
    author: "Rajesh Kumar",
    category: "Market Insights"
  },
  {
    id: 2,
    title: "Why DLF Projects Are Worth Investing In",
    excerpt: "Analysis of DLF's track record and future growth potential.",
    date: "2024-01-10",
    author: "Priya Sharma",
    category: "Developer Spotlight"
  },
  {
    id: 3,
    title: "Commercial vs Residential Real Estate Investment",
    excerpt: "Comparative analysis to help you make informed investment decisions.",
    date: "2024-01-05",
    author: "Amit Patel",
    category: "Investment Guide"
  }
]

export default function Blog() {
  return (
    <>
      <Header />
      
      <main className="min-h-screen bg-gray-50 pt-32">
        {/* Hero Section */}
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

        {/* Blog Posts */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map(post => (
                <article key={post.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="h-48 bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="text-2xl font-bold">{post.category}</div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        {post.author}
                      </div>
                    </div>
                    
                    <h2 className="text-xl font-semibold text-gray-800 mb-3">{post.title}</h2>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    
                    <a href={`/blog/${post.id}`} className="flex items-center gap-2 text-gold-600 hover:text-gold-700 font-semibold">
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-20 bg-gold-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Stay Updated</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest market insights and project updates
            </p>
            
            <form className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gold-500"
                required
              />
              <button
                type="submit"
                className="bg-gold-600 text-white px-6 py-3 rounded-lg hover:bg-gold-700 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  )
}
