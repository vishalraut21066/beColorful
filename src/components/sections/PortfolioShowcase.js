import Link from 'next/link';
import Image from 'next/image';

// Sample portfolio data - this would come from CMS in production
const featuredProjects = [
  {
    id: 1,
    title: 'TechFlow Solutions',
    category: 'Brand Strategy',
    description:
      'Complete brand transformation for a B2B SaaS company, including positioning, messaging, and visual identity.',
    image: '/portfolio/techflow.jpg', // Placeholder - would be actual images
    tags: ['Strategy', 'Naming', 'Voice'],
  },
  {
    id: 2,
    title: 'GreenLeaf Organics',
    category: 'Brand Naming',
    description:
      'Developed a memorable brand name and voice for an organic food startup entering the competitive market.',
    image: '/portfolio/greenleaf.jpg',
    tags: ['Naming', 'Voice', 'Copywriting'],
  },
  {
    id: 3,
    title: 'Urban Wellness',
    category: 'Copywriting',
    description:
      'Created compelling website copy and marketing materials for a boutique fitness and wellness center.',
    image: '/portfolio/urban-wellness.jpg',
    tags: ['Copywriting', 'Voice'],
  },
];

export default function PortfolioShowcase() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Featured Work
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            Discover how we've helped brands tell their stories and connect with
            their audiences.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Project Image */}
              <div className="aspect-[4/3] overflow-hidden bg-gradient-to-br from-blue-100 to-purple-100">
                {/* Placeholder for actual images */}
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  <svg
                    className="h-16 w-16"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* View Project Link */}
                <div className="flex items-center text-blue-600 font-medium group-hover:text-blue-700">
                  View case study
                  <svg
                    className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Portfolio CTA */}
        <div className="text-center mt-12">
          <Link
            href="/portfolio"
            className="inline-flex items-center justify-center rounded-lg border-2 border-blue-600 bg-white px-8 py-3 text-lg font-semibold text-blue-600 hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200"
          >
            View All Projects
            <svg
              className="ml-2 h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
