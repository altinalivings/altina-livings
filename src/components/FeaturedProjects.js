import Image from 'next/image'
import { MapPin, Building2, Home, IndianRupee, ArrowRight } from 'lucide-react'

const projects = [
  {
    id: 1,
    name: "DLF Camellias",
    developer: "DLF",
    location: "Gurgaon",
    type: "Residential",
    price: "4.5 Cr",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    status: "Ready to Move"
  },
  {
    id: 2,
    name: "Shobha Amber",
    developer: "Shobha",
    location: "Bangalore",
    type: "Residential",
    price: "2.8 Cr",
    image: "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    status: "Under Construction"
  },
  {
    id: 3,
    name: "M3M Golf Estate",
    developer: "M3M",
    location: "Gurgaon",
    type: "Villas",
    price: "7.2 Cr",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    status: "Ready to Move"
  },
  {
    id: 4,
    name: "Godrej Origins",
    developer: "Godrej",
    location: "Mumbai",
    type: "Commercial",
    price: "5.9 Cr",
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    status: "New Launch"
  }
]

export default function FeaturedProjects() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {projects.map(project => (
        <div key={project.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
          <div className="relative h-48">
            <Image
              src={project.image}
              alt={project.name}
              fill
              className="object-cover"
            />
            <div className="absolute top-4 left-4">
              <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                project.status === "Ready to Move" 
                  ? "bg-green-100 text-green-800"
                  : project.status === "Under Construction"
                  ? "bg-blue-100 text-blue-800"
                  : "bg-amber-100 text-amber-800"
              }`}>
                {project.status}
              </span>
            </div>
          </div>

          <div className="p-4">
            <div className="flex items-center gap-2 mb-2">
              <Building2 className="w-4 h-4 text-amber-600" />
              <span className="text-sm text-gray-600">{project.developer}</span>
            </div>

            <h3 className="text-lg font-semibold text-gray-800 mb-2">{project.name}</h3>

            <div className="flex items-center gap-2 mb-3">
              <MapPin className="w-4 h-4 text-gray-400" />
              <span className="text-sm text-gray-600">{project.location}</span>
            </div>

            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Home className="w-4 h-4 text-gray-400" />
                <span className="text-sm text-gray-600">{project.type}</span>
              </div>
              <div className="flex items-center gap-1">
                <IndianRupee className="w-4 h-4 text-gray-400" />
                <span className="text-sm font-semibold text-gray-800">{project.price}</span>
              </div>
            </div>

            <a
              href={`/projects/${project.id}`}
              className="w-full bg-amber-600 text-white py-2 px-4 rounded-lg hover:bg-amber-700 transition-colors flex items-center justify-center gap-2 text-sm font-semibold"
            >
              View Details
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      ))}
    </div>
  )
}
