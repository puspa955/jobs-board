import { Database, Globe, Shield, Zap, Code, BarChart } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Scraping",
    description: "Advanced crawling algorithms with AI-powered content extraction",
    efficiency: 98,
    color: "cyan",
  },
  {
    icon: Database,
    title: "Data Mining",
    description: "Deep data extraction from complex websites and databases",
    efficiency: 95,
    color: "blue",
  },
  {
    icon: Shield,
    title: "Anti-Detection",
    description: "Stealth technology with rotating proxies and fingerprint masking",
    efficiency: 99,
    color: "green",
  },
  {
    icon: Zap,
    title: "Real-time APIs",
    description: "Lightning-fast data delivery through optimized API endpoints",
    efficiency: 97,
    color: "purple",
  },
  {
    icon: Code,
    title: "Custom Solutions",
    description: "Tailored scraping solutions for specific business requirements",
    efficiency: 94,
    color: "orange",
  },
  {
    icon: BarChart,
    title: "Analytics Dashboard",
    description: "Comprehensive insights and monitoring for all extraction operations",
    efficiency: 96,
    color: "pink",
  },
];

const getColorClasses = (color: string) => {
  const colorMap = {
    cyan: "border-cyan-400/30 hover:border-cyan-400 text-cyan-400 shadow-cyan-400/20",
    blue: "border-blue-400/30 hover:border-blue-400 text-blue-400 shadow-blue-400/20",
    green: "border-green-400/30 hover:border-green-400 text-green-400 shadow-green-400/20",
    purple: "border-purple-400/30 hover:border-purple-400 text-purple-400 shadow-purple-400/20",
    orange: "border-orange-400/30 hover:border-orange-400 text-orange-400 shadow-orange-400/20",
    pink: "border-pink-400/30 hover:border-pink-400 text-pink-400 shadow-pink-400/20",
  };
  return colorMap[color as keyof typeof colorMap] || colorMap.cyan;
};

export const ServicesSection = () => {
  return (
    <section id="services" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent mb-6">
            Data Extraction Services
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Powered by quantum-enhanced algorithms and neural network optimization
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group relative bg-slate-900/50 backdrop-blur-sm border rounded-xl p-8 transition-all duration-500 hover:scale-105 hover:shadow-2xl ${getColorClasses(service.color)}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Floating connection lines */}
              <div className="absolute -top-1 -right-1 w-8 h-8 border-t border-r border-current opacity-30"></div>
              <div className="absolute -bottom-1 -left-1 w-8 h-8 border-b border-l border-current opacity-30"></div>

              <div className="relative z-10">
                <div className="mb-6">
                  <service.icon className="h-12 w-12 mb-4 animate-pulse" />
                  <h3 className="text-2xl font-bold text-slate-100 mb-3">{service.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{service.description}</p>
                </div>

                {/* Efficiency bar */}
                <div className="mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-mono text-slate-300">Efficiency</span>
                    <span className="text-sm font-mono">{service.efficiency}%</span>
                  </div>
                  <div className="w-full bg-slate-800 rounded-full h-2">
                    <div
                      className="h-2 rounded-full bg-gradient-to-r from-current to-transparent transition-all duration-1000 group-hover:animate-pulse"
                      style={{ width: `${service.efficiency}%` }}
                    ></div>
                  </div>
                </div>

                {/* Data points visualization */}
                <div className="flex justify-between text-xs font-mono text-slate-500 mt-4">
                  <span>Active</span>
                  <span>Optimized</span>
                  <span>Secured</span>
                </div>
              </div>

              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-current to-transparent opacity-0 group-hover:opacity-5 rounded-xl transition-opacity duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
