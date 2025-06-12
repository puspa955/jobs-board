import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, MessageSquare, Zap } from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-300 to-cyan-400 bg-clip-text text-transparent mb-6">
              Initialize Connection
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Ready to deploy advanced data extraction protocols? Contact our intelligence team.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Enhanced Contact form */}
            <motion.div 
              className="bg-slate-900/50 backdrop-blur-sm border border-cyan-400/20 rounded-2xl p-8 shadow-[0_0_50px_rgba(0,255,255,0.1)] relative overflow-hidden group"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ 
                boxShadow: "0 0 80px rgba(0,255,255,0.2)",
                borderColor: "rgba(0,255,255,0.4)" 
              }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100"
                transition={{ duration: 0.3 }}
              />
              
              <h3 className="text-2xl font-bold text-slate-100 mb-6 flex items-center relative z-10">
                <MessageSquare className="mr-3 h-6 w-6 text-cyan-400" />
                Secure Communication
              </h3>

              <form className="space-y-6 relative z-10">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Identification Code
                  </label>
                  <Input 
                    placeholder="Enter your name"
                    className="bg-slate-800/50 border-slate-600 text-slate-100 focus:border-cyan-400 focus:ring-cyan-400/20 transition-all duration-300 hover:border-cyan-500/50"
                  />
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Communication Channel
                  </label>
                  <Input 
                    type="email"
                    placeholder="your.email@domain.com"
                    className="bg-slate-800/50 border-slate-600 text-slate-100 focus:border-cyan-400 focus:ring-cyan-400/20 transition-all duration-300 hover:border-cyan-500/50"
                  />
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Mission Parameters
                  </label>
                  <textarea 
                    rows={4}
                    placeholder="Describe your data extraction requirements..."
                    className="w-full px-3 py-2 bg-slate-800/50 border border-slate-600 rounded-md text-slate-100 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/20 resize-none transition-all duration-300 hover:border-cyan-500/50"
                  />
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-900 font-bold py-3 transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.6)] relative overflow-hidden group">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-cyan-300 to-blue-300 opacity-0 group-hover:opacity-30"
                      transition={{ duration: 0.3 }}
                    />
                    <Zap className="mr-2 h-5 w-5 group-hover:animate-pulse" />
                    Transmit Message
                  </Button>
                </motion.div>
              </form>
            </motion.div>

            {/* Enhanced Contact info */}
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="bg-slate-900/30 backdrop-blur-sm border border-purple-400/20 rounded-xl p-6 hover:border-purple-400/40 transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.1)]"
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h4 className="text-xl font-bold text-purple-400 mb-4">Direct Communication</h4>
                <div className="space-y-3">
                  <div className="flex items-center text-slate-300">
                    <Mail className="mr-3 h-5 w-5 text-purple-400" />
                    contact@laterical.com
                  </div>
                  <div className="text-slate-400 text-sm">
                    Encrypted channels available for enterprise clients
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className="bg-slate-900/30 backdrop-blur-sm border border-green-400/20 rounded-xl p-6 hover:border-green-400/40 transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,197,94,0.1)]"
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h4 className="text-xl font-bold text-green-400 mb-4">Response Protocol</h4>
                <div className="space-y-2 text-slate-300">
                  <div className="flex justify-between">
                    <span>Standard Queries</span>
                    <span className="text-green-400">&lt; 2 hours</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Technical Support</span>
                    <span className="text-green-400">&lt; 30 minutes</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Emergency Protocol</span>
                    <span className="text-green-400">&lt; 5 minutes</span>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className="bg-slate-900/30 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-6 hover:border-cyan-400/40 transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.1)]"
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h4 className="text-xl font-bold text-cyan-400 mb-4">System Status</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-300">API Endpoints</span>
                    <div className="flex items-center">
                      <motion.div 
                        className="w-2 h-2 bg-green-400 rounded-full mr-2"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                      <span className="text-green-400 text-sm">Operational</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-300">Proxy Network</span>
                    <div className="flex items-center">
                      <motion.div 
                        className="w-2 h-2 bg-green-400 rounded-full mr-2"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                      />
                      <span className="text-green-400 text-sm">99.9% Uptime</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-300">Data Processing</span>
                    <div className="flex items-center">
                      <motion.div 
                        className="w-2 h-2 bg-green-400 rounded-full mr-2"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                      />
                      <span className="text-green-400 text-sm">Active</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
