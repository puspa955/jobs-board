import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Database, Zap, Menu } from "lucide-react";

export const Header = () => {
  return (
    <motion.header 
      className="relative z-50 bg-slate-950/95 "
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="relative flex items-center justify-between p-4 max-w-7xl mx-auto">
        {/* Left - Logo */}
        <motion.div 
            className="flex items-center space-x-3 flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
        >
            <div className="relative">
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
                <Database className="h-10 w-10 text-cyan-400" />
            </motion.div>
            <div className="absolute inset-0 h-10 w-10 text-cyan-400 animate-ping opacity-20">
                <Database className="h-10 w-10" />
            </div>
            <div className="absolute inset-0 bg-cyan-400/20 rounded-full blur-md"></div>
            </div>
            <div>
            <motion.h1 
                className="text-2xl font-bold bg-gradient-to-r from-cyan-300 via-blue-400 to-green-400 bg-clip-text text-transparent"
                whileHover={{ scale: 1.02 }}
            >
                Laterical
            </motion.h1>
            <div className="text-xs text-cyan-400/70 font-mono tracking-wider">DATA INTELLIGENCE</div>
            </div>
        </motion.div>

        <nav className="absolute left-1/2 -translate-x-1/2 hidden md:flex items-center space-x-8">
            {['Services', 'Technology', 'Contact'].map((item, index) => (
            <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-slate-300 transition-all duration-300 relative group py-2"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.5 }}
            >
                {item}
                <div className="absolute -bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-all duration-300"></div>
                <div className="absolute inset-0 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.a>
            ))}
        </nav>

        <div className="hidden md:flex items-center space-x-4 flex-shrink-0">
            <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            >
            <Button 
                variant="outline" 
                className="border-cyan-400/50 text-slate-300 hover:text-slate-300 bg-transparent hover:bg-cyan-400/10 hover:border-cyan-300 transition-all duration-300 "
            >
                API Docs
            </Button>
            </motion.div>
            <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            >
            <Button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-slate-900 font-semibold transition-all duration-300 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-300 to-blue-300 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                <Zap className="mr-2 h-4 w-4 group-hover:animate-pulse" />
                Get Started
            </Button>
            </motion.div>
        </div>

        {/* Mobile Menu */}
        <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="md:hidden"
        >
            <Button variant="ghost" className="text-cyan-400 hover:bg-cyan-400/10">
            <Menu />
            </Button>
        </motion.div>
        </div>

    </motion.header>
  );
};
