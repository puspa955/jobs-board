import { Button } from "@/components/ui/button";
import { Play, Zap, ArrowRight } from "lucide-react";
import { DataVisualization } from "./DataVisualization";
import { FloatingDataPoints } from "./FloatingDataPoints";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden mt-16">
      {/* Holographic grid background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.1)_0%,transparent_70%)]"></div>
      
      {/* Ambient glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-green-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      
      <FloatingDataPoints />
      
      <div className="container mx-auto px-6 text-center z-10 relative">
        <div className="max-w-5xl mx-auto">
          {/* Holographic logo effect */}
          <div className="mb-8 relative inline-block">
            <div className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-cyan-300 via-blue-400 to-green-400 bg-clip-text text-transparent animate-pulse">
              LATERICAL
            </div>
            <div className="absolute inset-0 text-6xl md:text-8xl font-bold bg-gradient-to-r from-cyan-300 via-blue-400 to-green-400 bg-clip-text text-transparent opacity-30 blur-sm animate-pulse delay-100">
              LATERICAL
            </div>
          </div>
          
          {/* Dynamic tagline */}
          <div className="mb-8">
            <h2 className="text-2xl md:text-4xl font-light text-slate-300 mb-4">
              Advanced Web Intelligence &
            </h2>
            <h2 className="text-2xl md:text-4xl font-light bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
              Data Extraction Solutions
            </h2>
          </div>
          
          <p className="text-lg text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed">
            Harness the power of cutting-edge AI and advanced scraping technology to extract intelligence from the web. 
            Transform unstructured data into actionable insights with our quantum-enhanced extraction platform.
          </p>
          
          {/* CTA buttons with neon glow */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Button className="group bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-900 font-bold px-8 py-4 text-lg transition-all duration-300 hover:shadow-[0_0_40px_rgba(34,211,238,0.8)] hover:scale-105">
              <Zap className="mr-2 h-5 w-5 group-hover:animate-spin" />
              Start Extraction
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="outline" 
              className="group border-cyan-400/50 text-cyan-400 hover:text-slate-300 hover:bg-cyan-400/10 hover:border-cyan-300 px-8 py-4 text-lg transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.4)]"
            >
              <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Watch Demo
            </Button>
          </div>
        </div>
        
        {/* 3D Data Visualization */}
        <div className="relative">
          <DataVisualization />
        </div>
      </div>
      
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950 to-transparent"></div>
    </section>
  );
};
