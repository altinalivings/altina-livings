import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Projects() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-20">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-center mb-8">Our Projects</h1>
          <p className="text-lg text-gray-600 text-center">
            Explore our portfolio of premium construction and design projects.
          </p>
        </div>
      </main>
      <Footer />
    </>
  )
}
