import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Services() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-20">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-center mb-8">Our Services</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Residential Construction</h3>
              <p>Custom homes, villas, and apartments built with precision and quality.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Interior Design</h3>
              <p>Beautiful, functional interiors that transform your living space.</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
