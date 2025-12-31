import Link from 'next/link';

const principles = [
  {
    title: 'Authentic Storytelling',
    description:
      'Every brand has a unique story. We uncover and amplify what makes you genuinely different.',
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
        />
      </svg>
    ),
  },
  {
    title: 'Strategic Foundation',
    description:
      'Beautiful design without strategy is just decoration. We build brands on solid strategic foundations.',
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
        />
      </svg>
    ),
  },
  {
    title: 'Human Connection',
    description:
      'Brands succeed when they create genuine emotional connections with real people.',
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    ),
  },
];

export default function Philosophy() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
              Our Philosophy
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We believe that great brands are built on truth, not trends. Our
              approach combines strategic thinking with creative execution to
              create brands that don&apos;t just look good, but actually work in the
              real world.
            </p>

            <div className="space-y-6 mb-8">
              {principles.map((principle) => (
                <div
                  key={principle.title}
                  className="flex items-start space-x-4"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <div className="text-blue-600">{principle.icon}</div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {principle.title}
                    </h3>
                    <p className="text-gray-600">{principle.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/about"
              className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors"
            >
              Learn more about our approach
              <svg
                className="ml-2 h-4 w-4"
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

          {/* Visual Element */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 flex items-center justify-center">
              {/* Placeholder for illustration or image */}
              <div className="text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <svg
                    className="h-16 w-16 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>
                <p className="text-gray-600 font-medium">
                  Ideas that illuminate
                </p>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-200 rounded-full opacity-60"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-pink-200 rounded-full opacity-40"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
