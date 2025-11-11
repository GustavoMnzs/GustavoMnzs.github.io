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
        <div className="max-w-6xl mx-auto text-center space-y-10 animate-fade-in-up">
          <div className="space-y-8">
            <h1 className="text-7xl md:text-[8rem] font-bold tracking-tight leading-none">
              Gustavo{" "}
              <span className="block md:inline text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary to-primary/70">
                Menezes
              </span>
            </h1>

            <div className="space-y-4">
              <h2 className="text-3xl md:text-5xl font-semibold text-foreground tracking-tight">
                Desenvolvedor Front-End{" "}
                <span className="text-primary">Pleno</span>
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground/80 max-w-3xl mx-auto leading-relaxed font-light">
                Especializado em WordPress/Elementor, com foco em{" "}
                <span className="text-foreground font-medium">performance</span>,{" "}
                <span className="text-foreground font-medium">UX</span> e{" "}
                <span className="text-foreground font-medium">conversão</span>.
                <br className="hidden md:block" />
                Transformando ideias em sites modernos, rápidos e otimizados.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-8">
            <Button
              size="lg"
              onClick={() => scrollToSection("projects")}
              className="bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 transition-all duration-500 text-base px-10 py-7 rounded-2xl shadow-lg hover:shadow-[0_0_40px_hsl(180,70%,55%,0.4)] font-medium"
            >
              Ver Projetos
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("contact")}
              className="border-primary/30 text-foreground hover:bg-primary/10 hover:border-primary/50 hover:scale-105 transition-all duration-500 text-base px-10 py-7 rounded-2xl backdrop-blur-sm font-medium"
            >
              Entrar em Contato
            </Button>
          </div>

          {/* Scroll indicator */}
          <div 
            onClick={() => scrollToSection("services")}
            className="flex flex-col items-center gap-3 mt-20 cursor-pointer group"
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
