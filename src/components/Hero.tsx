import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-6xl mx-auto text-center space-y-12 animate-fade-in-up">
          <div className="space-y-6">
            <h1 className="text-7xl md:text-9xl font-light tracking-tight leading-none">
              Gustavo{" "}
              <span className="block md:inline text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary to-primary/70 font-normal">
                Menezes
              </span>
            </h1>

            <h2 className="text-2xl md:text-4xl font-light text-muted-foreground/90 tracking-wide">
              Web Developer –{" "}
              <span className="text-primary/90 font-normal">Low Code</span>
            </h2>
          </div>

          <div className="flex justify-center pt-12">
            <Button
              size="lg"
              onClick={() => scrollToSection("projects")}
              className="bg-primary/90 backdrop-blur-sm text-primary-foreground hover:bg-primary hover:scale-105 transition-all duration-500 text-base px-10 py-7 rounded-2xl shadow-lg hover:shadow-[0_0_30px_hsl(180,70%,55%,0.3)]"
            >
              Ver Projetos
            </Button>
          </div>

          {/* Scroll indicator */}
          <div 
            onClick={() => scrollToSection("services")}
            className="flex flex-col items-center gap-3 mt-24 cursor-pointer group"
          >
            <span className="text-xs font-light text-muted-foreground/60 group-hover:text-primary/80 transition-colors duration-500 tracking-wider uppercase">Scroll</span>
            <div className="animate-bounce">
              <ArrowDown className="w-4 h-4 text-muted-foreground/60 group-hover:text-primary/80 transition-colors duration-500" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
