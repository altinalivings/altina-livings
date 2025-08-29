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
        <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Insights & Blog</h1>
            <p className="text-xl text-gold-200 max-w-2xl mx-auto">
              Expert analysis and latest updates from the real estate industry
            </p>
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
