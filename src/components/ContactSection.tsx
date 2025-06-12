import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, MessageSquare, Zap } from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-300 to-cyan-400 bg-clip-text text-transparent mb-6">
              Initialize Connection
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Ready to deploy advanced data extraction protocols? Contact our intelligence team.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact form */}
            <div className="bg-slate-900/50 backdrop-blur-sm border border-cyan-400/20 rounded-2xl p-8 shadow-[0_0_50px_rgba(0,255,255,0.1)]">
              <h3 className="text-2xl font-bold text-slate-100 mb-6 flex items-center">
                <MessageSquare className="mr-3 h-6 w-6 text-cyan-400" />
                Secure Communication
              </h3>

              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Identification Code
                  </label>
                  <Input 
                    placeholder="Enter your name"
                    className="bg-slate-800/50 border-slate-600 text-slate-100 focus:border-cyan-400 focus:ring-cyan-400/20"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Communication Channel
                  </label>
                  <Input 
                    type="email"
                    placeholder="your.email@domain.com"
                    className="bg-slate-800/50 border-slate-600 text-slate-100 focus:border-cyan-400 focus:ring-cyan-400/20"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Mission Parameters
                  </label>
                  <textarea 
                    rows={4}
                    placeholder="Describe your data extraction requirements..."
                    className="w-full px-3 py-2 bg-slate-800/50 border border-slate-600 rounded-md text-slate-100 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/20 resize-none"
                  />
                </div>

                <Button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-900 font-bold py-3 transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.6)]">
                  <Zap className="mr-2 h-5 w-5" />
                  Transmit Message
                </Button>
              </form>
            </div>

            {/* Contact info */}
            <div className="space-y-8">
              <div className="bg-slate-900/30 backdrop-blur-sm border border-purple-400/20 rounded-xl p-6">
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
              </div>

              <div className="bg-slate-900/30 backdrop-blur-sm border border-green-400/20 rounded-xl p-6">
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
              </div>

              <div className="bg-slate-900/30 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-6">
                <h4 className="text-xl font-bold text-cyan-400 mb-4">System Status</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-300">API Endpoints</span>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                      <span className="text-green-400 text-sm">Operational</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-300">Proxy Network</span>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                      <span className="text-green-400 text-sm">99.9% Uptime</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-300">Data Processing</span>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                      <span className="text-green-400 text-sm">Active</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
