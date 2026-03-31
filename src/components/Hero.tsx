import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import { DottedSurface } from "@/components/ui/dotted-surface";

const Hero = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative h-[100svh] flex items-center justify-center overflow-hidden">
      <DottedSurface />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-10 left-1/2 size-full -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,hsl(180,100%,50%,0.06),transparent_50%)] blur-[30px]"
      />

      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-5 md:space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-sm">
            <Sparkles className="w-3.5 h-3.5 md:w-4 md:h-4 text-primary" />
            <span className="text-xs md:text-sm text-primary font-medium mono">CTO & Product Builder</span>
          </div>

          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.95]">
              Gustavo{" "}
              <span className="text-primary text-glow">Menezes</span>
            </h1>

            <p className="text-sm md:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed font-light">
              Construo produtos digitais do zero, resolvo problemas complexos com{" "}
              <span className="text-primary font-medium">IA</span> e lidero times de tecnologia como{" "}
              <span className="text-foreground font-medium">CTO</span>.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 md:gap-10">
            {[
              { value: "6+", label: "Produtos criados" },
              { value: "CTO", label: "em 5 empresas" },
              { value: "10→1", label: "dias em contratos" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-lg md:text-2xl font-bold text-primary mono">{stat.value}</div>
                <div className="text-[11px] md:text-xs text-muted-foreground mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-3 pt-1">
            <Button
              size="lg"
              onClick={() => scrollTo("projects")}
              className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 text-sm px-6 py-4 md:px-7 md:py-5 rounded-xl font-semibold shadow-[0_0_20px_hsl(180,100%,50%,0.2)] hover:shadow-[0_0_40px_hsl(180,100%,50%,0.35)]"
            >
              Ver Projetos
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollTo("contact")}
              className="border-border text-foreground hover:bg-secondary hover:border-primary/30 hover:text-primary transition-all duration-300 text-sm px-6 py-4 md:px-7 md:py-5 rounded-xl font-semibold"
            >
              Falar Comigo
            </Button>
          </div>
        </div>
      </div>

      <div
        onClick={() => scrollTo("services")}
        className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 cursor-pointer group z-10"
      >
        <div className="flex flex-col items-center gap-1">
          <span className="text-[9px] md:text-[10px] font-light text-muted-foreground/40 group-hover:text-primary transition-colors duration-300 tracking-wider uppercase mono">
            Scroll
          </span>
          <div className="relative w-4 h-6 md:w-5 md:h-7 border border-muted-foreground/20 group-hover:border-primary/40 rounded-full transition-colors duration-300">
            <div className="absolute top-1 left-1/2 -translate-x-1/2 w-0.5 h-1.5 bg-primary/60 rounded-full animate-scroll" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
