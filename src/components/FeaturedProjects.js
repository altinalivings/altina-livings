import { MapPin, Building2, Home, IndianRupee, ArrowRight } from 'lucide-react'

// Sample projects data
const allProjects = [
  {
    id: 1,
    name: "DLF Camellias",
    developer: "DLF",
    location: "Delhi NCR",
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
    location: "Delhi NCR",
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
  },
  {
    id: 5,
    name: "DLF Cyber City",
    developer: "DLF",
    location: "Delhi NCR",
    type: "Commercial",
    price: "12.5 Cr",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    status: "Ready to Move"
  },
  {
    id: 6,
    name: "Shobha Silicon",
    developer: "Shobha",
    location: "Bangalore",
    type: "Commercial",
    price: "3.2 Cr",
    image: "https://images.unsplash.com/photo-1503387762353-8c6637f89308?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    status: "Under Construction"
  },
  {
    id: 7,
    name: "M3M Capital",
    developer: "M3M",
    location: "Delhi NCR",
    type: "Residential",
    price: "6.8 Cr",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    status: "New Launch"
  },
  {
    id: 8,
    name: "Godrej Garden City",
    developer: "Godrej",
    location: "Mumbai",
    type: "Residential",
    price: "4.2 Cr",
    image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    status: "Ready to Move"
  }
]

export default function FeaturedProjects({ filters = {} }) {
  // Filter projects based on selected filters
  const filteredProjects = allProjects.filter(project => {
    if (filters.city && project.location !== filters.city) return false
    if (filters.developer && project.developer !== filters.developer) return false
    if (filters.type && project.type !== filters.type) return false
    return true
  })

  if (filteredProjects.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-gold-500 mb-4">
          <Building2 className="w-16 h-16 mx-auto" />
        </div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">No projects found</h3>
        <p className="text-gray-600">Try adjusting your filters to see more results</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {filteredProjects.map(project => (
        <div key={project.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
          <div className="relative h-48">
            <img
              src={project.image}
              alt={project.name}
              className="object-cover w-full h-full"
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
              <Building2 className="w-4 h-4 text-gold-500" />
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
              className="w-full bg-gold-600 text-white py-2 px-4 rounded-lg hover:bg-gold-700 transition-colors flex items-center justify-center gap-2 text-sm font-semibold"
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
