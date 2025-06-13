import { useState } from "react";
import { Monitor, Network, Code2, Brain } from "lucide-react";

const technologies = [
  {
    id: "dashboard",
    icon: Monitor,
    title: "Real-time Dashboard",
    description: "Monitor scraping operations with live metrics and performance analytics",
    features: ["Live data streams", "Performance metrics", "Error tracking", "Resource monitoring"],
  },
  {
    id: "network",
    icon: Network,
    title: "IP Rotation & Proxies",
    description: "Advanced network infrastructure for stealth data extraction",
    features: ["Global proxy network", "Automatic rotation", "Residential IPs", "Anti-detection"],
  },
  {
    id: "ai",
    icon: Brain,
    title: "AI-Powered Extraction",
    description: "Machine learning algorithms for intelligent content recognition",
    features: ["Content classification", "Data validation", "Pattern recognition", "Auto-adaptation"],
  },
  {
    id: "api",
    icon: Code2,
    title: "Developer APIs",
    description: "Comprehensive APIs for seamless integration with your applications",
    features: ["RESTful APIs", "GraphQL support", "Real-time webhooks", "SDK libraries"],
  },
];

export const TechnologySection = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const activeTech = technologies.find(tech => tech.id === activeTab);

  return (
    <section id="technology" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-green-300 to-cyan-400 bg-clip-text text-transparent mb-6">
            Advanced Technology Stack
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Built on cutting-edge infrastructure for maximum performance and reliability
          </p>
        </div>

        {/* Technology tabs */}
        <div className="grid md:grid-cols-4 gap-4 mb-12">
          {technologies.map((tech) => (
            <button
              key={tech.id}
              onClick={() => setActiveTab(tech.id)}
              className={`group p-6 border rounded-xl transition-all duration-300 ${
                activeTab === tech.id
                  ? 'border-cyan-400 bg-cyan-400/10 text-cyan-400'
                  : 'border-slate-700 bg-slate-900/30 text-slate-400 hover:border-cyan-400/50 hover:text-cyan-300'
              }`}
            >
              <tech.icon className="h-8 w-8 mx-auto mb-3 transition-transform group-hover:scale-110" />
              <h3 className="font-semibold">{tech.title}</h3>
            </button>
          ))}
        </div>

        {/* Active technology display */}
        {activeTech && (
          <div className="bg-slate-900/50 backdrop-blur-sm border border-cyan-400/20 rounded-2xl p-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <activeTech.icon className="h-12 w-12 text-cyan-400 mr-4" />
                  <h3 className="text-3xl font-bold text-slate-100">{activeTech.title}</h3>
                </div>
                
                <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                  {activeTech.description}
                </p>

                <div className="grid grid-cols-2 gap-4">
                  {activeTech.features.map((feature, index) => (
                    <div
                      key={feature}
                      className="flex items-center p-3 bg-slate-800/50 rounded-lg border border-slate-700/50"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3 animate-pulse"></div>
                      <span className="text-slate-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Mock dashboard/visualization */}
              <div className="relative">
                <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
                  {/* Terminal-style header */}
                  <div className="flex items-center mb-4 pb-3 border-b border-slate-600">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="ml-4 text-slate-400 font-mono text-sm">laterical-console.sh</div>
                  </div>

                  {/* Mock code/data */}
                  <div className="space-y-2 font-mono text-sm">
                    <div className="text-green-400">$ laterical-scraper --target=ecommerce.site</div>
                    <div className="text-cyan-400">[INFO] Initializing stealth mode...</div>
                    <div className="text-blue-400">[INFO] Proxy rotation: ACTIVE</div>
                    <div className="text-green-400">[SUCCESS] 2,847 products extracted</div>
                    <div className="text-yellow-400">[METRICS] Speed: 145 req/sec | Success: 98.2%</div>
                    <div className="text-cyan-400 animate-pulse">[LIVE] Processing batch #47...</div>
                  </div>

                  {/* Animated progress bar */}
                  <div className="mt-4 p-3 bg-slate-700 rounded">
                    <div className="flex justify-between text-xs text-slate-400 mb-2">
                      <span>Extraction Progress</span>
                      <span>87%</span>
                    </div>
                    <div className="w-full bg-slate-600 rounded-full h-2">
                      <div className="bg-gradient-to-r from-cyan-400 to-green-400 h-2 rounded-full animate-pulse" style={{width: '87%'}}></div>
                    </div>
                  </div>
                </div>

                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 border border-cyan-400 rounded rotate-45 opacity-50 animate-spin"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-cyan-400/20 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
