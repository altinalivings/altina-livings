import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 pt-20">
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-800 mb-6">
            Crafting Your Space
          </h1>
          <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
            Building your legacy with premium construction and interior design services. 
            Where vision meets precision.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors">
              View Our Projects
            </button>
            <button className="border-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white font-semibold py-3 px-8 rounded-lg transition-colors">
              Get Free Consultation
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
