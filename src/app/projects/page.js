import ProjectFilters from '@/components/ProjectFilters'
import FeaturedProjects from '@/components/FeaturedProjects'

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-32">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Our <span className="text-amber-600">Projects</span>
          </h1>
          <p className="text-lg text-gray-600">
            Discover premium properties from our partner developers
          </p>
        </div>

        <ProjectFilters />
        <FeaturedProjects />
      </div>
    </div>
  )
}
