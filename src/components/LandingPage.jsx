// Components
import Search from "./Search";

// Icons
import { FaShippingFast } from "react-icons/fa";
import { GiRobber } from "react-icons/gi";
import { RiCustomerService2Fill } from "react-icons/ri";

const desc = [
  {
    icon: <FaShippingFast />,
    title: "Lightning-Fast Rides",
    content:
      "Book instantly and hit the road in minutes — no waiting, no hassle.",
  },
  {
    icon: <GiRobber />,
    title: "No Hidden Fees",
    content:
      "Enjoy transparent fares with 0% commission and full value for every ride.",
  },
  {
    icon: <RiCustomerService2Fill />,
    title: "24/7 Support",
    content: "Our team's always here to help, anytime you need us.",
  },
];

const LandingPage = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-b from-zinc-50 to-zinc-100 pt-8"
    >
      <div className="container mx-auto px-4">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-600/5 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10">
          {/* Hero Section */}
          <div className="flex flex-col items-center justify-center text-center py-12 lg:py-16 min-h-[400px] lg:min-h-[500px]">
            {/* Animated Title */}
            <div className="mb-6">
              <h1 className="text-5xl lg:text-7xl font-black tracking-tight">
                <span className="relative inline-block">
                  <span className="relative z-10 bg-gradient-to-r from-yellow-500 via-yellow-600 to-yellow-500 bg-clip-text text-transparent animate-gradient-x">
                    RIDER
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 blur-xl scale-125" />
                </span>
              </h1>
            </div>

            {/* Tagline */}
            <p className="text-xl lg:text-2xl text-zinc-700 font-medium mb-8 max-w-2xl">
              <span className="relative">
                "The{" "}
                <span className="font-bold text-yellow-600 drop-shadow-sm">
                  Right Ride
                </span>{" "}
                for Every{" "}
                <span className="font-bold text-yellow-600 drop-shadow-sm">
                  Road
                </span>{" "}
                and{" "}
                <span className="font-bold text-yellow-600 drop-shadow-sm">
                  Mood
                </span>
                "
                <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent" />
              </span>
            </p>

            {/* Decorative elements */}
            <div className="mt-4 flex items-center gap-4">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="w-3 h-3 rounded-full bg-yellow-500 animate-pulse"
                  style={{ animationDelay: `${i * 200}ms` }}
                />
              ))}
            </div>
          </div>

          {/* Search Component */}
          <div className="relative -mt-6 mb-16 lg:-mt-12 lg:mb-20">
            <div className="max-w-4xl mx-auto px-4">
              <Search />
            </div>
          </div>

          {/* Features Section */}
          <div className="relative mt-8 lg:mt-12">
            {/* Yellow background section */}
            <div className="relative bg-gradient-to-br from-yellow-500 via-yellow-600 to-yellow-500 rounded-3xl shadow-2xl shadow-yellow-600/20 overflow-hidden">
              {/* Pattern overlay */}
              <div className="absolute inset-0 opacity-10 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_50%,transparent_75%)] bg-[length:50px_50px]" />

              {/* Content container */}
              <div className="relative py-16 lg:py-20 px-4 lg:px-8">
                {/* Section title */}
                <div className="text-center mb-12 lg:mb-16">
                  <h2 className="text-3xl lg:text-4xl font-bold text-white drop-shadow-lg mb-4">
                    <span className="relative">
                      Why Choose Us
                      <span className="absolute -bottom-2 left-1/4 right-1/4 h-1 bg-white/30 rounded-full" />
                    </span>
                  </h2>
                  <p className="text-yellow-100/80 font-medium text-lg">
                    Experience the difference with Rider
                  </p>
                </div>

                {/* Features grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto">
                  {desc.map((item, index) => (
                    <div
                      key={index}
                      className="group relative bg-white/20 backdrop-blur-sm border border-white/30 rounded-2xl p-6 lg:p-8 hover:bg-white/30 hover:scale-[1.02] transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-500/20"
                    >
                      {/* Icon with gradient background */}
                      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gradient-to-br from-yellow-500 to-yellow-600 w-20 h-20 rounded-xl flex items-center justify-center shadow-lg shadow-yellow-600/30 group-hover:scale-110 transition-transform duration-300">
                        <div className="text-4xl lg:text-5xl text-white">
                          {item.icon}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="pt-16 lg:pt-20 text-center">
                        <h3 className="text-xl lg:text-2xl font-bold text-white mb-4 drop-shadow-sm">
                          {item.title}
                        </h3>
                        <p className="text-yellow-100/90 text-base lg:text-lg leading-relaxed">
                          {item.content}
                        </p>
                      </div>

                      {/* Decorative corner */}
                      <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-white/30 rounded-tr-2xl" />
                      <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-white/30 rounded-bl-2xl" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
