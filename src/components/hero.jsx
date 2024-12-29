import { Nav } from "./nav";

export function Hero() {
  return (
    <div className="relative min-h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url(/hero-bg.jpeg)",
          backgroundBlendMode: "overlay",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative">
        {/* Navigation */}
        <Nav />

        {/* Hero Content */}
        <div className="container mx-auto px-4 pt-32 pb-24 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">
            Welcome to
            <br />
            Interact Club!
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto mb-12">
            Join a vibrant community of learners, leaders, and friends.
            Together, we explore, create, and make lasting memories. with
            Interact (club of DAV School)
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-6">
            <button
              size="lg"
              className="bg-white text-black hover:bg-gray-600 rounded-xl px-3 py-2"
            >
              Sign Up!
            </button>
            <button
              size="lg"
              variant="outline"
              className="text-white border-white hover:bg-white/10 rounded-xl px-3 py-2"
            >
              Discover More!
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="container mx-auto px-4 pb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-white">
            <div>
              <div className="text-6xl font-bold mb-2">
                340<span className="text-4xl">+</span>
              </div>
              <p className="text-gray-300">Over 150 active members.</p>
            </div>
            <div>
              <div className="text-6xl font-bold mb-2">
                65<span className="text-4xl">+</span>
              </div>
              <p className="text-gray-300">20+ exciting events each year.</p>
            </div>
            <div>
              <div className="text-6xl font-bold mb-2">
                80<span className="text-4xl">+</span>
              </div>
              <p className="text-gray-300">10+ clubs to choose from.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
