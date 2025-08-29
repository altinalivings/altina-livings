import Image from 'next/image'
import { MapPin, Building2, Home, IndianRupee, Phone, MessageCircle } from 'lucide-react'

export default function ProjectPage({ params }) {
  // This would fetch project data based on params.id
  const project = {
    id: params.id,
    name: "Sample Project",
    developer: "DLF",
    location: "Gurgaon",
    type: "Residential",
    price: "4.5 Cr",
    description: "Luxury apartments with world-class amenities",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Project Image */}
          <div className="relative h-96 rounded-2xl overflow-hidden">
            <img
              src={project.image}
              alt={project.name}
              className="object-cover w-full h-full"
            />
          </div>

          {/* Project Details */}
          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <div className="flex items-center gap-2 mb-4">
              <Building2 className="w-5 h-5 text-amber-600" />
              <span className="text-gray-600">{project.developer}</span>
            </div>

            <h1 className="text-3xl font-bold text-gray-800 mb-4">{project.name}</h1>

            <div className="flex items-center gap-2 mb-4">
              <MapPin className="w-5 h-5 text-gray-400" />
              <span className="text-gray-600">{project.location}</span>
            </div>

            <div className="flex items-center gap-2 mb-6">
              <Home className="w-5 h-5 text-gray-400" />
              <span className="text-gray-600">{project.type}</span>
              <span className="text-amber-600 font-semibold ml-4">
                <IndianRupee className="w-4 h-4 inline mr-1" />
                {project.price}
              </span>
            </div>

            <p className="text-gray-600 mb-6">{project.description}</p>

            {/* Contact Form */}
            <div className="bg-amber-50 p-4 rounded-lg mb-6">
              <h3 className="font-semibold text-gray-800 mb-3">Interested in this project?</h3>
              <form className="space-y-3">
                <input type="text" placeholder="Your Name" className="w-full px-3 py-2 border border-gray-300 rounded-lg" required />
                <input type="tel" placeholder="Your Phone" className="w-full px-3 py-2 border border-gray-300 rounded-lg" required />
                <input type="email" placeholder="Your Email" className="w-full px-3 py-2 border border-gray-300 rounded-lg" required />
                <button type="submit" className="w-full bg-amber-600 text-white py-2 px-4 rounded-lg hover:bg-amber-700">
                  Get More Details
                </button>
              </form>
            </div>

            {/* Quick Contact */}
            <div className="flex gap-3">
              <a href="tel:+919891234195" className="flex-1 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 flex items-center justify-center gap-2">
                <Phone className="w-4 h-4" />
                Call Now
              </a>
              <a href="https://wa.me/919891234195" className="flex-1 bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 flex items-center justify-center gap-2">
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
