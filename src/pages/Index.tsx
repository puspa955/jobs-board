import { Header } from "../components/Header";
import { HeroSection } from "../components/HeroSection";
import { ServicesSection } from "../components/ServiceSection";
import { TechnologySection } from "../components/TechnologySection";
import { ContactSection } from "../components/ContactSection";
import { MatrixBackground } from "../components/MatrixBackground";

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 overflow-x-hidden relative">
      {/* Matrix background effect */}
      {/* <MatrixBackground /> */}
      
      {/* Scan lines overlay */}
      <div className="fixed inset-0 bg-[linear-gradient(rgba(0,255,255,0.03)_1px,transparent_1px)] bg-[length:100%_4px] pointer-events-none z-10"></div>
      
      {/* Grid overlay */}
      <div className="fixed inset-0 bg-[linear-gradient(rgba(0,212,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,212,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px] pointer-events-none z-10"></div>
      
      <div className="relative z-20">
        <Header />
        <HeroSection />
        <ServicesSection />
        <TechnologySection />
        <ContactSection />
      </div>
    </div>
  );
};

export default Index;
