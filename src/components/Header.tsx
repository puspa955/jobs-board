import { Button } from "@/components/ui/button";
import { Database, Zap, Menu } from "lucide-react";

export const Header = () => {
  return (
    <header className="relative z-50 border-b border-cyan-400/20 bg-slate-950/90 backdrop-blur-lg">
      <div className="flex items-center justify-between p-4 max-w-7xl mx-auto">
        <div className="flex items-center space-x-3">
          <div className="relative">
            <Database className="h-10 w-10 text-cyan-400 animate-pulse" />
            <div className="absolute inset-0 h-10 w-10 text-cyan-400 animate-ping opacity-30">
              <Database className="h-10 w-10" />
            </div>
          </div>
          <div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-300 via-blue-400 to-green-400 bg-clip-text text-transparent">
              Laterical
            </h1>
            <div className="text-xs text-cyan-400/70 font-mono">DATA INTELLIGENCE</div>
          </div>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#services" className="text-slate-300 hover:text-cyan-400 transition-all duration-300 relative group">
            Services
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></div>
          </a>
          <a href="#technology" className="text-slate-300 hover:text-cyan-400 transition-all duration-300 relative group">
            Technology
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></div>
          </a>
          <a href="#contact" className="text-slate-300 hover:text-cyan-400 transition-all duration-300 relative group">
            Contact
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></div>
          </a>
        </nav>
        
        <div className="hidden md:flex items-center space-x-4">
          <Button 
            variant="outline" 
            className="border-cyan-400/50 text-cyan-400 hover:text-slate-300 hover:bg-cyan-300/10 hover:border-cyan-300 transition-all duration-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.4)]"
          >
            API Docs
          </Button>
          <Button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-slate-900 font-semibold transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.6)]">
            <Zap className="mr-2 h-4 w-4" />
            Get Started
          </Button>
        </div>
        
        <Button variant="ghost" className="md:hidden text-cyan-400">
          <Menu />
        </Button>
      </div>
    </header>
  );
};
