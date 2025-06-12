import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Play, Zap, ArrowRight } from "lucide-react";
import { DataVisualization } from "./DataVisualization";
import { FloatingDataPoints } from "./FloatingDataPoints";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden mt-16">
      {/* Enhanced holographic grid background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.15)_0%,transparent_70%)]"></div>
      
      {/* Enhanced ambient glow effects */}
      <motion.div 
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3] 
        }}
        transition={{ 
          duration: 4, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      />
      <motion.div 
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl"
        animate={{ 
          scale: [1.2, 1, 1.2],
          opacity: [0.4, 0.7, 0.4] 
        }}
        transition={{ 
          duration: 5, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 1 
        }}
      />
      <motion.div 
        className="absolute top-1/2 left-1/2 w-64 h-64 bg-green-500/20 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.5, 0.2] 
        }}
        transition={{ 
          duration: 6, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 2 
        }}
      />
      
      <FloatingDataPoints />
      
      <div className="container mx-auto px-6 text-center z-10 relative">
        <motion.div 
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          {/* Enhanced holographic logo effect */}
          <motion.div 
            className="mb-8 relative inline-block"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.5 }}
          >
            <motion.div 
              className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-cyan-300 via-blue-400 to-green-400 bg-clip-text text-transparent"
              animate={{ 
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] 
              }}
              transition={{ 
                duration: 8, 
                repeat: Infinity, 
                ease: "linear" 
              }}
              style={{ backgroundSize: "200% 200%" }}
            >
              LATERICAL
            </motion.div>
            <div className="absolute inset-0 text-6xl md:text-8xl font-bold bg-gradient-to-r from-cyan-300 via-blue-400 to-green-400 bg-clip-text text-transparent opacity-30 blur-sm animate-pulse delay-100">
              LATERICAL
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-green-400/20 rounded-lg blur-xl"></div>
          </motion.div>
          
          {/* Enhanced dynamic tagline */}
          <motion.div 
            className="mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <h2 className="text-2xl md:text-4xl font-light text-slate-300 mb-4">
              Advanced Web Intelligence &
            </h2>
            <motion.h2 
              className="text-2xl md:text-4xl font-light bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent"
              animate={{ 
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] 
              }}
              transition={{ 
                duration: 6, 
                repeat: Infinity, 
                ease: "linear" 
              }}
              style={{ backgroundSize: "200% 200%" }}
            >
              Data Extraction Solutions
            </motion.h2>
          </motion.div>
          
          <motion.p 
            className="text-lg text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            Harness the power of cutting-edge AI and advanced scraping technology to extract intelligence from the web. 
            Transform unstructured data into actionable insights with our quantum-enhanced extraction platform.
          </motion.p>
          
          {/* Enhanced CTA buttons with neon glow */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button className="group bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-900 font-bold px-8 py-4 text-lg transition-all duration-300 hover:shadow-[0_0_40px_rgba(34,211,238,0.8)] relative overflow-hidden">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-cyan-300 to-blue-300 opacity-0 group-hover:opacity-30"
                  initial={false}
                  animate={{ opacity: 0 }}
                  whileHover={{ opacity: 0.3 }}
                  transition={{ duration: 0.3 }}
                />
                <Zap className="mr-2 h-5 w-5 group-hover:animate-spin" />
                Start Extraction
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                variant="outline" 
                className="group border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 hover:border-cyan-300 px-8 py-4 text-lg transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.4)] backdrop-blur-sm relative overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 bg-cyan-400/5 opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.3 }}
                />
                <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Watch Demo
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
        
        {/* Enhanced 3D Data Visualization */}
        <motion.div 
          className="relative"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <DataVisualization />
        </motion.div>
      </div>
      
      {/* Enhanced bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent"></div>
    </section>
  );
};
