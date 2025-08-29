import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { CheckCircle, Clock, DollarSign } from 'lucide-react'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 pt-20">
          <div className="container mx-auto px-4 py-20 text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-slate-800 mb-6">
              Crafting Your Space
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
              Building your legacy with premium construction and interior design services. 
              Where vision meets precision.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">
                View Our Projects
              </button>
              <button className="btn-secondary">
                Get Free Consultation
              </button>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">
              Why Choose Altina Livings
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-slate-50 rounded-lg">
                <CheckCircle className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
                <p className="text-slate-600">Exceptional craftsmanship using the finest materials</p>
              </div>
              <div className="text-center p-6 bg-slate-50 rounded-lg">
                <Clock className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">On-Time Delivery</h3>
                <p className="text-slate-600">We respect your time and complete projects as promised</p>
              </div>
              <div className="text-center p-6 bg-slate-50 rounded-lg">
                <DollarSign className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Transparent Pricing</h3>
                <p className="text-slate-600">No hidden costs, clear quotes from day one</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
