import {
  Zap,
  Shield,
  TrendingUp,
  Users,
  Cloud,
  Lock,
  Cpu,
  Globe,
} from "lucide-react";

const features = [
  {
    icon: <Zap className="w-8 h-8 text-blue-600" />,
    name: "Lightning Fast Performance",
    content:
      "Experience blazing-fast processing with our optimized algorithms. Reduce load times by 70% and handle millions of requests simultaneously without compromising speed or reliability. Perfect for demanding applications.",
  },
  {
    icon: <Shield className="w-8 h-8 text-green-600" />,
    name: "Enterprise-Grade Security",
    content:
      "Military-grade encryption and multi-layered security protocols protect your data 24/7. SOC2 compliant with regular security audits, ensuring your information remains confidential and protected from threats.",
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-purple-600" />,
    name: "Intelligent Analytics Dashboard",
    content:
      "Gain actionable insights with real-time analytics and predictive modeling. Visualize trends, track KPIs, and make data-driven decisions with customizable reports and automated insights.",
  },
  {
    icon: <Users className="w-8 h-8 text-orange-600" />,
    name: "Collaborative Workspace",
    content:
      "Seamless team collaboration with real-time editing, comments, and version control. Connect your entire team regardless of location with integrated video conferencing and task management.",
  },
  {
    icon: <Cloud className="w-8 h-8 text-cyan-600" />,
    name: "Cloud-Native Architecture",
    content:
      "Built for the cloud with automatic scaling and global CDN distribution. Enjoy 99.9% uptime with redundant infrastructure across multiple regions for maximum reliability.",
  },
  {
    icon: <Lock className="w-8 h-8 text-red-600" />,
    name: "Zero-Knowledge Encryption",
    content:
      "Complete privacy with end-to-end encryption where only you hold the keys. Your data remains encrypted at rest, in transit, and during processing—we never have access.",
  },
  {
    icon: <Cpu className="w-8 h-8 text-indigo-600" />,
    name: "AI-Powered Automation",
    content:
      "Leverage cutting-edge artificial intelligence to automate repetitive tasks. Our smart algorithms learn from your patterns to optimize workflows and increase productivity.",
  },
  {
    icon: <Globe className="w-8 h-8 text-teal-600" />,
    name: "Global Scalability",
    content:
      "Deploy instantly across 150+ countries with localized performance optimization. Automatic language detection and region-specific compliance ensure global reach without complexity.",
  },
];

const Features = () => {
  return (
    <section
      id="feature"
      className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white" />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-600 to-yellow-800 bg-clip-text text-transparent">
            Powerful Features
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to build, scale, and succeed with modern
            technology
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 p-6 border border-gray-100 cursor-pointer"
            >
              {/* Icon Container */}
              <div className="mb-6 p-3 bg-gradient-to-br from-gray-50 to-white rounded-xl w-fit shadow-sm">
                <div className="p-2 bg-white rounded-lg shadow-inner">
                  {feature.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-yellow-600 transition-colors">
                {feature.name}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed">{feature.content}</p>

              {/* Hover Effect Background */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-50/0 via-blue-50/0 to-blue-50/0 group-hover:from-blue-50/30 group-hover:via-purple-50/20 group-hover:to-blue-50/30 transition-all duration-500 -z-10" />
            </div>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="mt-20 bg-gradient-to-r from-yellow-600 to-yellow-800 rounded-2xl shadow-xl p-8 text-white">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold">99.9%</div>
              <div className="text-blue-100">Uptime SLA</div>
            </div>
            <div>
              <div className="text-4xl font-bold">150+</div>
              <div className="text-blue-100">Countries</div>
            </div>
            <div>
              <div className="text-4xl font-bold">24/7</div>
              <div className="text-blue-100">Support</div>
            </div>
            <div>
              <div className="text-4xl font-bold">10M+</div>
              <div className="text-blue-100">Users</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
