import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function About() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-20">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-center mb-8">About Altina Livings</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto text-center">
            We are a premium construction and interior design company dedicated to 
            creating timeless spaces that reflect your vision and lifestyle.
          </p>
        </div>
      </main>
      <Footer />
    </>
  )
}
